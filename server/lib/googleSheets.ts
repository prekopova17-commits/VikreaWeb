import { google } from 'googleapis';
import type { AuditResponse } from '@shared/schema';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;
let cachedSpreadsheetId: string | null = null;
let spreadsheetCreationPromise: Promise<string> | null = null; // Mutex for concurrent creation

const SPREADSHEET_ID_FILE = path.join(process.cwd(), '.spreadsheet_id');

// Load spreadsheet ID from file on module initialization
try {
  if (fs.existsSync(SPREADSHEET_ID_FILE)) {
    cachedSpreadsheetId = fs.readFileSync(SPREADSHEET_ID_FILE, 'utf-8').trim();
    console.log('📋 Loaded persisted spreadsheet ID:', cachedSpreadsheetId);
  }
} catch (error) {
  console.error('⚠️  Failed to load spreadsheet ID from file:', error);
}

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-sheet',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Google Sheet not connected');
  }
  return accessToken;
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
// Always call this function again to get a fresh client.
export async function getUncachableGoogleSheetClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.sheets({ version: 'v4', auth: oauth2Client });
}

// Helper function to get or create the ViKrea Audit spreadsheet
export async function getOrCreateAuditSpreadsheet(): Promise<string> {
  // Return cached ID if available
  if (cachedSpreadsheetId) {
    return cachedSpreadsheetId;
  }

  // If another request is already creating the spreadsheet, wait for it
  if (spreadsheetCreationPromise) {
    console.log('⏳ Waiting for concurrent spreadsheet creation to complete...');
    return await spreadsheetCreationPromise;
  }

  // Start creation process and memoize the promise
  spreadsheetCreationPromise = (async () => {
    try {
      return await createSpreadsheet();
    } finally {
      spreadsheetCreationPromise = null;
    }
  })();

  return await spreadsheetCreationPromise;
}

// Internal function to handle actual spreadsheet creation
async function createSpreadsheet(): Promise<string> {
  const sheets = await getUncachableGoogleSheetClient();
  
  // Check if GOOGLE_SHEET_ID exists and is accessible
  const existingSheetId = process.env.GOOGLE_SHEET_ID;
  
  if (existingSheetId) {
    try {
      // Try to access it
      await sheets.spreadsheets.get({ spreadsheetId: existingSheetId });
      console.log('✅ Using existing spreadsheet:', existingSheetId);
      cachedSpreadsheetId = existingSheetId;
      return existingSheetId;
    } catch (error: any) {
      if (error.code === 404) {
        console.log('⚠️ Existing spreadsheet not accessible, creating new one...');
      } else {
        throw error;
      }
    }
  }
  
  // Create a new spreadsheet
  console.log('📝 Creating new ViKrea Audit spreadsheet...');
  
  const response = await sheets.spreadsheets.create({
    requestBody: {
      properties: {
        title: 'ViKrea Audit Submissions',
      },
      sheets: [{
        properties: {
          title: 'Sheet1',
          gridProperties: {
            rowCount: 1000,
            columnCount: 13,
          },
        },
      }],
    },
  });
  
  const newSpreadsheetId = response.data.spreadsheetId!;
  console.log('✅ Created new spreadsheet:', newSpreadsheetId);
  console.log('📋 Spreadsheet URL:', `https://docs.google.com/spreadsheets/d/${newSpreadsheetId}/edit`);
  
  // Cache the ID in memory
  cachedSpreadsheetId = newSpreadsheetId;
  
  // Persist to file for future server restarts
  try {
    fs.writeFileSync(SPREADSHEET_ID_FILE, newSpreadsheetId, 'utf-8');
    console.log('💾 Spreadsheet ID persisted to file for future restarts');
  } catch (error) {
    console.error('⚠️  Failed to persist spreadsheet ID:', error);
  }
  
  // Add headers to the new sheet
  await ensureSheetHeaders(newSpreadsheetId);
  
  return newSpreadsheetId;
}

// Helper function to append audit data to Google Sheet
export async function appendAuditToSheet(spreadsheetId: string, auditData: AuditResponse) {
  const sheets = await getUncachableGoogleSheetClient();
  
  const timestamp = new Date().toISOString();
  const row = [
    timestamp,
    auditData.company?.name || 'Neuvedené',
    auditData.company?.ico || 'Neuvedené',
    auditData.companySize || '',
    auditData.processes || '',
    auditData.departments || '',
    auditData.opportunities?.join('; ') || '',
    auditData.clientWork || '',
    auditData.delegation || '',
    auditData.departmentSpeed || '',
    auditData.goals?.join('; ') || '',
    auditData.email || '',
    auditData.gdprConsent ? 'Áno' : 'Nie'
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A:M',
    valueInputOption: 'RAW',
    requestBody: {
      values: [row],
    },
  });

  return { success: true, timestamp };
}

// Helper function to create header row if sheet is empty
export async function ensureSheetHeaders(spreadsheetId: string) {
  const sheets = await getUncachableGoogleSheetClient();
  
  try {
    // Check if sheet has data
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A1:M1',
    });

    // If no data, add headers
    if (!response.data.values || response.data.values.length === 0) {
      const headers = [
        'Čas odoslania',
        'Názov firmy',
        'IČO',
        'Veľkosť firmy',
        'Procesy',
        'Prepojenie oddelení',
        'Unikajúce príležitosti',
        'Práca s klientmi',
        'Delegovanie',
        'Rýchlosť oddelení',
        'Ciele',
        'Email',
        'GDPR súhlas'
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Sheet1!A1:M1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [headers],
        },
      });

      // Get the actual sheetId for Sheet1
      const metadata = await sheets.spreadsheets.get({ spreadsheetId });
      const sheet1 = metadata.data.sheets?.find(s => s.properties?.title === 'Sheet1');
      const actualSheetId = sheet1?.properties?.sheetId ?? 0;

      // Format header row
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [{
            repeatCell: {
              range: {
                sheetId: actualSheetId,
                startRowIndex: 0,
                endRowIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: { red: 0.12, green: 0.25, blue: 0.69 }, // #1E40AF
                  textFormat: {
                    foregroundColor: { red: 1, green: 1, blue: 1 },
                    fontSize: 10,
                    bold: true,
                  },
                },
              },
              fields: 'userEnteredFormat(backgroundColor,textFormat)',
            },
          }],
        },
      });

      console.log('✅ Headers created and formatted');
    }
  } catch (error) {
    console.error('Error ensuring sheet headers:', error);
    throw error;
  }
}
