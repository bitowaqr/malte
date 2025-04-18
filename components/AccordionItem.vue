<template>
  <div class="border-b border-gray-200">
    <h2>
      <button 
        type="button" 
        @click="toggleAccordion" 
        :aria-expanded="isOpen"
        :aria-controls="`accordion-content-${id}`"
        class="flex items-center justify-between w-full py-5 px-2 text-left font-semibold text-xl text-gray-700 hover:bg-gray-50"
      >
        <span>{{ title }}</span>
        <!-- Chevron Icon -->
        <svg class="w-5 h-5 transform transition-transform duration-300" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </h2>
    <div 
      v-show="isOpen" 
      :id="`accordion-content-${id}`"
      class="pb-5 px-2 text-gray-600 leading-relaxed"
    >
      <!-- Optional Icon -->
      <!-- <img v-if="iconSrc" :src="iconSrc" :alt="title" class="float-left mr-4 w-16 h-16"> -->
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';

const props = defineProps({
  title: String,
  content: String, // Allow HTML content
  // iconSrc: String, // Optional icon source
  startOpen: { // Prop to control if it should start open
    type: Boolean,
    default: false
  }
});

const isOpen = ref(props.startOpen);
const id = ref('');

function toggleAccordion() {
  isOpen.value = !isOpen.value;
}

// Generate a unique ID for ARIA controls on client-side
onMounted(() => {
  // Basic unique ID generation - consider a more robust method if needed
  id.value = Math.random().toString(36).substring(2, 9);
});

</script> 