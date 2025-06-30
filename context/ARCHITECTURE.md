# Architecture Overview

_Last updated: January 2025_

## Tech Stack & Rationale

**Frontend Stack:**
- **Next.js 15.3.4** - Latest React framework with App Router for server-side rendering, static generation, and modern routing
- **React 19.0.0** - Latest React with concurrent features, improved performance, and better developer experience
- **TypeScript 5.x** - Type safety, better developer experience, and improved maintainability with strict mode
- **Tailwind CSS 4.x** - Utility-first CSS framework with CSS variables, better performance, and modern features

**UI Component System:**
- **Shadcn/UI** - Modern component library built on Radix UI primitives for accessibility and customization
- **Radix UI** - Accessible, unstyled UI primitives for building high-quality design systems
- **Class Variance Authority (CVA)** - Type-safe variant management for component styling
- **Lucide React** - Consistent, scalable icon library

**Development Tools:**
- **pnpm** - Fast, efficient package manager with optimized dependency resolution
- **ESLint 9.x** - Code linting with Next.js and TypeScript configurations
- **Prettier 3.6.2** - Code formatting for consistent style
- **Husky + lint-staged** - Git hooks for quality control and automated formatting
- **Jest + React Testing Library** - Unit and integration testing

## Key Patterns

**Route Group Architecture:**
- Uses Next.js 13+ route groups for logical organization:
  - `(auth)` - Authentication pages (login, register, forgot-password)
  - `(dashboard)` - Protected dashboard pages with shared layout
  - `(public)` - Public marketing pages

**Component Architecture:**
- **Atomic Design Pattern** - UI components organized by complexity (atoms → molecules → organisms)
- **Configuration-Driven Development** - Features controlled via centralized config files
- **Template Variable System** - Placeholder variables for easy customization

**State Management:**
- **React Hook Form** - Form state management with validation
- **Custom Hooks** - Reusable logic encapsulation (auth, local storage)
- **Configuration State** - Centralized feature flags and site configuration

## Data Models

**Configuration Entities:**
- `SiteConfig` - Site metadata, URLs, contact information, branding
- `Features` - Feature flags for enabling/disabling functionality
- `AuthConfig` - Authentication providers and settings

**UI Component Types:**
- `ButtonVariants` - Type-safe button styling variants
- `FormTypes` - Form validation schemas with Zod
- `DashboardViews` - Dashboard navigation and view states

**Template Variables:**
- Project metadata (name, description, version)
- Branding variables (colors, logos, fonts)
- Feature toggles and customization options

## Infrastructure

**Development Environment:**
- **Local Development** - pnpm dev server with hot reload
- **Type Checking** - TypeScript compiler with strict mode
- **Code Quality** - ESLint, Prettier, and pre-commit hooks
- **Testing** - Jest with jsdom environment for component testing

**Deployment Ready:**
- **Vercel** - Primary deployment platform (optimized for Next.js)
- **Netlify** - Alternative deployment with build command configuration
- **Self-hosted** - Docker support and manual deployment instructions
- **Static Export** - Support for static site generation when needed

**Performance Optimization:**
- **App Router** - Automatic code splitting and optimization
- **Image Optimization** - Next.js Image component with lazy loading
- **Bundle Analysis** - Built-in bundle analyzer for size optimization
- **Caching Strategies** - Static generation and revalidation patterns

## Security Considerations

**Authentication & Authorization:**
- **NextAuth.js v5** structure ready for implementation
- **Provider Support** - Google, GitHub, and credentials providers
- **Route Protection** - Middleware for protected routes
- **Session Management** - Secure session handling patterns

**Code Security:**
- **TypeScript Strict Mode** - Compile-time type safety
- **ESLint Security Rules** - Security-focused linting rules
- **Environment Variables** - Secure configuration management
- **Input Validation** - Zod schemas for runtime validation

**Data Protection:**
- **Form Validation** - Client and server-side validation
- **CSRF Protection** - Next.js built-in CSRF protection
- **Content Security Policy** - Ready for CSP header implementation
- **Secure Headers** - Security headers configuration ready

**Development Security:**
- **Dependency Scanning** - Regular dependency updates
- **Git Hooks** - Pre-commit security checks
- **Secret Management** - .env file patterns and documentation
- **Code Review** - Structured contribution guidelines 