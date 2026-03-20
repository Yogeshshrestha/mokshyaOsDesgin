<template>
  <section id="quote" class="relative">
    <svg viewBox="0 0 1440 100" class="w-full block -mb-1" preserveAspectRatio="none">
      <path d="M0 0 L0 40 Q720 100 1440 40 L1440 0 Z" fill="#FAF7E9" />
      <path d="M0 40 Q720 100 1440 40 L1440 100 L0 100 Z" fill="#0E665D" />
    </svg>

    <div class="bg-teal section-padding pb-20">
      <Transition name="fade">
        <div v-if="submitted" class="max-w-2xl mx-auto text-center py-20">
          <div class="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="mdi:check-circle" class="w-10 h-10 text-cream" />
          </div>
          <h2 class="font-sans text-3xl font-bold text-cream mb-4">Application submitted!</h2>
          <p class="text-cream/70 text-lg mb-8">
            Thanks for reaching out. One of our team members will get back to you within 24 hours.
          </p>
          <button class="btn-coral" @click="resetForm">
            Submit another
            <Icon name="mdi:arrow-right" class="w-4 h-4" />
          </button>
        </div>
      </Transition>

      <div v-if="!submitted" class="max-w-3xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="font-sans text-3xl sm:text-4xl font-bold text-cream mb-3">Need insurance?</h2>
          <p class="text-cream/60 text-base">
            If you've been told it's "too tricky" or "too late" we'd like to take a look.
          </p>
        </div>

        <form class="space-y-5" @submit.prevent="submitForm">
          <div>
            <label for="name" class="block text-cream/80 text-sm font-medium mb-1.5">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="form-input"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label for="businessName" class="block text-cream/80 text-sm font-medium mb-1.5">Business name</label>
            <input
              id="businessName"
              v-model="form.businessName"
              type="text"
              required
              class="form-input"
              placeholder="Your business name"
            />
          </div>

          <div>
            <label for="email" class="block text-cream/80 text-sm font-medium mb-1.5">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="form-input"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label for="phone" class="block text-cream/80 text-sm font-medium mb-1.5">Phone number</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              required
              class="form-input"
              placeholder="(555) 000-0000"
            />
          </div>

          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label for="state" class="block text-cream/80 text-sm font-medium mb-1.5">State</label>
              <select id="state" v-model="form.state" required class="form-input appearance-none">
                <option value="" disabled>Select state...</option>
                <option v-for="state in usStates" :key="state" :value="state">{{ state }}</option>
              </select>
            </div>
            <div>
              <label for="revenue" class="block text-cream/80 text-sm font-medium mb-1.5">Annual revenue</label>
              <select id="revenue" v-model="form.revenue" required class="form-input appearance-none">
                <option value="" disabled>Select annual revenue...</option>
                <option v-for="rev in revenueRanges" :key="rev.value" :value="rev.value">{{ rev.label }}</option>
              </select>
            </div>
          </div>

          <div>
            <label for="businessType" class="block text-cream/80 text-sm font-medium mb-1.5">What does your business do?</label>
            <div class="relative">
              <input
                id="businessType"
                v-model="form.businessType"
                type="text"
                required
                class="form-input pr-10"
                placeholder="e.g., I sell used cars, We do residential plumbing..."
              />
              <Icon name="mdi:magnify" class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
            </div>
          </div>

          <div>
            <label class="block text-cream/80 text-sm font-medium mb-1.5">Insurance type</label>
            <button
              type="button"
              class="form-input text-left flex items-center justify-between"
              @click="showInsuranceDropdown = !showInsuranceDropdown"
            >
              <span :class="form.insuranceTypes.length ? 'text-cream' : 'text-cream/40'">
                {{ form.insuranceTypes.length ? `${form.insuranceTypes.length} selected` : 'Select coverage types...' }}
              </span>
              <Icon
                name="mdi:chevron-down"
                class="w-5 h-5 text-cream/40 transition-transform"
                :class="{ 'rotate-180': showInsuranceDropdown }"
              />
            </button>

            <Transition name="dropdown">
              <div v-show="showInsuranceDropdown" class="mt-2 bg-teal-light rounded-xl p-3 space-y-1">
                <label
                  v-for="type in insuranceTypes"
                  :key="type"
                  class="flex items-center gap-3 p-2 rounded-lg hover:bg-teal-dark/30 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    :value="type"
                    v-model="form.insuranceTypes"
                    class="w-4 h-4 rounded border-cream/30 text-accent focus:ring-accent bg-transparent"
                  />
                  <span class="text-cream text-sm">{{ type }}</span>
                </label>
              </div>
            </Transition>
          </div>

          <div class="flex items-start gap-3 pt-2">
            <input
              id="consent"
              v-model="form.consent"
              type="checkbox"
              class="mt-1 w-4 h-4 rounded border-cream/30 text-accent focus:ring-accent bg-transparent"
            />
            <label for="consent" class="text-cream/60 text-xs leading-relaxed">
              By checking this box and providing my mobile number, I consent to receive marketing and service notifications from Mokshya OS. Message frequency varies. Message and data rates may apply. Visit
              <a href="#" class="text-accent hover:underline">https://harperinsure.com</a>
              for help. Text STOP to unsubscribe.
              <a href="#" class="text-accent hover:underline">Privacy Policy</a>
            </label>
          </div>

          <div class="text-center pt-4">
            <button
              type="submit"
              :disabled="!isValid || submitting"
              class="inline-flex items-center gap-2 bg-white/10 text-cream font-semibold px-8 py-3 rounded-full transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/20"
              :class="{ 'btn-coral': isValid && !submitting }"
            >
              <span v-if="submitting">Submitting...</span>
              <span v-else>Continue</span>
              <Icon name="mdi:arrow-top-right" class="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usStates, revenueRanges, insuranceTypes } from '~/data/states'

const { form, isValid, submitted, submitting, submitForm, resetForm } = useFormData()
const showInsuranceDropdown = ref(false)
</script>

<style scoped>
.form-input {
  @apply w-full bg-teal-light/50 border border-cream/20 rounded-xl px-4 py-3 text-cream placeholder-cream/40 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors;
}

select.form-input {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FAF7E9' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.25em 1.25em;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
