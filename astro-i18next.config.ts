import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "vi", "fr"],
  i18nextServer: {
    debug: process.env.NODE_ENV !== 'development',
  },
};

export default config;
