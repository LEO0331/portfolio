import { defineConfig, devices } from "@playwright/test";

const E2E_PORT = Number(process.env.E2E_PORT ?? "4175");
const E2E_HOST = "127.0.0.1";
const E2E_BASE_PATH = "/portfolio";
const E2E_ORIGIN = `http://${E2E_HOST}:${E2E_PORT}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["list"],
    ["html", { open: "never" }],
    ["json", { outputFile: "test-results/e2e-report.json" }]
  ],
  use: {
    baseURL: `${E2E_ORIGIN}${E2E_BASE_PATH}`,
    trace: "on-first-retry",
    video: "retain-on-failure",
    screenshot: "only-on-failure"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ],
  webServer: {
    command: `npm run dev -- --host ${E2E_HOST} --port ${E2E_PORT} --strictPort`,
    url: `${E2E_ORIGIN}${E2E_BASE_PATH}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  }
});
