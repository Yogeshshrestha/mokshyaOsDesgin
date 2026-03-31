<template>
  <div class="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 group">
    <div class="w-full aspect-[4/3]   rounded-xl flex items-center justify-center mb-5 overflow-hidden p-4">
      <img
        :src="service.image"
        :alt="service.title"
        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h3 class="font-sans text-lg font-bold text-teal-dark mb-2">{{ service.title }}</h3>
    <p class="text-sm font-bold text-teal-dark leading-relaxed">
      {{ service.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Service } from '~/data/services'

defineProps<{
  service: Service
}>()
</script>
