import { defineConfig, splitVendorChunkPlugin } from "vite";
import Vue from "@vitejs/plugin-vue2";
import Legacy from "@vitejs/plugin-legacy";
import WindiCSS from "vite-plugin-windicss";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import { viteMockServe as Mock } from "vite-plugin-mock";
import Inspect from "vite-plugin-inspect";
import { compression } from "vite-plugin-compression2";

// https://cn.vitejs.dev/config/
export default defineConfig(() => ({
  resolve: {
    alias: {
      "@": require("path").resolve(__dirname, "./src"),
    },
  },
  plugins: [
    // https://github.com/vitejs/vite-plugin-vue2/#readme
    Vue(),

    // https://github.com/windicss/vite-plugin-windicss
    WindiCSS(),

    // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#readme
    Legacy(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-vue-components
    Components(),

    // https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md
    Mock({
      ignore: /^_/,
      injectCode: `import '../mock/_createProductionServer';`,
    }),

    // https://github.com/antfu/vite-plugin-inspect#readme
    Inspect(),

    // https://cn.vitejs.dev/guide/build.html#chunking-strategy
    splitVendorChunkPlugin(),

    // https://github.com/nonzzz/vite-compression-plugin#readme
    compression({ threshold: 1024 * 50 }),
  ],
}));
