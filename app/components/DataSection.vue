<template>
  <section class="relative overflow-hidden bg-cream">
    <!-- Curved top transition from cream to teal-light -->
    <div class="relative">
      <svg viewBox="0 0 1440 120" class="w-full block" preserveAspectRatio="none">
        <path d="M0 100 Q720 0 1440 100 L1440 120 L0 120 Z" fill="#177F75" />
      </svg>
    </div>

    <div class="bg-teal-light section-padding pb-20">
      <div class="max-w-4xl mx-auto mb-12 -mt-4">
        <h2 class="font-sans text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mt-4 mb-4">
          Built on data. Backed by <span class="text-cream">outcomes.</span>
        </h2>
        <p class="text-cream/80 text-base lg:text-lg max-w-2xl">
          Our model wasn't built to sound impressive. It was built to perform. And it does, across every metric that matters.
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="bg-cream rounded-3xl p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-start">
          <div class="hidden lg:flex items-center justify-center">
            <img
              src="/images/buildonimg.svg"
              alt="Mokshya OS"
              class="w-full max-w-sm h-auto"
            />
          </div>

          <div>
            <div
              v-for="(panel, index) in panels"
              :key="panel.id"
            class="relative border-b border-teal-dark/10 last:border-b-0"
            >
              <button
                class="w-full text-left py-5 flex items-center justify-between group"
                @click="setActivePanel(index)"
              >
                <h3 class="font-sans text-xl lg:text-2xl font-bold text-teal-dark group-hover:text-accent transition-colors">
                  {{ panel.title }}
                </h3>
                <Icon
                  name="mdi:chevron-down"
                  class="w-6 h-6 text-teal-dark/50 transition-transform duration-300"
                  :class="{ 'rotate-180': activePanel === index }"
                />
              </button>

            <!-- Border-bottom "loading" progress (animates only for active panel) -->
            <div
              v-if="activePanel === index"
              :key="borderLoaderKey"
              class="absolute left-0 bottom-0 h-px w-full bg-accent origin-left scale-x-0 border-load"
              :style="{ animationDuration: `${LOAD_MS}ms` }"
            />

              <Transition name="accordion">
                <div v-show="activePanel === index" class="overflow-hidden">
                  <div class="pb-6 space-y-4">
                  <div v-for="stat in panel.stats" :key="stat.label">
                    <p class="font-sans text-3xl lg:text-4xl font-bold text-accent">{{ stat.value }}</p>
                    <p class="text-teal-dark font-medium text-sm">{{ stat.label }}</p>
                    <p class="text-teal-dark/60 text-sm mt-1">{{ stat.description }}</p>
                  </div>
                  <p v-if="panel.text" class="text-teal-dark/70 text-sm leading-relaxed">{{ panel.text }}</p>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-10">
        <div class="flex items-center justify-center gap-3">
          <a href="#quote" class="inline-flex items-center gap-2 bg-cream text-teal-dark font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-white hover:shadow-lg">
            Unlock these benefits
          </a>
          <a href="#quote" class="btn-icon bg-cream hover:bg-white text-teal-dark rounded-full">
            <Icon name="mdi:arrow-top-right" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    <div class="h-24 bg-gradient-to-b from-teal-light via-teal/50 to-cream" />
  </section>
</template>

<script setup lang="ts">
const activePanel = ref(0)

const LOAD_MS = 6000

let rotateTimeout: ReturnType<typeof setTimeout> | null = null
const borderLoaderKey = ref(0)

function clearRotateTimeout() {
  if (rotateTimeout) clearTimeout(rotateTimeout)
  rotateTimeout = null
}

function startAutoRotate() {
  clearRotateTimeout()
  borderLoaderKey.value += 1
  rotateTimeout = setTimeout(() => {
    activePanel.value = (activePanel.value + 1) % panels.length
    startAutoRotate()
  }, LOAD_MS)
}

function setActivePanel(index: number) {
  activePanel.value = index
  startAutoRotate()
}

const panels = [
  {
    id: 'smarter',
    title: "We're smarter",
    stats: [
      {
        value: '1M+',
        label: 'datapoints',
        description: 'on quote intelligence to help match you with the right carrier at the best price.',
      },
      {
        value: '100k+',
        label: 'prior customer interactions',
        description: 'analyzed in real-time to find the best market fit',
      },
    ],
    text: '',
  },
  {
    id: 'faster',
    title: "We're faster",
    stats: [],
    text: 'Automated workflows, instant carrier matching, and real-time decisioning cut weeks from the traditional timeline.',
  },
  {
    id: 'cheaper',
    title: "We're cheaper",
    stats: [],
    text: 'Lower overhead and smarter underwriting means better rates without sacrificing coverage quality.',
  },
]

onMounted(() => {
  startAutoRotate()
})

onBeforeUnmount(() => {
  clearRotateTimeout()
})
</script>

<style scoped>
.border-load {
  animation-name: border-load;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes border-load {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  max-height: 300px;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
