import { Page } from '@playwright/test';

export class LandingPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/'); // Adjust the path if necessary
  }

  async getTitle() {
    return await this.page.textContent('h1'); // Adjust the selector if necessary
  }

  async getContactInfo() {
    return await this.page.textContent('.contact-info'); // Adjust the selector if necessary
  }
}
