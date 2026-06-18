import { test, expect } from '@playwright/test'

test('home page loads and the counter works end-to-end', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Frontend CI Demo'
  )
  await expect(page.getByTestId('count')).toHaveText('0')

  await page.getByLabel('increment').click()
  await page.getByLabel('increment').click()
  await expect(page.getByTestId('count')).toHaveText('2')

  await page.getByLabel('decrement').click()
  await expect(page.getByTestId('count')).toHaveText('1')

  await page.getByLabel('reset').click()
  await expect(page.getByTestId('count')).toHaveText('0')
})
