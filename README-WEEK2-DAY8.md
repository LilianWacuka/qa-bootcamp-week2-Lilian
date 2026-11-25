# QA Bootcamp - Week 2, Day 8

This implementation covers a Playwright UI test for increasing a product quantity using the Page Object Model pattern.

## Implemented Files

| File | Description |
|------|-------------|
| `src/Pages/quantity.ts` | Page object that opens product 1 and controls the quantity input. |
| `tests/quantity.spec.ts` | Playwright test that sets the quantity to `2` and verifies the value. |
| `src/endpoints/get.spec.ts` | API test that checks the products endpoint response and body. |
| `features/cartFlow.feature` | Gherkin cart and checkout flow scenario. |
| `playwright.config.ts` | Playwright Chromium and test configuration. |

## Quantity Page Object

The `AddQuantity` class:

- Stores the Playwright `Page` and quantity `Locator`.
- Locates the quantity field with `[data-test="quantity"]`.
- Opens product 1 on the Practice Software Testing website.
- Fills the quantity field with `2`.

## UI Test Scenario

`tests/quantity.spec.ts` verifies that a shopper can increase a product quantity:

1. Creates an `AddQuantity` page object.
2. Navigates to product 1.
3. Sets the quantity to `2`.
4. Uses `toHaveValue('2')` to confirm the result.

Run only this test:

```bash
npx playwright test tests/quantity.spec.ts
```

## API Test

`src/endpoints/get.spec.ts` sends a GET request to the Practice Software Testing products API and verifies:

- HTTP status `200`
- A truthy response body

## Project Setup

Install dependencies:

```bash
npm install
```

Install the Chromium browser:

```bash
npx playwright install chromium
```

Run all configured Playwright tests:

```bash
npm test
```

## Project Structure

```text
src/
  Pages/
    quantity.ts
  endpoints/
    get.spec.ts
tests/
  quantity.spec.ts
features/
  cartFlow.feature
playwright.config.ts
package.json
```
