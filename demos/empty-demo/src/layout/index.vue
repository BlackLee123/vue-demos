<script setup lang="ts">
import { RouterView } from 'vue-router'
import { theme } from 'ant-design-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
console.log('dark', isDark.value)
const toggleDark = useToggle(isDark)
const { useToken } = theme
const { token } = useToken()
</script>
<template>
  <a-layout>
    <a-layout-header
      :style="{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        display: 'flex',
        background: `${token.colorBgLayout}`,
        'border-bottom': `1px solid ${token.colorBorder}`
      }"
    >
      <a-dropdown>
        <div style="display: flex; align-items: center; justify-content: center">
          <img
            style="dispaly: block; flex: 1"
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            height="24"
            width="100"
          />
        </div>
        <template #overlay>
          <a-menu style="width: 100vw">
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <div>
        <a-button type="primary" @click="toggleDark()">{{ isDark ? '暗黑' : '亮色' }}</a-button>
      </div>
    </a-layout-header>
    <a-layout-content style="max-width: 1200px; margin: 0 auto; height: 100vh">
      <router-view />
    </a-layout-content>
    <a-layout-footer style="padding: 0">
      <footer
        :style="{
          height: '48px',
          'line-height': '48px',
          'border-top': `1px solid ${token.colorBorder}`,
          display: 'flex',
          'justify-content': 'space-between',
          'max-width': '1200px',
          margin: '0 auto'
        }"
      >
        <div>copyright</div>
        <div>feishuqun</div>
      </footer>
    </a-layout-footer>
  </a-layout>
</template>
