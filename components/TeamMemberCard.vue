<template>
  <div class="bg-white rounded-lg shadow p-6 text-center md:text-left md:flex md:items-start md:space-x-6">
    <!-- Placeholder for Image -->
    <div class="w-32 h-32 rounded-full bg-gray-200 mx-auto md:mx-0 mb-4 md:mb-0 flex-shrink-0 flex items-center justify-center text-gray-400">
      {{ imagePlaceholder || '[Photo]' }}
    </div>
    <div>
      <h3 class="text-xl font-bold text-gray-800 mb-1">{{ name }}</h3>
      <p class="text-blue-600 font-medium mb-3">{{ title }}</p>
      <div class="text-gray-600 text-sm space-y-1" v-html="bio"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  title: String,
  bio: String, // Allow HTML for line breaks or lists from mock data
  imagePlaceholder: String // Optional text for placeholder
})
</script> 