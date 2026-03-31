<template>
  <section
    class="relative overflow-hidden bg-teal section-padding py-24 lg:py-32"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-40"
      aria-hidden="true"
      style="
        background:
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(96, 186, 177, 0.35) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 80% 100%, rgba(96, 186, 177, 0.2) 0%, transparent 50%);
      "
    />
    <div class="relative max-w-3xl mx-auto text-center flex flex-col gap-6 lg:gap-8">
      <h2 class="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {{ finalCta.heading }}
      </h2>
      <p class="text-on-dark text-lg leading-[1.625] max-w-2xl mx-auto">
        {{ finalCta.bodyLines[0] }}<br class="hidden sm:block" />
        {{ finalCta.bodyLines[1] }}
      </p>
      <div class="pt-2">
        <GetQuoteButton
          :to="finalCta.buttonTo"
          :label="finalCta.buttonLabel"
          :show-icon="false"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { finalCta } from '~/data/howWeWork'
</script>
