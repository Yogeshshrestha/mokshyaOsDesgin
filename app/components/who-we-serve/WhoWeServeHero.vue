<template>
  <section class="bg-teal section-padding pt-28 pb-16 lg:pt-36 lg:pb-24">
    <div class="max-w-4xl mx-auto text-center flex flex-col gap-6 lg:gap-7">
      <p class="text-accent text-sm font-bold tracking-[0.2em] uppercase">
        {{ whoWeServeHero.eyebrow }}
      </p>
      <h1
        class="font-sans text-3xl sm:text-[2.15rem] md:text-[2.6rem] lg:text-[2.9rem] xl:text-[3.3rem] font-bold text-white leading-[1.12] sm:leading-[1.15]"
      >
        <span class="block">{{ whoWeServeHero.titleLines[0] }}</span>
        <span class="block">{{ whoWeServeHero.titleLines[1] }}</span>
      </h1>
      <p
        class="text-white/85 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed italic px-1"
      >
        {{ whoWeServeHero.bodyItalic }}
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <NuxtLink
          :to="whoWeServeHero.primaryCta.to"
          class="btn-quote-pill w-full sm:w-auto justify-center"
        >
          <span class="btn-quote-pill__label">{{ whoWeServeHero.primaryCta.label }}</span>
          <span class="btn-quote-pill__icon" aria-hidden="true">
            <Icon name="mdi:arrow-top-right" class="w-[18px] h-[18px] text-white shrink-0" />
          </span>
        </NuxtLink>
        <NuxtLink
          :to="whoWeServeHero.secondaryCta.to"
          class="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 text-white font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
        >
          {{ whoWeServeHero.secondaryCta.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { whoWeServeHero } from '~/data/whoWeServe'
</script>
