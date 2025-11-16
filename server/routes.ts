import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import type { Company } from "@shared/schema";

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

  const httpServer = createServer(app);

  return httpServer;
}
