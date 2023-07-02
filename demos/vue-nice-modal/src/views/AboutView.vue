<script setup lang="ts">
import { create } from 'vue-nice-modal'
import MyModal from './MyModal.vue'

  const myModal = create(MyModal)

const showModal = () => {
  myModal
    .show({
      title: 'Hello， world!',
      content: 'This is a nice modal.'
    })
    .then((result) => {
      console.log('Confirmed! Result:', result)
    })
    .catch((error) => {
      console.error('Rejected! Error:', error)
    })
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
