/* Entre as configurações mais comuns estão:

    URL do site (site)
    Diretório de saída (outDir)
    Modo de build (estático ou SSR)
    Adaptador de hospedagem (Cloudflare, Netlify, Node, Vercel...)
    Integrações (Tailwind, MDX, React, Vue, etc.)
    Configurações do Vite
    Internacionalização (i18n)
    Compressão de imagens
    Redirecionamentos
    Headers
    Configurações experimentais 
*/

import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // update me!
  site: "https://fatocwb.github.io",
  //base: "/aguia-demo",

  integrations: [
      icon(),
      sitemap({
          filter: (page) => !page.includes("/admin"),
          changefreq: "weekly",
          priority: 0.7,
      }),
	],

  image: {
      layout: "constrained",
	},

  fonts: [
      {
          provider: fontProviders.google(),
          name: "Roboto",
          cssVariable: "--font-primary",
          fallbacks: ["Arial", "sans-serif"],
          weights: [400, 700, 900],
          styles: ["normal"],
      },
	],

  vite: {
    plugins: [tailwindcss()],
  },
});