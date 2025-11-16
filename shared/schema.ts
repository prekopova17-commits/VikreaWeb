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
// Note: Field names match frontend AuditData interface for consistency
export const auditResponseSchema = z.object({
  company: companySchema.optional(),
  
  // Step 1: Základ firmy
  companySize: z.enum(["1–20", "20–50", "50–100", "100+"]).optional(),
  
  // Step 2: Procesy & Systém
  processes: z.string().optional(),
  departments: z.string().optional(),
  
  // Step 3: Obchod, Marketing, Produkt
  opportunities: z.array(z.string()).optional(),
  clientWork: z.string().optional(),
  
  // Step 4: Ľudia & Výkon
  delegation: z.string().optional(),
  departmentSpeed: z.string().optional(),
  
  // Step 5: Ciele
  goals: z.array(z.string()).optional(),
  
  // Step 6: Email + GDPR
  email: z.string().email(),
  gdprConsent: z.boolean(),
});

export type AuditResponse = z.infer<typeof auditResponseSchema>;
