import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { testUser } from '../utils/testData';

test('User Registration', async ({ page }) => {
  const register = new RegisterPage(page);

  await register.goto();
  await register.register(testUser.username, testUser.password);

  await expect(page).toHaveURL(/login/);
});

test('User Login', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login(testUser.username, testUser.password);

  await expect(page).toHaveURL(/dashboard/);
});