<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="bg-stone-50 py-16 md:py-20 border-b border-stone-200">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">Informationen für Überweiser</h1>
        <p class="text-lg text-stone-700 max-w-3xl leading-relaxed">
          Partnerschaftliche Zusammenarbeit für die optimale Versorgung Ihrer Patienten.
        </p>
      </div>
    </section>

    <!-- Content Section - Styled as Modern Letter -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-6 max-w-prose">
        <!-- Removed prose classes, applying styles directly -->
        <div class="space-y-8 text-stone-700 leading-relaxed">
          
          <h2 class="text-3xl font-semibold text-stone-900 tracking-tight !mt-0">Sehr geehrte Kolleginnen und Kollegen,</h2>
          <p>wir schätzen Ihr Vertrauen und freuen uns auf eine weiterhin gute Zusammenarbeit. Als spezialisierte Überweisungspraxis unterstützen wir Sie umfassend bei allen mund-, kiefer- und gesichtschirurgischen sowie oralchirurgischen Fragestellungen für Ihre Patienten.</p>
          
          <div>
            <h3 class="text-xl font-semibold text-stone-800 mb-3 mt-8">Unser Angebot für Ihre Patienten</h3>
            <ul class="list-disc pl-5 space-y-2 marker:text-amber-600">
              <li>Umfassendes Spektrum ambulanter MKG- & Oralchirurgie</li>
              <li>Schwerpunkt Implantologie inkl. Augmentationsverfahren</li>
              <li>Moderne 3D-Diagnostik mittels DVT (auch als Auftragsleistung)</li>
              <li>Schonende, minimalinvasive Operationsverfahren (Sedierung möglich)</li>
              <li>Zeitnahe Terminvergabe</li>
              <li>Erfahrenes und engagiertes Team</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-stone-800 mb-3 mt-8">Unser Versprechen an Sie</h3>
            <ul class="list-disc pl-5 space-y-2 marker:text-amber-600">
              <li>Enge Abstimmung bei der Behandlungsplanung</li>
              <li>Zeitnahe Rückmeldung und ausführlicher Arztbrief</li>
              <li>Konsequente Rücküberweisung zur Weiterbehandlung</li>
              <li>Erreichbarkeit für Rückfragen und Notfälle</li>
              <li>Ein respektvoller und fürsorglicher Umgang mit Ihren Patienten</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-stone-800 mb-3 mt-8">Überweisung & Formulare</h3>
            <p>Bitte geben Sie Ihrem Patienten relevante Unterlagen (aktuelle Röntgenbilder, ggf. Modelle/Planungen) mit. Ein Überweisungsformular stellen wir Ihnen in Kürze hier zum Download bereit.</p>
            <!-- Placeholder for Download Link -->
            <!-- <p><a href="#" download class="text-amber-700 hover:text-amber-800 font-medium">Überweisungsformular herunterladen (PDF)</a></p> -->
            <p>Bei Fragen zur Überweisung oder zu spezifischen Fällen sind wir jederzeit <a href="tel:+494231930606" class="text-amber-700 hover:text-amber-800 font-medium">telefonisch</a> oder per <a href="mailto:info@mkg-verden.de" class="text-amber-700 hover:text-amber-800 font-medium">E-Mail</a> für Sie erreichbar.</p>
          </div>

          <div class="mt-12 pt-8 text-center border-t border-stone-200">
            <NuxtLink 
              to="/kontakt"
              class="inline-block bg-stone-800 hover:bg-stone-700 text-white font-medium py-3 px-8 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
            >
              Direkt Kontakt aufnehmen
            </NuxtLink>
          </div>

          <p class="mt-10 text-lg">Wir freuen uns darauf, von Ihnen zu hören und die Zusammenarbeit fortzusetzen!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Set page title and meta description
useHead({
  title: 'Für Überweiser - MKG Verden',
  meta: [
    { name: 'description', content: 'Informationen für überweisende Zahnärzte und Ärzte zur Zusammenarbeit mit der MKG-Praxis Verden.' }
  ]
})
</script>

<style scoped>
/* No longer relying on prose, styles are applied directly */
</style> 