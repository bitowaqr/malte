<template>
  <footer class="bg-gray-800 text-gray-300 pt-10 pb-6">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-3">Kontakt</h4>
          <p class="mb-1">MKG Verden | Dr. Malte von Boetticher</p>
          <p class="mb-1">Untere Straße 30</p>
          <p class="mb-3">27283 Verden / Aller</p>
          <p class="mb-1">Tel: <a href="tel:+494231930606" class="hover:text-white">04231 / 93 06 06</a></p>
          <p class="mb-1">Fax: 04231 / 93 06 08</p>
          <p>Mail: <a href="mailto:info@mkg-verden.de" class="hover:text-white">info@mkg-verden.de</a></p>
        </div>

        <!-- Opening Hours -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-3">Öffnungszeiten</h4>
          <ul>
            <li class="mb-1">Mo: 08:00 - 14:00</li>
            <li class="mb-1">Di: 08:00 - 13:00 / 13:30 - 16:00</li>
            <li class="mb-1">Mi: 08:00 - 14:00</li>
            <li class="mb-1">Do: 08:00 - 13:00 / 13:30 - 16:00</li>
            <li class="mb-1">Fr: 08:00 - 13:00</li>
            <li class="mt-2 text-sm">(Termine nach Vereinbarung)</li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-3">Navigation</h4>
          <ul>
            <li v-for="item in footerNavigation" :key="item.path" class="mb-2">
              <NuxtLink :to="item.path" class="hover:text-white">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; {{ currentYear }} Dr. Malte von Boetticher – MKG Verden</p>
        <p class="mt-1">
          <NuxtLink to="/impressum" class="hover:text-white mx-2">Impressum</NuxtLink> | 
          <NuxtLink to="/datenschutz" class="hover:text-white mx-2">Datenschutz</NuxtLink>
        </p>
        <!-- Optional: Original Designer Credit -->
        <!-- <p class="mt-2 text-xs text-gray-500">Original Design by Thilo Papenheim</p> -->
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