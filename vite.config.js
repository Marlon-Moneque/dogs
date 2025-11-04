import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
    optimizeDeps: {
    include: [] // Tente limpar ou ajustar esta configuração
  },
  build: {
    rollupOptions: {
      // Configurações específicas do Rollup se necessário
    }
  }
});
