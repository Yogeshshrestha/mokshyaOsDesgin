export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Mokshya OS - Business insurance that\'s Smarter. Faster. Cheaper.',
      meta: [
        {
          name: 'description',
          content:
            'Mokshya OS is the operating system for emerging risk insurance. Cyber, AI, digital assets, DeFi, and governance coverage — smarter, faster placement for businesses traditional insurers were not built for.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined',
        },
      ],
    },
  },
})
