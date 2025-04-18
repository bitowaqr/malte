<template>
  <div>
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-gray-800 text-center">Unser Leistungsspektrum</h1>
        <p class="text-lg text-gray-600 mt-4 text-center max-w-3xl mx-auto">
          Wir bieten Ihnen umfassende Expertise in der Mund-, Kiefer- und Gesichtschirurgie. Erfahren Sie mehr über unsere Schwerpunkte.
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink 
            v-for="service in mockLeistungenIndex" 
            :key="service.slug"
            :to="service.link"
            class="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h2 class="text-2xl font-semibold text-blue-700 mb-3">{{ service.title }}</h2>
            <p class="text-gray-600">{{ service.shortDescription }}</p>
            <span class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">Details anzeigen &rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Mock data for the index page
const mockLeistungenIndex = ref([
  {
    slug: 'implantologie',
    title: 'Zahnimplantate',
    shortDescription: 'Fester Halt und natürliches Aussehen für Ihren Zahnersatz.',
    link: '/leistungen/implantologie'
  },
  {
    slug: 'chirurgie',
    title: 'Oralchirurgie',
    shortDescription: 'Schonende Eingriffe wie Weisheitszahnentfernung, Wurzelspitzenresektion und mehr.',
    link: '/leistungen/chirurgie'
  },
  {
    slug: 'dvt',
    title: '3D-Röntgen (DVT)',
    shortDescription: 'Hochpräzise Diagnostik für maximale Planungssicherheit.',
    link: '/leistungen/dvt' // Link to the specific page
  }
]);

// Set page title and meta description
useHead({
  title: 'Leistungen - MKG Verden',
  meta: [
    { name: 'description', content: 'Entdecken Sie das Leistungsspektrum der MKG-Praxis Verden: Implantologie, Oralchirurgie, DVT und mehr.' }
  ]
})
</script> 