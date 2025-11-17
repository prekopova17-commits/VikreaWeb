import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import type { Company } from "@shared/schema";
import { auditResponseSchema } from "@shared/schema";
import { appendAuditToSheet, ensureSheetHeaders, getOrCreateAuditSpreadsheet } from "./lib/googleSheets";
import { sendAuditEmail } from "./lib/email";

// Mock data for Slovak Business Register
// TODO: Replace with real API integration (Transparent Data API, lubosdz/parser-orsr, or eWay-CRM ORSR)
const mockCompanies: Company[] = [
  { ico: "31577890", name: "Matador a.s.", legalForm: "Akciová spoločnosť", city: "Púchov" },
  { ico: "35757442", name: "Slovenské elektrárne a.s.", legalForm: "Akciová spoločnosť", city: "Bratislava" },
  { ico: "00156035", name: "Železničná spoločnosť Slovensko a.s.", legalForm: "Akciová spoločnosť", city: "Bratislava" },
  { ico: "36054416", name: "Orange Slovensko a.s.", legalForm: "Akciová spoločnosť", city: "Bratislava" },
  { ico: "31321828", name: "Slovak Telekom a.s.", legalForm: "Akciová spoločnosť", city: "Bratislava" },
  { ico: "46507345", name: "ViKrea s.r.o.", legalForm: "Spoločnosť s ručením obmedzeným", city: "Bratislava" },
];

export async function registerRoutes(app: Express): Promise<Server> {
  // Test Google Sheets connection endpoint
  app.get("/api/test/sheets", async (req, res) => {
    try {
      console.log('Testing Google Sheets connection...');
      
      // Get or create audit spreadsheet
      const spreadsheetId = await getOrCreateAuditSpreadsheet();
      
      res.json({
        success: true,
        spreadsheetId,
        spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`,
        message: 'Google Sheets connection successful!'
      });
    } catch (error: any) {
      console.error('Google Sheets test failed:', error);
      res.status(500).json({
        error: error.message,
        code: error.code,
        details: error.errors
      });
    }
  });

  // Slovak Business Register search endpoint
  app.get("/api/companies/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      
      if (!query || query.length < 2) {
        return res.json([]);
      }

      // Mock search - filter companies by name or ICO
      // TODO: Replace with real ORSR API call
      const results = mockCompanies.filter(company => 
        company.name.toLowerCase().includes(query.toLowerCase()) ||
        company.ico.includes(query)
      ).slice(0, 10);

      res.json(results);
    } catch (error) {
      console.error("Company search error:", error);
      res.status(500).json({ message: "Search failed" });
    }
  });

  // Audit submission endpoint
  app.post("/api/audit/submit", async (req, res) => {
    try {
      // Validate request body
      const validationResult = auditResponseSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: "Neplatné dáta", 
          errors: validationResult.error.errors 
        });
      }

      const auditData = validationResult.data;

      let timestamp = new Date().toISOString();
      let googleSheetsSuccess = false;
      let emailSuccess = false;
      let spreadsheetUrl = '';
      
      // Save to Google Sheets
      try {
        // Get or create the audit spreadsheet
        const spreadsheetId = await getOrCreateAuditSpreadsheet();
        spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

        // Append audit data to Google Sheet
        const result = await appendAuditToSheet(spreadsheetId, auditData);
        timestamp = result.timestamp;
        googleSheetsSuccess = true;
        
        console.log('✅ Audit data saved to Google Sheets for:', auditData.email);
        console.log('📋 Spreadsheet URL:', spreadsheetUrl);
      } catch (error: any) {
        console.error('⚠️ Failed to save to Google Sheets:', error);
        console.error('Error details:', error.message);
        // Continue anyway but log the failure clearly
      }

      // Send email with audit results
      try {
        await sendAuditEmail(auditData);
        emailSuccess = true;
        console.log('✅ Audit email sent successfully to:', auditData.email);
      } catch (error) {
        console.error('⚠️ Failed to send audit email:', error);
        // Continue anyway - don't fail the request if email fails
      }

      res.json({ 
        success: true,
        message: "Audit úspešne odoslaný",
        timestamp,
        googleSheets: googleSheetsSuccess ? 'saved' : 'failed',
        email: emailSuccess ? 'sent' : 'failed'
      });
    } catch (error) {
      console.error("Audit submission error:", error);
      res.status(500).json({ 
        message: "Chyba pri odosielaní auditu" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
