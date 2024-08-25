import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'https://fakestoreapi.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
        base: './',
        plugins: [
            react()
        ],
    },
    plugins: [react()],
});



