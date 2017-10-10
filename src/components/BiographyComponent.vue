<template>
<div class="content">
  <HeaderView class="is-hidden-desktop" />
  <div><h1 class="uk-heading-line"><span>About me</span></h1>
  <p v-html="biography"></p>
</div>
</div>
</template>

<script>
import HeaderView from '@/components/HeaderComponent.vue'
export default {
  data () {
    return {
      biography: this.$store.getters.getSection('bio')['biography']
    }
  },
  components: {
    HeaderView
  }
}
</script>

<style scoped>
</style>
