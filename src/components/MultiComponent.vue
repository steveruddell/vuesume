<template>
<div class="content">
  <div class="columns is-multiline is-desktop">
    <SkillsView class="column is-6"/>
    <HonorsView class="column is-6"/>
    <LanguagesView class="column is-6"/>
  </div>
</div>
</template>

<script>
import SkillsView from '@/components/SkillsComponent.vue'
import HonorsView from '@/components/HonorsComponent.vue'
import LanguagesView from '@/components/LanguagesComponent.vue'
export default {
  components: {
    SkillsView,
    HonorsView,
    LanguagesView
  },
  data () {
    return {
      skills: this.$store.getters.getSection('skills')
    }
  }
}
</script>

<style scoped>

</style>
