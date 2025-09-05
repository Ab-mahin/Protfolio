import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0', // Allow connections from any IP address
    open: true,
    strictPort: true, // Fail if port is already in use
    hmr: {
      overlay: true // Show error overlay
    },
    watch: {
      usePolling: true // Better file watching on some systems
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true // Better debugging
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei']
  }
})
