import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import svgLoader from "vite-svg-loader"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), svgLoader()],
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
