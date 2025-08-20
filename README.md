# ProShop MERN - Monorepo

A full-stack e-commerce application built with MongoDB, Express.js, React (TypeScript), and Node.js, organized as a pnpm monorepo with Turborepo for efficient development.

## Project Structure

```
proshop-mern/
├── apps/
│   ├── api/          # Node.js/Express API server
│   └── web/          # React TypeScript application
├── package.json      # Root workspace configuration
├── pnpm-workspace.yaml # pnpm workspace configuration
└── turbo.json        # Turborepo pipeline configuration
```

## Prerequisites

- Node.js >= 20.0.0
- pnpm >= 10.0.0

## Getting Started

1. Install dependencies for all workspaces:
```bash
pnpm install
```

2. Start development servers for both web and API:
```bash
pnpm dev
```

## Available Scripts

### Root Workspace Commands

- `pnpm dev` - Start development servers for all workspaces
- `pnpm build` - Build all workspaces
- `pnpm lint` - Run linting for all workspaces
- `pnpm clean` - Clean all workspaces
- `pnpm test` - Run tests for all workspaces

### Workspace-Specific Commands

- `pnpm api:dev` - Start API development server only
- `pnpm api:start` - Start API production server
- `pnpm api:seed` - Seed database with sample data
- `pnpm web:dev` - Start web development server only
- `pnpm web:build` - Build web for production

### Direct Workspace Commands

You can also run commands directly in specific workspaces:

```bash
# API commands
pnpm --filter api dev
pnpm --filter api start
pnpm --filter api seed

# Web commands
pnpm --filter web dev
pnpm --filter web build
pnpm --filter web preview
```

## Monorepo Benefits

- **Unified Dependencies**: Shared dependencies are hoisted to reduce duplication
- **Cross-workspace Operations**: Run commands across all workspaces simultaneously
- **Efficient Builds**: Turborepo caches and parallelizes builds
- **Type Safety**: Shared TypeScript configurations and type definitions

## Technology Stack

### API (Backend)
- Node.js with Express
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

### Web (Frontend)
- React 19 with TypeScript
- Vite for fast development and building
- Redux for state management
- React Bootstrap for UI components
- Axios for API calls

## Development Workflow

1. Make changes to web or API
2. Use `pnpm dev` to start both servers with hot reload
3. Turborepo will handle caching and efficient rebuilds
4. Use workspace-specific commands when working on individual packages

## Environment Variables

Make sure to set up your environment variables in the API workspace. Create a `.env` file in the `apps/api/` directory with your MongoDB connection string and JWT secret.
