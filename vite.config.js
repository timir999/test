import shopify from "vite-plugin-shopify";
import globs from "rollup-plugin-globlin";
import cleanup from '@by-association-only/vite-plugin-shopify-clean'

export default {
  server: {
    cors: {
      origin: 'https://test-codebie.myshopify.com',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
  build: {
    emptyOutDir: false,
  },
  css: {
    devSourcemap: true,
  },
  plugins: [
    cleanup(),
    shopify({ versionNumbers: true }),
    globs.default({
      globs: ["frontend/web/**/sections/*.liquid"],
      dest: "sections",
      clean: false,
    }),
    globs.default({
      globs: ["frontend/web/**/snippets/*.liquid"],
      dest: "snippets",
      clean: false,
    }),
  ],
};
