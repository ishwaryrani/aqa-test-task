import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TaskPage } from '../pages/TaskPage';
import { testUser, taskData } from '../utils/testData';


test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(testUser.username, testUser.password);
});

test('Task CRUD', async ({ page }) => {
  const taskPage = new TaskPage(page);

  await taskPage.createTask(taskData.title);
  await taskPage.verifyTask(taskData.title);

  await taskPage.deleteTask(taskData.title);
});