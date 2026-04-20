import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // TODO: Replace YOUR_REPO_NAME with your actual repository name when deploying to username.github.io/repo-name.
  base: "/portfolio/"
});
