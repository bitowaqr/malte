<template>
  <NuxtLink :to="link" class="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
    <div class="flex items-center mb-4">
      <!-- Placeholder for Icon -->
      <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
        <span class="text-xl text-blue-600">{{ iconPlaceholder }}</span>
      </div>
      <h3 class="text-xl font-semibold text-gray-800">{{ title }}</h3>
    </div>
    <p class="text-gray-600">{{ text }}</p>
    <span class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">Mehr erfahren &rarr;</span>
  </NuxtLink>
</template>

<script setup>
  defineProps({
    title: String,
    text: String,
    link: String,
    iconPlaceholder: { // Simple placeholder for icon until real icons are integrated
      type: String,
      default: 'i'
    }
  })
</script> 