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