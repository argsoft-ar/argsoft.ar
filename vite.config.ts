import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: isSsrBuild
        ? undefined
        : {
            // Vendor estable en su propio chunk para cachearlo entre deploys.
            manualChunks(id: string) {
              if (!id.includes('node_modules')) return undefined
              if (/node_modules\/(react|react-dom|react-router|react-router-dom|scheduler)\//.test(id)) {
                return 'react-vendor'
              }
              return undefined
            },
          },
    },
  },
}))
