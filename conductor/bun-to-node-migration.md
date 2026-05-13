# Implementation Plan: Migration from Bun to Node/Vite

This plan outlines the steps to refactor the project from a Bun-based "Zo Site" into a standard Node.js/Vite application.

## Objective
Decouple the project from the Bun runtime and Zo-specific architecture, transitioning to a standard Node.js environment using `npm` and a "Vite-first" development workflow.

## Key Changes

### 1. Dependency Management (`package.json`)
- Remove Bun-specific types and scripts.
- Replace `bun` commands with `npm` equivalents.
- Add Node.js compatibility libraries:
  - `@hono/node-server`: To run Hono on Node.js.
  - `@hono/vite-dev-server`: To integrate Hono API routes into the Vite dev server.
  - `@types/node`: For TypeScript support.
- Add standard Vite scripts: `dev`, `build`, `preview`.

### 2. Backend Refactor (`server.ts`)
- Remove Bun-specific `serveStatic` and middleware logic.
- Simplify `server.ts` to export a standard Hono `app` object.
- Remove Zo-specific API logic and `fetch/port` exports.
- Use `@hono/node-server` for the production entry point.

### 3. Vite Configuration (`vite.config.ts`)
- Integrate `@hono/vite-dev-server` to handle `/api/*` requests during development.
- Ensure Tailwind 4 and React plugins are correctly configured for a standard Node environment.

### 4. Cleanup
- Delete Bun-specific files: `bun.lock`, `bunfig.toml`, `zosite.json`.
- Delete Zo-specific libraries: `backend-lib/zo-api.ts`.
- Update `index.tsx` (if it contains Bun/Zo entry points) to be a standard Vite `main.tsx`.

## Implementation Steps

1.  **Modify `package.json`**: Update dependencies and scripts.
2.  **Refactor `server.ts`**: Clean up the server logic to be runtime-agnostic Hono.
3.  **Update `vite.config.ts`**: Add the Hono dev server plugin.
4.  **Remove legacy files**: Clean up Bun and Zo artifacts.
5.  **Update documentation**: Rewrite `GEMINI.md` for the new Node workflow.
6.  **Verify**: Run `npm install` and `npm run dev`.

## Verification & Testing
- Run `npm run dev` and verify the landing page loads at `http://localhost:5173`.
- Verify API routes (e.g., `/api/hello`) return expected JSON.
- Run `npm run build` to ensure the production bundle generates correctly in `dist/`.
