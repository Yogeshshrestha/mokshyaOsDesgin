<template>
  <div class="min-h-screen flex flex-col bg-teal">
    <AnnouncementBar />
    <TheNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
