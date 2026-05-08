import { defineConfig } from 'vite'
import { defineConfig as defineTestConfig } from "vitest/config";
import react from '@vitejs/plugin-react';

const config = defineConfig({
  plugins: [react()],
});

const testConfig = defineTestConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
});

export default { ...config, ...testConfig };

