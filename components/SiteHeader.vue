<template>
  <header class="bg-white border-b border-stone-200 sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo and Practice Name -->
      <NuxtLink to="/" class="flex items-center space-x-2 group">
        <!-- Placeholder for Logo -->
        <div class="w-8 h-8 border-2 border-stone-800 rounded-full flex items-center justify-center text-stone-800 font-bold text-xs group-hover:border-amber-700 group-hover:text-amber-700 transition-colors duration-300">
          MKG
        </div>
        <span class="text-xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors duration-300 hidden sm:block tracking-tight">MKG Verden</span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-8 tracking-wide">
        <li v-for="item in navigation" :key="item.path">
          <NuxtLink 
            :to="item.path"
            class="text-stone-600 hover:text-amber-700 transition-colors duration-200 text-sm font-medium"
            active-class="text-amber-700 font-semibold"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Contact Info / Mobile Menu Toggle -->
      <div class="flex items-center space-x-4">
        <a href="tel:+494231930606" class="text-sm font-medium text-stone-600 hover:text-amber-700 hidden sm:block transition-colors duration-200">
          Tel: 04231 / 93 06 06
        </a>
        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden p-2 text-stone-600 hover:text-amber-700 transition-colors duration-200">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-show="isMobileMenuOpen" class="md:hidden bg-white border-t border-stone-200 absolute w-full shadow-lg">
        <ul class="flex flex-col px-6 py-4 space-y-3">
          <li v-for="item in navigation" :key="item.path">
            <NuxtLink 
              :to="item.path"
              class="block text-stone-600 hover:text-amber-700 transition-colors duration-200 font-medium"
              active-class="text-amber-700 font-semibold"
              @click="closeMobileMenu" 
            >
              {{ item.name }}
            </NuxtLink>
          </li>
           <li class="border-t border-stone-200 mt-3 pt-4">
             <a href="tel:+494231930606" class="block text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors duration-200">
               Tel: 04231 / 93 06 06
             </a>
           </li>
        </ul>
      </div>
    </transition>
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

<style scoped>
/* Simple fade/slide transition for mobile menu */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
  max-height: 300px; /* Adjust as needed */
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 300px; /* Adjust as needed */
  transform: translateY(0);
}
</style> 