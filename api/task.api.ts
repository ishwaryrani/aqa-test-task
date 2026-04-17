import { test, expect } from '@playwright/test';
test('Create task via API and verify in UI', async ({ request, page }) => {
  const response = await request.post('/api/v1/tasks', {
    data: {
      title: 'API Task',
    },
  });

  expect(response.ok()).toBeTruthy();

  await page.goto('/tasks');
  await expect(page.locator('text=API Task')).toBeVisible();
});