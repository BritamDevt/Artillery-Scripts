import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://172.26.0.38/LoginPage?ReturnUrl=%2F');
  await page.locator('div').filter({ hasText: 'Log In Enter your user name' }).nth(2).click();
  await page.getByLabel('User Name').fill('Admin');
  await page.getByLabel('User Name').press('Tab');
  await page.getByLabel('Password').fill('Delivered,2');
  await page.getByLabel('Password').press('Enter');
  await page.locator('div').filter({ hasText: 'Log In Enter your user name' }).nth(2).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Delivered,1');
  await page.getByLabel('Password').press('Enter');
  await page.goto('http://172.26.0.38/InTray_ListView');
  await page.locator('dxbl-group-control').filter({ hasText: 'Shared Parameters' }).getByRole('button').click();
  await page.getByRole('link', { name: 'My Tasks' }).click();
  await page.getByLabel('Select All').check();
  await page.getByLabel('Select All').uncheck();
  await page.locator('#idfe8719c2-7e1a-4c47-bd2e-fda1e51a4334').click();
  await page.getByRole('link', { name: 'Company Details' }).click();
  await page.getByRole('link', { name: 'System Signatures' }).click();
  await page.locator('#id7de99d97-1ac8-476f-89ab-ede638ab5564').click();
  await page.getByRole('link', { name: 'Currency Details' }).click();
  await page.locator('#xaf-loading').click();
  await page.locator('#xaf-loading').click();
  await page.locator('#xaf-loading').click();
  await page.locator('#id57dd3f9d-cd98-4d04-b4fe-9c55afdecca2').click();
  await page.getByRole('link', { name: 'Countries' }).click();
  await page.getByRole('link', { name: 'Regions' }).click();
  await page.getByRole('link', { name: 'County Details' }).click();
  await page.locator('#id712c99b3-3cba-4979-b324-73ec38768a00').click();
  await page.getByRole('link', { name: 'Slams File Types' }).click();
  await page.getByRole('link', { name: 'Slams Document Types' }).click();
  await page.locator('#xaf-loading').click();
  await page.locator('#xaf-loading').click();
  await page.getByRole('link', { name: 'DMSDefaults' }).click();
  await page.locator('#id207f5afb-8ccc-416f-a20c-e444295ea99b').click();
  await page.getByRole('link', { name: 'Relationship Category' }).click();
  await page.getByRole('link', { name: 'Relationship Details' }).click();
  await page.locator('#xaf-loading').click();
  await page.getByRole('button', { name: 'Expand' }).first().click();
  await page.getByRole('link', { name: 'User Signatures' }).click();
  await page.locator('#idbdc09638-1d86-488e-89dd-7470f68c6b77 > div > div > .dxbl-accordion-item-content > .dxbl-accordion-item-text-container > .dxbl-text > .xaf-navigation-link-click-area').first().click();
  await page.locator('#id6a361e72-fac7-4695-bdb6-3cadc171452b > div > .dxbl-accordion-item-content > .dxbl-accordion-item-text-container > .dxbl-text > .xaf-navigation-link-click-area').first().click();
  await page.getByRole('link', { name: 'Approval Categories' }).click();
  await page.locator('#idb2f84581-a9f6-418d-b3ea-478d5c711eda').click();
  await page.locator('#id9e4544b1-dad6-4091-930b-fb14e758c113 > .xaf-nav-item > .dxbl-accordion-item-content > .dxbl-accordion-item-text-container > .dxbl-text > .xaf-navigation-link-click-area').click();
  await page.locator('#idb658d326-5c44-45eb-9933-53eb62df1bd3').click();
  await page.getByRole('link', { name: 'Scheme Levies' }).click();
});