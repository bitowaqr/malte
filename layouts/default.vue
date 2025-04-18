<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <SiteHeader />
    <main class="flex-grow container mx-auto px-4 py-8">
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
</style> 