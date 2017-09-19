<template>

<div class="timeline">
  <div class="tag is-medium is-info" v-if="this.end">{{this.end}}</div>
  <div class="circle" v-if="!this.end"></div>
  <div class="timeline-bar" v-if="(this.end && this.start && (this.end != this.start)) || (!this.end && this.start)">000</div>
  <div class="tag is-medium is-info"v-if="this.start && (this.end != this.start)">{{this.start}}</div>
</div>
</template>

<script>
export default {
  props: ['start', 'end']
}
</script>

<style scoped>
.tag:hover {
  background-color: #235ebc;
}
.circle {
  border-radius: 15px;
  border: 1px #bfbfbf dashed;
  width: 15px;
  height: 15px;
  margin-left: 4px;
}
</style>
