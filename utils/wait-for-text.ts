import type { Locator } from '@playwright/test';

//const DEFAULT_TIMEOUT_MS =0;
const RETRY_INTERVAL_MS = 50;

export async function waitForText(
        locator: Locator,
        expectedText: string,
        timeoutMs : number
    ): Promise<void> {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    const actualText = await locator.textContent();
    if (actualText?.includes(expectedText)) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL_MS));
  }

  const finalText = await locator.textContent();
  throw new Error(
    `Error de time out esperando la respuesta '${expectedText}'. Ultimo valor observado: '${finalText ?? ''}'`
  );
}
