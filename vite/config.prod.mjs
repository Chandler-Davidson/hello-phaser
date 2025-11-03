import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    logLevel: 'warning',
    build: {
        lib: {
            entry: 'src/game/main.ts',
            name: 'PhaserGame',
            formats: ['es'],
            fileName: (format) => `game.${format}.js`
        }
    }
});
