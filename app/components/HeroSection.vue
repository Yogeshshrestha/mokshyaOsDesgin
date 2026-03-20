<template>
  <section class="section-padding py-16 lg:py-24">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <h1 class="font-sans text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.1] mb-6">
          Meet <span class="highlight-text">business</span>
          <span class="highlight-text"> insurance</span> that's<br />
          <span class="whitespace-nowrap inline-flex items-baseline gap-2">
            <span
              :class="activeHeroWordIndex === 0 ? 'text-accent' : 'text-cream/60'"
              class="transition-colors duration-500"
            >
              Smarter.
            </span>
            <span
              :class="activeHeroWordIndex === 1 ? 'text-accent' : 'text-cream/60'"
              class="transition-colors duration-500"
            >
              Faster.
            </span>
          </span>
          <br />
          <span
            :class="activeHeroWordIndex === 2 ? 'text-accent' : 'text-cream/60'"
            class="transition-colors duration-500"
          >
            Cheaper.
          </span>
        </h1>
      </div>

      <div class="space-y-8">
        <p class="text-cream/80 text-lg lg:text-xl leading-relaxed max-w-lg">
          From trucking to tech, construction to consulting, we use data and deep market access to find you the right coverage at the right price.
        </p>
        <div class="flex items-center gap-3">
          <a href="#quote" class="btn-coral text-base">
            Get a quote now
          </a>
          <a href="#quote" class="btn-icon bg-teal-dark text-cream rounded-full hover:bg-teal-dark/80">
            <Icon name="mdi:arrow-top-right" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    <div class="mt-12 lg:mt-16 overflow-hidden">
      <img
        src="/images/landingimg.svg"
        alt="Harper Insurance Graphic"
        class="w-full h-auto"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const heroWords = ['Smarter.', 'Faster.', 'Cheaper.']
const activeHeroWordIndex = ref(0)

let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  intervalId = setInterval(() => {
    activeHeroWordIndex.value = (activeHeroWordIndex.value + 1) % heroWords.length
  }, 6000)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

