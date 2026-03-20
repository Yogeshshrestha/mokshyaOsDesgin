<template>
  <header class="sticky top-0 z-50 bg-teal/80 backdrop-blur-md border-b border-white/5">
    <nav class="section-padding flex items-center justify-between h-20">
      <NuxtLink to="/" class="shrink-0">
        <img src="/images/logo.png" alt="Mokshya OS" class="h-8 w-auto" />
      </NuxtLink>

      <div class="hidden lg:flex items-center gap-6 ml-auto">
        <!-- Desktop links (right aligned) -->
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="text-white font-semibold text-md hover:text-cream transition-colors"
        >
          {{ link.label }}
        </NuxtLink>

        <!-- Phone + CTA -->
        <a
          href="tel:2125550199"
          class="flex items-center gap-2 text-white text-md font-medium hover:text-cream transition-colors"
        >
          <Icon name="mdi:phone" class="w-4 h-4" />
          (212) 555-0199
        </a>
        <a href="#quote" class="btn-teal text-md py-2.5 px-5">
          Get Quoted
        </a>
      </div>

      <button
        class="lg:hidden flex items-center justify-center w-10 h-10 text-white"
        @click="mobileOpen = !mobileOpen"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
      >
        <Icon :name="mobileOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6" />
      </button>
    </nav>

    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="lg:hidden bg-teal border-t border-white/10 section-padding py-6 space-y-4"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="block text-white font-semibold text-lg py-2 hover:text-cream transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
          <Icon name="mdi:arrow-top-right" class="w-4 h-4 inline ml-1 opacity-50" />
        </NuxtLink>

        <div class="pt-4 border-t border-white/10 space-y-3">
          <a href="tel:2125550199" class="flex items-center gap-2 text-white font-medium">
            <Icon name="mdi:phone" class="w-5 h-5" />
            (212) 555-0199
          </a>
          <a
            href="#quote"
            class="btn-teal text-sm py-2.5 px-5 w-full text-center"
            @click="mobileOpen = false"
          >
            Get a Quote
            <Icon name="mdi:arrow-top-right" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Industries We Serve', to: '/industries' },
  { label: 'Risk We Cover', to: '/coverages' },
]
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>

