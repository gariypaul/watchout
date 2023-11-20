const puppeteer = require('puppeteer');

describe('Home Page Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://35.239.19.51/home.html'); 
  });

  afterAll(() => {
    browser.close();
  });

  test('Page title should be "Watchout"', async () => {
    const title = await page.title();
    expect(title).toBe('Watchout');
  });

  // Additional tests...
});
