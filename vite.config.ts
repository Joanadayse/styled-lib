import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // cria um `index.d.ts` principal
      outDir: "dist",
       tsconfigPath: "./tsconfig.build.json",         // garante que vai parar dentro de `dist/`
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts", // ponto de entrada da sua lib
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
