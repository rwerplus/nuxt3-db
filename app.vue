<script lang="ts" setup>
import './assets/tailwind.scss';
useHead({
  titleTemplate: 'My App - %s', // or, title => `My App - ${title}`
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>


<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang="scss">
body {
  @apply bg-gray-50 dark:bg-gray-800;
}
.global-text {
  @apply text-gray-900 dark:text-gray-50;
}
</style>
