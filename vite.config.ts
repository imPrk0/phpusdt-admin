/**
 * Vite.js configuration
 * @author Prk<code@imprk.me>
 * 
 * https://vite.dev/config/
 */

import { fileURLToPath, URL } from 'node:url';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        vueDevTools(),
        UnoCSS(),
        AutoImport({
            imports: [
                'vue'
            ],
            resolvers: [
                ElementPlusResolver()
            ],
            dts: './src/auto-imports.d.ts'
        }),
        Components({
            resolvers: [
                ElementPlusResolver()
            ],
            dts: './src/components.d.ts'
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(
                new URL(
                    './src',
                    import.meta.url
                )
            )
        }
    }
});
