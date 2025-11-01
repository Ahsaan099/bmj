import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bmj/', // ⚠️ yahan apni repo ka naam likho (bmj repo ka hi hai to aise hi rehne do)
})

