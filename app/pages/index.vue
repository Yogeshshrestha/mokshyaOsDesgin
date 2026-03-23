<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <IndustryExpertise />
    <DataSection />
    <TrustedSection />
    <PartnersSection />
    <QuoteForm />
  </div>
</template>

<script setup lang="ts">
const title = 'Mokshya OS - Business insurance that\'s Smarter. Faster. Cheaper.'
const description =
  'Mokshya OS helps you identify, structure, and bind emerging risk coverage — cyber infrastructure, AI systems, digital assets, and evolving regulatory environments. Smarter quotes, deep market access, outcomes-focused protection.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image',
})
</script>
