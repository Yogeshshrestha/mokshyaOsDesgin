<template>
  <section class="bg-cream section-padding py-20 lg:py-28">
    <div class="max-w-6xl mx-auto">
      <div class="text-left  mb-12 lg:mb-16">
        <h2 class="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-dark mb-6">
          {{ signalIntelligence.heading }}
        </h2>
        <p class="text-teal-dark/80 text-lg leading-[1.625]">
          {{ signalIntelligence.introLines[0] }}<br class="hidden sm:block" />
          {{ signalIntelligence.introLines[1] }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
        <article
          v-for="card in signalCards"
          :key="card.id"
          class="rounded-2xl border border-[#F1F1F1] bg-white p-6 lg:p-7 shadow-sm flex flex-col gap-5"
        >
          <div class="flex items-start justify-between gap-2 pb-3 border-b border-[#F3F3F3]">
            <div>
              <h3 class="font-sans text-xl font-bold text-teal-dark">{{ card.title }}</h3>
              <p class="text-[#9CA3AF] text-xs font-semibold tracking-[0.16em] mt-1 uppercase">
                {{ card.provider }}
              </p>
            </div>
            <span
              class="shrink-0 px-3 py-1 rounded-lg bg-red-500/10 text-red-500 text-xs font-semibold tracking-wide"
            >
              {{ card.badge }}
            </span>
          </div>
          <div class="space-y-3 mt-auto">
            <div
              v-for="row in card.rows"
              :key="row.label"
              class="flex items-center justify-between gap-4 rounded-full px-4 py-3"
              :class="
                row.label === 'Claimed'
                  ? 'bg-emerald-50'
                  : 'bg-red-50'
              "
            >
              <span
                class="text-sm font-semibold"
                :class="row.label === 'Claimed' ? 'text-emerald-700' : 'text-red-500'"
              >
                {{ row.label }}
              </span>
              <span class="inline-flex items-center gap-2 text-sm font-semibold">
                <span :class="row.label === 'Claimed' ? 'text-emerald-700' : 'text-red-500'">
                  {{ row.value }}
                </span>
                <Icon
                  :name="row.label === 'Claimed' ? 'mdi:check-circle-outline' : 'mdi:alert-outline'"
                  class="w-4 h-4"
                  :class="row.label === 'Claimed' ? 'text-emerald-500' : 'text-red-500'"
                />
              </span>
            </div>
          </div>
        </article>
      </div>

      <div class="space-y-4">
        <div
          v-for="strip in signalStrips"
          :key="strip.title"
          class="rounded-xl bg-white border-l-4 border-l-teal px-5 py-4 lg:px-8 lg:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div class="min-w-0 flex-1">
            <p class="font-sans font-bold text-teal-dark text-base lg:text-lg">
              {{ strip.title }}
            </p>
            <p class="text-teal-dark/55 text-sm mt-0.5">{{ strip.subtitle }}</p>
          </div>
          <div class="flex items-center gap-5 lg:gap-8 shrink-0">
            <div class="flex flex-col leading-none">
              <span class="text-[10px] uppercase tracking-[0.16em] text-teal-dark/45 font-semibold">
                Impact
              </span>
              <span class="text-accent font-bold text-sm mt-1 whitespace-nowrap">{{ strip.impact }}</span>
            </div>
            <div
              class="inline-flex items-center gap-3 text-sm font-semibold rounded-full bg-[#F2EFE0] px-4 py-2"
            >
              <span class="text-teal-dark/70">{{ strip.fromValue }}</span>
              <Icon name="mdi:arrow-right" class="w-4 h-4 text-teal-dark/55" />
              <span class="text-teal-dark font-bold">{{ strip.toValue }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VerificationRow } from '~/data/howWeWork'
import { signalCards, signalIntelligence, signalStrips } from '~/data/howWeWork'

function toneClass(tone: VerificationRow['tone']) {
  if (tone === 'green') return 'text-teal'
  if (tone === 'red') return 'text-red-500'
  return 'text-orange-500'
}
</script>
