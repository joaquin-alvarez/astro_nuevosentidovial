// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://escobar.gob.ar',
    base: '/nuevosentidovial',
    build: {
        assets: '_astro',
        inlineStylesheets: 'auto'
    },
    vite: {
        build: {
            minify: true,
            cssMinify: true,
            cssCodeSplit: true,
        },
    },
});
