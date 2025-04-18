<template>
  <NuxtLayout name="default">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useQuery } from '~/composable/useQuery';

const SITE_SETTING_QUERY = `
  query SiteSettingQuery {
    siteSetting {
      siteTitle
    }
  }
`;

const { data, pending, error } = await useQuery(SITE_SETTING_QUERY);

if (error.value) {
  console.error("DatoCMS Fetch Error (app.vue):", error.value);
}
</script>

<style>
/* Global styles can go here or in assets/css */
</style>
