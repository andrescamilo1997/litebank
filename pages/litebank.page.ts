import type { Locator, Page } from '@playwright/test';

export class LitebankPage {
  readonly page: Page;
  readonly destinationAccountInput: Locator;
  readonly amountInput: Locator;
  readonly submitButton: Locator;
  readonly statusBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.destinationAccountInput = page.getByRole('textbox', { name: 'Cuenta Destino (Ej: 98765)' });
    this.amountInput = page.getByPlaceholder('Monto ($)');
    this.submitButton = page.getByRole('button', { name: 'Enviar Transferencia' });
    this.statusBox = page.locator('#status-box');
  }

  async goto() {
    await this.page.goto('http://localhost:5173/');
  }

  async realizarTransferencia(cuenta: string, monto: string) {
    await this.destinationAccountInput.click();
    await this.destinationAccountInput.fill(cuenta);
    await this.amountInput.click();
    await this.amountInput.fill(monto);
    await this.submitButton.click();
  }
}
