<template>
  <div v-if="industry">
    <!-- Hero -->
    <section class="section-padding pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="max-w-4xl">
        <!-- Top bar: back link + label chip -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
          <NuxtLink
            to="/industries"
            class="inline-flex items-center gap-1.5 text-cream/60 text-sm font-medium hover:text-cream transition-colors"
          >
            <Icon name="mdi:arrow-left" class="w-4 h-4" />
            All Industries
          </NuxtLink>
          <span class="inline-block text-xs font-bold uppercase tracking-widest text-accent/90 bg-accent/15 border border-accent/25 rounded-full px-3 py-1.5">
            Industries we serve
          </span>
        </div>

        <div class="flex items-start gap-5 mb-6">
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            :style="{ backgroundColor: industry.accentColor + '25' }"
          >
            <Icon :name="industry.icon" class="w-7 h-7 text-cream" />
          </div>
          <h1 class="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            {{ industry.title }}
          </h1>
        </div>

        <p class="text-cream/80 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
          {{ industry.description }}
        </p>

        <div class="flex flex-wrap items-center gap-3 mb-10">
          <a href="#quote" class="btn-coral text-base">
            Get a quote now
          </a>
          <a href="mailto:hello@mokshya.io" class="inline-flex items-center gap-2 text-cream/70 text-sm font-medium hover:text-cream transition-colors border border-cream/20 rounded-full px-5 py-2.5">
            <Icon name="mdi:message-text-outline" class="w-4 h-4" />
            Talk to an advisor
          </a>
        </div>

        <!-- Key coverage chips at bottom of hero -->
        <div class="pt-8 border-t border-white/10">
          <p class="text-cream/50 text-xs font-semibold uppercase tracking-wider mb-3">Key coverages</p>
          <div class="flex flex-wrap gap-2">
            <NuxtLink
              v-for="chip in industry.coverageChips"
              :key="chip.slug"
              :to="`/coverages/${chip.slug}`"
              class="inline-flex items-center gap-1.5 text-sm font-medium rounded-full px-4 py-2 border border-white/15 bg-white/5 text-cream hover:bg-accent/20 hover:border-accent/40 hover:text-cream transition-colors"
            >
              {{ chip.label }}
              <Icon name="mdi:arrow-top-right" class="w-3.5 h-3.5 opacity-70" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Mokshya -->
    <section class="bg-teal-light section-padding py-16 lg:py-24">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10">
          Why Mokshya OS for {{ industry.title }}?
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div class="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
              <Icon name="mdi:lightning-bolt" class="w-5 h-5 text-cream" />
            </div>
            <h3 class="font-sans text-lg font-bold text-white mb-2">Faster quotes</h3>
            <p class="text-cream/70 text-sm leading-relaxed">We match your coverage needs with the right markets quickly, so you can move forward.</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div class="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
              <Icon name="mdi:brain" class="w-5 h-5 text-cream" />
            </div>
            <h3 class="font-sans text-lg font-bold text-white mb-2">Deep expertise</h3>
            <p class="text-cream/70 text-sm leading-relaxed">We understand the nuances of your industry and match coverage to real-world exposure.</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div class="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
              <Icon name="mdi:cash-multiple" class="w-5 h-5 text-cream" />
            </div>
            <h3 class="font-sans text-lg font-bold text-white mb-2">Better rates</h3>
            <p class="text-cream/70 text-sm leading-relaxed">We help you compare options efficiently, so pricing is competitive and coverage stays aligned.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Industries -->
    <section class="bg-cream section-padding py-16 lg:py-20">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-sans text-xl font-bold text-teal-dark mb-6">Explore more industries</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-4">
          <NuxtLink
            v-for="related in relatedIndustries"
            :key="related.slug"
            :to="`/industries/${related.slug}`"
            class="flex items-center justify-between py-4 px-3 text-teal-dark hover:text-accent group transition-colors duration-200"
          >
            <span class="text-base lg:text-lg font-medium leading-none">{{ related.title }}</span>
            <Icon
              name="mdi:arrow-top-right"
              class="w-5 h-5 text-teal-dark/50 group-hover:text-accent transition-colors shrink-0 ml-5"
            />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Quote Form -->
    <QuoteForm />
  </div>

  <div v-else class="section-padding py-32 text-center">
    <h1 class="font-sans text-3xl font-bold text-white mb-4">Industry not found</h1>
    <p class="text-cream/60 mb-8">The industry you're looking for doesn't exist.</p>
    <NuxtLink to="/industries" class="btn-coral">
      Browse all industries
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { allIndustries, findIndustryBySlug } from '~/data/allIndustries'

const route = useRoute()
const slug = route.params.slug as string
const industry = findIndustryBySlug(slug)

if (!industry) {
  throw createError({ statusCode: 404, statusMessage: 'Industry not found' })
}

useHead({
  title: `${industry.title} | Mokshya OS`,
})

const relatedIndustries = computed(() => {
  return allIndustries.filter(i => i.slug !== slug)
})
</script>
