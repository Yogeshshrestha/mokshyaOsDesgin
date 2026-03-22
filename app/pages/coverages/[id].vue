<template>
  <div v-if="coverage">
    <!-- Hero -->
    <section class="section-padding pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="max-w-4xl">
        <!-- Top bar: back link + group chip -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
          <NuxtLink
            to="/coverages"
            class="inline-flex items-center gap-1.5 text-cream/60 text-sm font-medium hover:text-cream transition-colors"
          >
            <Icon name="mdi:arrow-left" class="w-4 h-4" />
            All Coverages
          </NuxtLink>
          <span class="inline-block text-xs font-bold uppercase tracking-widest text-accent/90 bg-accent/15 border border-accent/25 rounded-full px-3 py-1.5">
            {{ coverage.group }}
          </span>
        </div>

        <div class="flex items-start gap-5 mb-3">
          <div class="w-14 h-14 bg-teal-light rounded-2xl flex items-center justify-center shrink-0">
            <Icon :name="coverage.icon" class="w-7 h-7 text-cream" />
          </div>
          <h1 class="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            {{ coverage.title }}
          </h1>
        </div>

        <!-- Tagline -->
        <p class="text-cream/60 text-lg italic mb-6 max-w-2xl">
          {{ coverage.tagline }}
        </p>

        <p class="text-cream/80 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
          {{ coverage.description }}
        </p>

        <div class="flex flex-wrap items-center gap-3 mb-10">
          <a href="#quote" class="btn-coral text-base">
            {{ coverage.ctaLabel }}
          </a>
          <a href="mailto:hello@mokshya.io" class="inline-flex items-center gap-2 text-cream/70 text-sm font-medium hover:text-cream transition-colors border border-cream/20 rounded-full px-5 py-2.5">
            <Icon name="mdi:message-text-outline" class="w-4 h-4" />
            Talk to an advisor
          </a>
        </div>

        <!-- Chips at bottom of hero: availability + markets -->
        <div class="pt-8 border-t border-white/10">
          <p class="text-cream/50 text-xs font-semibold uppercase tracking-wider mb-3">Availability &amp; markets</p>
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span
              class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1.5"
              :class="availabilityClasses"
            >
              <span class="w-2 h-2 rounded-full" :class="availabilityDotClass" />
              {{ coverage.availability }}
            </span>
            <span class="text-cream/60 text-sm">{{ coverage.markets }}</span>
          </div>
          <p class="text-cream/45 text-xs max-w-xl leading-relaxed">
            {{ coverage.availabilityNote }}
          </p>
        </div>
      </div>
    </section>

    <!-- What This Covers -->
    <section class="bg-cream section-padding py-16 lg:py-24">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-dark mb-3">
          What this covers
        </h2>
        <p class="text-teal-dark/60 text-base lg:text-lg mb-10 max-w-2xl">
          Key risk areas and incident types protected under this coverage.
        </p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="item in coverage.whatCovers"
            :key="item"
            class="bg-white rounded-2xl p-6 border border-teal-dark/5 hover:shadow-lg hover:border-accent/20 transition-all duration-300 group"
          >
            <div class="w-10 h-10 bg-teal-dark/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
              <Icon name="mdi:check" class="w-5 h-5 text-teal-dark group-hover:text-accent transition-colors" />
            </div>
            <p class="font-medium text-teal-dark leading-relaxed">{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Typical Buyers -->
    <section class="bg-cream section-padding pb-16 lg:pb-24">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-dark mb-3">
          Typical buyers
        </h2>
        <p class="text-teal-dark/60 text-base lg:text-lg mb-10 max-w-2xl">
          Companies and teams that typically need this type of coverage.
        </p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="buyer in coverage.typicalBuyers"
            :key="buyer"
            class="flex items-start gap-4 bg-white rounded-2xl p-6 border border-teal-dark/5"
          >
            <div class="w-10 h-10 bg-teal-dark/5 rounded-xl flex items-center justify-center shrink-0">
              <Icon name="mdi:account-outline" class="w-5 h-5 text-teal-dark" />
            </div>
            <p class="font-medium text-teal-dark leading-relaxed">{{ buyer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Mokshya -->
    <section class="bg-teal-light section-padding py-16 lg:py-24">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10">
          Why Mokshya OS for {{ coverage.title }}?
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
            <p class="text-cream/70 text-sm leading-relaxed">Industry context helps us recommend coverage that fits real operational risk, not generic templates.</p>
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

    <!-- Related coverages (same group) -->
    <section class="bg-cream section-padding py-16 lg:py-20">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-sans text-xl font-bold text-teal-dark mb-6">Related coverages</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-4">
          <NuxtLink
            v-for="c in relatedCoverages"
            :key="c.id"
            :to="`/coverages/${c.id}`"
            class="flex items-center justify-between py-4 px-3 text-teal-dark hover:text-accent group transition-colors duration-200"
          >
            <span class="text-base lg:text-lg font-medium leading-none">{{ c.title }}</span>
            <Icon
              name="mdi:arrow-top-right"
              class="w-5 h-5 text-teal-dark/50 group-hover:text-accent transition-colors shrink-0 ml-5"
            />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Disclaimer -->
    <section class="bg-cream section-padding pb-10">
      <div class="max-w-5xl mx-auto">
        <p class="text-teal-dark/40 text-xs leading-relaxed">
          Subject to policy terms, conditions, and market availability. Mokshya OS acts as a program manager and distribution platform — not a carrier.
        </p>
      </div>
    </section>

    <!-- Quote Form -->
    <QuoteForm />
  </div>

  <div v-else class="section-padding py-32 text-center">
    <h1 class="font-sans text-3xl font-bold text-white mb-4">Coverage not found</h1>
    <p class="text-cream/60 mb-8">The coverage you're looking for doesn't exist.</p>
    <NuxtLink to="/coverages" class="btn-coral">
      Browse all coverages
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { coverages, coverageGroups } from '~/data/coverages'

const route = useRoute()
const id = route.params.id as string

const coverage = coverages.find(c => c.id === id)

if (!coverage) {
  throw createError({ statusCode: 404, statusMessage: 'Coverage not found' })
}

useHead({
  title: coverage.metaTitle,
  meta: [
    { name: 'description', content: coverage.metaDescription },
  ],
})

const availabilityClasses = computed(() => {
  switch (coverage.availability) {
    case 'Instant': return 'bg-green-500/20 text-green-300'
    case 'Guided': return 'bg-blue-500/20 text-blue-300'
    case 'Advisory': return 'bg-purple-500/20 text-purple-300'
    default: return 'bg-white/10 text-cream/70'
  }
})

const availabilityDotClass = computed(() => {
  switch (coverage.availability) {
    case 'Instant': return 'bg-green-400'
    case 'Guided': return 'bg-blue-400'
    case 'Advisory': return 'bg-purple-400'
    default: return 'bg-cream/50'
  }
})

const relatedCoverages = computed(() => {
  const groupSlugs = Object.values(coverageGroups).find(slugs => slugs.includes(id))
  if (!groupSlugs) return coverages.filter(c => c.id !== id).slice(0, 6)
  const sameGroup = coverages.filter(c => groupSlugs.includes(c.id) && c.id !== id)
  if (sameGroup.length >= 2) return sameGroup
  return [...sameGroup, ...coverages.filter(c => c.id !== id && !groupSlugs.includes(c.id)).slice(0, 4 - sameGroup.length)]
})
</script>
