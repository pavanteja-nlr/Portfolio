---
name: testing-portfolio
description: Run and verify unit tests for the Portfolio React app. Use when making changes to components or data modules.
---

# Testing the Portfolio App

## Tech Stack
- React 18 + Vite
- Vitest (test runner, configured in `vite.config.js`)
- React Testing Library + jest-dom matchers
- jsdom environment

## Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage report
npm run test:coverage

# Run a single test file
npx vitest run src/test/Hero.test.jsx
```

## Test Structure
- Tests live in `src/test/`
- Setup file: `src/test/setup.js` (imports jest-dom matchers)
- One test file per module: `data.test.js`, `App.test.jsx`, `Navbar.test.jsx`, etc.

## Coverage
- Coverage config is in `vite.config.js` under `test.coverage`
- Excludes `src/test/` and `src/main.jsx` from coverage
- Uses v8 provider (auto-installed on first `--coverage` run)

## CI
- GitHub Actions workflow at `.github/workflows/test.yml`
- Runs `npm test` on push/PR to `main`

## Known Quirks
- `Not implemented: navigation to another Document` warning from jsdom is expected — it fires during the Hero resume download fallback test and does not affect results.
- The Hero component's `downloadResume` uses fetch + blob URL; tests mock `fetch`, `URL.createObjectURL`, and `URL.revokeObjectURL`.

## Devin Secrets Needed
None — all tests run locally with no external services.
