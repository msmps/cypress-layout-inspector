import { defineConfig } from "cypress";

export default defineConfig({
  video: false,

  e2e: {
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
  },
});
