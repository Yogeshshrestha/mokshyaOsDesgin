<template>
  <div>
    <!-- Hero -->
    <section class="section-padding pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h1 class="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Comprehensive coverage for <span class="text-accent">every risk</span>
          </h1>
          <p class="text-cream/80 text-lg lg:text-xl leading-relaxed max-w-lg mb-8">
            From general liability to specialized professional coverage, we offer the insurance solutions your business needs. Harper helps you understand, compare, and secure the right protection for your unique risks.
          </p>
          <div class="flex items-center gap-3">
            <a href="#quote" class="btn-coral text-base">
              Get a quote now
            </a>
            <a href="#quote" class="btn-icon bg-teal-dark text-cream rounded-full hover:bg-teal-dark/80">
              <Icon name="mdi:arrow-top-right" class="w-5 h-5" />
            </a>
          </div>
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

useHead({
  title: 'Risk We Cover - Mokshya OS',
})
</script>
