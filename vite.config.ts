import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import dtsPlugin from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), dtsPlugin({ rollupTypes: true })],
  build: {
    /** Library entry and output setting */
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "west-ui",
      fileName: "west-ui",
    },
    /**
     * Bundle options
     * External react-related imports
     */
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dome": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
