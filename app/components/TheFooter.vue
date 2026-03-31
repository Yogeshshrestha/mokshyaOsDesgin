<template>
  <footer class="bg-cream section-padding pt-16 pb-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
      <div class="flex flex-col gap-4">
        <NuxtLink to="/" class="inline-flex items-center gap-2 w-fit">
          <span class="font-sans text-2xl font-bold tracking-tight text-teal-dark">
            Kavaach
          </span>
        </NuxtLink>
        <p class="text-teal-dark/70 text-sm max-w-xs leading-relaxed">
          Emerging risk placement built for how you actually operate.
        </p>
      </div>

      <div>
        <h3 class="text-xs font-bold text-teal-dark uppercase tracking-widest mb-4">Menu</h3>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/industries" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Industries We Serve</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/coverages" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Risks We Cover</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/how-we-work" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">How we work</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/who-we-serve" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Who we serve</NuxtLink>
          </li>
          <li>
            <a href="mailto:hello@mokshya.io" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-xs font-bold text-teal-dark uppercase tracking-widest mb-4">Social</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Telegram</a></li>
          <li><a href="#" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Twitter</a></li>
          <li><a href="#" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">LinkedIn</a></li>
          <li><a href="#" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Privacy Policy</a></li>
          <li><a href="#" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Terms and Condition</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-teal-dark/10 pt-6 text-center md:text-left">
      <p class="text-teal-dark/60 text-xs">&copy; 2026 Kavaach. All rights reserved.</p>
    </div>
  </footer>
</template>
