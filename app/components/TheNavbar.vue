<template>
  <header
    class="sticky top-0 z-50 backdrop-blur-[5px] bg-[rgba(14,102,93,0.6)] border-b border-white/5"
  >
    <nav class="section-padding flex items-center justify-between gap-4 py-5 min-h-[72px]">
      <!-- Left: brand only -->
      <NuxtLink
        to="/"
        class="shrink-0 font-semibold text-lg text-on-dark-muted leading-none tracking-tight"
        @click="closeMenus"
      >
      <!-- <img src="/images/logo.png" alt="Mokshya OS" class="h-8 w-auto" /> -->
        Kavaach
      </NuxtLink>

      <!-- Desktop: nav + email + CTA — right-aligned; Get a Quote stays last -->
      <div
        class="hidden lg:flex items-center gap-4 xl:gap-6 min-w-0 flex-1 justify-end flex-wrap xl:flex-nowrap"
      >
        <div class="flex items-center gap-3 xl:gap-[14px] flex-wrap justify-end">
            <NuxtLink
              v-for="link in primaryLinks"
              :key="link.label"
              :to="link.to"
              class="relative font-semibold text-sm text-white whitespace-nowrap hover:text-cream transition-colors py-1"
              :class="{ 'text-cream': isActive(link.to) }"
              @click="closeMenus"
            >
              {{ link.label }}
              <span
                v-if="isActive(link.to)"
                class="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-accent rounded-full"
              />
            </NuxtLink>

            <!-- How We Work / Who We Serve: primary link + chevron dropdown (items swap by page) -->
            <div ref="howWorkRef" class="relative flex items-center">
              <NuxtLink
                :to="workMenuPrimaryTo"
                class="relative font-semibold text-sm text-white whitespace-nowrap hover:text-cream transition-colors py-1 pr-1"
                :class="{ 'text-cream': workMenuPrimaryActive }"
                @click="closeMenus"
              >
                {{ workMenuPrimaryLabel }}
                <span
                  v-if="workMenuPrimaryActive"
                  class="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-accent rounded-full"
                />
              </NuxtLink>
              <button
                type="button"
                class="flex items-center justify-center p-1 text-white hover:text-cream transition-colors rounded-md -mr-1"
                :class="{ 'text-cream': howWorkOpen }"
                :aria-expanded="howWorkOpen"
                aria-haspopup="true"
                aria-label="Open submenu"
                @click.stop="howWorkOpen = !howWorkOpen"
              >
                <Icon
                  name="mdi:chevron-down"
                  class="w-5 h-5 shrink-0 transition-transform duration-200"
                  :class="{ 'rotate-180': howWorkOpen }"
                />
              </button>
              <Transition name="fade-scale">
                <div
                  v-show="howWorkOpen"
                  class="absolute left-0 top-full mt-2 min-w-[220px] rounded-xl bg-teal-dark/95 backdrop-blur-md border border-white/15 py-2 shadow-xl z-50"
                  role="menu"
                >
                  <NuxtLink
                    v-if="!isWhoWeServePage"
                    to="/who-we-serve"
                    class="block px-4 py-2.5 text-sm font-semibold text-cream hover:bg-white/10 hover:text-cream"
                    role="menuitem"
                    @click="closeMenus"
                  >
                    Who we serve
                  </NuxtLink>
                  <NuxtLink
                    v-else
                    to="/how-we-work"
                    class="block px-4 py-2.5 text-sm font-semibold text-cream hover:bg-white/10 hover:text-cream"
                    role="menuitem"
                    @click="closeMenus"
                  >
                    How we work
                  </NuxtLink>
                </div>
              </Transition>
            </div>
        </div>

        <!-- Email (Figma: icon + address, gap 8px) -->
        <div class="flex items-center gap-2 pl-2 xl:pl-4 border-l border-white/10 shrink-0">
          <Icon name="mdi:email-outline" class="w-[18px] h-[18px] text-white shrink-0" />
          <a
            href="mailto:hello@mokshya.io"
            class="font-semibold text-sm text-white whitespace-nowrap hover:text-cream transition-colors"
          >
            hello@mokshya.io
          </a>
        </div>

        <NuxtLink
          to="/coverages#quote"
          class="btn-teal text-sm py-2.5 px-4 min-w-[120px] justify-center shrink-0"
        >
          Get a Quote
        </NuxtLink>
      </div>

      <button
        class="lg:hidden flex items-center justify-center w-10 h-10 text-white shrink-0"
        @click="mobileOpen = !mobileOpen"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
      >
        <Icon :name="mobileOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6" />
      </button>
    </nav>

    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="lg:hidden bg-teal border-t border-white/10 section-padding py-6 space-y-1"
      >
        <NuxtLink
          v-for="link in primaryLinks"
          :key="link.label"
          :to="link.to"
          class="block text-white font-semibold text-base py-3 hover:text-cream transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </NuxtLink>

        <div class="py-2">
          <div class="flex items-center justify-between gap-2 py-3">
            <NuxtLink
              :to="workMenuPrimaryTo"
              class="font-semibold text-base flex-1 min-w-0"
              :class="workMenuPrimaryActive ? 'text-cream' : 'text-white hover:text-cream'"
              @click="closeMobile"
            >
              {{ workMenuPrimaryLabel }}
            </NuxtLink>
            <button
              type="button"
              class="flex items-center justify-center p-1 shrink-0 text-white"
              :aria-expanded="howWorkOpenMobile"
              aria-label="Toggle submenu"
              @click="howWorkOpenMobile = !howWorkOpenMobile"
            >
              <Icon name="mdi:chevron-down" class="w-6 h-6" :class="{ 'rotate-180': howWorkOpenMobile }" />
            </button>
          </div>
          <div v-show="howWorkOpenMobile" class="pl-3 space-y-2 pb-2 border-l border-white/10 ml-1">
            <NuxtLink
              v-if="!isWhoWeServePage"
              to="/who-we-serve"
              class="block text-cream text-sm py-1 font-semibold"
              @click="closeMobile"
            >
              Who we serve
            </NuxtLink>
            <NuxtLink
              v-else
              to="/how-we-work"
              class="block text-cream text-sm py-1 font-semibold"
              @click="closeMobile"
            >
              How we work
            </NuxtLink>
          </div>
        </div>

        <div class="pt-4 border-t border-white/10 space-y-3">
          <a href="mailto:hello@mokshya.io" class="flex items-center gap-2 text-white font-medium">
            <Icon name="mdi:email-outline" class="w-5 h-5" />
            hello@mokshya.io
          </a>
          <NuxtLink
            to="/coverages#quote"
            class="btn-teal text-sm py-2.5 px-5 w-full text-center"
            @click="closeMobile"
          >
            Get a Quote
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)
const howWorkOpen = ref(false)
const howWorkOpenMobile = ref(false)
const howWorkRef = ref<HTMLElement | null>(null)

const primaryLinks = [
  { label: 'Home', to: '/' },
  { label: 'Industries We Serve', to: '/industries' },
  { label: 'Risks We Cover', to: '/coverages' },
]

const isWhoWeServePage = computed(() => route.path === '/who-we-serve')

/** Visible nav label + destination: default How We Work → /how-we-work; on Who we serve page, label swaps to Who We Serve → /who-we-serve */
const workMenuPrimaryLabel = computed(() =>
  isWhoWeServePage.value ? 'Who We Serve' : 'How We Work'
)
const workMenuPrimaryTo = computed(() =>
  isWhoWeServePage.value ? '/who-we-serve' : '/how-we-work'
)
const workMenuPrimaryActive = computed(() =>
  isWhoWeServePage.value || route.path === '/how-we-work'
)

function isActive(to: string): boolean {
  const path = route.path
  if (to === '/') return path === '/'
  return path === to || path.startsWith(`${to}/`)
}

function closeMenus() {
  howWorkOpen.value = false
}

function closeMobile() {
  mobileOpen.value = false
  howWorkOpenMobile.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMenus()
    closeMobile()
  }
)

function onDocClick(e: MouseEvent) {
  const el = howWorkRef.value
  if (!el || !howWorkOpen.value) return
  const target = e.target as Node
  if (!el.contains(target)) howWorkOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
})
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
  max-height: 900px;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
