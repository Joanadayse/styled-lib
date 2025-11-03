import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'default',
        icon: true,
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
      formats: ['es', 'cjs'], // importante gerar os dois formatos
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
