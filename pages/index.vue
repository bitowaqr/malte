<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Expertise in Mund-, Kiefer- & Gesichtschirurgie in Verden</h1>
        <p class="text-xl text-gray-600 mb-8">Ihre Praxis für Oralchirurgie und Implantologie – direkt gegenüber dem Dom.</p>
        <NuxtLink to="/kontakt" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
          Termin vereinbaren
        </NuxtLink>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Unsere Schwerpunkte für Ihre Gesundheit</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceHighlightCard 
            v-for="service in mockServices" 
            :key="service.slug"
            :title="service.title"
            :text="service.briefText"
            :link="service.link"
            :icon-placeholder="service.iconPlaceholder"
          />
        </div>
      </div>
    </section>

    <!-- Praxis & Team Intro -->
    <section class="bg-white py-16">
       <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
         <div class="md:w-1/2">
           <h2 class="text-3xl font-bold text-gray-800 mb-4">Lernen Sie uns kennen</h2>
           <p class="text-gray-600 mb-6 leading-relaxed">
             Seit 1996 Ihre Adresse für MKG-Chirurgie in Verden. Unter der Leitung von Dr. Malte von Boetticher, unterstützt von Dr. Dr. Wolfgang Gudehus und unserem erfahrenen Team, bieten wir Ihnen moderne Behandlungskonzepte in einer freundlichen Atmosphäre.
           </p>
           <NuxtLink to="/praxis" class="text-blue-600 hover:text-blue-800 font-medium">
             Unser Team & unsere Praxis &rarr;
           </NuxtLink>
         </div>
         <div class="md:w-1/2">
           <!-- Placeholder for Image -->
           <div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
             [Praxis Image Placeholder]
           </div>
         </div>
       </div>
    </section>

    <!-- Patienten/Überweiser Links -->
    <section class="py-16">
       <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Informationen für Sie</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
             <NuxtLink to="/fuer-patienten" class="block p-8 bg-blue-50 hover:bg-blue-100 rounded-lg transition duration-300 text-center">
                <h3 class="text-2xl font-semibold text-blue-800 mb-3">Für Patienten</h3>
                <p class="text-blue-700">Alles Wichtige zu Ihrem Besuch bei uns.</p>
             </NuxtLink>
             <NuxtLink to="/fuer-ueberweiser" class="block p-8 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-300 text-center">
                <h3 class="text-2xl font-semibold text-gray-800 mb-3">Für Überweiser</h3>
                <p class="text-gray-700">Informationen zur kollegialen Zusammenarbeit.</p>
             </NuxtLink>
          </div>
       </div>
    </section>

    <!-- Contact Snippet -->
    <section class="bg-blue-600 text-white py-12">
       <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Fragen? Wir sind für Sie da.</h2>
          <p class="mb-6">Rufen Sie uns an oder schreiben Sie uns eine E-Mail.</p>
          <NuxtLink to="/kontakt" class="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-300">
            Zum Kontakt
          </NuxtLink>
       </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// Mock data simulating CMS fetch for services
const mockServices = ref([
  {
    slug: 'implantologie',
    title: 'Zahnimplantate',
    briefText: 'Sicherer Halt für Ihren Zahnersatz – als wäre es Ihr eigener Zahn.',
    link: '/leistungen/implantologie',
    iconPlaceholder: 'I' // Simple text placeholder
  },
  {
    slug: 'chirurgie',
    title: 'Oralchirurgie',
    briefText: 'Schonende chirurgische Eingriffe, von Weisheitszähnen bis Wurzelspitzen.',
    link: '/leistungen/chirurgie',
    iconPlaceholder: 'C'
  },
  {
    slug: 'dvt',
    title: '3D-Röntgen (DVT)',
    briefText: 'Präzise Diagnostik für maximale Sicherheit bei Ihrer Behandlung.',
    link: '/leistungen/dvt',
    iconPlaceholder: '3D'
  }
]);

// Set page title and meta description (Good practice for SEO)
useHead({
  title: 'MKG Verden - Dr. Malte von Boetticher',
  meta: [
    { name: 'description', content: 'Ihre Fachpraxis für Mund-, Kiefer- und Gesichtschirurgie, Oralchirurgie und Implantologie in Verden.' }
  ]
})
</script> 