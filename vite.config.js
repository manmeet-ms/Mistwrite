import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: false,

            pwaAssets: {
                disabled: false,
                config: true,
            },

            manifest: {
                name: 'Mistwrite',
                short_name: 'Mistwrite',
                description: 'A minimalist digital notebook for jotting down quick thoughts and organizing your mind.',
                theme_color: '#111827',
                display: 'standalone', // from resources
                icons: [
                    {
                        src: '/icons/burningnotes-icon-144.png',
                        sizes: '144x144',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/burningnotes-icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/burningnotes-icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
                shortcuts: [
                    {
                        name: 'Create Note',
                        url: '/add-note',
                        description: 'Create new note quickly',
                    },

                ],
            },

            workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
                cleanupOutdatedCaches: true,
                clientsClaim: true,
            },

            devOptions: {
                enabled: false,
                navigateFallback: 'index.html',
                suppressWarnings: true,
                type: 'module',
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
