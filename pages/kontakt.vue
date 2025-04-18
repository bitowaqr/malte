<template>
  <div>
    <!-- Header Section -->
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-gray-800 text-center">Kontakt & Anfahrt</h1>
        <p class="text-lg text-gray-600 mt-4 text-center max-w-3xl mx-auto">
          Wir freuen uns auf Ihre Kontaktaufnahme!
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Details & Hours -->
          <div class="bg-white p-8 rounded-lg shadow">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">So erreichen Sie uns</h2>
            
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-blue-700 mb-2">Adresse:</h3>
              <p>MKG Verden | Dr. Malte von Boetticher</p>
              <p>Untere Straße 30</p>
              <p>27283 Verden / Aller</p>
            </div>

            <div class="mb-6">
              <h3 class="text-lg font-semibold text-blue-700 mb-2">Telefon & E-Mail:</h3>
              <p>Tel: <a href="tel:+494231930606" class="text-blue-600 hover:underline">04231 / 93 06 06</a></p>
              <p>Fax: 04231 / 93 06 08</p>
              <p>Mail: <a href="mailto:info@mkg-verden.de" class="text-blue-600 hover:underline">info@mkg-verden.de</a></p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-blue-700 mb-2">Sprechzeiten:</h3>
              <ul class="list-disc pl-5 text-gray-700">
                <li>Mo: 08:00 - 14:00</li>
                <li>Di: 08:00 - 13:00 / 13:30 - 16:00</li>
                <li>Mi: 08:00 - 14:00</li>
                <li>Do: 08:00 - 13:00 / 13:30 - 16:00</li>
                <li>Fr: 08:00 - 13:00</li>
              </ul>
              <p class="mt-2 text-sm text-gray-500">(Termine nur nach Vereinbarung)</p>
            </div>
             <!-- Optional: Contact Form Placeholder -->
             <!-- <div class="mt-8 border-t pt-6">
               <h3 class="text-lg font-semibold text-blue-700 mb-4">Nachricht senden</h3>
               <p class="text-sm text-gray-500">[Kontaktformular hier einfügen, falls gewünscht]</p>
             </div> -->
          </div>

          <!-- Map & Directions -->
          <div class="bg-white p-8 rounded-lg shadow">
             <h2 class="text-2xl font-semibold text-gray-800 mb-6">Ihr Weg zu uns</h2>
             
             <!-- Map Placeholder/Embed -->
             <div class="aspect-w-16 aspect-h-9 mb-6 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                <!-- Replace with actual map embed iframe -->
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2405.6938543052406!2d9.229716673263564!3d52.91793852951407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b0e4cf452973a5%3A0x5411473ed55e7dc8!2sUntere+Str.+30%2C+27283+Verden+(Aller)%2C+Deutschland!5e0!3m2!1sde!2sde!4v1483618715506&" 
                  width="100%" 
                  height="300" 
                  style="border:0;"
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  class="rounded"
                ></iframe>
             </div>

             <div>
               <h3 class="text-lg font-semibold text-blue-700 mb-2">Parken & Anfahrt:</h3>
               <p class="text-gray-700">
                 Unsere Praxis befindet sich direkt gegenüber dem Verdener Dom in der Unteren Straße 30. Parkmöglichkeiten finden Sie in den umliegenden Straßen oder im Parkhaus [Name des Parkhauses, falls bekannt] in kurzer Gehdistanz.
                 [Weitere Details zur Anfahrt mit ÖPNV hinzufügen, falls relevant]
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