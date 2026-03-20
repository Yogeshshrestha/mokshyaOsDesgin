<template>
  <section class="section-padding py-16 lg:py-24 bg-cream">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-dark mb-4">
          Partners you can <br />
          <span class="text-accent">count on</span>
        </h2>
        <p class="text-teal-dark/70 text-base lg:text-lg mb-8 max-w-md">
          Our carrier partners are industry leaders known for their service and specialized expertise.
        </p>
        <div class="flex items-center gap-3">
          <a href="#quote" class="btn-teal">
            Get covered
          </a>
          <a href="#quote" class="btn-icon bg-teal-dark hover:bg-teal text-cream rounded-full">
            <Icon name="mdi:arrow-top-right" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="partner in partners"
            :key="partner.shortName"
            class="bg-white rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
          >
            <span class="font-sans font-bold text-teal-dark/70 text-sm lg:text-base text-center">
              {{ partner.shortName }}
            </span>
          </div>
        </div>
        <p class="text-center text-teal-dark/60 text-sm mt-6">Plus access to hundreds more.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { partners } from '~/data/partners'
</script>
