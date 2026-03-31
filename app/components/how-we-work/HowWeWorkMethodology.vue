<template>
  <section class="bg-cream section-padding py-20 lg:py-28">
    <div class=" ">
      <div class="text-left  mb-14 lg:mb-16">
        <p class="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
          {{ methodologyIntro.eyebrow }}
        </p>
        <h2 class="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-dark mb-6">
          {{ methodologyIntro.heading }}
        </h2>
        <p class="text-teal-dark/80 text-lg leading-[1.625]">
          {{ methodologyIntro.bodyLines[0] }}<br class="hidden sm:block" />
          {{ methodologyIntro.bodyLines[1] }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
        <article
          v-for="col in methodologyColumns"
          :key="col.id"
          class="rounded-2xl p-6 lg:p-8 flex flex-col gap-5 shadow-sm"
          :class="
            col.variant === 'gap'
              ? 'bg-[#FEF2F2] border-0'
              : 'bg-white/90 backdrop-blur-sm border border-teal-dark/10'
          "
        >
          <div
            class="h-1 rounded-full -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-1"
            :class="{
              'bg-teal': col.variant === 'security',
              'bg-accent': col.variant === 'risk',
              'bg-red-500': col.variant === 'gap',
            }"
          />
          <p class="text-xs font-bold tracking-wider text-teal-dark/60 uppercase">
            {{ col.lensLabel }}
          </p>
          <h3 class="font-sans text-xl lg:text-2xl font-bold text-teal-dark">
            {{ col.title }}
          </h3>
          <ul class="space-y-4 flex-1">
            <li
              v-for="(item, i) in col.items"
              :key="i"
              class="flex gap-3 text-left"
            >
              <span
                class="shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center"
                :class="
                  item.type === 'check'
                    ? 'bg-teal/10 text-teal'
                    : 'bg-red-500/15 text-red-500'
                "
              >
                <Icon
                  :name="item.type === 'check' ? 'mdi:check' : 'mdi:alert-outline'"
                  class="w-4 h-4"
                />
              </span>
              <div>
                <p
                  class="font-semibold text-sm lg:text-base leading-snug"
                  :class="item.type === 'check' ? 'text-teal-dark' : 'text-red-500'"
                >
                  {{ item.title }}
                </p>
                <p
                  v-if="item.subtitle"
                  class="text-teal-dark/70 text-sm mt-1 leading-relaxed"
                >
                  {{ item.subtitle }}
                </p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { methodologyColumns, methodologyIntro } from '~/data/howWeWork'
</script>
