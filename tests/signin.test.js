const puppeteer = require('puppeteer');

describe('SignIn Page Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://35.239.19.51/SignIn.html'); // Adjust URL as needed
  });

  afterAll(() => {
    browser.close();
  });

  test('Sign In page title', async () => {
    const title = await page.title();
    expect(title).toBe('Sign Up');
  });

  test('Email input should exist', async () => {
    const emailInput = await page.$('#email');
    expect(emailInput).toBeTruthy();
  });

  test('Password input should exist', async () => {
    const passwordInput = await page.$('#password');
    expect(passwordInput).toBeTruthy();
  });

  test('Sign In button should exist', async () => {
    const signInButton = await page.$('#signinButton');
    expect(signInButton).toBeTruthy();
  });

  test('Sign Up button should exist', async () => {
    const signUpButton = await page.$('#signupButton');
    expect(signUpButton).toBeTruthy();
  });

  // Add more tests as needed...
});
