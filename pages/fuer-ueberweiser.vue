<template>
  <div>
    <!-- Header Section -->
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-gray-800 text-center">Für Überweiser</h1>
        <p class="text-lg text-gray-600 mt-4 text-center max-w-3xl mx-auto">
          Informationen zur kollegialen Zusammenarbeit – Ihr Partner für MKG-Chirurgie in Verden.
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="prose max-w-none lg:prose-lg bg-white p-8 rounded-lg shadow">
          <h2>Sehr geehrte Kolleginnen und Kollegen,</h2>
          <p>wir danken Ihnen für Ihr Vertrauen und die gute Zusammenarbeit. Als reine Überweisungspraxis unterstützen wir Sie gerne bei allen mund-, kiefer- und gesichtschirurgischen sowie oralchirurgischen Fragestellungen und Eingriffen für Ihre Patienten.</p>
          
          <h3>Unser Angebot für Ihre Patienten</h3>
          <ul>
            <li>Umfassendes Spektrum ambulanter MKG-/Oralchirurgie</li>
            <li>Schwerpunkt Implantologie inkl. Knochenaufbau</li>
            <li>Moderne Diagnostik mittels DVT (auch als Auftragsleistung)</li>
            <li>Schonende Operationsverfahren (minimalinvasiv, Sedierung möglich)</li>
            <li>Zeitnahe Terminvergabe für Beratungen und Eingriffe</li>
            <li>Engagiertes und erfahrenes Team</li>
          </ul>

          <h3>Unser Versprechen an Sie</h3>
          <ul>
            <li>Enge Abstimmung bei der Behandlungsplanung.</li>
            <li>Regelmäßige Rückmeldung und ausführlicher Arztbrief nach Abschluss der Behandlung.</li>
            <li>Rücküberweisung Ihrer Patienten nach erfolgtem Eingriff zur Weiterbehandlung.</li>
            <li>Verfügbarkeit für Rückfragen und Notfälle.</li>
            <li>Respektvoller Umgang mit Ihren Patienten.</li>
          </ul>

          <h3>Überweisung & Formulare</h3>
          <p>Bitte geben Sie Ihrem Patienten die relevanten Unterlagen (Röntgenbilder, ggf. Modelle, Planungen) mit. Für eine reibungslose Überweisung können Sie unser Formular nutzen (derzeit nicht verfügbar - Link folgt).</p>
          <!-- Placeholder for Download Link -->
          <!-- <p><a href="#" class="text-blue-600 hover:underline">Überweisungsformular herunterladen (PDF)</a></p> -->
          <p>Bei Fragen zur Überweisung oder spezifischen Fällen erreichen Sie uns jederzeit telefonisch.</p>

          <div class="mt-8 text-center">
            <NuxtLink to="/kontakt" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Kontakt aufnehmen
            </NuxtLink>
          </div>

          <p class="mt-6">Wir freuen uns auf die weitere Zusammenarbeit!</p>
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
/* Add specific styles if needed */
.prose ul > li::marker {
  color: #3b82f6; /* Example: Blue marker */
}
</style> 