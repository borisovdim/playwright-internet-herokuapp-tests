import {test, expect} from "@playwright/test"

test.only('hover', async({page}) => {
  await page.goto('https://the-internet.herokuapp.com/hovers')
  await page.locator('.figure').nth(1).hover()
  
  await page.pause()
})