<template>
  <div>
    <!-- Hero -->
    <section class="section-padding pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="max-w-3xl">
        <span class="inline-block text-xs font-bold uppercase tracking-widest text-accent/80 mb-4">
          Industries We Serve
        </span>
        <h1 class="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
          Built for the businesses traditional insurance <span class="text-accent">doesn't fit</span>
        </h1>
        <p class="text-cream/80 text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
          Mokshya focuses on high-growth, technology-driven sectors where risk is complex, fast-moving, and often misunderstood by legacy insurers. We know your business model — and we know how to cover it.
        </p>
        <div class="flex items-center gap-3">
          <NuxtLink to="/coverages#quote" class="btn-coral text-base">
            Get a quote now
          </NuxtLink>
          <NuxtLink to="/coverages#quote" class="btn-icon bg-teal-dark text-cream rounded-full hover:bg-teal-dark/80">
            <Icon name="mdi:arrow-top-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Industries List -->
    <section class="bg-cream section-padding py-16 lg:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-4">
        <NuxtLink
          v-for="industry in industries"
          :key="industry.title"
          :to="`/industries/${industry.slug}`"
          class="flex items-center justify-between py-5 px-3 text-teal-dark hover:text-accent group transition-colors duration-200"
        >
          <span class="text-base lg:text-lg font-medium leading-none">{{ industry.title }}</span>
          <Icon
            name="mdi:arrow-top-right"
            class="w-5 h-5 text-teal-dark/50 group-hover:text-accent transition-colors shrink-0 ml-5"
          />
        </NuxtLink>
      </div>
    </section>

    <!-- Quote Form -->
    <QuoteForm />
  </div>
</template>

<script setup lang="ts">
import { allIndustries as industries } from '~/data/allIndustries'

const title = 'Industries We Serve | Mokshya OS'
const description =
  'Mokshya OS provides emerging risk insurance for fintech, Web3, AI, SaaS, healthcare technology, and enterprise — the sectors traditional insurers were not built for. Built for businesses traditional insurance does not fit.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image',
})
</script>
