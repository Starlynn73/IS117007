import { test, expect } from "@playwright/test";

test("outfit ideas are free to read; voluntary plans are independent of the demo bag and clear on refresh", async ({
  page,
}) => {
  await page.goto("/");
  const streetwear = page.getByRole("button", {
    name: "Save streetwear for my plans",
    exact: true,
  });
  const casual = page.getByRole("button", {
    name: "Save clean casual for my plans",
    exact: true,
  });
  await expect(
    page.getByText("echo a sneaker color in an accessory", { exact: false }),
  ).toBeVisible();
  await expect(page.locator("#streetwear-plan")).toBeHidden();
  await expect(page.locator("#casual-plan")).toBeHidden();

  await streetwear.focus();
  await page.keyboard.press("Enter");
  await expect(streetwear).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByRole("heading", { name: "Your streetwear checklist" }),
  ).toBeVisible();
  await expect(page.locator("#casual-plan")).toBeHidden();
  await expect(page.locator("#bag-count")).toHaveText("0");
  await expect(page.locator('input[name="size"]:checked')).toHaveCount(0);

  await casual.click();
  await expect(
    page.getByRole("heading", { name: "Your clean casual checklist" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Remove saved streetwear look", exact: true })
    .click();
  await expect(page.locator("#streetwear-plan")).toBeHidden();
  await expect(streetwear).toHaveAttribute("aria-expanded", "false");
  await expect(streetwear).toBeFocused();
  await expect(page.locator("#casual-plan")).toBeVisible();

  await page.locator('input[name="size"][value="M"]').check();
  await page
    .getByRole("button", { name: "Add to demo bag", exact: true })
    .click();
  await page
    .getByRole("button", {
      name: "Remove saved clean casual look",
      exact: true,
    })
    .click();
  await expect(page.locator("#bag-count")).toHaveText("1");
  await casual.click();
  await page.reload();
  await expect(page.locator("#streetwear-plan")).toBeHidden();
  await expect(page.locator("#casual-plan")).toBeHidden();
  await expect(casual).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#bag-count")).toHaveText("0");
});
