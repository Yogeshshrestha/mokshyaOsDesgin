<template>
  <NuxtLink :to="to" class="btn-quote-pill">
    <span class="btn-quote-pill__label">{{ label }}</span>
    <span v-if="showIcon" class="btn-quote-pill__icon" aria-hidden="true">
      <Icon
        name="mdi:arrow-top-right"
        class="w-[18px] h-[18px] text-white shrink-0"
      />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Target route or hash (NuxtLink handles external URLs) */
    to?: string
    label?: string
    showIcon?: boolean
  }>(),
  {
    to: '#quote',
    label: 'Get a Quote',
    showIcon: true,
  }
)
</script>
