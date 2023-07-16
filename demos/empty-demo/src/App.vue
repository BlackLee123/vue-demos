<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { theme } from 'ant-design-vue'
import zh_CN from 'ant-design-vue/es/locale/zh_CN'
import { useDark } from '@vueuse/core'

const isDark = useDark()
const algorithm = computed(() => {
  return isDark.value
    ? [theme.darkAlgorithm, theme.compactAlgorithm]
    : [theme.defaultAlgorithm, theme.compactAlgorithm]
})
console.log('isDark', isDark.value, algorithm.value)
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        borderRadius: `2px`
      },
      algorithm: algorithm
    }"
    :locale="zh_CN"
    component-size="middle"
  >
    <router-view></router-view>
  </a-config-provider>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
