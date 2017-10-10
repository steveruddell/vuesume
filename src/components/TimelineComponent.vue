<template>

<div class="timeline">
  <div class="tag is-medium is-info" v-if="this.end"><span class="hint--bottom" :aria-label="endTooltip">{{endYear}}</span></div>
  <div class="circle" v-if="!this.end"></div>
  <div class="timeline-bar" v-if="(this.end && this.start && (this.end != this.start)) || (!this.end && this.start)">000</div>
  <div class="tag is-medium is-info"v-if="this.start && (this.end != this.start)"><span class="hint--bottom" :aria-label="startTooltip">{{startYear}}</span></div>
</div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['start', 'end'],
  computed: {
    endYear () {
      return moment(this.end).year()
    },
    startYear () {
      return moment(this.start).year()
    },
    startTooltip () {
      return moment(this.start).format('MMMM Do')
    },
    endTooltip () {
      return moment(this.start).format('MMMM Do')
    }
  }
}
</script>

<style scoped>
.tag:hover {
  background-color: #235ebc;
}
.circle {
  border-radius: 15px;
  border: 1px #7a7a7a dashed;
  width: 15px;
  height: 15px;
  margin-left: 4px;
}
</style>
