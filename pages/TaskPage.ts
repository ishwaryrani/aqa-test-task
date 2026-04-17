import { Page, expect } from '@playwright/test';

export class TaskPage {
  constructor(private page: Page) {}

  async createTask(title: string) {
    await this.page.click('text=Add Task');
    await this.page.fill('input[placeholder="Task Title"]', title);
    await this.page.keyboard.press('Enter');
  }

  async verifyTask(title: string) {
    await expect(this.page.locator(`text=${title}`)).toBeVisible(); 
  }

  async deleteTask(title: string) {
    const task = this.page.locator(`text=${title}`); 
    await task.click({ button: 'right' });
    await this.page.click('text=Delete');
  }
}