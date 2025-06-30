# Setup Guide

_Last updated: January 2025_

## Prerequisites

**Required Tools:**
- **Node.js 18+** - JavaScript runtime (latest LTS recommended)
- **pnpm 8+** - Package manager (faster and more efficient than npm)
- **Git** - Version control system
- **VS Code** - Recommended editor with TypeScript support

**Optional Tools:**
- **GitHub CLI** - For repository management and PR creation
- **Docker** - For containerized deployment (optional)

## Step-by-Step Setup

### 1. Clone and Initialize Template

```bash
# Clone the template
git clone <your-template-repo>
cd your-project-name

# Run the setup script (customizes template variables)
./scripts/setup-template.sh

# Install dependencies
pnpm install
```

### 2. Environment Configuration

```bash
# Copy environment template
cp .env.example .env.local

# Edit with your configuration
# Required for full functionality:
# - NEXTAUTH_URL=http://localhost:3000
# - NEXTAUTH_SECRET=your-secret-key
```

### 3. Development Server

```bash
# Start development server
pnpm dev

# Open browser to http://localhost:3000
```

### 4. Customize Your Project

- **Update site configuration** in `src/config/site.ts`
- **Toggle features** in `src/config/features.ts`
- **Customize components** in `src/components/`
- **Add your branding** (logos, colors, fonts)

## Common Issues

**pnpm not found:**
```bash
npm install -g pnpm
```

**TypeScript errors after setup:**
```bash
pnpm type-check
# Fix any type errors in your customized code
```

**Build fails:**
```bash
pnpm lint:fix
pnpm type-check
pnpm build
```

**Template variables not replaced:**
```bash
# Re-run setup script
./scripts/setup-template.sh
```

**Port 3000 already in use:**
```bash
# Use different port
pnpm dev -- -p 3001
```

## Useful Commands

### Development
- `pnpm dev` — Start development server on http://localhost:3000
- `pnpm build` — Build application for production
- `pnpm start` — Start production server
- `pnpm type-check` — Run TypeScript type checking

### Code Quality
- `pnpm lint` — Run ESLint to check code quality
- `pnpm lint:fix` — Fix ESLint errors automatically
- `pnpm format` — Format code with Prettier
- `pnpm format:check` — Check if code is properly formatted

### Testing
- `pnpm test` — Run Jest tests
- `pnpm test:watch` — Run tests in watch mode
- `pnpm test:coverage` — Run tests with coverage report

### Template Setup
- `pnpm setup` — Run template setup script
- `./scripts/setup-template.sh` — Manual setup script execution

## Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `NEXTAUTH_URL` | Base URL for authentication | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | Secret key for JWT signing | `your-secret-key-here` |
| `DATABASE_URL` | Database connection string | `postgresql://user:pass@localhost:5432/db` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | `your-google-client-id` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | `your-google-client-secret` |
| `GITHUB_CLIENT_ID` | GitHub OAuth client ID | `your-github-client-id` |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth client secret | `your-github-client-secret` |
| `STRIPE_SECRET_KEY` | Stripe API secret key | `sk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | `whsec_...` |
| `RESEND_API_KEY` | Email service API key | `re_...` |

**Note:** Not all environment variables are required. Enable only the features you need via `src/config/features.ts`. 