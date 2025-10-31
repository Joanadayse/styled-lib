import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true, 
      },
      include: "**/*.svg",
    }),
    dts({
      insertTypesEntry: true,
      outDir: "dist",
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "StyledKit",
      fileName: (format) => `styled-kit.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
