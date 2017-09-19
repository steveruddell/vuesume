import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/HomepageComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomepageComponent',
      component: Homepage
    }
  ]
})
