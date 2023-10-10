import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ['react-router-dom','node']
  },
  publicDir: 'src/views/vite/public',
  build:{
    minify: true,
  }
})
