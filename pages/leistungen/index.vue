<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="bg-stone-50 py-16 md:py-20 border-b border-stone-200">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">Unser Leistungsspektrum</h1>
        <p class="text-lg text-stone-700 max-w-3xl leading-relaxed">
          Umfassende Expertise in der Mund-, Kiefer- und Gesichtschirurgie für Ihre Gesundheit.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <NuxtLink 
            v-for="service in mockLeistungenIndex" 
            :key="service.slug"
            :to="service.link"
            class="block group p-6 border border-stone-200 rounded-lg hover:border-amber-300 hover:bg-stone-50 transition-colors duration-300"
          >
            <h2 class="text-2xl font-semibold text-stone-800 mb-3 group-hover:text-amber-700 transition-colors duration-200 tracking-tight">{{ service.title }}</h2>
            <p class="text-stone-600 leading-relaxed mb-4">{{ service.shortDescription }}</p>
            <span class="font-medium text-amber-600 group-hover:text-amber-800 transition-colors duration-300 inline-block">Details anzeigen <span class="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></span>
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