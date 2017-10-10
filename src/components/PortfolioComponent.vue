<template>

<div class="content">
  <h1 class="uk-heading-line"><span>Portfolio</span></h1>

    <div class="cvitem" v-for="folio in portfolio">
      <article class="media">
        <div class="media-left">
          <TimelineComponent :start="folio.start" :end="folio.end"></TimelineComponent>
        </div>
        <div class="media-content">
          <div class="content">

            <p class="title is-4 ">{{folio.name}}
            <a class="icon fa fa-link" :href="folio.website"></a></p>
            <p class="subtitle">{{folio.tagline}}</p>
            <p>{{folio.description}}</p>
          </div>
        </div>
      </article>

    </div>

</div>
</template>

<script>
import TimelineComponent from './TimelineComponent'
export default {
  data () {
    return {
      portfolio: this.$store.getters.getSection('portfolio')
    }
  },
  components: {'TimelineComponent': TimelineComponent}
}
</script>

<style scoped>

</style>
