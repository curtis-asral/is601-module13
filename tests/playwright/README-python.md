# Playwright E2E Tests (Python)

## Setup

1. Install Playwright for Python:
   ```bash
   pip install playwright pytest
   playwright install
   ```
2. Ensure your app is running locally (default: http://localhost:8000).

## Running Tests

```bash
pytest tests/playwright/test_e2e.py
```

## Test Cases
- Register with valid data: expects success message.
- Login with correct credentials: expects success or token stored.
- Register with short password: expects error message.
- Login with wrong password: expects invalid credentials message.

## Notes
- Adjust selectors and BASE_URL in `test_e2e.py` if your app differs.
- Ensure error/success messages have `.error-message` or `.success-message` classes.
