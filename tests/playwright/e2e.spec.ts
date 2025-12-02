import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:8000'; // Adjust if your app runs on a different port

test.describe('E2E Auth Flow', () => {
  test('Register with valid data (positive)', async ({ page }) => {
    await page.goto(`${BASE_URL}/register`);
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'validPassword123');
    await page.click('button[type="submit"]');
    await expect(page.locator('.success-message')).toHaveText(/Registration successful/i);
  });

  test('Login with correct credentials (positive)', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'validPassword123');
    await page.click('button[type="submit"]');
    await expect(page.locator('.success-message')).toHaveText(/Login successful|Welcome/i);
    // Optionally check for token in localStorage or cookies
  });

  test('Register with short password (negative)', async ({ page }) => {
    await page.goto(`${BASE_URL}/register`);
    await page.fill('input[name="email"]', 'shortpass@example.com');
    await page.fill('input[name="password"]', '123');
    await page.click('button[type="submit"]');
    // Check for front-end error or server error
    await expect(page.locator('.error-message')).toHaveText(/password.*too short|minimum length/i);
  });

  test('Login with wrong password (negative)', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'wrongPassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toHaveText(/invalid credentials|401/i);
  });
});
