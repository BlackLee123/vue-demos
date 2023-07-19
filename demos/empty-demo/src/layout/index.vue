<script setup lang="ts">
import { RouterView } from 'vue-router'
import { theme } from 'ant-design-vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import { useRoute } from 'vue-router'

const route = useRoute()

console.log('router', route.name)

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { useToken } = theme
const { token } = useToken()
</script>
<template>
  <a-layout style="">
    <a-layout-header
      :style="{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex'
      }"
    >
      <div
        href="/"
        style="
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: left;
        "
      >
        <a-dropdown>
          <a href="/" style="height: 100%"
            ><img alt="Vue logo" class="logo" src="@/assets/logo.svg" style="height: 50%"
          /></a>

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
      </div>
      <div style="flex: 1"></div>
      <a-space>
        <div>
          <a-button type="primary" @click="toggleDark()">{{ isDark ? '暗黑' : '亮色' }}</a-button>
        </div>
        <div>
          <a-avatar style="background-color: #87d068">
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
        </div>
      </a-space>
    </a-layout-header>
    <a-layout-content style="min-height: 100vh">
      <div style="max-width: 1200px; background-color: aquamarine; margin: 24px auto">
        <router-view />
      </div>
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
          margin: '0 auto',
          padding: '0 8px'
        }"
      >
        <div>copyright</div>
        <div>feishuqun</div>
      </footer>
    </a-layout-footer>
  </a-layout>
</template>
<style scoped lang="less">
.header {
}
</style>
