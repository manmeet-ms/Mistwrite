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
                theme_color: '#020617',
                background_color: "#2563eb",
                display: 'standalone', // from resources
                icons: [
                    {
                        src: '/icons/mistwrite-icon-48.png',
                        sizes: '48x48',
                        type: 'image/png',
                    },
                    
                    {
                        src: '/icons/mistwrite-icon-72.png',
                        sizes: '72x72',
                        type: 'image/png',
                    },

                    {
                        src: '/icons/mistwrite-icon-96.png',
                        sizes: '96x96',
                        type: 'image/png',
                    },

                    {
                        src: '/icons/mistwrite-icon-128.png',
                        sizes: '128x128',
                        type: 'image/png',
                    },

                    {
                        src: '/icons/mistwrite-icon-144.png',
                        sizes: '144x144',
                        type: 'image/png',
                    },

                    {
                        src: '/icons/mistwrite-icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },

                    {
                        src: '/icons/mistwrite-icon-512.png',
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
