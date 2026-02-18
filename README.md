# example-fastify

A simple JSON counter API built with [Fastify](https://fastify.dev/), ready to deploy on [Trapiche](https://trapiche.cloud).

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/` | App info |
| `GET` | `/counter` | Get current count |
| `POST` | `/counter/increment` | Increment counter |
| `POST` | `/counter/decrement` | Decrement counter |

## Deploy on Trapiche

1. Push this repo to your GitHub account
2. Go to [trapiche.cloud](https://trapiche.cloud) and create a new deployment
3. Select this repository — Trapiche detects Fastify automatically
4. Done. No Dockerfile needed.

## Detection

Trapiche detects this as a **Fastify** app via `"fastify"` in `package.json`.
- Deploy mode: **SSR / Docker**
- Build step: skipped
- Start command: `npm start` → `node server.js`

## Local development

```bash
npm install
npm start
# GET http://localhost:3000/counter
```
