<template>
  <div v-if="coverage">
    <!-- Hero -->
    <section class="section-padding pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="max-w-4xl">
        <NuxtLink
          to="/coverages"
          class="inline-flex items-center gap-1.5 text-cream/60 text-sm font-medium hover:text-cream transition-colors mb-8"
        >
          <Icon name="mdi:arrow-left" class="w-4 h-4" />
          All Coverages
        </NuxtLink>

        <div class="flex items-start gap-5 mb-6">
          <div class="w-14 h-14 bg-teal-light rounded-2xl flex items-center justify-center shrink-0 overflow-hidden">
            <img
              v-if="coverage.image"
              :src="coverage.image"
              :alt="coverage.title"
              class="w-full h-full object-contain"
            />
            <Icon
              v-else
              :name="coverage.icon"
              class="w-7 h-7 text-cream"
            />
          </div>
          <h1 class="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            {{ coverage.title }}
          </h1>
        </div>

        <p class="text-cream/80 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
          {{ coverage.description }}
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

    <!-- Recommended coverage -->
    <section class="bg-cream section-padding py-16 lg:py-24">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-dark mb-3">
          Recommended coverage
        </h2>
        <p class="text-teal-dark/60 text-base lg:text-lg mb-10 max-w-2xl">
          Based on the risks this coverage is built for, these are the outcomes we typically help protect.
        </p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="item in includeItems"
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

    <!-- Why Harper -->
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

    <!-- Related coverages -->
    <section class="bg-cream section-padding py-16 lg:py-20">
      <div class="max-w-5xl mx-auto">
        <h2 class="font-sans text-xl font-bold text-teal-dark mb-6">Explore more coverages</h2>
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
import { coverages } from '~/data/coverages'

const route = useRoute()
const id = route.params.id as string

const coverage = coverages.find(c => c.id === id)

if (!coverage) {
  throw createError({ statusCode: 404, statusMessage: 'Coverage not found' })
}

useHead({
  title: `${coverage.title} - Harper Insurance`,
})

const includeItemsMap: Record<string, string[]> = {
  equipment: [
    'Tool and equipment protection',
    'Damage during service and storage',
    'Coverage for equipment-related liabilities',
  ],
  'errors-and-omissions': [
    'Mistakes and missed advice coverage',
    'Claims linked to professional errors',
    'Protection against negligence-related losses',
  ],
  'general-liability': [
    'Bodily injury and property damage',
    'Claims from everyday business risk',
    'Coverage that helps you respond fast',
  ],
  'liquor-liability': [
    'Alcohol-related incident liability',
    'Claims tied to service and distribution',
    'Premises support where applicable',
  ],
  'medical-malpractice': [
    'Patient care errors and omissions',
    'Professional negligence protection',
    'Claims handling support',
  ],
  'product-liability': [
    'Defective product claims',
    'Distribution and retail liability',
    'Financial protection for product-related losses',
  ],
  'professional-liability': [
    'Professional negligence and errors',
    'Client-facing advice protection',
    'Coverage for financial loss claims',
  ],
  'surety-bonds': [
    'Contract-related bond protection',
    'Licensing and compliance support',
    'Financial guarantee coverage',
  ],
  umbrella: [
    'Extra liability above primary limits',
    'High-exposure incident protection',
    'Additional coverage when it matters most',
  ],
  'workers-compensation': [
    'Employee injury-related coverage',
    'Workplace claim support',
    'Protection for required benefits',
  ],
}

const includeItems = computed(() => {
  return includeItemsMap[id] ?? [
    'Coverage for key business risks',
    'Guidance to find the right limits',
    'Support when claims come up',
  ]
})

const relatedCoverages = computed(() => {
  const others = coverages.filter(c => c.id !== id)
  return others.slice(0, 6)
})
</script>

