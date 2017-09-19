<template>
  <div>
    <router-view></router-view>
    <ToTop></ToTop>
  </div>
</template>

<script>
import ToTop from '@/components/ToTopComponent.vue'
export default {
  name: 'app',
  components: {'ToTop': ToTop}
}
</script>

<style>

</style>
