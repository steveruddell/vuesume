<template src="../../static/theme/base/employment.html"></template>

<script>
import TimelineView from './TimelineComponent'
export default {
  computed: {
    employment () {
      for (var item in this.$store.getters.getSection('employment').items) {
        this.collapse.push(false)
        item = item + 0
      }
      return this.$store.getters.getSection('employment')
    }
  },
  data () {
    return {
      collapse: []
    }
  },
  methods: {
    toggleActivities (index) {
      this.$set(this.collapse, index, !this.collapse[index])
      console.log(this.collapse)
    },
    isVisible (index) {
      console.log('vis?', this.collapse[index])
      return this.collapse[index]
    }
  },
  components: {'TimelineView': TimelineView}
}
</script>

<style scoped>
</style>
