# Project Context: Cohort Landing (Vite + Node)

This is a standard **Vite + React** application with a **Hono** backend integrated via the `@hono/vite-dev-server` plugin.

## Project Overview

- **Architecture**: A unified development environment where Vite manages both the frontend and the backend API during development.
- **Backend**: [Hono](https://hono.js.org/) framework running on [Node.js](https://nodejs.org/).
- **Frontend**: [React 19](https://react.dev/), [Vite 7](https://vitejs.dev/), and [Tailwind CSS 4](https://tailwindcss.com/).
- **UI Components**: Built with [shadcn/ui](https://ui.shadcn.com/).

## Core Technologies & Patterns

### Runtime & Frameworks
- **Runtime**: Node.js. Use `npm` for dependency management.
- **Web Server**: Hono (using `@hono/node-server`). Defined in `server.ts`.
- **Frontend Bundler**: Vite. Configured in `vite.config.ts`.
- **Styling**: Tailwind CSS 4 using the `@tailwindcss/vite` plugin.

### Development Workflow
- **Vite Integration**: The `@hono/vite-dev-server` plugin allows Hono to handle `/api/*` requests directly within the Vite dev server.
- **Backend Entry**: `server.ts` exports the Hono app and is used by Vite during development.

## Project Structure

- `server.ts`: Hono backend entry point.
- `vite.config.ts`: Vite configuration with Hono dev server plugin.
- `src/`: React frontend source code.
    - `main.tsx`: React entry point.
    - `App.tsx`: Main application component.
    - `components/`: UI components.
    - `styles.css`: Global Tailwind styles.
- `public/`: Static assets served at the root path.

## Key Commands

- `npm run dev`: Start the Vite development server (includes Hono API).
- `npm run build`: Build the frontend for production (output to `dist/`).
- `npm run preview`: Preview the production build locally.
- `npm run type-check`: Run TypeScript type checking.

## Development Conventions

- **API Routes**: Add new API endpoints in `server.ts`.
- **UI Components**: Use shadcn/ui. Add new ones via `npx shadcn@latest add <name>`.
- **Styling**: Use Tailwind 4 utility classes.
- **Production**: For a production deployment, use `@hono/node-server` to serve the `dist/` directory as configured in `server.ts`.
