<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="bg-stone-50 py-16 md:py-20 border-b border-stone-200">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">Unsere Praxis & Unser Team</h1>
        <p class="text-lg text-stone-700 max-w-3xl leading-relaxed">
          Herzlich willkommen in der Praxis von Dr. Malte von Boetticher. Seit 1996 bieten wir Kompetenz und Erfahrung in der Mund-, Kiefer- und Gesichtschirurgie in Verden – seit 2024 unter neuer Leitung, mit bewährtem Team und weiterhin unterstützt durch Dr. Dr. Wolfgang Gudehus.
        </p>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-6 space-y-16 md:space-y-24">
        
        <!-- Philosophie -->
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-stone-800 mb-5 tracking-tight">Unsere Philosophie</h2>
          <p class="text-stone-700 leading-relaxed text-lg">
            Individuelle Beratung, präzise Diagnostik und schonende Behandlung stehen bei uns im Mittelpunkt. In enger Abstimmung mit Ihrem überweisenden Arzt entwickeln wir das optimale Therapiekonzept – für Ihre Gesundheit und Zufriedenheit.
          </p>
        </div>

        <!-- Moderne Praxisräume -->
        <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16">
           <div class="md:w-1/2 order-2 md:order-1">
              <h2 class="text-3xl font-bold text-stone-800 mb-5 tracking-tight">Moderne Praxisräume</h2>
              <p class="text-stone-700 leading-relaxed text-lg mb-4">
                Unsere hellen, klimatisierten Praxisräume erfüllen höchste Standards an Hygiene und Ausstattung. Fortschrittliche Technologien wie das Digitale Volumentomogramm (DVT) ermöglichen hochpräzise 3D-Aufnahmen für eine sichere, minimalinvasive Behandlungsplanung.
              </p>
              <!-- Add more details if desired -->
           </div>
           <div class="md:w-1/2 order-1 md:order-2">
              <!-- Placeholder for Image -->
              <div class="aspect-video bg-stone-200 rounded-lg shadow-sm flex items-center justify-center text-stone-400 overflow-hidden">
                 <img src="https://placehold.co/600x400/E0E0E0/BDBDBD?text=Praxisr%C3%A4ume" alt="Moderne Praxisräume Placeholder" class="w-full h-full object-cover">
              </div>
           </div>
        </div>

        <!-- Unser Team -->
        <div class="border-t border-stone-200 pt-16 md:pt-24">
          <h2 class="text-3xl md:text-4xl font-bold text-stone-800 mb-12 md:mb-16 text-center tracking-tight">Lernen Sie unser Team kennen</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <!-- Replace TeamMemberCard with inline structure -->
            <div v-for="member in mockTeam" :key="member.name" class="flex flex-col sm:flex-row items-start gap-6">
              <!-- Placeholder Image -->
              <div class="flex-shrink-0 w-24 h-24 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-semibold text-sm">
                {{ member.imagePlaceholder }}
              </div>
              <div>
                <h3 class="text-xl font-semibold text-stone-800 mb-1">{{ member.name }}</h3>
                <p class="text-amber-700 font-medium text-sm mb-3">{{ member.title }}</p>
                <!-- Use prose for basic HTML styling from bio -->
                <div class="text-stone-600 leading-relaxed text-sm prose prose-sm prose-stone max-w-none prose-ul:list-disc prose-ul:pl-5 prose-li:my-1" v-html="member.bio"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '#app'; // Ensure useHead is imported if not globally available

// Mock data for team members
const mockTeam = ref([
  {
    name: 'Dr. Malte von Boetticher',
    title: 'Facharzt für Mund-, Kiefer- und Gesichtschirurgie, Fachzahnarzt für Oralchirurgie, Tätigkeitsschwerpunkt Implantologie',
    bio: '<ul class="list-disc list-inside"><li>Studium in Witten/Herdecke</li><li>Facharztausbildung in Hattingen, Essen & Bremen</li><li>Oberarzttätigkeit in Oldenburg</li><li>Seit 2024 in eigener Praxis in Verden</li></ul>',
    imagePlaceholder: 'MvB'
  },
  {
    name: 'Dr. Dr. Wolfgang Gudehus',
    title: 'Arzt und Fachzahnarzt für Oralchirurgie & Implantologie',
    bio: '<ul class="list-disc list-inside"><li>Gründer der Praxis (1996), unterstützt die Praxis weiterhin mit seiner langjährigen Erfahrung.</li><li>Studium in Kiel und Hannover</li><li>Facharztausbildung in Braunschweig und Hannover</li></ul>',
    imagePlaceholder: 'WG'
  },
  {
    name: 'Mariele Papenheim',
    title: 'Praxismanagement (ZAH, seit 2003)',
    bio: 'Organisation, Verwaltung, Abrechnung und Qualitätsmanagement.',
    imagePlaceholder: 'MP'
  },
   {
    name: 'Jana Fähloh, Carolin Mattfeldt, Natalia Sikut',
    title: 'Assistenzteam (ZAH/ZFA)',
    bio: 'Unser erfahrenes Assistenzteam sorgt für einen reibungslosen Ablauf bei Ihrer Behandlung und kümmert sich um Behandlungsassistenz, Sterilgutaufbereitung, Logistik und Hygiene.',
    imagePlaceholder: 'Team'
  }
  // Add other team members if needed
]);

// Set page title and meta description
useHead({
  title: 'Praxis & Team - MKG Verden',
  meta: [
    { name: 'description', content: 'Lernen Sie das Team und die Praxis von Dr. Malte von Boetticher in Verden kennen. Moderne Ausstattung und erfahrene Spezialisten.' }
  ]
})
</script>

<style>
/* Add Tailwind Typography plugin if not already installed for prose classes */
/* Ensure styles for lists inside v-html are correctly applied */
.prose ul {
  /* Add any custom list styling overrides here if needed */
}
</style> 