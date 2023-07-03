<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { INiceModalHandlers } from 'vue-nice-modal'

console.log('123')

interface IProps extends INiceModalHandlers<string> {
  visible: boolean
  // props you need
  title: string
  content: string
}

interface IEmits {
  (e: 'update:visible', visible: boolean): void
}

const props = defineProps<IProps>()

const emits = defineEmits<IEmits>()

const inner_visible = useVModel(props, 'visible', emits)

const handleOk = () => {
  inner_visible.value = false
  props.callback('confirm', 'abc')
}

const handleCancel = () => {
  inner_visible.value = false
  props.callback('cancel', 'abc')
}
</script>
<template>
  <div>
    <a-modal v-model:visible="inner_visible" :title="title" @ok="handleOk" @cancel="handleCancel">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
