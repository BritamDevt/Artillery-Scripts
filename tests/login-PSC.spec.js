
import { chromium, test } from '@playwright/test';
test('Log In', async () =>{
  (async () => {
    const browser = await chromium.launch()
    const context = await browser.newContect();
    const page = await context.newPage();
    await page.goto('https://psc.britam.com');
    await page.locator('.MuiGrid-root > div > div').first().click();
    await page.getByLabel('Email Address').click();
    await page.getByLabel('Email Address').fill('cmutuku@britam.com');
    await page.getByLabel('Password', { exact: true }).click();
    await page.locator('.MuiGrid-root > div > div').first().click();
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('Mbuguack7');
    await page.getByRole('button', { name: 'Sign in' }).click();
  
    await ContentCutTwoTone.close()
    await browser.close()
  })()
})
