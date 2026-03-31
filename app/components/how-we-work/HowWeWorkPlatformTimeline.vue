<template>
  <section class="bg-teal section-padding py-20 lg:py-28">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-14 lg:mb-20">
        <p class="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
          {{ platformTimeline.eyebrow }}
        </p>
        <h2 class="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          {{ platformTimeline.heading }}
        </h2>
      </div>

      <div class="relative">
        <div
          class="hidden md:block absolute left-1/2 top-3 bottom-3 w-0.5 -translate-x-1/2 bg-accent/35 rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <ol class="space-y-12 md:space-y-16">
          <li
            v-for="step in platformTimeline.steps"
            :key="step.n"
            class="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4 lg:gap-8 md:items-center md:min-h-[120px]"
          >
            <!-- Col 1: timing (steps 1,3,5) or copy (steps 2,4) -->
            <div
              class="hidden md:flex flex-col"
              :class="step.contentSide === 'right' ? 'items-end text-right md:pr-1 lg:pr-2' : 'items-start text-left md:pl-1 lg:pl-2'"
            >
              <span
                v-if="step.contentSide === 'right' && step.timingSide === 'left' && step.timing"
                class="inline-flex px-4 py-2 rounded-full bg-white text-teal text-sm font-semibold border border-white/10"
              >
                {{ step.timing }}
              </span>
              <HowWeWorkTimelineStepCopy
                v-else-if="step.contentSide === 'left'"
                :step="step"
                class="max-w-sm ml-auto text-end"
              />
            </div>

            <div class="flex md:flex-col items-center gap-4 md:gap-0 md:justify-center md:relative md:z-10">
              <span
                class="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-[#09423C] bg-teal text-white font-bold text-lg shrink-0 shadow-lg"
              >
                {{ step.n }}
              </span>
              <div class="flex-1 md:hidden text-left">
                <span
                  v-if="step.timing"
                  class="inline-flex px-3 py-1.5 rounded-full bg-white text-teal text-xs font-semibold border border-white/10 mb-3"
                >
                  {{ step.timing }}
                </span>
                <HowWeWorkTimelineStepCopy :step="step" />
              </div>
            </div>

            <!-- Col 3: copy (steps 1,3,5) or timing (steps 2,4) -->
            <div
              class="hidden md:flex flex-col"
              :class="step.contentSide === 'left' ? 'items-end text-right md:pr-1 lg:pr-2' : 'items-start text-left md:pl-1 lg:pl-2'"
            >
              <span
                v-if="step.contentSide === 'left' && step.timingSide === 'right' && step.timing"
                class="inline-flex px-4 py-2 rounded-full bg-white text-teal text-sm font-semibold border border-white/10 w-fit mr-auto"
              >
                {{ step.timing }}
              </span>
              <HowWeWorkTimelineStepCopy
                v-else-if="step.contentSide === 'right'"
                :step="step"
                class="max-w-sm md:mr-[-0.5rem] lg:mr-[-0.75rem]"
              />
            </div>
          </li>
        </ol>
      </div>

      <div
        class="mt-16 lg:mt-20 max-w-3xl mx-auto rounded-2xl border border-accent/40 bg-glass/50 backdrop-blur-sm p-8 lg:p-10 text-center"
      >
        <p class="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
          {{ platformTimeline.promise.eyebrow }}
        </p>
        <p class="text-on-glass text-lg lg:text-xl leading-relaxed mb-4">
          {{ platformTimeline.promise.statLine.before }}<span class="text-red-500 font-bold text-2xl lg:text-3xl">{{ platformTimeline.promise.statLine.stat }}</span>{{ platformTimeline.promise.statLine.after }}
        </p>
        <p class="text-on-dark/90 text-sm lg:text-base leading-[1.625] max-w-2xl mx-auto">
          {{ platformTimeline.promise.bodyLines[0] }}<br />
          {{ platformTimeline.promise.bodyLines[1] }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { platformTimeline } from '~/data/howWeWork'
</script>
