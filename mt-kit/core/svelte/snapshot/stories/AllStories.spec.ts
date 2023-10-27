import { test, expect } from '@playwright/test'
import { stories } from './stories'

stories.forEach(story => {
  const screenshotOptions = { animations: 'disabled', fullPage: true }
  // test.describe(`${story} - mobil`, () => {
  //   test.use({ viewport: { width: 390, height: 844 } })
  //
  //   test('Basic', async ({ page }) => {
  //     await page.goto(`/iframe.html?args=&id=${story}&viewMode=story`)
  //     await page.waitForSelector('#storybook-root')
  //     expect(await page.screenshot(screenshotOptions)).toMatchSnapshot(`${story}-mobile.png`)
  //   })
  // })
  test.describe(`${story} - desktop`, () => {
    test.use({ viewport: { width: 1600, height: 1200 } })
    test('Basic', async ({ page }) => {
      await page.goto(`/iframe.html?args=&id=${story}&viewMode=story`)
      await page.waitForSelector('#storybook-root')

      expect(await page.screenshot(screenshotOptions)).toMatchSnapshot(`${story}-desktop.png`)
    })
  })
})
