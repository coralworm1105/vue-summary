<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <navbar></navbar>
    <div class="main-container">
      <sidebar class="sidebar-container" v-if="layout.sidebar"></sidebar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    layout() {
      return this.$store.state.app.layout
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
