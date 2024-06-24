const defineWorkspace = require('vitest/config').defineWorkspace;

const workspaces = [
    {
    test: {
      include: ["packages/**/*.{test,spec}.{ts,js}", "apps/**/*.{test,spec}.{ts,js}"],
      exclude: [
        "**/node_modules/**/*",
        "**/.next/**/*",
        "**/*.config.js",
        "packages/**/*.config.{ts,js}"
      ],
      name: "dailycode",
    },
  },]
export default defineWorkspace(workspaces);