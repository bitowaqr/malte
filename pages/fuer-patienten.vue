<template>
  <div>
    <!-- Header Section -->
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-gray-800 text-center">Für Patienten</h1>
        <p class="text-lg text-gray-600 mt-4 text-center max-w-3xl mx-auto">
          Ihr Besuch bei uns: Gut informiert & entspannt.
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="bg-white p-8 rounded-lg shadow space-y-8 prose max-w-none lg:prose-lg">
          <p>Herzlich willkommen! Sie wurden von Ihrem Zahnarzt oder Arzt zu uns überwiesen. Damit Ihr Besuch und die Behandlung möglichst reibungslos und angenehm verlaufen, haben wir hier die wichtigsten Informationen für Sie zusammengestellt. Bitte vereinbaren Sie zunächst telefonisch einen Beratungstermin.</p>

          <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 class="!mt-0 !mb-4">Vor Ihrem ersten Termin (Beratung)</h2>
            <p>Bitte bringen Sie folgende Unterlagen mit:</p>
            <ul class="!mb-0">
              <li>Überweisungsschein Ihres Arztes/Zahnarztes</li>
              <li>Ihre Versichertenkarte</li>
              <li>Aktuelle Röntgenbilder (sehr wichtig!)</li>
              <li>Ggf. vorhandene Arztbriefe oder Behandlungsunterlagen</li>
              <li>Liste Ihrer aktuellen Medikamente</li>
              <li>Ausgefüllter Gesundheitsfragebogen (siehe unten)</li>
            </ul>
          </div>

          <div>
            <h2>Der Gesundheitsfragebogen</h2>
            <p>Um Ihre Behandlung sicher planen zu können, benötigen wir Angaben zu Ihrem Gesundheitszustand und eventuellen Vorerkrankungen. Sie können unseren Fragebogen hier herunterladen und in Ruhe zuhause ausfüllen. Selbstverständlich können Sie ihn auch bei uns in der Praxis erhalten.</p>
            <!-- Placeholder for Download Link -->
            <p><a href="#" class="text-blue-600 hover:underline">Gesundheitsfragebogen herunterladen (PDF - Link folgt)</a></p>
          </div>

          <div>
            <h2>Das Beratungsgespräch</h2>
            <p>Im Gespräch erklären wir Ihnen den geplanten Eingriff genau, besprechen Alternativen und beantworten alle Ihre Fragen zu Ablauf, Risiken und Nachsorge. Bei Implantaten erhalten Sie eine detaillierte Kostenschätzung. Anschließend vereinbaren wir gemeinsam den Operationstermin.</p>
          </div>

          <div>
            <h2>Am Operationstag</h2>
            <ul>
              <li><strong>Essen & Trinken:</strong> Bei Eingriffen in örtlicher Betäubung dürfen Sie vorher normal essen und trinken.</li>
              <li><strong>Medikamente:</strong> Nehmen Sie Ihre Dauermedikamente wie gewohnt ein, außer wir haben etwas anderes mit Ihnen besprochen.</li>
              <li><strong>Begleitung:</strong> Planen Sie ein, dass Sie nach dem Eingriff (besonders bei Sedierung) für einige Stunden (bzw. 24h) nicht selbst Auto fahren dürfen. Lassen Sie sich bitte abholen.</li>
              <li><strong>Kleidung:</strong> Tragen Sie bequeme Kleidung.</li>
            </ul>
          </div>
          
          <div>
            <h2>Nach dem Eingriff</h2>
            <p>Sie erhalten von uns detaillierte schriftliche Hinweise zum Verhalten nach dem Eingriff. Kühlen, Schonung und gute Mundhygiene unterstützen den Heilungsprozess. Bei Fragen oder Problemen sind wir jederzeit für Sie erreichbar.</p>
             <!-- Placeholder for Download Links -->
            <p><a href="#" class="text-blue-600 hover:underline">Verhalten nach chirurgischen Eingriffen (PDF - Link folgt)</a></p>
            <p><a href="#" class="text-blue-600 hover:underline">Verhalten nach Implantationen (PDF - Link folgt)</a></p>
          </div>

          <div class="mt-8 text-center !max-w-full">
            <p class="text-xl font-semibold">Haben Sie noch Fragen?</p>
            <a href="tel:+494231930606" class="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Rufen Sie uns an: 04231 / 93 06 06
            </a>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Set page title and meta description
useHead({
  title: 'Für Patienten - MKG Verden',
  meta: [
    { name: 'description', content: 'Wichtige Informationen für Patienten der MKG-Praxis Verden: Was Sie vor Ihrem Termin wissen sollten.' }
  ]
})
</script>

<style scoped>
/* Add specific styles if needed */
.prose ul > li::marker {
  color: #3b82f6; /* Example: Blue marker */
}
</style> 