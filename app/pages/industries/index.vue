<template>
  <div>
    <!-- Hero -->
    <section class="section-padding pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h1 class="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Insurance expertise across <span class="text-accent">every industry</span>
          </h1>
          <p class="text-cream/80 text-lg lg:text-xl leading-relaxed max-w-lg mb-8">
            From aerospace machining to AI platforms and stem cell storage, we insure the industries where failure isn't an option and complexity is just part of the job. Harper doesn't just get you coverage, we get you the <span class="italic">right</span> coverage, fast.
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
            alt="Industries illustration"
            class="w-full h-auto"
          />
        </div>
      </div>
    </section>

    <!-- Industries Grid -->
    <section class="bg-cream section-padding py-16 lg:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-4">
        <NuxtLink
          v-for="industry in allIndustries"
          :key="industry.slug"
          :to="`/industries/${industry.slug}`"
          class="flex items-center justify-between py-5 px-3 text-teal-dark hover:text-accent group transition-colors duration-200"
        >
          <span class="text-base lg:text-lg font-medium leading-none">{{ industry.name }}</span>
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
import { allIndustries } from '~/data/allIndustries'

useHead({
  title: 'Industries We Serve - Harper Insurance',
})
</script>
