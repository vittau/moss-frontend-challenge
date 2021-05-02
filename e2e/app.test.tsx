// @ts-ignore due to isolatedModules flag - no import so this needed
describe('<App />', () => {
  beforeAll(async () => {
    // networkidle0 to wait for the Top 100 Albums request
    await page.goto(SERVER_URL, { waitUntil: 'networkidle0' });
  }, JEST_TIMEOUT);

  it(
    'should include "Top 100 Albums" text on page',
    async () => {
      await expect(page).toMatch('Top 100 Albums');
    },
    JEST_TIMEOUT
  );

  it(
    'should include the filter with a placeholder text',
    async () => {
      const filterPlaceholder = await page.evaluate(() => document.querySelector('input[placeholder]')?.getAttribute('placeholder'));
      expect(filterPlaceholder).toMatch('Filter by album, artist name or genre');
    },
    JEST_TIMEOUT
  );

  it(
    'should include the results table',
    async () => {
      const table = await page.evaluate(() => document.querySelector('table')?.tagName);
      expect(table).toBe('TABLE');
    },
    JEST_TIMEOUT
  );
});
