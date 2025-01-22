import {defineConfig} from 'vite'
import {resolve} from "path";
import react from '@vitejs/plugin-react'
import laravel from "laravel-vite-plugin";

const outDir = "../OrgWeb/wwwroot/build";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        laravel({
            input: ["src/main.tsx"],
            publicDirectory: outDir,
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        outDir,
        emptyOutDir: true,
    }
})
