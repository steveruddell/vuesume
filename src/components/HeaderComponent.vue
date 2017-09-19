<template>
  <div class="content">

    <!-- desktop layout -->
    <div class="is-hidden-mobile tile is-ancestor">

      <article class="tile is-child is-4">
        <figure class="image profile-image is-128x128 is-pulled-left" v-if="bio.image">
          <img :src="bio.image" alt="profile">
        </figure>
        <p class="title"><span class="has-text-weight-light">{{bio.firstname}}</span> <span>{{bio.lastname}}</span></p>
        <p class="subtitle">{{bio.brief}}</p>
      </article>

      <div class="tile is-2 is-vertical">
        <div class="tile is-child">
          <p class="heading">{{bio.tiles.one.title}}</p>
          <p class="subtitle">{{bio.tiles.one.value}}</p>
        </div>
        <div class="tile is-child">
          <p class="heading">{{bio.tiles.two.title}}</p>
          <p class="subtitle">{{bio.tiles.two.value}}</p>
        </div>
      </div>
      <div class="tile is-2 is-vertical">
        <div class="tile is-child">
          <p class="heading">{{bio.tiles.three.title}}</p>
          <p class="subtitle">{{bio.tiles.three.value}}</p>
        </div>
        <div class="tile is-child">
          <p class="heading">{{bio.tiles.four.title}}</p>
          <p class="subtitle">{{bio.tiles.four.value}}</p>
        </div>
      </div>

      <div class="tile is-4 is-child">
        <div class="tags">
          <a class="tag is-info is-medium" v-for="site in websites" :href="site.profile">
            <i class="fa" v-bind:class="getIcon(site.profile)"> {{site.name}}</i>
          </a>
        </div>
      </div>
    </div>

    <!-- mobile layout -->
    <div class="is-hidden-desktop is-hidden-tablet tile is-ancestor is-vertical">

      <div class="tile is-parent is-vertical">
      <div class="tile is-child">
        <figure class="image profile-image is-128x128 is-pulled-left" v-if="bio.image">
          <img :src="bio.image">
        </figure>
        <p class="title"><span class="has-text-weight-light">{{bio.firstname}}</span> <span>{{bio.lastname}}</span></p>
        <p class="subtitle">{{bio.brief}}</p>
      </div>
      <br>
      <div class="tile is-parent is-vertical">
        <div class="tile is-child">
          <p class="heading">{{bio.tiles.one.title}}</p>
          <p class="subtitle">{{bio.tiles.one.value}}</p>
        </div>
        <div class="tile is-child">
          <p class="heading">{{bio.tiles.two.title}}</p>
          <p class="subtitle">{{bio.tiles.two.value}}</p>
        </div>
        <div class="tile is-child">
          <p class="heading">{{bio.tiles.three.title}}</p>
          <p class="subtitle">{{bio.tiles.three.value}}</p>
        </div>
        <div class="tile is-child">
          <p class="heading">{{bio.tiles.four.title}}</p>
          <p class="subtitle">{{bio.tiles.four.value}}</p>
        </div>
      </div>
      <br>
      <div class="tile is-child">
        <div class="tags">
          <a class="tag is-info is-medium" v-for="site in websites" :href="site.profile">
            <i class="fa" v-bind:class="getIcon(site.profile)"> {{site.name}}</i>
          </a>
        </div>
      </div>
      </div>
    </div>

</div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'headerview',
  props: ['bio', 'websites'],
  methods: {
    getIcon (profile) {
      if (_.includes(profile, 'twitter')) {
        return 'fa-twitter'
      } else if (_.includes(profile, 'facebook')) {
        return 'fa-facebook'
      } else if (_.includes(profile, 'linkedin')) {
        return 'fa-linkedin'
      } else if (_.includes(profile, 'github')) {
        return 'fa-github'
      }
      return 'fa-bug'
    }
  }
}
</script>

<style scoped>
.level-item:not(level-item:last-child) {
  padding-bottom: 1em;
}
.level-item .title{
  font-size: 16px;
}
a.tag:hover {
  background-color: #235ebc;
  text-decoration: none;
}
.tile {
  padding: 0px 10px;
}
.profile-image {
  /*border: 1px #235ebc solid;*/
  outline-style: solid;
  outline-width: 1px;
  outline-color: #235ebc;
  padding: 2px;
}
</style>
