# ViKrea Business Consulting Website

## Overview

ViKrea is a business consulting agency targeting SME companies (50-100 employees) that are experiencing growth challenges. The website serves as both a presentation platform and lead generation tool, featuring a modern one-page design with an interactive audit wizard. The primary goal is to convert visitors through a prioritization matrix mini-audit that captures email leads and provides actionable recommendations.

The application is built as a single-page React application with a multi-step wizard component for lead capture, designed with a distinctive visual identity inspired by modern SaaS aesthetics (Linear typography, Stripe restraint, bold data-driven visuals).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing - currently implements a simple two-route system (Home and 404).

**UI Component System**: Radix UI primitives with shadcn/ui component patterns, configured in "new-york" style. Components follow a card-based design system with extensive use of Radix primitives for accessibility and keyboard navigation.

**Styling Approach**: 
- Tailwind CSS with custom configuration extending the default theme
- CSS custom properties (CSS variables) for theming, supporting light/dark modes
- Custom color palette defined in HSL format for Primary Blue (#1E40AF), Action Orange (#FF6B35), Growth Mint (#06D6A0)
- Typography system using Inter font family from Google Fonts
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

**State Management**: 
- React Query (TanStack Query v5) for server state management
- Local component state with useState for UI interactions
- Form state managed through react-hook-form with Zod validation (via @hookform/resolvers)

**Code Organization**:
- `/client/src/components/` - Reusable UI components organized by feature
- `/client/src/components/ui/` - Base shadcn/ui components
- `/client/src/components/audit/` - Multi-step wizard for lead capture
- `/client/src/pages/` - Page-level components
- `/shared/` - Shared types and schemas between frontend and backend

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Development Mode**: Custom Vite middleware integration for HMR (Hot Module Replacement) during development. Production builds serve static files from dist/public.

**API Design**: RESTful API structure (routes prefixed with `/api`), though currently minimal implementation - the application is primarily frontend-focused with placeholder storage patterns.

**Session Management**: Configured for connect-pg-simple (PostgreSQL session store), indicating intent for user session persistence.

**Build Process**:
- Frontend: Vite builds React SPA to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js` as ESM module
- Single production server serves both API routes and static frontend

### Data Storage Solutions

**ORM**: Drizzle ORM v0.39.1 configured for PostgreSQL with Neon serverless adapter (@neondatabase/serverless).

**Database Schema** (defined in `/shared/schema.ts`):
- `users` table with id (UUID primary key), username (unique), password fields
- Schema validation using drizzle-zod for runtime type safety
- Migration files stored in `/migrations/` directory

**Current Implementation**: In-memory storage (MemStorage class) used as abstraction layer, allowing easy swap to database implementation. The IStorage interface defines CRUD operations (getUser, getUserByUsername, createUser).

**Database Configuration**: 
- Connection via DATABASE_URL environment variable
- Drizzle Kit configured for schema push and migrations
- PostgreSQL dialect specified in drizzle.config.ts

### Authentication and Authorization

**Current State**: Basic user schema defined but no active authentication implementation. The codebase includes placeholder patterns for:
- User creation with InsertUser schema
- User lookup by ID and username
- Session management infrastructure (connect-pg-simple dependency)

**Design Pattern**: Storage abstraction layer (IStorage interface) separates business logic from data persistence, enabling future authentication implementation without major refactoring.

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Component patterns built on Radix UI with Tailwind styling
- **Lucide React**: Icon library for consistent iconography
- **react-calendly**: Calendly integration for booking appointments (https://calendly.com/vikrea)
- **cmdk**: Command palette component (not currently used in UI)
- **Embla Carousel**: Carousel/slider functionality
- **Vaul**: Drawer component primitive

### Database & Backend Services
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless v0.10.4)
- **Drizzle ORM**: TypeScript ORM for PostgreSQL (drizzle-orm v0.39.1, drizzle-kit for migrations)

### Development Tools
- **Vite**: Build tool and dev server with React plugin
- **Replit Plugins**: Development tooling including runtime error overlay, cartographer, and dev banner
- **TypeScript**: Strict mode enabled with ESNext module resolution
- **PostCSS**: For Tailwind CSS processing

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation library
- **@hookform/resolvers**: Integration between react-hook-form and Zod

### Utility Libraries
- **clsx & tailwind-merge**: Conditional className utilities
- **class-variance-authority**: Component variant management
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation

### Assets & Design Resources
- **Google Fonts**: Inter font family (weights 400, 500, 600, 700, 800)
- **Custom Design Guidelines**: Documented in design_guidelines.md with Linear-inspired typography and Stripe-inspired restraint
- **Visual Identity Assets**: Stored in /attached_assets/ directory including logos, generated images, and HTML moodboards

### Notable Configuration
- Project uses ESM modules throughout (type: "module" in package.json)
- Path aliases configured for clean imports (@/, @shared/, @assets/)
- Custom Tailwind configuration with brand-specific colors and spacing system

## Integrations & Configuration

### Google Sheets Integration

**Status**: ✅ Configured using Replit connector

**Purpose**: Stores audit submission data from the prioritization matrix wizard.

**Setup Requirements**:
1. Google Sheets connector is enabled via Replit Connectors
2. Environment variable `GOOGLE_SHEET_ID` must be set to your Google Sheet ID
   - Example: `1AbC...XyZ` (found in the Sheet URL)
3. The integration uses OAuth2 authentication managed by Replit
4. Access token refreshes automatically via Replit's connector system

**Data Structure**: The system automatically creates headers in Sheet1:
- Čas odoslania (Timestamp)
- Názov firmy (Company name)
- IČO (Company registration number)
- Veľkosť firmy (Company size: 1-20, 20-50, 50-100, 100+)
- Procesy (Process maturity level)
- Prepojenie oddelení (Department connection)
- Unikajúce príležitosti (Lost opportunities - multi-select)
- Práca s klientmi (Client work approach)
- Delegovanie (Delegation style)
- Rýchlosť oddelení (Department speed)
- Ciele (Goals for next 6 months - multi-select)
- Email (User email address)
- GDPR súhlas (GDPR consent: Áno/Nie)

**Implementation**: 
- Backend: `server/lib/googleSheets.ts` handles Google Sheets API integration
- API endpoint: `POST /api/audit/submit` validates and stores audit data
- Frontend: `AuditWizard` component submits data via TanStack Query mutation

### Email Delivery

**Status**: ⏳ Awaiting configuration

**Options**:
1. **SendGrid** (recommended for production)
   - User declined Replit connector setup
   - Alternative: Set `SENDGRID_API_KEY` environment variable
   
2. **Nodemailer with SMTP** (alternative)
   - Can use Gmail, Outlook, or any SMTP provider
   - Requires: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`

**TODO**: Implement email sending once credentials are provided

### Slovak Business Register (ORSR) Integration

**Status**: ❌ Not implemented - simplified to text input

**Current**: Simple optional text input field for company name in Prioritization Matrix section

**Previous Consideration**: ORSR API integration was considered but removed in favor of simplicity. User can manually enter company name.

**Note**: If real ORSR integration is needed in future, see `ORSR_INTEGRATION.md` for detailed integration options (Transparent Data API, lubosdz/parser-orsr, eWay-CRM ORSR API)

## Recent Changes (November 2025)

### Multi-Step Audit Wizard Implementation
- Complete 6-step wizard with progress tracking (mint #06D6A0 progress bar)
- Step 1: Company size selection (Building icon)
- Step 2: Processes & Systems assessment (Settings icon)
- Step 3: Sales, Marketing, Product evaluation (TrendingUp icon, multi-select)
- Step 4: People & Performance (Users icon)
  - Answer "Jasné SLA" changed to "Máme jasné pravidlá reakčných časov"
- Step 5: Goals for next 6 months (Target icon, multi-select)
- Step 6: Email + GDPR consent (Mail icon)
- Thank you screen with success message and CTA buttons

### Visual Identity Updates
- ViKrea banner: Solid primary blue (#1E40AF) background using Inter font
- Prioritization Matrix section: Turquoise (#06D6A0) background with simple company name input field (no ORSR integration)
- CTA buttons: White background with orange (#FF6B35) border on turquoise sections
- Consistent use of orange (#FF6B35) for primary CTAs throughout wizard
- Lucide icons (32px, mint color) for each wizard step

### Data Flow
- User completes 6-step audit → Frontend validates with Zod schemas → POST to `/api/audit/submit` → Backend validates → Saves to Google Sheets → (TODO: Sends email with results) → Shows thank you screen

### Calendly Integration
- "Poďme si zavolať" button opens Calendly popup modal (https://calendly.com/vikrea/30min)
- Uses react-calendly package for seamless booking experience
- Modal closes automatically after booking or when user dismisses it

### Footer Updates
- Added ViKrea logo (same as header)
- Copyright text includes "Vytvorila Martina Habová"
- Contact: lucia@vikrea.sk

## Environment Variables Required

```bash
# Google Sheets Integration
GOOGLE_SHEET_ID=your_spreadsheet_id_here

# Email Service (choose one)
# Option 1: SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key

# Option 2: SMTP (e.g., Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_specific_password

# Session Management
SESSION_SECRET=your_session_secret_here
```