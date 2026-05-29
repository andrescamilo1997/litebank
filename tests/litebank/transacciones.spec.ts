import { test } from '@playwright/test';
import { LitebankPage } from '../../pages/litebank.page';
import { waitForText } from '../../utils/wait-for-text';

test('Registro transaccion con exito', async ({ page }) => {
  const litebank = new LitebankPage(page);

  await litebank.goto();
  await litebank.realizarTransferencia('158', '15588');

  await waitForText(litebank.statusBox, 'Estado: APROBADO',20000);
});
