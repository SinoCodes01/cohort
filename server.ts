import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();

// API routes
app.get("/api/hello", (c) => {
  return c.json({ message: "Hello from Node/Hono!" });
});

// For development SPA fallback
app.get("*", (c, next) => {
  if (c.req.path.startsWith("/api/")) return next();
  // In development, the dev server handles the index.html, 
  // but we need Hono to not return 404 for frontend routes.
  return next();
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use("/*", serveStatic({ root: "./dist" }));
  
  // SPA fallback
  app.get("*", async (c, next) => {
    if (c.req.path.startsWith("/api/")) return next();
    return serveStatic({ path: "./dist/index.html" })(c, next);
  });
}

// Start server if run directly (production)
if (process.env.NODE_ENV === "production" || import.meta.url.endsWith("server.ts")) {
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  
  // Only start if not being imported by Vite dev server
  if (process.env.NODE_ENV === "production") {
    console.log(`Server is running on port ${port}`);
    serve({
      fetch: app.fetch,
      port,
    });
  }
}

export default app;
