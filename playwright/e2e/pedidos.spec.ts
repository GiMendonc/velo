import { test, expect } from '@playwright/test'

// AAA - Arrange, Act, Assert
test('deve consultar um pedido aprovado', async ({ page }) => {
  //Arrange 
  await page.goto('http://localhost:5173/')
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')
  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  //Act
  await page.getByLabel('Número do Pedido').fill('VLO-712MP6')
  await page.getByRole('button', { name: 'Buscar Pedido' }).click()

  //Assert
  // await expect(page.getByTestId('order-result-id')).toBeVisible({ timeout: 10000 })
  // await expect(page.getByTestId('order-result-id')).toContainText('VLO-712MP6')
  // await expect(page.getByTestId('order-result-status')).toBeVisible()
  // await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')

  await expect(page.getByText('VLO-712MP6')).toBeVisible({timeout: 10000})
  await expect(page.getByTestId('order-result-VLO-712MP6')).toContainText('VLO-712MP6')
  await expect(page.getByText('APROVADO')).toBeVisible()
  await expect(page.getByTestId('order-result-VLO-712MP6')).toContainText('APROVADO')
})
