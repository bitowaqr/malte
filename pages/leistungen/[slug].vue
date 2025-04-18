<template>
  <div v-if="pending" class="container mx-auto px-6 py-16 text-center text-stone-500">Daten werden geladen...</div>
  <div v-else-if="error || !serviceData" class="container mx-auto px-6 py-16">
    <h1 class="text-3xl font-bold text-red-700">Fehler</h1>
    <p class="mt-4 text-stone-700">Leistung nicht gefunden oder Fehler beim Laden.</p>
    <p v-if="error" class="mt-2 text-sm text-red-600">Details: {{ error.message }}</p>
    <NuxtLink 
      to="/leistungen" 
      class="inline-block mt-8 font-medium text-amber-700 hover:text-amber-800 transition-colors duration-200 group"
    >
      <span class="inline-block transition-transform duration-200 group-hover:-translate-x-1">&larr;</span> Zurück zur Leistungsübersicht
    </NuxtLink>
  </div>
  <div v-else class="bg-white">
    <!-- Page Header -->
    <section class="bg-stone-50 py-16 md:py-20 border-b border-stone-200">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">{{ serviceData.title }}</h1>
        <p v-if="serviceData.introText" class="text-lg text-stone-700 max-w-3xl leading-relaxed">
          {{ serviceData.introText }}
        </p>
      </div>
    </section>

    <!-- Main Content Area -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-6 max-w-prose">
        <!-- Apply prose classes for typography defaults -->
        <div class="prose prose-lg prose-stone max-w-none 
                    prose-headings:text-stone-900 prose-headings:font-semibold prose-headings:tracking-tight 
                    prose-a:text-amber-700 hover:prose-a:text-amber-800 prose-a:transition-colors prose-a:duration-200 
                    prose-strong:text-stone-800 prose-strong:font-semibold 
                    prose-ul:list-outside prose-ul:pl-5 prose-li:marker:text-amber-600 prose-li:my-2 
                    prose-ol:list-outside prose-ol:pl-5 prose-li:my-2 prose-p:leading-relaxed">
          
          <!-- General Description -->
          <div v-if="serviceData.description" v-html="serviceData.description"></div>

          <!-- Accordion Section Wrapper -->
          <div v-if="serviceData.accordionItems && serviceData.accordionItems.length > 0" class="my-12 md:my-16 not-prose">
             <h2 v-if="serviceData.accordionTitle" class="text-3xl font-semibold text-stone-900 mb-8 tracking-tight">{{ serviceData.accordionTitle }}</h2>
             <div class="border border-stone-200 rounded-lg overflow-hidden">
                <!-- AccordionItem component rendering - Corrected Slot Usage -->
                <AccordionItem
                  v-for="(item, index) in serviceData.accordionItems"
                  :key="index"
                  :title="item.title"
                  :content="item.content"
                  :start-open="index === 0" 
                  #default="{ open, toggle }"
                  class="border-b border-stone-200 last:border-b-0" 
                >
                   <!-- Button to toggle, using slot scope -->
                   <button @click="toggle" class="flex justify-between items-center w-full p-5 text-left font-medium text-stone-700 hover:bg-stone-50 transition-colors duration-200">
                     <span>{{ item.title }}</span>
                     <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                   </button>
                   <!-- Content: Assume AccordionItem handles visibility; apply prose styling -->
                   <div class="p-5 pt-0 text-stone-600 text-base leading-relaxed prose prose-base prose-stone max-w-none" v-html="item.content"></div>
                 </AccordionItem>
             </div>
          </div>

          <!-- Other Sections -->
          <div v-if="serviceData.sections && serviceData.sections.length > 0" class="mt-12 md:mt-16 space-y-12 md:space-y-16">
            <div v-for="(section, index) in serviceData.sections" :key="index" class="not-prose">
              <h2 class="text-3xl font-semibold text-stone-900 mb-4 tracking-tight">{{ section.title }}</h2>
              <!-- Add image handling here if needed -->
              <!-- Re-apply prose within the section if content is HTML -->
              <div class="prose prose-base prose-stone max-w-none" v-html="section.content"></div>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="text-center mt-16 md:mt-24 pt-8 border-t border-stone-200 not-prose">
              <p class="text-lg text-stone-700 mb-6">Haben Sie Fragen oder wünschen eine persönliche Beratung?</p>
              <NuxtLink 
                to="/kontakt"
                class="inline-block bg-stone-800 hover:bg-stone-700 text-white font-medium py-3 px-8 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
              >
                Beratungstermin vereinbaren
              </NuxtLink>
          </div>

        </div> <!-- End Prose -->
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// Assuming AccordionItem component is globally registered or imported
// import AccordionItem from '~/components/AccordionItem.vue'; 

const route = useRoute();
const slug = computed(() => route.params.slug);

// *** Mock Data Fetching Function (Keep as is for now) ***
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

// Simulate fetching data (Keep as is for now)
const pending = ref(true);
const error = ref(null);
const serviceData = ref(null);

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

// watch(slug, fetchData); // Usually not needed with Nuxt page routing

</script>

<style scoped>
/* Basic transition for accordion content */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
  max-height: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
    max-height: 500px; /* Adjust if content is very long */
    overflow: hidden;
}
</style> 