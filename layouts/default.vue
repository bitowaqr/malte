<template>
  <div class="flex flex-col min-h-screen bg-stone-50 text-stone-800 font-sans transition-colors duration-300">
    <SiteHeader />
    <main class="flex-grow container mx-auto px-6 py-10">
      <slot /> <!-- Page content will be injected here -->
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
// Layout specific logic can go here if needed
</script>

<style scoped>
/* Layout specific styles */
/* You could add custom background gradients or patterns here if desired */
</style> 