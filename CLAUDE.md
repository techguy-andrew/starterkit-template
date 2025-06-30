# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors automatically
- `pnpm type-check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

### Testing
- `pnpm test` - Run Jest tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage report

### Project Setup
- `pnpm setup` - Run template setup script
- `./scripts/setup-template.sh` - Manual setup script execution

## Architecture Overview

This is a Next.js 15 starter template with App Router architecture built for rapid development.

### Key Architecture Patterns

**Route Groups**: Uses Next.js 13+ route groups for organization:
- `(auth)` - Authentication pages (login, register, forgot-password)
- `(dashboard)` - Protected dashboard pages
- `(public)` - Public marketing pages

**Component Architecture**:
- `ui/` - Shadcn/UI components (design system)
- `auth/` - Authentication-specific components
- `dashboard/` - Dashboard-specific components
- `layout/` - Layout components (header, footer, navbar)
- `forms/` - Form components with React Hook Form + Zod validation

**Configuration-Driven**: Uses centralized configuration:
- `src/config/site.ts` - Site metadata and URLs (uses template variables)
- `src/config/features.ts` - Feature flags for enabling/disabling functionality
- `src/config/auth.ts` - Authentication configuration

**Utility Layer**:
- `src/lib/utils.ts` - General utilities with Tailwind merge helper
- `src/lib/validations.ts` - Zod validation schemas
- `src/lib/metadata.ts` - SEO metadata construction utilities

### Page Structure

**Route Groups**: The application uses Next.js route groups to organize pages:

#### (auth) Route Group - Authentication Pages
- `/login` - User login page
- `/register` - User registration page  
- `/forgot-password` - Password reset page

#### (dashboard) Route Group - Protected Dashboard Pages
- `/billing` - Billing and subscription management
- `/blog` - Blog/content management
- `/events` - Events management
- `/live` - Live streaming/sessions
- `/membership` - Membership management
- `/profile` - User profile settings
- `/resources` - Resource library
- `/settings` - Application settings
- `/videos` - Video content management

#### (public) Route Group - Public Marketing Pages
- `/about` - About page
- `/contact` - Contact information/form
- `/pricing` - Pricing plans
- `/privacy` - Privacy policy
- `/terms` - Terms of service

#### Other Pages
- `/` - Root/home page
- `/examples` - Examples/demo page

#### API Routes
- `/api/auth` - Authentication endpoints
- `/api/subscriptions` - Subscription management endpoints
- `/api/users` - User management endpoints
- `/api/webhooks` - Webhook handlers

**Note**: Route groups `(auth)`, `(dashboard)`, and `(public)` are organizational only - the parentheses do not appear in the actual URLs.

### Template System
This is a template repository with placeholder variables:
- Template variables in `{{VARIABLE_NAME}}` format throughout codebase
- Setup script replaces these with actual values
- Key files using template variables: `src/config/site.ts`, `README.md`

### Styling Architecture
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/UI** - Component library built on Radix UI
- **Custom CSS**: Global styles in `src/app/globals.css`, component styles in `src/styles/`
- **Dark mode ready** - Theme system prepared for implementation

### State Management
- React Hook Form for form state
- Custom hooks in `src/hooks/` for reusable logic
- Local storage hook for client-side persistence

### Development Workflow
1. Always run `pnpm type-check` and `pnpm lint:fix` before committing
2. Use `pnpm format` for consistent code formatting
3. Components should follow existing patterns in respective directories
4. Use absolute imports with `@/` prefix (configured in tsconfig.json)

### Testing Strategy
- Jest with React Testing Library
- Tests should be co-located with components (`*.test.tsx` or `__tests__/` folders)
- Setup file: `jest.setup.js` with `@testing-library/jest-dom`
- Coverage collection excludes stories, test files, and type definitions