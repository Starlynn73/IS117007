import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  "index",
  "landscape",
  "uniqlo",
  "hm",
  "everlane",
  "direction",
  "next-steps",
  "sources",
];

test("research notebook: every page, local evidence link and image is reachable", async ({
  page,
  request,
}) => {
  const checked = new Set();
  for (const slug of pages) {
    await page.goto(`/research/${slug}.html`);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('[aria-current="page"]')).toHaveCount(1);
    const assets = await page
      .locator("a[href], img[src]")
      .evaluateAll((nodes) =>
        nodes.map((node) => ({
          url: node.href || node.src,
          local: new URL(node.href || node.src).origin === location.origin,
        })),
      );
    for (const asset of assets.filter((item) => item.local)) {
      const url = new URL(asset.url);
      if (url.hash) {
        if (url.pathname === `/research/${slug}.html`) {
          await expect(page.locator(url.hash)).toHaveCount(1);
        }
        url.hash = "";
      }
      if (!checked.has(url.href)) {
        expect((await request.get(url.href)).status(), url.href).toBe(200);
        checked.add(url.href);
      }
    }
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  }
  expect(checked.size).toBeGreaterThan(20);
});

test("research notebook: phone layout keeps tables inside scroll regions and keyboard navigation works", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const slug of pages) {
    await page.goto(`/research/${slug}.html`);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      slug,
    ).toBe(true);
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Skip to research" }),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main$/);
  }
});
