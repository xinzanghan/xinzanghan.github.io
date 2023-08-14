// vite.config.ts
import { defineConfig, loadEnv } from "file:///D:/product/xinzanghan/node_modules/.pnpm/vite@4.2.1_sass@1.58.3/node_modules/vite/dist/node/index.js";
import Inspect from "file:///D:/product/xinzanghan/node_modules/.pnpm/vite-plugin-inspect@0.7.18_rollup@2.79.1_vite@4.2.1/node_modules/vite-plugin-inspect/dist/index.mjs";
import vueJsx from "file:///D:/product/xinzanghan/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.1_vite@4.2.1_vue@3.2.47/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import DefineOptions from "file:///D:/product/xinzanghan/node_modules/.pnpm/unplugin-vue-define-options@1.3.2_rollup@2.79.1_vue@3.2.47/node_modules/unplugin-vue-define-options/dist/vite.mjs";
var vite_config_default = defineConfig(async (configEnv) => {
  const { mode } = configEnv;
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      open: false,
      port: 5001,
      host: true,
      hmr: true,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    },
    define: {
      "process.env": JSON.stringify(env)
    },
    plugins: [
      vueJsx(),
      DefineOptions(),
      Inspect()
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9kdWN0XFxcXHhpbnphbmdoYW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2R1Y3RcXFxceGluemFuZ2hhblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvZHVjdC94aW56YW5naGFuL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBJbnNwZWN0IGZyb20gJ3ZpdGUtcGx1Z2luLWluc3BlY3QnXG4vLyBqc3hcdThCRURcdTZDRDVcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBEZWZpbmVPcHRpb25zIGZyb20gJ3VucGx1Z2luLXZ1ZS1kZWZpbmUtb3B0aW9ucy92aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKGNvbmZpZ0VudikgPT4ge1xuICAgIGNvbnN0IHsgbW9kZSB9ID0gY29uZmlnRW52XG4gICAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKVxuICAgIC8vIFx1NTg5RVx1NTJBMFx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlxuICAgIHJldHVybiB7XG4gICAgICAgIHNlcnZlcjoge1xuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICBwb3J0OiA1MDAxLFxuICAgICAgICAgICAgaG9zdDogdHJ1ZSxcbiAgICAgICAgICAgIGhtcjogdHJ1ZSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZGVmaW5lOiB7XG4gICAgICAgICAgICAncHJvY2Vzcy5lbnYnOiBKU09OLnN0cmluZ2lmeShlbnYpXG4gICAgICAgIH0sXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIHZ1ZUpzeCgpLFxuICAgICAgICAgICAgRGVmaW5lT3B0aW9ucygpLFxuICAgICAgICAgICAgSW5zcGVjdCgpLFxuICAgICAgICBdLFxuICAgIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVQLFNBQVMsY0FBYyxlQUFlO0FBQzdSLE9BQU8sYUFBYTtBQUVwQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTyxzQkFBUSxhQUFhLE9BQU8sY0FBYztBQUM3QyxRQUFNLEVBQUUsS0FBSyxJQUFJO0FBQ2pCLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFFdkMsU0FBTztBQUFBLElBQ0gsUUFBUTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ0wsK0JBQStCO0FBQUEsTUFDbkM7QUFBQSxJQUNKO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDSixlQUFlLEtBQUssVUFBVSxHQUFHO0FBQUEsSUFDckM7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxJQUNaO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
