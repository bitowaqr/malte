<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="bg-stone-50 py-16 md:py-20 border-b border-stone-200">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">Kontakt & Anfahrt</h1>
        <p class="text-lg text-stone-700 max-w-3xl leading-relaxed">
          Wir freuen uns auf Ihre Kontaktaufnahme und darauf, Sie bald in unserer Praxis begrüßen zu dürfen.
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <!-- Contact Details & Hours -->
          <div class="space-y-8">
            <h2 class="text-3xl font-bold text-stone-800 tracking-tight border-b border-stone-200 pb-4 mb-8">So erreichen Sie uns</h2>
            
            <div>
              <h3 class="text-lg font-semibold text-stone-800 mb-2">Adresse</h3>
              <p class="text-stone-700 leading-relaxed">
                MKG Verden | Dr. Malte von Boetticher<br>
                Untere Straße 30<br>
                27283 Verden / Aller
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-stone-800 mb-2">Telefon & E-Mail</h3>
              <p class="text-stone-700 leading-relaxed">Tel: <a href="tel:+494231930606" class="text-amber-700 hover:text-amber-800 transition-colors duration-200">04231 / 93 06 06</a></p>
              <p class="text-stone-700 leading-relaxed">Fax: 04231 / 93 06 08</p>
              <p class="text-stone-700 leading-relaxed">Mail: <a href="mailto:info@mkg-verden.de" class="text-amber-700 hover:text-amber-800 transition-colors duration-200">info@mkg-verden.de</a></p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-stone-800 mb-3">Sprechzeiten</h3>
              <ul class="space-y-1 text-stone-700 leading-relaxed">
                <li>Mo: 08:00 - 14:00</li>
                <li>Di: 08:00 - 13:00 | 13:30 - 16:00</li>
                <li>Mi: 08:00 - 14:00</li>
                <li>Do: 08:00 - 13:00 | 13:30 - 16:00</li>
                <li>Fr: 08:00 - 13:00</li>
              </ul>
              <p class="mt-3 text-sm text-stone-500">(Termine nur nach Vereinbarung)</p>
            </div>
            <!-- Optional: Contact Form Placeholder/Implementation -->
            <!-- 
            <div class="pt-8 border-t border-stone-200">
              <h3 class="text-lg font-semibold text-stone-800 mb-4">Nachricht senden</h3>
              [Kontaktformular hier]
            </div> 
            -->
          </div>

          <!-- Map & Directions -->
          <div class="space-y-8">
             <h2 class="text-3xl font-bold text-stone-800 tracking-tight border-b border-stone-200 pb-4 mb-8">Ihr Weg zu uns</h2>
             
             <!-- Map Embed -->
             <div class="aspect-video border border-stone-200 rounded-lg overflow-hidden shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2405.6938543052406!2d9.229716673263564!3d52.91793852951407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b0e4cf452973a5%3A0x5411473ed55e7dc8!2sUntere+Str.+30%2C+27283+Verden+(Aller)%2C+Deutschland!5e0!3m2!1sde!2sde!4v1483618715506&" 
                  width="100%" 
                  height="100%" 
                  style="border:0;"
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
             </div>

             <div>
               <h3 class="text-lg font-semibold text-stone-800 mb-2">Parken & Anfahrt</h3>
               <p class="text-stone-700 leading-relaxed">
                 Unsere Praxis befindet sich direkt gegenüber dem Verdener Dom in der Unteren Straße 30. Parkmöglichkeiten finden Sie in den umliegenden Straßen. Das Parkhaus "Am Dom" ist ebenfalls nur wenige Gehminuten entfernt.
                 <!-- [Weitere Details zur Anfahrt mit ÖPNV hinzufügen, falls relevant] -->
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Set page title and meta description
useHead({
  title: 'Kontakt & Anfahrt - MKG Verden',
  meta: [
    { name: 'description', content: 'Kontaktieren Sie die MKG-Praxis Verden. Hier finden Sie Adresse, Telefonnummer, Öffnungszeiten und Anfahrtsinformationen.' }
  ]
})
</script> 