import { google } from 'googleapis';
import type { AuditResponse } from '@shared/schema';

let connectionSettings: any;

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

      // Format header row
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [{
            repeatCell: {
              range: {
                sheetId: 0,
                startRowIndex: 0,
                endRowIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: { red: 0.12, green: 0.25, blue: 0.69 }, // #1E40AF
                  textFormat: { 
                    bold: true,
                    foregroundColor: { red: 1, green: 1, blue: 1 }
                  },
                },
              },
              fields: 'userEnteredFormat(backgroundColor,textFormat)',
            },
          }],
        },
      });
    }
  } catch (error) {
    console.error('Error ensuring headers:', error);
    throw error;
  }
}
