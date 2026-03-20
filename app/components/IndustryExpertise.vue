<template>
  <section id="industries" class="section-padding py-20 lg:py-28 bg-cream">
    <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div>
        <h2 class="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-dark mb-6">
          Deep industry expertise
        </h2>
        <p class="text-teal-dark/70 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
          From FDA-regulated labs to aerospace contractors with multi-state operations, these aren't outliers, they're our sweet spot. We understand the nuance behind compliance, liability, and operational complexity, and we match coverage to real-world exposure with speed and precision.
        </p>

        <div class="flex flex-wrap gap-2 mb-8">
          <button
            v-for="industry in industries"
            :key="industry.id"
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            :class="activeTab === industry.id
              ? 'bg-teal-dark text-cream'
              : 'bg-white text-teal-dark hover:bg-teal-dark/10'"
            @click="goToSlide(industry.id)"
          >
            {{ industry.tab }}
          </button>
        </div>

        <div class="flex items-center gap-3">
          <a href="#industries" class="btn-teal">
            View all industries
          </a>
          <a href="#industries" class="btn-icon bg-teal-dark hover:bg-teal text-cream rounded-full">
            <Icon name="mdi:arrow-top-right" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <div class="relative">
        <div ref="carouselContainer" class="overflow-hidden rounded-2xl">
          <div
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          >
            <div
              v-for="industry in industries"
              :key="industry.id"
              class="w-full flex-shrink-0"
            >
              <IndustryCard :industry="industry" />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-6">
          <div class="flex gap-1.5">
            <button
              v-for="(industry, index) in industries"
              :key="industry.id"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="activeIndex === index ? 'bg-teal-dark w-6' : 'bg-teal-dark/30'"
              :aria-label="`Go to slide ${index + 1}`"
              @click="setSlide(index)"
            />
          </div>

          <div class="flex gap-2">
            <button
              class="w-10 h-10 rounded-full border border-teal-dark/30 flex items-center justify-center text-teal-dark hover:bg-teal-dark hover:text-cream transition-colors"
              aria-label="Previous slide"
              @click="prevSlide"
            >
              <Icon name="mdi:arrow-left" class="w-5 h-5" />
            </button>
            <button
              class="w-10 h-10 rounded-full border border-teal-dark/30 flex items-center justify-center text-teal-dark hover:bg-teal-dark hover:text-cream transition-colors"
              aria-label="Next slide"
              @click="nextSlide"
            >
              <Icon name="mdi:arrow-right" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { industries } from '~/data/industries'

const activeIndex = ref(0)
const activeTab = computed(() => industries[activeIndex.value].id)

function goToSlide(id: string) {
  const index = industries.findIndex(i => i.id === id)
  if (index !== -1) activeIndex.value = index
}

function setSlide(index: number) {
  activeIndex.value = index
}

function prevSlide() {
  activeIndex.value = activeIndex.value > 0 ? activeIndex.value - 1 : industries.length - 1
}

function nextSlide() {
  activeIndex.value = activeIndex.value < industries.length - 1 ? activeIndex.value + 1 : 0
}
</script>
