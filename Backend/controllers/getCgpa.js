const puppeteer = require('puppeteer');

async function getCgpa(roll, password) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('aec.edu.in');

    // Log in
    await page.type('#rollInput', roll);
    await page.type('#passwordInput', password);
    await page.click('#loginButton');
    await page.waitForNavigation();

    // Get CGPA
    const cgpa = await page.$eval('#cgpaElement', el => el.textContent.trim());

    await browser.close();
    return cgpa;
}
module.exports = getCgpa;