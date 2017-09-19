<template>
<div class="content">
  <h1 class="uk-heading-line"><span>Honors</span></h1>
  <div class="media" v-for="honor in honors">
    <div class="media-left">
      <TimelineComponent :start="honor.start" :end="honor.end"></TimelineComponent>
    </div>
    <div class="media-content">
      <div class="content">
        <p class="title is-4">{{honor.name}}</p>
        <p class="subtitle">{{honor.auspices}}</p>
        <p>{{honor.description}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import TimelineComponent from './TimelineComponent'
export default {
  props: ['honors'],
  components: {'TimelineComponent': TimelineComponent}
}
</script>

<style scoped>
.media {
  border: none;
}
</style>
