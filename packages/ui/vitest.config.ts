const defineConfig = require('vitest/config').defineConfig;
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ["./setupVitest.ts"],
  },
})