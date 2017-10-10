import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function load (component) {
  return () => import(`@/components/${component}.vue`)
}

export default new Router({
  routes: [
    { path: '/', component: load('BiographyComponent') },
    { path: '/education', component: load('EducationComponent') },
    { path: '/employment', component: load('EmploymentComponent') },
    { path: '/other', component: load('MultiComponent') },
    { path: '/portfolio', component: load('PortfolioComponent') },
    { path: '/education', component: load('EducationComponent') }
  ]
})
