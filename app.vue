<script lang="ts" setup>
import './assets/tailwind.scss';
useHead({
  titleTemplate: 'My App - %s', // or, title => `My App - ${title}`
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: '花椒和邻居的技术博客,展现工作中不断总结和踩坑的前端技术,分享前端最新技术,网路技术难点.' },
    { name: 'keywords', content: 'JavaScript,js,ES6,TypeScript,vue,nuxt,nuxt3,花椒和邻居,react,typecho,php,blog,博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,' },
    { name: 'author', content: '花椒和邻居:layoutfeng@gmail.com' },
    { name: 'robots', content: 'noodp' },
  ],
  bodyAttrs: {
    class: 'test'
  }
})
/*
const nuxtApp = useNuxtApp()
nuxtApp.provide('hello', (name) => `Hello ${name}!`)

console.log(nuxtApp.$hello('name')) // Prints "Hello name!"
*/
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
