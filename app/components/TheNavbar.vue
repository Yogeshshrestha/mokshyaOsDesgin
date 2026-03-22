<template>
  <header class="sticky top-0 z-50 bg-teal/80 backdrop-blur-md border-b border-white/5">
    <nav class="section-padding flex items-center justify-between h-20">
      <NuxtLink to="/" class="shrink-0">
        <img src="/images/logo.png" alt="Mokshya OS" class="h-8 w-auto" />
      </NuxtLink>

      <div class="hidden lg:flex items-center gap-6 ml-auto">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="relative text-white font-semibold text-md hover:text-cream transition-colors py-1"
          :class="{ 'text-cream': isActive(link.to) }"
        >
          {{ link.label }}
          <span
            v-if="isActive(link.to)"
            class="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-accent rounded-full transition-all duration-150"
          />
        </NuxtLink>

        <a
          href="mailto:hello@mokshya.io"
          class="flex items-center gap-2 text-white text-md font-medium hover:text-cream transition-colors"
        >
          <Icon name="mdi:email-outline" class="w-4 h-4" />
          hello@mokshya.io
        </a>
        <NuxtLink to="/coverages#quote" class="btn-teal text-md py-2.5 px-5">
          Get Quoted
        </NuxtLink>
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
          :class="{ 'text-cream': isActive(link.to) }"
          @click="mobileOpen = false"
        >
          {{ link.label }}
          <Icon name="mdi:arrow-top-right" class="w-4 h-4 inline ml-1 opacity-50" />
        </NuxtLink>

        <div class="pt-4 border-t border-white/10 space-y-3">
          <a href="mailto:hello@mokshya.io" class="flex items-center gap-2 text-white font-medium">
            <Icon name="mdi:email-outline" class="w-5 h-5" />
            hello@mokshya.io
          </a>
          <NuxtLink
            to="/coverages#quote"
            class="btn-teal text-sm py-2.5 px-5 w-full text-center"
            @click="mobileOpen = false"
          >
            Get a Quote
            <Icon name="mdi:arrow-top-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Industries We Serve', to: '/industries' },
  { label: 'Risk We Cover', to: '/coverages' },
]

function isActive(to: string): boolean {
  const path = route.path
  if (to === '/') return path === '/'
  return path.startsWith(to)
}
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
