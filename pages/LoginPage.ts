import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  username = '#username';
  password = '#password';
  loginBtn = '#login';

  async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }
  async goto() {
    console.log('Page object:', this.page); 
    await this.page.goto('http://localhost:8080'); 
  }

}