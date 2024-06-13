import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': '{}',
  },
  build: {
    sourcemap: true,
    minify: false,
    lib: {
      formats: ['es'],
      entry: './navbar.tsx',
      name: 'navBar',
      fileName: (format, entryName) =>
        format === 'es' ? `${entryName}.js` : `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
    },
  },
});
