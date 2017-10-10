<template>

<div class="content">
  <h1 class="uk-heading-line"><span>Education</span></h1>

  <div class="cvitem" v-for="school in edu">
    <article class="media">
      <div class="media-left">
        <TimelineView :start="school.start" :end="school.end"></TimelineView>
      </div>
      <div class="media-content">
        <div class="content">

          <p class="title is-4 is-capitalized">
              <!-- <figure >
                <img class="image is-16x16 is-pulled-right" :src="getImage(school.website, 1)" alt="Image">
              </figure> -->
            {{school.name}}
            <a class="icon fa fa-link" :href="school.website"></a>
          </p>
          <p class="subtitle is-capitalized">
          <span class="is-capitalized has-text-weight-light">{{school.degree}}</span>
          <span>{{school.major}}</span>
        </p>
        <p>{{school.description}}</p>
          <p class="uk-heading-line has-text-weight-light is-uppercase"><span>Coursework</span></p>
          <dl class="course" v-for="course in school.coursework">
            <dt><span>{{course.name}}</span> <span class="has-text-weight-light">{{course.number}}</span></dt>
            <dd class="course-detail">{{course.description}}</dd>
          </dl>
        </div>
      </div>
    </article>
  </div>
</div>
</template>

<script>
import TimelineView from './TimelineComponent'
export default {
  data () {
    return {
      edu: this.$store.getters.getSection('education')
    }
  },
  components: {'TimelineView': TimelineView},
  methods: {
    getImage (url, type) {
      return 'https://plus.google.com/_/favicon?domain_url=' + url
    }
  }
}
</script>

<style scoped>
.course-detail {
  margin-left: 0;
}
</style>
