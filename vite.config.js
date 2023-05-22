import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { fullVersionLink, ogImageUrl } from "./src/data"

const headers = [
  `<title>Manassarn Manoonchai - Resumette</title>`,
  `<meta name="title" content="Rachatat Bunpat - Resumette" />`,
  `<meta name="description" content="Rachatat Bunpat's Resumette" />`,
  `<meta name="viewport" content="width=device-width, initial-scale=1" />`,
  `<meta property="og:url" content=${fullVersionLink} />`,
  `<meta property="og:type" content="website" />`,
  `<meta property="og:title" content="Rachatat Bunpat - Resumette" />`,
  `<meta property="og:description" content="Rachatat Bunpat's Resumette" />`,
  `<meta property="og:image" content="https://og-playground.vercel.app/?share=zZTBbtQwEIZfxTJC6UqOSELabSNAQgWhXlskLlyceJx1m9iRPWG7rPbdGaeb7bJcOIDgECf-_8l4vrHsLW-cAl7xN8p8-2oZC7jp4O12G78ZUyYMndxULNEdPCbiSV2BaVdIYp5lL2dxbRSuTjTZmdbeIPSBjAYsgp-t-zGg0ZtrR6KNuX6243IfjIcGjbPRdd3Y29mtZfPQejdaddPLFsjvjAXp09ZLZSjRGTpWO0TXC_ZC1brUmj601rnOF4c1aO07851-v8j2UgdIRdwNsjG2rVhaHIV-2VMvszka4RHfR8ST8ne7OL6Lw9zW08b-DsNVpqAVzLf1WSZYXpSCFWW2OChF8ZqG_GJxIDrOet2ZgZLGGp_tJF1D_WAwfY5LGwpMfomkhjsfVS9tGKSngmbzCI-xW9msJEpMAruFMPYwUb8i7D_Jnxe5YGVkzop9A4rzc8Gmvlz-swb8FdYJbLmMz4xaXkVy2m3a_v-BdX5zwd0QT2jg1ZZPNwCvLul88KcrgldlnCiox5ZXWnYBBIfe3ZvPmyHeOrieZpQnnrCPfQ2KV-hH2AmOsqaIT_sOBb77AQ" />`,
  `<meta name="twitter:title" content="Rachatat Bunpat - Resumette" />`,
  `<meta name="twitter:card" content="summary_large_image" />`,
  `<meta name="twitter:image" content=${ogImageUrl} />`,
]

const htmlPlugin = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html.replace(
        /<!-- This comment will be replaced with htmlPlugin in vite.config.js -->/,
        headers.join("\n")
      )
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), htmlPlugin()],
})
