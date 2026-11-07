// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { isIndexedPath } from "./src/config/seo.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://studio-shiba.com",
  integrations: [
    // 検索に載せてよいページだけをサイトマップに入れる
    sitemap({ filter: (page) => isIndexedPath(new URL(page).pathname) }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
