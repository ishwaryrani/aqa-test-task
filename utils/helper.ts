import { Page, expect } from '@playwright/test';

export class Helpers {

  // Wait for API response with URL and status
  static async waitForApiResponse(page: Page, urlPart: string, status: number = 200) {
    const response = await page.waitForResponse(resp =>
      resp.url().includes(urlPart) && resp.status() === status
    );
    return response;
  }

  // Check element visibility safely
  static async isElementVisible(page: Page, selector: string): Promise<boolean> {
    try {
      return await page.locator(selector).isVisible();
    } catch {
      return false;
    }
  }

  // Click only if element is visible
  static async clickIfVisible(page: Page, selector: string) {
    if (await this.isElementVisible(page, selector)) {
      await page.click(selector);
    }
  }

  // Generate random email (useful for signup tests)
  static generateRandomEmail(): string {
    const timestamp = Date.now();
    return `testuser_${timestamp}@example.com`;
  }

  // Generate random string
  static randomString(length: number = 6): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  // Hard wait (avoid if possible, but useful sometimes)
  static async wait(seconds: number) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

  // Verify text content
  static async verifyText(page: Page, selector: string, expectedText: string) {
    await expect(page.locator(selector)).toHaveText(expectedText);
  }
}