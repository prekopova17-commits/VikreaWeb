# ViKrea Business Consulting Website

## Overview

ViKrea is a business consulting agency targeting growing SME companies (50-100 employees). The website acts as a presentation platform and a lead generation tool. Its primary goal is to convert visitors using a prioritization matrix mini-audit that captures email leads and offers actionable recommendations. The project aims to establish ViKrea as a leader in business consulting, driving market expansion and increasing client engagement through a modern digital presence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

The frontend is a single-page React 18 application with TypeScript, built using Vite. It uses Wouter for routing, Radix UI primitives with shadcn/ui patterns for UI components, and Tailwind CSS for styling with a custom color palette (Primary Blue, Action Orange, Growth Mint). State management is handled by React Query for server state and `useState` for local UI state, with forms managed by `react-hook-form` and Zod validation.

### Backend

The backend is an Express.js server with TypeScript, running on Node.js. It features a RESTful API structure, designed to serve both API routes and static frontend assets from a single production server. Development includes Vite middleware for HMR.

### Data Storage

Drizzle ORM v0.39.1 is configured for PostgreSQL with Neon serverless adapter. A `users` table is defined, and schema validation uses `drizzle-zod`. The current implementation uses an in-memory storage abstraction layer (`MemStorage`) that can be easily swapped for the database implementation.

### Authentication and Authorization

While basic user schema is defined and session management infrastructure is in place (via `connect-pg-simple`), full authentication and authorization features are not yet actively implemented. A storage abstraction layer (`IStorage` interface) is used to separate business logic from data persistence, facilitating future authentication integration.

### UI/UX Decisions

The design is inspired by modern SaaS aesthetics, featuring "Linear typography" and "Stripe restraint." It utilizes a card-based design system, responsive breakpoints, and a consistent typography system with the Inter font family. A multi-step audit wizard with a progress bar and distinct iconography guides users through the lead capture process.

### Security

The application includes robust security measures:
- **CORS Protection**: Environment-aware middleware with origin whitelisting for production.
- **Rate Limiting**: Implemented for API endpoints (100 requests/15 mins) and audit submissions (5 submissions/hour) with Slovak error messages.
- **HTTP Security Headers**: Uses Helmet.js for XSS protection, clickjacking prevention, and MIME sniffing protection, with an environment-aware Content Security Policy (CSP) configured for production and development.

## External Dependencies

### UI Libraries

- **Radix UI**: Accessible component primitives.
- **shadcn/ui**: Components built on Radix UI with Tailwind.
- **Lucide React**: Icon library.
- **react-calendly**: Calendly integration for appointment booking.
- **Embla Carousel**: Carousel/slider functionality.
- **Vaul**: Drawer component primitive.

### Database & Backend Services

- **Neon Database**: Serverless PostgreSQL hosting.
- **Drizzle ORM**: TypeScript ORM for PostgreSQL.

### Form & Validation

- **React Hook Form**: Form state management.
- **Zod**: Schema validation.
- **@hookform/resolvers**: Integration for `react-hook-form` with Zod.

### Integrations

- **Google Sheets**: Fully functional integration that automatically creates and updates a spreadsheet ("ViKrea Audit Submissions") with audit submission data.
- **Gmail SMTP (Nodemailer)**: Sends formatted HTML emails with audit results to users after submission.
- **Google Fonts**: Inter font family.
- **Replit Connectors**: For Google Sheets API access.

### Utility Libraries

- **clsx & tailwind-merge**: Conditional `className` utilities.
- **class-variance-authority**: Component variant management.
- **date-fns**: Date manipulation.
- **nanoid**: Unique ID generation.