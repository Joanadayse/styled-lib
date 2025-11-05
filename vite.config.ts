import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
      svgrOptions: {
        exportType: 'default',
        icon: true,
        replaceAttrValues: {
          '#45556C': 'currentColor',
          '#738196': 'currentColor',
          '#C20FB5': 'currentColor',
          '#000000': 'currentColor',
        },
      },
    }),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.build.json',
      outDir: 'dist/types',
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'StyledKit',
      formats: ['es', 'cjs'],
      fileName: (format) => `styled-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist',
    sourcemap: true,
  },
});
