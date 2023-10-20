import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:8000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/sft/);
});

test("has search form heading", async ({ page }) => {
  await page.goto("http://localhost:8000/");

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", { name: "Search for products" }))
    .toBeVisible();
});

test("searches for iphone", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Search for products").click();
  await page.getByLabel("Search for products").fill("iphone");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("iPhone 9"))
    .toBeVisible();
});
