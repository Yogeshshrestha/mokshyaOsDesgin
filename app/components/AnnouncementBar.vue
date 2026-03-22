<template>
  <div v-if="!dismissed" class="bg-teal-light/90 text-cream py-2.5 px-4 relative z-50">
    <div class="flex items-center justify-center gap-3 text-sm">
      <p class="text-cream/90 font-medium">
        Mokshya OS has raised $12M
        <span class="hidden sm:inline">to build the operating system for emerging risk insurance.</span>
      </p>
      <a
        href="#"
        class="inline-flex items-center gap-1 border border-cream/30 rounded-full px-3 py-1 text-xs font-medium text-cream hover:bg-cream/10 transition-colors"
      >
        Read more
        <Icon name="mdi:arrow-right" class="w-3.5 h-3.5" />
      </a>
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream transition-colors"
        aria-label="Dismiss announcement"
        @click="dismissed = true"
      >
        <Icon name="mdi:close" class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const dismissed = ref(false)
</script>
