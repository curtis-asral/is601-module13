# Playwright E2E Tests

## Setup

1. Install Playwright and dependencies:
   ```bash
   npm install --save-dev playwright
   npx playwright install
   ```
2. Ensure your app is running locally (default: http://localhost:8000).

## Running Tests

```bash
npx playwright test tests/playwright/e2e.spec.ts
```

## Test Cases
- Register with valid data: expects success message.
- Login with correct credentials: expects success or token stored.
- Register with short password: expects error message.
- Login with wrong password: expects invalid credentials message.

## Notes
- Adjust selectors and BASE_URL in `e2e.spec.ts` if your app differs.
- Ensure error/success messages have `.error-message` or `.success-message` classes.
