<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="bg-stone-50 py-16 md:py-20 border-b border-stone-200">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">Informationen für Patienten</h1>
        <p class="text-lg text-stone-700 max-w-3xl leading-relaxed">
          Damit Ihr Besuch bei uns möglichst reibungslos und angenehm verläuft: Die wichtigsten Infos auf einen Blick.
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-6 max-w-prose">
        <!-- Apply prose classes for typography defaults -->
        <div class="prose prose-lg prose-stone max-w-none 
                    prose-headings:text-stone-900 prose-headings:font-semibold prose-headings:tracking-tight 
                    prose-a:text-amber-700 hover:prose-a:text-amber-800 prose-a:transition-colors prose-a:duration-200 
                    prose-strong:text-stone-800 prose-strong:font-semibold 
                    prose-ul:list-outside prose-ul:pl-5 prose-li:marker:text-amber-600 prose-li:my-2">
          
          <p>Herzlich willkommen! Sie wurden von Ihrem Zahnarzt oder Arzt zu uns überwiesen. Bitte vereinbaren Sie zunächst telefonisch einen Beratungstermin unter <a href="tel:+494231930606">04231 / 93 06 06</a>.</p>

          <!-- Highlighted section using border + padding -->
          <div class="bg-stone-50 p-6 rounded-md border-l-4 border-amber-600 my-10 not-prose text-stone-700">
            <h2 class="text-2xl font-semibold text-stone-900 mt-0 mb-4 tracking-tight">Vor Ihrem ersten Termin (Beratung)</h2>
            <p class="text-base leading-relaxed">Bitte bringen Sie folgende Unterlagen mit:</p>
            <ul class="list-disc pl-5 space-y-1 text-base leading-relaxed mt-3 mb-0">
              <li>Überweisungsschein Ihres Arztes/Zahnarztes</li>
              <li>Ihre Versichertenkarte</li>
              <li>Aktuelle Röntgenbilder (sehr wichtig!)</li>
              <li>Ggf. vorhandene Arztbriefe oder Behandlungsunterlagen</li>
              <li>Liste Ihrer aktuellen Medikamente</li>
              <li>Ausgefüllter Gesundheitsfragebogen (siehe unten)</li>
            </ul>
          </div>

          <!-- Back to prose scope -->
          <h2>Der Gesundheitsfragebogen</h2>
          <p>Um Ihre Behandlung sicher planen zu können, benötigen wir Angaben zu Ihrem Gesundheitszustand. Sie können unseren Fragebogen hier herunterladen und in Ruhe zuhause ausfüllen oder ihn bei uns in der Praxis erhalten.</p>
          <!-- Placeholder for Download Link -->
          <p><a href="#" download>Gesundheitsfragebogen herunterladen (PDF - Link folgt)</a></p>

          <h2>Das Beratungsgespräch</h2>
          <p>Im Gespräch erklären wir Ihnen den geplanten Eingriff genau, besprechen Alternativen und beantworten Ihre Fragen zu Ablauf, Risiken und Nachsorge. Bei Implantaten erhalten Sie eine detaillierte Kostenschätzung. Anschließend vereinbaren wir den Operationstermin.</p>

          <h2>Am Operationstag</h2>
          <ul>
            <li><strong>Essen & Trinken:</strong> Bei Eingriffen in örtlicher Betäubung dürfen Sie vorher normal essen und trinken.</li>
            <li><strong>Medikamente:</strong> Nehmen Sie Ihre Dauermedikamente wie gewohnt ein, außer wir haben etwas anderes besprochen.</li>
            <li><strong>Begleitung:</strong> Planen Sie ein, nach dem Eingriff (besonders bei Sedierung) nicht selbst Auto fahren zu dürfen. Lassen Sie sich bitte abholen.</li>
            <li><strong>Kleidung:</strong> Tragen Sie bequeme Kleidung.</li>
          </ul>
          
          <h2>Nach dem Eingriff</h2>
          <p>Sie erhalten detaillierte schriftliche Hinweise zum Verhalten nach dem Eingriff. Kühlen, Schonung und gute Mundhygiene unterstützen die Heilung. Bei Fragen oder Problemen sind wir erreichbar.</p>
           <!-- Placeholder for Download Links -->
          <p><a href="#" download>Verhalten nach chirurgischen Eingriffen (PDF - Link folgt)</a></p>
          <p><a href="#" download>Verhalten nach Implantationen (PDF - Link folgt)</a></p>

          <!-- Simpler Contact Prompt -->
          <div class="mt-12 pt-8 border-t border-stone-200 text-center not-prose">
            <p class="text-lg font-semibold text-stone-800">Haben Sie noch Fragen?</p>
            <p class="text-stone-700 mt-2">Rufen Sie uns gerne an: <a href="tel:+494231930606" class="text-amber-700 hover:text-amber-800 transition-colors duration-200 font-medium">04231 / 93 06 06</a></p>
          </div>

        </div> <!-- End Prose -->
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
/* Custom styles if prose is not sufficient */
</style> 