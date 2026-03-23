<template>
  <div>
    <!-- Hero -->
    <section class="section-padding pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h1 class="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Coverage areas for <span class="text-accent">emerging digital risk</span>
          </h1>
          <p class="text-cream/80 text-lg lg:text-xl leading-relaxed max-w-lg mb-8">
            Our coverage spans the risk domains that are reshaping commercial insurance — cyber infrastructure, AI systems, digital assets, and evolving regulatory environments. Whether you're a SaaS company, a DeFi protocol, or a board navigating new governance expectations, Mokshya helps you identify, structure, and bind coverage that traditional policies weren't designed to address.
          </p>
          <div class="flex items-center gap-3 mb-4">
            <a href="#quote" class="btn-coral text-base">
              Get a quote now
            </a>
            <a href="#quote" class="btn-icon bg-teal-dark text-cream rounded-full hover:bg-teal-dark/80">
              <Icon name="mdi:arrow-top-right" class="w-5 h-5" />
            </a>
          </div>
          <p class="text-cream/60 text-sm italic max-w-lg">
            From cyber incidents to AI failures and digital asset losses — insure what traditional policies miss.
          </p>
        </div>

        <div class="hidden lg:block">
          <img
            src="/images/landingimg.svg"
            alt="Coverages illustration"
            class="w-full h-auto"
          />
        </div>
      </div>
    </section>

    <!-- Coverages List -->
    <section class="bg-cream section-padding py-16 lg:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-4">
        <NuxtLink
          v-for="coverage in coverages"
          :key="coverage.id"
          :to="`/coverages/${coverage.id}`"
          class="flex items-center justify-between py-5 px-3 text-teal-dark hover:text-accent group transition-colors duration-200"
        >
          <span class="text-base lg:text-lg font-medium leading-none">{{ coverage.title }}</span>
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
import { coverages } from '~/data/coverages'

const title = 'Risk We Cover | Mokshya OS'
const description =
  'Coverage areas for emerging digital risk: cyber infrastructure, AI liability, digital assets & DeFi, smart contracts, treasury, governance, fraud, quantum, and more. Mokshya helps you bind coverage traditional policies were not designed to address.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image',
})
</script>
