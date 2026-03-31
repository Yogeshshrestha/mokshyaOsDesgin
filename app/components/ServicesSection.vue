<template>
  <section id="services" class="section-padding py-20 lg:py-28 bg-cream">
    <div class="text-center max-w-3xl mx-auto mb-14">
      <h2 class="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-dark mb-6">
        What we <span class="text-accent italic">offer</span>
      </h2>
      <p class="text-teal-dark/70 text-base lg:text-lg font-medium leading-relaxed">
      We lead with human expertise — AI just amplifies our abilities. By using tech to surface the right markets quickly, our team delivers smarter matches and faster turnaround.
      </p>
      <p class="text-teal-dark/80 font-medium mt-4">We can help you with:</p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <ServiceCard v-for="service in services" :key="service.id" :service="service" />
    </div>

    <div class="text-center mt-12">
      <GetQuoteButton to="#quote" label="Get a Quote" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '~/data/services'
</script>
