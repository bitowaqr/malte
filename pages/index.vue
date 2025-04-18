<template>
  <div class="font-sans">
    <!-- Hero Section - Swiss/Rams/Apple meets Ghibli -->
    <section class="bg-stone-100 min-h-[70vh] md:min-h-[80vh] flex items-center">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div class="md:col-span-1 py-12 md:py-0">
          <h1 class="text-5xl md:text-7xl font-bold text-stone-900 mb-6 leading-tight tracking-tighter">
            Gesundheit beginnt im Mund.
          </h1>
          <p class="text-xl text-stone-700 mb-10 max-w-lg leading-relaxed">
            Ihre Praxis für moderne Mund-, Kiefer- und Gesichtschirurgie in Verden. Wir verbinden Expertise mit Sorgfalt und modernster Technik.
          </p>
          <NuxtLink 
            to="/kontakt"
            class="inline-block bg-stone-800 hover:bg-stone-700 text-white font-medium py-3 px-8 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
          >
            Termin anfragen
          </NuxtLink>
        </div>
        <!-- Placeholder for a potential subtle, high-quality image or graphic element on the right -->
        <div class="hidden md:block md:col-span-1 h-64 md:h-full relative">
           <!-- Example: subtle background pattern or illustration placeholder -->
           <!-- <div class="absolute inset-0 bg-gradient-to-br from-teal-50 to-green-50 opacity-50 rounded-lg"></div> -->
           <div class="absolute inset-0 flex items-center justify-center text-stone-300">
             <!-- Icon/Graphic Placeholder -->
             <svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19.428 15.428a8 8 0 11-14.856 0M12 19.857V15.43m0-5.714v-4.286m0 10a8.001 8.001 0 00-8-8M12 19.857a8.001 8.001 0 018-8"></path></svg>
           </div>
        </div>
      </div>
    </section>

    <!-- Services Overview - Revised Approach -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-stone-800 mb-16 tracking-tight">Unsere Leistungen für Sie</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          <!-- Iterate over services, replacing ServiceHighlightCard -->
          <div v-for="service in mockServices" :key="service.slug" class="group">
            <NuxtLink :to="service.link" class="block">
              <!-- Placeholder for Custom Icon/Graphic -->
              <div class="mb-4 text-amber-600 group-hover:text-amber-700 transition-colors duration-300">
                <svg v-if="service.iconPlaceholder === 'I'" class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <!-- Example Icon 1 -->
                <svg v-else-if="service.iconPlaceholder === 'C'" class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0 0h5m-5 0v-1.5a1.5 1.5 0 013 0v1.5"></path></svg> <!-- Example Icon 2 -->
                <svg v-else class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <!-- Example Icon 3 (DVT) -->
              </div>
              <h3 class="text-xl font-semibold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">{{ service.title }}</h3>
              <p class="text-stone-600 leading-relaxed mb-3">{{ service.briefText }}</p>
              <span class="font-medium text-amber-600 group-hover:text-amber-800 transition-colors duration-300 inline-block">Mehr erfahren <span class="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Praxis & Team Intro -->
    <section class="bg-white py-16 md:py-24">
       <div class="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
         <div class="md:w-1/2 order-2 md:order-1">
           <h2 class="text-3xl md:text-4xl font-bold text-stone-800 mb-5">Lernen Sie uns kennen</h2>
           <p class="text-stone-600 mb-6 leading-relaxed text-lg">
             Seit 1996 sind wir Ihre Praxis für MKG-Chirurgie in Verden, direkt am Dom. Unter der Leitung von Dr. Malte von Boetticher bieten wir Ihnen mit unserem erfahrenen Team <span class="font-semibold text-amber-700">modernste Behandlungskonzepte in einer freundlichen und entspannten Atmosphäre.</span> Ihr Komfort steht bei uns an erster Stelle.
           </p>
           <NuxtLink to="/praxis" class="text-amber-600 hover:text-amber-800 font-semibold text-lg group inline-block">
             Mehr über Praxis & Team erfahren <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
           </NuxtLink>
         </div>
         <div class="md:w-1/2 order-1 md:order-2">
           <!-- Placeholder for Image -->
           <div class="aspect-video bg-stone-200 rounded-lg shadow-lg flex items-center justify-center text-stone-500 overflow-hidden">
             <!-- Replace with <NuxtImg> or <img> -->
             <img src="https://placehold.co/600x400/D1C4E9/FFFFFF?text=Praxis+Impression" alt="Praxis Impression Placeholder" class="w-full h-full object-cover">
             <!-- [Praxis Image Placeholder] -->
           </div>
         </div>
       </div>
    </section>

    <!-- Patienten/Überweiser Links - Minimalist -->
    <section class="py-16 bg-stone-50">
       <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold text-stone-800 mb-10 tracking-tight">Informationen für Sie</h2>
          <div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
             <NuxtLink 
               to="/fuer-patienten" 
               class="text-lg font-medium text-stone-700 hover:text-amber-700 transition-colors duration-300 group"
             >
                Für Patienten <span class="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
             </NuxtLink>
             <span class="hidden md:block text-stone-300">|</span>
             <NuxtLink 
               to="/fuer-ueberweiser" 
               class="text-lg font-medium text-stone-700 hover:text-amber-700 transition-colors duration-300 group"
             >
                Für Überweiser <span class="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
             </NuxtLink>
          </div>
       </div>
    </section>

    <!-- Contact Snippet - Integrated Style -->
    <section class="bg-stone-800 text-stone-100 py-16 md:py-20">
       <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Bereit für den nächsten Schritt?</h2>
          <p class="text-lg text-stone-300 mb-8 max-w-xl mx-auto">Wir freuen uns darauf, Sie persönlich in unserer Praxis in Verden zu begrüßen. Vereinbaren Sie jetzt Ihren Termin.</p>
          <NuxtLink 
            to="/kontakt"
            class="inline-block bg-white hover:bg-stone-100 text-stone-800 font-semibold py-3 px-10 rounded transition duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-800 focus:ring-white"
          >
            Kontakt aufnehmen
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