<template>
  <div>
    <p class="text-accent font-bold tracking-[0.15em] text-sm mb-2">
      {{ step.label }}
    </p>
    <p class="text-white/90 leading-[1.625] text-sm lg:text-base">
      <template v-for="(line, li) in step.bodyLines" :key="li">
        {{ line }}<br v-if="li < step.bodyLines.length - 1" />
      </template>
    </p>
    <span
      class="inline-block mt-3 px-3 py-1 rounded-md bg-white/10 text-accent text-xs font-bold tracking-wider"
    >
      {{ step.chip }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { TimelineStep } from '~/data/howWeWork'

defineProps<{
  step: TimelineStep
}>()
</script>
