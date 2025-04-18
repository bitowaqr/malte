<template>
  <div>
    <!-- Header Section (Optional: Could use a specific header image) -->
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-gray-800 text-center">Ihre Fachpraxis für Mund-, Kiefer- und Gesichtschirurgie in Verden</h1>
        <p class="text-lg text-gray-600 mt-4 text-center max-w-3xl mx-auto">
          Herzlich willkommen in der Praxis von Dr. Malte von Boetticher, Ihrer spezialisierten Überweisungspraxis für Oralchirurgie und Implantologie vis-à-vis vom Verdener Dom. Seit 1996 bieten wir Kompetenz und Erfahrung – seit 2024 unter neuer Leitung, mit bewährtem Team und der weiteren Unterstützung durch Dr. Dr. Wolfgang Gudehus.
        </p>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="py-16">
      <div class="container mx-auto px-4 space-y-12">
        <!-- Philosophie -->
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">Unsere Philosophie</h2>
          <p class="text-gray-700 leading-relaxed text-center">
            Wir legen Wert auf eine individuelle Beratung, präzise Diagnostik und schonende Behandlungsverfahren. In enger Abstimmung mit Ihrem überweisenden Zahnarzt oder Arzt entwickeln wir das für Sie optimale Therapiekonzept. Ihre Gesundheit und Zufriedenheit stehen für uns im Mittelpunkt.
          </p>
        </div>

        <!-- Moderne Praxisräume -->
        <div class="bg-white p-8 rounded-lg shadow">
           <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Moderne Praxisräume</h2>
           <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="md:w-1/2">
                 <p class="text-gray-700 leading-relaxed mb-4">
                   Unsere hellen, klimatisierten Praxisräume sind modern ausgestattet und erfüllen höchste Hygienestandards. Wir nutzen fortschrittliche Technologien wie das Digitale Volumentomogramm (DVT) für hochpräzise 3D-Aufnahmen, um Eingriffe sicher und minimalinvasiv planen zu können.
                 </p>
                 <!-- Add more details if desired -->
              </div>
              <div class="md:w-1/2">
                 <!-- Placeholder for Image Gallery/Single Image -->
                 <div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
                    [Praxisräume Image Placeholder]
                 </div>
              </div>
           </div>
        </div>

        <!-- Unser Team -->
        <div>
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Unser Team</h2>
          <div class="space-y-8">
            <TeamMemberCard
              v-for="member in mockTeam" 
              :key="member.name"
              :name="member.name"
              :title="member.title"
              :bio="member.bio"
              :image-placeholder="member.imagePlaceholder"
            />
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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