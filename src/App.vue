<template>
  <div>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        <a class="navbar-item has-text-centered is-primary" v-on:click="openPage('/')">
          <span class="icon">
            <i class="fa fa-home"></i>
          </span>
          <span>{{this.$store.getters.getName}}</span>
        </a>

        <button class="button navbar-burger is-info" id="nav-toggle" v-on:click="menuVisible = !menuVisible" :class="{'is-active': menuVisible}">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu"  id="nav-menu" :class="{'is-active': menuVisible}">
      <div class="navbar-start">
        <a class="navbar-item has-text-centered" v-on:click="menuVisible = !menuVisible, openPage('/education')">Education</a>
        <a class="navbar-item has-text-centered" v-on:click="menuVisible = !menuVisible, openPage('/employment')">Employment</a>
        <a class="navbar-item has-text-centered" v-on:click="menuVisible = !menuVisible, openPage('/portfolio')">Portfolio</a>
        <a class="navbar-item has-text-centered" v-on:click="menuVisible = !menuVisible, openPage('/other')">Other</a>
      </div>
      </div>
    </nav>

    <section class="section">
      <div class="container">
      <HeaderView class="is-hidden-touch"></HeaderView>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      </div>
    </section>
    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderComponent.vue'
import FooterView from '@/components/FooterComponent.vue'
import vitae from '../static/cv.json'
export default {
  name: 'top-page',
  components: {
    HeaderView,
    FooterView
  },
  created () {
    this.$store.commit('setCV', vitae)
  },
  data () {
    return {
      menuVisible: false
    }
  },
  methods: {
    openPage (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.navbar {
  z-index: 1000;
}
.navbar-menu {
  z-index: 1000;
}
.navbar-item:hover {
  color: whitesmoke;
  background-color: #235ebc;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .33s
}
.fade-enter, .fade-leave-to {
  opacity: .3
}
</style>
