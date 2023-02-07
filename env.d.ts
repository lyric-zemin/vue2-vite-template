// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />

// Vue
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
  readonly VITE_BASE_API: string
}
