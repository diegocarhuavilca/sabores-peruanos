<script setup lang="ts">
await useConfigureI18n()
</script>

<template>
  <div class="max-w-7xl mx-auto ">
    <NuxtLayout>
      <AppHeader />
      <NuxtPage />
      <AppFooter />
    </NuxtLayout>
  </div>
</template>
