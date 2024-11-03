import { fileURLToPath, URL } from "node:url"
import { resolve, dirname } from "path"
import { defineConfig } from "vite"
import { manualChunksPlugin } from "vite-plugin-webpackchunkname"
import vue from "@vitejs/plugin-vue"
import svgLoader from "vite-svg-loader"
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import vueDevTools from "vite-plugin-vue-devtools"

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
    VueI18nPlugin({
      runtimeOnly: false,
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/plugins/i18n/locales/**",
      ),
    }),
    manualChunksPlugin(),
    svgLoader(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    hot: true,
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "static/chunks/[name]-[hash].js",
        entryFileNames: "static/entries/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]"
          }

          if (/\.css$/.test(name ?? "")) {
            return `assets/css/${name
              .split(/\.?(?=[A-Z])/)
              .join("-")
              .toLowerCase()}-[hash][extname]`
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return "assets/[name]-[hash][extname]"
        },
      },
    },
    sourcemap: false,
    target: "esnext",
  },
})
