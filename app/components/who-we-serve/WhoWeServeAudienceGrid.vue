<template>
  <section class="bg-cream section-padding py-16 lg:py-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <WhoWeServeAudienceCard
          v-for="audience in whoWeServeAudiences"
          :key="audience.id"
          :audience="audience"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { whoWeServeAudiences } from '~/data/whoWeServe'
</script>
