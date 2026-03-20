<template>
  <footer class="bg-cream section-padding pt-16 pb-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      <div>
        <h3 class="text-xs font-bold text-teal-dark uppercase tracking-widest mb-4">Company</h3>
        <ul class="space-y-2">
          <li><NuxtLink to="/" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Home</NuxtLink></li>
          <li><a href="#" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">News</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xs font-bold text-teal-dark uppercase tracking-widest mb-4">Blog</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Engineering</a></li>
          <li><a href="#" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Insurance Insights</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xs font-bold text-teal-dark uppercase tracking-widest mb-4">What We Do</h3>
        <ul class="space-y-2">
          <li><NuxtLink to="/industries" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Industries We Serve</NuxtLink></li>
          <li><NuxtLink to="/coverages" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">Risk We Cover</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xs font-bold text-teal-dark uppercase tracking-widest mb-4">Socials</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">LinkedIn</a></li>
          <li><a href="#" class="text-teal-dark/70 hover:text-accent text-sm transition-colors">X</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-teal-dark/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <img src="/images/logo.png" alt="Mokshya OS" class="h-8 w-auto" />
      <p class="text-teal-dark/60 text-xs">&copy; 2026 Mokshya Os. All rights reserved.</p>
      <a href="#" class="text-teal-dark/60 hover:text-accent text-xs transition-colors">Privacy Policy</a>
    </div>
  </footer>
</template>
