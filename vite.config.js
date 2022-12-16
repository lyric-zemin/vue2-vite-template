import { defineConfig, splitVendorChunkPlugin } from "vite";
import Vue from "@vitejs/plugin-vue2";
import Legacy from "@vitejs/plugin-legacy";
import WindiCSS from "vite-plugin-windicss";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import { viteMockServe as Mock } from "vite-plugin-mock";
import Inspect from "vite-plugin-inspect";
import { compression } from "vite-plugin-compression2";

export default defineConfig(() => ({
  resolve: {
    alias: {
      "@": require("path").resolve(__dirname, "./src"),
    },
  },
  plugins: [
    Vue(),
    WindiCSS(),
    Legacy(),
    Pages(),
    Components(),
    Mock({
      ignore: /^_/,
      injectCode: `import '../mock/_createProductionServer';`,
    }),
    Inspect(),
    splitVendorChunkPlugin(),
    compression({ threshold: 1024 * 50 }),
  ],
}));
