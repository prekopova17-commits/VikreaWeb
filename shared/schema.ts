import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Slovak Business Register Company
export const companySchema = z.object({
  ico: z.string(),
  name: z.string(),
  legalForm: z.string().optional(),
  city: z.string().optional(),
});

export type Company = z.infer<typeof companySchema>;

// Audit Wizard Schemas
export const auditResponseSchema = z.object({
  company: companySchema.optional(),
  
  // Step 1: Základ firmy
  companySize: z.enum(["1–20", "20–50", "50–100", "100+"]).optional(),
  
  // Step 2: Procesy & Systém
  processMaturity: z.enum([
    "Nemáme popísané procesy",
    "Máme popísané, ale ignorované",
    "Robíme to, ale nekonzistentne",
    "Máme funkčný systém"
  ]).optional(),
  departmentConnection: z.enum([
    "Každý si robí svoje",
    "Posúvame si veci chaoticky",
    "Máme pravidlá, ale slabé dodržiavanie",
    "Funguje to dobre"
  ]).optional(),
  
  // Step 3: Obchod, Marketing, Produkt
  lostOpportunities: z.array(z.enum([
    "Slabý obchodný proces",
    "Slabé CRM",
    "Marketing mimo reality",
    "Málo viditeľný produkt",
    "Nestíhame realizáciu"
  ])).optional(),
  clientWork: z.enum([
    "Náhodne",
    "Chaoticky",
    "Postupy bez kontroly",
    "Jasný sales proces"
  ]).optional(),
  
  // Step 4: Ľudia & Výkon
  delegation: z.enum([
    "Majiteľ robí všetko sám",
    "Delegujeme, ale bez termínu a kontroly",
    "Delegujeme, ale výkon je nekonzistentný",
    "Máme jasné role a zodpovednosti"
  ]).optional(),
  departmentSpeed: z.enum([
    "Pomaly",
    "Bez štandardov",
    "Dobré, nie vždy",
    "Jasné SLA"
  ]).optional(),
  
  // Step 5: Ciele
  goals: z.array(z.enum([
    "Zvýšiť zisk",
    "Zlepšiť procesy",
    "Zaviesť kontrolu",
    "Posilniť obchod",
    "Posilniť marketing",
    "Zaviesť AI",
    "Zlepšiť výkon ľudí",
    "Najať ľudí"
  ])).optional(),
  
  // Step 6: Email + GDPR
  email: z.string().email(),
  gdprConsent: z.boolean(),
});

export type AuditResponse = z.infer<typeof auditResponseSchema>;
