<template>
  <section class="bg-teal section-padding pt-28 pb-20 lg:pt-36 lg:pb-28">
    <div class="max-w-4xl mx-auto text-center flex flex-col gap-6 lg:gap-7">
      <p class="text-accent text-sm font-bold tracking-[0.2em] uppercase">
        {{ howWeWorkHero.eyebrow }}
      </p>
      <h1
        class="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold text-white leading-[1.12] sm:leading-[1.15]"
      >
        <span class="block">{{ howWeWorkHero.titleLines[0] }}</span>
        <span class="block">{{ howWeWorkHero.titleLines[1] }}</span>
      </h1>
      <div class="text-white/90 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed pt-1">
        <p class="mb-0">{{ howWeWorkHero.quoteLines[0] }}</p>
        <p>{{ howWeWorkHero.quoteLines[1] }}</p>
      </div>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <NuxtLink
          :to="howWeWorkHero.primaryCta.to"
          class="btn-quote-pill w-full sm:w-auto justify-center"
        >
          <span class="btn-quote-pill__label">{{ howWeWorkHero.primaryCta.label }}</span>
          <span class="btn-quote-pill__icon" aria-hidden="true">
            <Icon name="mdi:arrow-top-right" class="w-[18px] h-[18px] text-white shrink-0" />
          </span>
        </NuxtLink>
        <NuxtLink
          :to="howWeWorkHero.secondaryCta.to"
          class="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 text-white font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
        >
          {{ howWeWorkHero.secondaryCta.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { howWeWorkHero } from '~/data/howWeWork'
</script>
