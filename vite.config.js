import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      NODE_ENV: '"development"',
      // eslint-disable-next-line no-undef
      VITE_API_URL: JSON.stringify(process.env.VITE_API_URL)
    }
  }
})
