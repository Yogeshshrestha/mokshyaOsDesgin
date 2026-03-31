<template>
  <section class="bg-teal section-padding py-20 lg:py-28">
    <div class=" ">
      <h2
        class="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12 lg:mb-14"
      >
        {{ comparisonTable.heading }}
      </h2>

      <!-- Desktop table -->
      <div class="hidden md:block overflow-x-auto rounded-2xl border border-white/15 bg-glass/30">
        <table class="w-full text-center border-collapse">
          <thead>
            <tr class="border-b border-white/15">
              <th
                class="p-4 lg:p-5 text-white/80 text-[11px] font-bold uppercase tracking-[0.18em] w-[32%]"
              >
                {{ comparisonTable.columns.traditional }}
              </th>
              <th
                class="p-4 lg:p-5 text-white/70 text-[11px] font-bold uppercase tracking-[0.18em] w-[24%]"
              >
                {{ comparisonTable.columns.dimension }}
              </th>
              <th
                class="p-4 lg:p-5 text-accent text-[11px] font-bold uppercase tracking-[0.18em] w-[32%]"
              >
                {{ comparisonTable.columns.kavaach }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in comparisonTable.rows"
              :key="i"
              class="border-b border-white/10 last:border-0"
              :class="row.highlight ? 'bg-accent/10' : ''"
            >
              <td class="p-4 lg:p-5 text-on-dark text-sm lg:text-base leading-relaxed">
                {{ row.traditional }}
              </td>
              <td
                class="p-4 lg:p-5 font-semibold text-sm lg:text-base"
                :class="row.highlight ? 'text-accent' : 'text-white/80'"
              >
                {{ row.dimension }}
              </td>
              <td
                class="p-4 lg:p-5 text-accent text-sm lg:text-base leading-relaxed"
              >
                {{ row.kavaach }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile cards -->
      <div class="md:hidden space-y-4">
        <article
          v-for="(row, i) in comparisonTable.rows"
          :key="i"
          class="rounded-xl border border-white/15 bg-glass/30 p-5"
          :class="row.highlight ? 'ring-1 ring-accent/40' : ''"
        >
          <p
            class="font-bold text-sm mb-3"
            :class="row.highlight ? 'text-accent' : 'text-white/80'"
          >
            {{ row.dimension }}
          </p>
          <div class="space-y-2 text-sm">
            <p>
              <span class="text-on-dark/70 block text-xs uppercase tracking-wide mb-1">
                {{ comparisonTable.columns.traditional }}
              </span>
              <span class="text-on-dark">{{ row.traditional }}</span>
            </p>
            <p>
              <span class="text-accent/90 block text-xs uppercase tracking-wide mb-1">
                {{ comparisonTable.columns.kavaach }}
              </span>
              <span class="text-white">{{ row.kavaach }}</span>
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { comparisonTable } from '~/data/howWeWork'
</script>
