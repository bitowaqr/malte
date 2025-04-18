<template>
  <footer class="bg-stone-100 text-stone-600 pt-16 pb-10">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
        <!-- Contact Info -->
        <div class="lg:col-span-2">
          <h4 class="text-lg font-semibold text-stone-800 mb-4">Kontakt</h4>
          <p class="mb-1 font-medium text-stone-700">MKG Verden | Dr. Malte von Boetticher</p>
          <p class="mb-1">Untere Straße 30</p>
          <p class="mb-4">27283 Verden / Aller</p>
          <p class="mb-1">Tel: <a href="tel:+494231930606" class="hover:text-amber-700 transition-colors duration-200">04231 / 93 06 06</a></p>
          <p class="mb-1">Fax: 04231 / 93 06 08</p>
          <p>Mail: <a href="mailto:info@mkg-verden.de" class="hover:text-amber-700 transition-colors duration-200">info@mkg-verden.de</a></p>
        </div>

        <!-- Opening Hours -->
        <div>
          <h4 class="text-lg font-semibold text-stone-800 mb-4">Öffnungszeiten</h4>
          <ul class="space-y-1 text-sm">
            <li>Mo: 08:00 - 14:00</li>
            <li>Di: 08:00 - 13:00 | 13:30 - 16:00</li>
            <li>Mi: 08:00 - 14:00</li>
            <li>Do: 08:00 - 13:00 | 13:30 - 16:00</li>
            <li>Fr: 08:00 - 13:00</li>
            <li class="pt-1 text-xs text-stone-500">(Termine nach Vereinbarung)</li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-stone-800 mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li v-for="item in footerNavigation" :key="item.path">
              <NuxtLink 
                :to="item.path" 
                class="hover:text-amber-700 transition-colors duration-200 text-sm font-medium"
                active-class="text-amber-700 font-semibold" 
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-stone-200 pt-8 text-center text-xs text-stone-500">
        <p>&copy; {{ currentYear }} Dr. Malte von Boetticher – MKG Verden</p>
        <p class="mt-2">
          <NuxtLink to="/impressum" class="hover:text-amber-700 transition-colors duration-200 mx-2">Impressum</NuxtLink> | 
          <NuxtLink to="/datenschutz" class="hover:text-amber-700 transition-colors duration-200 mx-2">Datenschutz</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue';

const footerNavigation = ref([
  { name: 'Home', path: '/' },
  { name: 'Praxis & Team', path: '/praxis' },
  { name: 'Leistungen', path: '/leistungen' },
  { name: 'Für Überweiser', path: '/fuer-ueberweiser' },
  { name: 'Für Patienten', path: '/fuer-patienten' },
  { name: 'Kontakt', path: '/kontakt' },
]);

const currentYear = computed(() => new Date().getFullYear());
</script> 