<template>
  <div class="bg-teal-dark rounded-2xl overflow-hidden text-cream min-h-[320px] flex flex-col group hover:bg-teal transition-colors duration-300">
    <div v-if="industry.image" class="w-full h-48 bg-teal-dark/50 flex items-center justify-center p-4 overflow-hidden">
      <img
        :src="industry.image"
        :alt="industry.title"
        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div v-else class="w-full h-48 bg-teal-dark/50 flex items-center justify-center">
      <Icon :name="industry.icon" class="w-16 h-16 text-cream/60" />
    </div>
    <div class="p-6 lg:p-8 flex-1">
      <h3 class="font-sans text-xl font-bold text-cream mb-3">{{ industry.title }}</h3>
      <p class="text-cream/70 text-sm leading-relaxed">{{ industry.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Industry } from '~/data/industries'

defineProps<{
  industry: Industry
}>()
</script>
