<template>
  <div v-if="pending">Loading service data...</div>
  <div v-else-if="error || !serviceData">
    <h1 class="text-3xl font-bold text-red-600">Fehler</h1>
    <p class="mt-4 text-gray-700">Leistung nicht gefunden oder Fehler beim Laden.</p>
    <p v-if="error" class="mt-2 text-sm text-red-500">{{ error.message }}</p>
    <NuxtLink to="/leistungen" class="inline-block mt-6 text-blue-600 hover:underline">Zurück zur Leistungsübersicht</NuxtLink>
  </div>
  <div v-else>
    <!-- Header Section -->
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold text-gray-800">{{ serviceData.title }}</h1>
        <p v-if="serviceData.introText" class="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          {{ serviceData.introText }}
        </p>
      </div>
    </section>

    <!-- Main Content Area -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <!-- General Description -->
        <div v-if="serviceData.description" class="prose max-w-none lg:prose-lg mb-12" v-html="serviceData.description"></div>

        <!-- Accordion Section (if applicable, e.g., for Chirurgie) -->
        <div v-if="serviceData.accordionItems && serviceData.accordionItems.length > 0" class="bg-white p-6 rounded-lg shadow">
          <h2 v-if="serviceData.accordionTitle" class="text-3xl font-bold text-gray-800 mb-6 text-center">{{ serviceData.accordionTitle }}</h2>
          <div class="divide-y divide-gray-200">
             <AccordionItem
               v-for="(item, index) in serviceData.accordionItems"
               :key="index"
               :title="item.title"
               :content="item.content"
               :start-open="index === 0" 
             />
          </div>
        </div>

         <!-- Other Sections (e.g., Knochenaufbau for Implantologie) -->
        <div v-if="serviceData.sections && serviceData.sections.length > 0" class="mt-12 space-y-12">
          <div v-for="(section, index) in serviceData.sections" :key="index" class="bg-white p-8 rounded-lg shadow">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ section.title }}</h2>
             <!-- Add image handling here if needed -->
            <div class="prose max-w-none lg:prose-lg" v-html="section.content"></div>
          </div>
        </div>

         <!-- CTA Section -->
         <div class="text-center mt-16">
             <NuxtLink to="/kontakt" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
               Beratungstermin vereinbaren
             </NuxtLink>
         </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const route = useRoute();
const slug = computed(() => route.params.slug);

// *** Mock Data Fetching Function ***
// In a real app, this would use useQuery or useAsyncData
const getMockServiceData = (serviceSlug) => {
  const allServices = {
    'implantologie': {
      title: 'Zahnimplantate: Fester Halt für Ihr schönstes Lächeln',
      introText: 'Zahnimplantate sind künstliche Zahnwurzeln aus biokompatiblem Material (meist Titan), die fest im Kieferknochen verankert werden. Sie bieten eine stabile Basis für Kronen, Brücken oder Prothesen.',
      description: `
        <h2 class="text-2xl font-semibold mb-4">Vorteile von Zahnimplantaten</h2>
        <ul class="list-disc pl-6 mb-6">
          <li>Kein Beschleifen gesunder Nachbarzähne nötig</li>
          <li>Fester Sitz von Zahnersatz</li>
          <li>Natürliches Kaugefühl und Aussehen</li>
          <li>Schutz vor Knochenabbau</li>
          <li>Hohe Erfolgsraten und Langlebigkeit</li>
        </ul>
        <h2 class="text-2xl font-semibold mb-4">Der Behandlungsablauf</h2>
        <ol class="list-decimal pl-6">
          <li><strong>Beratung & Planung:</strong> Gespräch, Diagnostik (ggf. DVT), Behandlungsplan, Kostenschätzung.</li>
          <li><strong>Implantation:</strong> Minimalinvasiver Eingriff unter örtlicher Betäubung (Sedierung möglich).</li>
          <li><strong>Einheilung:</strong> 2-6 Monate Osseointegration (Provisorium möglich).</li>
          <li><strong>Freilegung & Zahnersatz:</strong> Ihr Zahnarzt fertigt die endgültige Versorgung an.</li>
        </ol>
      `,
      accordionItems: [], // No accordion for this example
      sections: [
        {
          title: 'Wenn der Knochen fehlt (Knochenaufbau)',
          content: '<p class="mb-4">Manchmal reicht das Knochenvolumen nicht aus. Mit modernen Verfahren können wir den Kieferknochen wieder aufbauen.</p><h3>Sinuslift (Oberkiefer)</h3><p class="mb-4">Bei geringer Knochenhöhe im seitlichen Oberkiefer heben wir den Kieferhöhlenboden schonend an und füllen Knochen(ersatz)material ein – oft gleichzeitig mit der Implantation.</p><h3>Knochentransplantation</h3><p>Bei größerem Knochenbedarf verpflanzen wir körpereigenen Knochen oder verwenden Knochenersatzmaterialien, um ein stabiles Lager zu schaffen.</p>'
        }
      ]
    },
    'chirurgie': {
      title: 'Oralchirurgie: Schonende Eingriffe für Ihre Mundgesundheit',
      introText: 'Wir führen ein breites Spektrum ambulanter oralchirurgischer Eingriffe durch. Modernste Techniken und präzise Diagnostik sorgen für eine schonende Behandlung.',
      description: '', // Main description can be empty if using accordion exclusively
      accordionTitle: 'Häufige chirurgische Eingriffe',
      accordionItems: [
        { title: 'Operative Zahnentfernung', content: 'Entfernung stark zerstörter oder tief liegender Zähne, auch bei komplexen Verhältnissen.' },
        { title: 'Weisheitszahnentfernung', content: 'Schonende Entfernung bei Platzmangel, Verlagerung oder Entzündungsrisiko. Oft alle vier Zähne in einer Sitzung (Sedierung möglich).' },
        { title: 'Wurzelspitzenresektion', content: 'Erhalt eines Zahnes bei Entzündungen an der Wurzelspitze nach Wurzelkanalbehandlung.' },
        { title: 'Chirurgische Unterstützung bei Kieferorthopädie', content: 'Entfernung überzähliger Zähne oder Freilegung verlagerter Zähne zur Einordnung.' },
        { title: 'Parodontalchirurgie', content: 'Behandlung fortgeschrittener Parodontitis, Reduktion von Zahnfleischtaschen, ggf. regenerative Verfahren.' },
        { title: 'Behandlung von Mundschleimhauterkrankungen', content: 'Diagnostik (inkl. Gewebeproben) und Therapie von Veränderungen der Mundschleimhaut.' },
        { title: 'Kieferhöhlenoperationen', content: 'Behandlung von Kieferhöhlenentzündungen (Sinusitis) mit zahnärztlicher Ursache.' },
        { title: 'Behandlung von Kiefergelenkbeschwerden (CMD)', content: 'Diagnostik und meist konservative Therapie von Funktionsstörungen des Kausystems.' },
      ],
      sections: []
    },
    'dvt': {
      title: 'DVT – Präzise 3D-Diagnostik für Ihre Sicherheit',
      introText: 'Die Digitale Volumentomographie (DVT) liefert hochauflösende, dreidimensionale Bilder Ihres Kiefers für präziseste Diagnostik und Behandlungsplanung.',
      description: `
         <h2 class="text-2xl font-semibold mb-4">Vorteile der DVT</h2>
         <ul class="list-disc pl-6 mb-6">
           <li><strong>Präzise Planung:</strong> Exakte Darstellung von Knochen, Nerven, Zähnen für sichere Implantationen & Chirurgie.</li>
           <li><strong>Hohe Bildqualität:</strong> Detaillierte Aufnahmen für genaue Diagnose bei unklaren Beschwerden, Entzündungen, etc.</li>
           <li><strong>Geringere Strahlenbelastung:</strong> Deutlich reduziert im Vergleich zur CT.</li>
           <li><strong>Schnell & Komfortabel:</strong> Aufnahme dauert nur wenige Sekunden.</li>
         </ul>
         <h2 class="text-2xl font-semibold mb-4">Anwendungsbereiche</h2>
         <ul class="list-disc pl-6">
           <li>Implantatplanung</li>
           <li>Weisheitszahnentfernungen</li>
           <li>Wurzelspitzenresektionen</li>
           <li>Diagnostik von Zysten/Tumoren</li>
           <li>Beurteilung verlagerter Zähne</li>
           <li>Kieferhöhlendiagnostik</li>
         </ul>
      `,
      accordionItems: [],
      sections: [
         {
           title: 'Für Patienten & Überweiser',
           content: '<p>Wir nutzen DVT zur Optimierung Ihrer Behandlung. Auf Wunsch erstellen wir auch DVT-Aufnahmen im Auftrag Ihres überweisenden Zahnarztes oder Arztes.</p>'
         }
      ]
    }
  };
  return allServices[serviceSlug] || null;
};
// ************************************

// Simulate fetching data
const pending = ref(true);
const error = ref(null);
const serviceData = ref(null);

// Simulate async fetch on component setup
const fetchData = () => {
  try {
    const data = getMockServiceData(slug.value);
    if (data) {
      serviceData.value = data;
       // Set page title and meta based on fetched data
       useHead({
         title: `${data.title} - Leistungen MKG Verden`,
         meta: [
           { name: 'description', content: data.introText || `Details zur Leistung ${data.title} der MKG-Praxis Verden.` }
         ]
       });
    } else {
      error.value = new Error('Service not found');
      // Set generic title/meta for error page
       useHead({
         title: 'Leistung nicht gefunden - MKG Verden',
       });
       // Consider throwing a Nuxt error page: throw createError({ statusCode: 404, statusMessage: 'Leistung nicht gefunden' })
    }
  } catch (e) {
    error.value = e;
    console.error("Error fetching mock data:", e);
    useHead({
      title: 'Fehler - MKG Verden',
    });
  } finally {
    pending.value = false;
  }
};

fetchData();

// Watch for slug changes if needed (though Nuxt usually remounts)
// watch(slug, fetchData);

</script>

<style>
/* Add styles for prose if @tailwindcss/typography is not used */
.prose ul {
  list-style-type: disc;
  padding-left: 1.5em;
}
.prose ol {
  list-style-type: decimal;
  padding-left: 1.5em;
}
.prose li {
  margin-bottom: 0.5em;
}
</style> 