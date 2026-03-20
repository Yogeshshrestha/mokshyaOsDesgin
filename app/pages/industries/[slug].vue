<template>
  <div v-if="industry">
    <!-- Hero -->
    <section class="section-padding pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="max-w-4xl">
        <NuxtLink
          to="/industries"
          class="inline-flex items-center gap-1.5 text-cream/60 text-sm font-medium hover:text-cream transition-colors mb-8"
        >
          <Icon name="mdi:arrow-left" class="w-4 h-4" />
          All Industries
        </NuxtLink>

        <div class="flex items-start gap-5 mb-6">
          <div class="w-14 h-14 bg-teal-light rounded-2xl flex items-center justify-center shrink-0">
            <Icon :name="industry.icon" class="w-7 h-7 text-cream" />
          </div>
          <h1 class="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            {{ industry.name }}
          </h1>
        </div>

        <p class="text-cream/80 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
          {{ industry.description }}
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
    </section>

    <!-- Coverage Types -->
    <section class="bg-cream section-padding py-16 lg:py-24">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-dark mb-3">
          Recommended coverage
        </h2>
        <p class="text-teal-dark/60 text-base lg:text-lg mb-10 max-w-2xl">
          Based on the risks common to {{ industry.name.toLowerCase() }} businesses, here are the coverages we typically recommend.
        </p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="cov in industry.coverages"
            :key="cov"
            class="bg-white rounded-2xl p-6 border border-teal-dark/5 hover:shadow-lg hover:border-accent/20 transition-all duration-300 group"
          >
            <div class="w-10 h-10 bg-teal-dark/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
              <Icon :name="getCoverageIcon(cov)" class="w-5 h-5 text-teal-dark group-hover:text-accent transition-colors" />
            </div>
            <h3 class="font-sans text-base font-bold text-teal-dark mb-1">{{ cov }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Harper -->
    <section class="bg-teal-light section-padding py-16 lg:py-24">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10">
          Why Mokshya OS for {{ industry.name }}?
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div class="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
              <Icon name="mdi:lightning-bolt" class="w-5 h-5 text-cream" />
            </div>
            <h3 class="font-sans text-lg font-bold text-white mb-2">Faster quotes</h3>
            <p class="text-cream/70 text-sm leading-relaxed">Our tech-driven approach matches you with the right carriers in minutes, not weeks.</p>
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
            <p class="text-cream/70 text-sm leading-relaxed">Access to 100+ carriers means competitive pricing without sacrificing coverage quality.</p>
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
            <span class="text-base lg:text-lg font-medium leading-none">{{ related.name }}</span>
            <Icon
              name="mdi:arrow-top-right"
              class="w-5 h-5 text-teal-dark/50 group-hover:text-accent transition-colors shrink-0 ml-5"
            />
          </NuxtLink>
        </div>
        <div class="mt-8">
          <NuxtLink to="/industries" class="inline-flex items-center gap-2 text-teal-dark font-semibold text-sm hover:text-accent transition-colors">
            <Icon name="mdi:arrow-left" class="w-4 h-4" />
            View all industries
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
  title: `${industry?.name ?? 'Industry'} Insurance - Harper Insurance`,
})

const coverageIconMap: Record<string, string> = {
  'General Liability': 'mdi:shield-check',
  'Professional Liability': 'mdi:briefcase-check',
  'Workers Compensation': 'mdi:hard-hat',
  'Property Insurance': 'mdi:office-building',
  'Commercial Auto': 'mdi:truck',
  'Cyber Liability': 'mdi:shield-lock',
  'Product Liability': 'mdi:package-variant-closed',
  'Umbrella': 'mdi:umbrella',
  'Surety Bonds': 'mdi:handshake',
  'Equipment': 'mdi:wrench',
  'Liquor Liability': 'mdi:glass-cocktail',
}

function getCoverageIcon(name: string): string {
  return coverageIconMap[name] ?? 'mdi:shield-outline'
}

const relatedIndustries = computed(() => {
  const currentIdx = allIndustries.findIndex(i => i.slug === slug)
  const result = []
  for (let i = 1; i <= 9; i++) {
    const idx = (currentIdx + i) % allIndustries.length
    result.push(allIndustries[idx])
  }
  return result
})
</script>
