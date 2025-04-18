<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo and Practice Name -->
      <NuxtLink to="/" class="flex items-center space-x-3">
        <!-- Placeholder for Logo -->
        <div class="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">
          MKG
        </div>
        <span class="text-lg font-semibold text-gray-700 hidden sm:block">MKG Verden</span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-6">
        <li v-for="item in navigation" :key="item.path">
          <NuxtLink 
            :to="item.path"
            class="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            active-class="text-blue-600 font-semibold"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Contact Info / Mobile Menu Toggle -->
      <div class="flex items-center space-x-4">
        <a href="tel:+494231930606" class="text-sm font-medium text-blue-600 hover:text-blue-800 hidden sm:block">
          Tel: 04231 / 93 06 06
        </a>
        <!-- Mobile Menu Button (Functionality TBD) -->
        <button @click="toggleMobileMenu" class="md:hidden p-2 text-gray-600 hover:text-blue-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu (Functionality TBD) -->
    <div v-show="isMobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
      <ul class="flex flex-col px-4 py-2">
        <li v-for="item in navigation" :key="item.path" class="py-2">
          <NuxtLink 
            :to="item.path"
            class="block text-gray-600 hover:text-blue-600 transition-colors duration-200"
            active-class="text-blue-600 font-semibold"
            @click="closeMobileMenu" 
          >
            {{ item.name }}
          </NuxtLink>
        </li>
         <li class="py-2 border-t mt-2 pt-3">
           <a href="tel:+494231930606" class="block text-sm font-medium text-blue-600 hover:text-blue-800">
             Tel: 04231 / 93 06 06
           </a>
         </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const navigation = ref([
  { name: 'Praxis & Team', path: '/praxis' },
  { name: 'Leistungen', path: '/leistungen' },
  { name: 'Für Überweiser', path: '/fuer-ueberweiser' },
  { name: 'Für Patienten', path: '/fuer-patienten' },
  { name: 'Kontakt', path: '/kontakt' },
]);

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}

</script> 