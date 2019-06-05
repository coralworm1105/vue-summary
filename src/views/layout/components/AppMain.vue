<template>
  <section class="app-main" id="appMain">
    <breadcrumb v-if="breadcrumb"></breadcrumb>
    <div class="wrapperBody">
      <transition name="fade" mode="out-in">
        <!-- <router-view :key="key"></router-view> -->

        <router-view></router-view>
      </transition>
    </div>

  </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'AppMain',
  components: {
    Breadcrumb
  },
  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
    breadcrumb() {
      return this.$store.getters.layout.breadcrumb
    }
  }
}
</script>
