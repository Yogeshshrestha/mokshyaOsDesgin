<template>
  <article class="flex flex-col h-full w-full max-w-[520px] mx-auto">
    <div
      class="flex flex-col flex-1 bg-white rounded-xl border border-[#BEC9C6]/10 overflow-hidden"
    >
      <!-- Window chrome top bar -->
      <div class="h-2" :style="{ backgroundColor: accentColor[audience.accent] }" />

      <div class="px-6 pt-5 pb-6 lg:px-7 lg:pt-6 lg:pb-7 flex flex-col flex-1 gap-6">
        <!-- Header row: avatar + live badge -->
        <div class="flex items-start justify-between gap-3">
          <div
            class="w-11 h-11 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
            :style="{ backgroundColor: accentColor[audience.accent] }"
          >
            {{ audience.initials }}
          </div>

          <span
            class="inline-flex items-center gap-1.5 rounded-full bg-[#F0FDF4] text-[#004C45] text-[11px] font-semibold tracking-[0.16em] px-3 py-1 uppercase"
          >
            <span class="w-2 h-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
            Live
          </span>
        </div>

        <!-- Title & roles -->
        <div class="mt-4">
          <h3
            class="font-sans text-2xl md:text-[1.7rem] font-bold text-[#004C45] leading-snug"
          >
            {{ audience.title }}
          </h3>
          <p
            class="text-[#6F7977] text-xs font-semibold uppercase tracking-[0.18em] mt-2 leading-snug"
          >
            {{ audience.roles.join(' · ') }}
          </p>
        </div>

        <!-- Quote -->
        <p class="text-[#0E665D] text-base lg:text-lg leading-relaxed italic mt-4">
          “{{ audience.quote }}”
        </p>

        <!-- Body: left rule + bullets -->
        <div class="flex-1">
          <div class="flex gap-4">
            <div class="w-px bg-[#BEC9C6]/30 rounded-full ml-1" />
            <div class="flex-1">
              <p
                class="text-[11px] font-semibold text-[#6F7977] uppercase tracking-[0.32em] mb-3"
              >
                What Kavaach gives you
              </p>
              <ul class="space-y-2.5">
                <li
                  v-for="(line, i) in audience.bullets"
                  :key="i"
                  class="flex gap-2.5 text-sm text-[#1C1C14] leading-snug"
                >
                  <Icon
                    name="mdi:check-circle-outline"
                    class="w-4.5 h-4.5 shrink-0 text-[#0E665D] mt-0.5"
                  />
                  <span>{{ line }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA strip -->
      <NuxtLink
        :to="audience.ctaTo"
        class="block w-full py-4 px-6 text-center text-white text-xs font-bold tracking-[0.12em] hover:brightness-110 transition-all mt-auto"
        :style="{ backgroundColor: accentColor[audience.accent] }"
      >
        {{ audience.ctaLabel }}
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { AudienceAccent, AudienceCard } from '~/data/whoWeServe'

defineProps<{
  audience: AudienceCard
}>()

const accentColor: Record<AudienceAccent, string> = {
  buyer: '#0E665D',
  broker: '#2563EB',
  underwriter: '#7C3AED',
  cro: '#0891B2',
  board: '#C2410C',
  reinsurer: '#1E293B',
}
</script>
