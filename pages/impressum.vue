<template>
  <div>
    <!-- Header Section -->
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-gray-800 text-center">Impressum</h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="prose max-w-none lg:prose-lg bg-white p-8 rounded-lg shadow">
          <!-- Content copied/adapted from optimised-content.md -->
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Dr. Malte von Boetticher<br>
            Untere Str. 30<br>
            27283 Verden
          </p>

          <h3>Kontakt:</h3>
          <p>
            Telefon: 04231/930606<br>
            Telefax: 04231/930608<br>
            E-Mail: info@mkg-verden.de
          </p>
          <p>Verantwortlich für den redaktionellen Inhalt gemäß § 55 Abs. 2 RStV: Dr. Malte von Boetticher</p>
          <p><em>Gemäß § 28 BDSG wird jeder kommerziellen Verwendung und Weitergabe der Daten widersprochen.</em></p>

          <h3>Berufsbezeichnung und berufsrechtliche Regelungen:</h3>
          <p>Berufsbezeichnung: Facharzt für Mund-, Kiefer- und Gesichtschirurgie; Fachzahnarzt für Oralchirurgie</p>
          <p>Zuständige Kammern:</p>
          <ul>
            <li>Zahnärztekammer Niedersachsen, Zeißstr. 11a, 30519 Hannover</li>
            <li>Ärztekammer Niedersachsen, Berliner Allee 20, 30175 Hannover</li>
          </ul>
          <p>Verliehen durch: Bundesrepublik Deutschland</p>
          <p>Es gelten folgende berufsrechtliche Regelungen:</p>
          <ul>
             <li>Gesetz über die Ausübung der Zahnheilkunde</li>
             <li>Berufsordnung für Zahnärzte Niedersachsen</li>
             <li>Bundesärzteordnung</li>
             <li>Berufsordnung der Ärztekammer Niedersachsen</li>
             <li>Niedersächsisches Kammergesetz für die Heilberufe</li>
             <li>Gebührenordnung für Ärzte (GOÄ)</li>
             <li>Gebührenordnung für Zahnärzte (GOZ)</li>
          </ul>
          <p>Die Regelungen können bei den zuständigen Kammern eingesehen werden: <a href="https://zkn.de" target="_blank" rel="noopener noreferrer">www.zkn.de</a> und <a href="https://www.aekn.de" target="_blank" rel="noopener noreferrer">www.aekn.de</a></p>
          
          <h3>Angaben zur Berufshaftpflichtversicherung:</h3>
          <p>Name und Sitz des Versicherers:<br> Nürnberger Allgemeine Versicherungs-AG<br> Ostendstraße 100, 90334 Nürnberg</p>
          <p>Geltungsraum der Versicherung: Deutschland</p>

          <h3>Haftungsausschluss (Disclaimer):</h3>
          <p><strong>Haftung für Inhalte</strong></p>
          <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          <p><strong>Haftung für Links</strong></p>
          <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
          <p><strong>Urheberrecht</strong></p>
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          
          <!-- Add other sections like Photo credits etc. if needed -->

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Set page title and meta description
useHead({
  title: 'Impressum - MKG Verden',
  meta: [
    { name: 'description', content: 'Impressum der MKG-Praxis Verden, Dr. Malte von Boetticher.' }
  ]
})
</script>

<style scoped>
/* Add specific styles if needed */
.prose h3 {
 margin-top: 1.5em;
 margin-bottom: 0.5em;
}
</style> 