import { test, expect } from '@playwright/test';
import { LandingPage } from '../pageObjects/LandingPage';

test.describe('Landing Page', () => {
  let landingPage: LandingPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.navigate();
  });

  test('should display the landing page title', async () => {
    const title = await landingPage.getTitle();
    expect(title).toBe('Welcome to My Landing Page'); // Adjust the expected title
  });

  test('should display contact information', async () => {
    const contactInfo = await landingPage.getContactInfo();
    expect(contactInfo).toContain('Name:'); // Adjust based on your content
    expect(contactInfo).toContain('LinkedIn:');
    expect(contactInfo).toContain('GitHub:');
  });
});
