<template>
  <div>
    <div class="">
      <div class="section">
        <BioTop class="animated fadeIn slideInDown" :bio="cv.bio" :websites="cv.websites"></BioTop>
      </div>

        <nav class="navbar is-hidden-mobile is-info animated fadeIn slideInDown">

          <div class="navbar-brand">
            <button class="button navbar-burger" @click="menuVisible = !menuVisible" :class="{'is-active': menuVisible}">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div class="navbar-menu animated" :class="{'is-active': menuVisible, bounceIn: menuVisible}">

          <a v-ripple="'#3273dc'" class="navbar-item has-text-centered" v-on:click="jumper('.education')">Education</a>
          <a v-ripple="'#3273dc'" class="navbar-item has-text-centered" v-on:click="jumper('.employment')">Employment</a>
          <a v-ripple="'#3273dc'" class="navbar-item has-text-centered" v-on:click="jumper('.skills')">Skills</a>
          <a v-ripple="'#3273dc'" class="navbar-item has-text-centered" v-on:click="jumper('.portfolio')">Portfolio</a>
          <a v-ripple="'#3273dc'" class="navbar-item has-text-centered" v-on:click="jumper('.languages')">Languages</a>
          <a v-ripple="'#3273dc'" class="navbar-item has-text-centered" v-on:click="jumper('.honors')">Honors</a>
          </div>
        </nav>

      <div class="section">
      <div class="container">
        <div class="columns is-8 is-variable is-centered">
          <div class="column is-half animated fadeIn slideInLeft">
            <Education class="education" :edu="cv.education"></Education>
            <HonorsView class="honors" :honors="cv.honors"></HonorsView>
          </div>
          <div class="column is-half animated fadeIn slideInRight">
            <Employment class="employment" :employment="cv.employment"></Employment>
            <PortfolioView class="portfolio" :portfolio="cv.portfolio"></PortfolioView>
            <SkillsView class="skills" :skills="cv.skills"></SkillsView>
            <LanguagesView class="languages" :languages="cv.languages"></LanguagesView>
          </div>
        </div>
    </div>
    </div>


    </div>
    <FooterView></FooterView>
  </div>
</template>

<script>
import BioTop from '@/components/HeaderComponent.vue'
import Education from '@/components/EducationComponent.vue'
import Employment from '@/components/EmploymentComponent.vue'
import FooterView from '@/components/FooterComponent.vue'
import SkillsView from '@/components/SkillsComponent.vue'
import HonorsView from '@/components/HonorsComponent.vue'
import LanguagesView from '@/components/LanguagesComponent.vue'
import PortfolioView from '@/components/PortfolioComponent.vue'
import jump from 'jump.js'
import vitae from '../../static/cv.json'
export default {
  name: 'hello',
  components: {
    'BioTop': BioTop, 'Education': Education, 'Employment': Employment, 'FooterView': FooterView, 'SkillsView': SkillsView, 'HonorsView': HonorsView, 'LanguagesView': LanguagesView, 'PortfolioView': PortfolioView },
  methods: {
    jumper (target) {
      jump(target)
    }
  },
  created () {
    this.cv = vitae
  },
  data () {
    return {
      menuVisible: false,
      cv: {}
    }
  }
}
</script>

<style scoped>
.navbar-item {
  padding: 1em;
  color: whitesmoke;
  font-weight: bold;
}
.navbar-item:hover {
  color: whitesmoke;
  background-color: #235ebc;
}
</style>
