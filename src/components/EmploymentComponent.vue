<template>

<div class="content">
  <h1 class="uk-heading-line"><span>Employment</span></h1>

    <div class="cvitem" v-for="employ in employment">
      <article class="media">
        <div class="media-left">
          <TimelineView :start="employ.start" :end="employ.end"></TimelineView>
        </div>
        <div class="media-content">
          <div class="content">

            <p class="title is-4 ">{{employ.name}}
            <a class="icon fa fa-link" :href="employ.website"></a></p>
            <p class="subtitle">{{employ.position}}</p>
            <p>{{employ.description}}</p>
          </div>
        </div>
      </article>

    </div>

</div>
</template>

<script>
import TimelineView from './TimelineComponent'
export default {
  props: ['employment'],
  components: {'TimelineView': TimelineView}
}
</script>

<style scoped>

</style>
