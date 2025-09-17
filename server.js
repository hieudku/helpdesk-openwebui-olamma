import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// serve built frontend (after `npm run build`)
app.use(express.static(path.join(__dirname, "build")));

// proxy API requests to school backend
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://ai2.soit.local:8080",
    changeOrigin: true,
    secure: false,
    ws: true,
  })
);

app.use(
  "/ollama",
  createProxyMiddleware({
    target: "http://ai2.soit.local:8080",
    changeOrigin: true,
    secure: false,
    ws: true,
  })
);

app.use(
  "/openai",
  createProxyMiddleware({
    target: "http://ai2.soit.local:8080",
    changeOrigin: true,
    secure: false,
    ws: true,
  })
);

app.use(
  "/static",
  createProxyMiddleware({
    target: "http://ai2.soit.local:8080",
    changeOrigin: true,
    secure: false,
  })
);

// Fallback: return index.html for SPA routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Frontend + Proxy running at http://localhost:${PORT}`);
});
