<template>
  <section class="bg-cream section-padding py-20 lg:py-28">
    <div class="max-w-6xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <h2 class="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-dark mb-4">
          {{ platformOutputs.heading }}
        </h2>
        <p class="text-teal-dark/75 text-lg leading-[1.625]">
          {{ platformOutputs.subtitle }}
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <article
          v-for="card in platformOutputs.cards"
          :key="card.id"
          class="rounded-2xl bg-white border border-teal-dark/10 p-6 lg:p-7 flex flex-col shadow-sm overflow-hidden"
        >
          <div
            class="h-1 -mx-6 lg:-mx-7 -mt-6 lg:-mt-7 mb-5"
            :class="card.variant === 'red' ? 'bg-red-500' : 'bg-teal'"
          />
          <span
            class="inline-flex self-start px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-3"
            :class="
              card.variant === 'red'
                ? 'bg-red-500/10 text-red-500'
                : 'bg-teal/10 text-teal-dark'
            "
          >
            {{ card.audience }}
          </span>
          <h3 class="font-sans text-xl font-bold text-teal-dark mb-3">
            {{ card.title }}
          </h3>
          <p class="text-teal-dark/75 text-sm leading-[1.625] flex-1 mb-6">
            <template v-for="(line, i) in card.descriptionLines" :key="i">
              {{ line }}<br v-if="i < card.descriptionLines.length - 1" />
            </template>
          </p>
          <a
            href="#"
            class="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all mt-auto"
            :class="card.variant === 'red' ? 'text-red-500' : 'text-accent'"
          >
            VIEW SAMPLE
            <Icon name="mdi:arrow-top-right" class="w-4 h-4" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { platformOutputs } from '~/data/howWeWork'
</script>
