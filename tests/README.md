# Playwright Tests

This project uses Playwright Test to run browser UI tests against the Practice Software Testing website.

## Test files

| File | What it tests |
|------|---------------|
| `homepage.spec.ts` | Opens the homepage and verifies that the Practice Software Testing navigation link is visible. |
| `search.spec.ts` | Searches for "pliers" and verifies that the expected product count is displayed. |
| `invalidLogin.spec.ts` | Logs in with invalid credentials and verifies that an error message is displayed. |

## Project folders

| Folder or file | Purpose |
|----------------|---------|
| `tests/` | Contains Playwright test specifications. |
| 
| `../test-results/` | Stores generated Playwright failure and trace output. |
| `../playwright.config.ts` | Configures the test directory, Chromium browser, list reporter, and base URL. |
| `../scripts/check.ts` | Checks that the environment and Toolshop API are reachable. |

## Prerequisites

Install dependencies and Chromium:

```bash
npm install
npx playwright install chromium
```

Copy the example environment file when needed:

```bash
cp .env.example .env
```

## Execute the tests

Run all test files:

```bash
npm test
```

Run a specific test file:

```bash
npx playwright test tests/homepage.spec.ts
npx playwright test tests/search.spec.ts
npx playwright test tests/invalidLogin.spec.ts
```

Run in visible-browser mode:

```bash
npx playwright test --headed
```

Run a specific test in visible-browser mode:

```bash
npx playwright test tests/invalidLogin.spec.ts --headed
```

Open Playwright's interactive test runner:

```bash
npx playwright test --ui
```

Test output is shown in the terminal because the configured reporter is `list`. Failure details and traces are written to `test-results/`.
