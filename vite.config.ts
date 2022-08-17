import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command, mode})=>{
  const env = loadEnv(mode, process.cwd(), '')
  return{
    server: {
      port: 3030
    },
    plugins: [react()],
    define: {
      __ENV__: env.APP_ENV
    }
  }
})