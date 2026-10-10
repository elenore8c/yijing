import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://elenore8c.github.io/yijing/',              // ensure relative paths, e.g. in index.html
build: {
    outDir: 'dist',
    assetsDir: 'assets',
},
})
