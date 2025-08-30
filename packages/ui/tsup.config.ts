import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/button.tsx", "src/styles.css"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react"],
  ...options,
}));
