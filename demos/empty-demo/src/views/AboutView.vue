<script setup lang="ts">
import { theme } from 'ant-design-vue'
const { useToken } = theme
const { token } = useToken()
// :style="{ color: `${token.colorText}` }
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style></style>
