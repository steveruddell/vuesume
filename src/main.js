import Vue from 'vue'
import App from './App'
import router from './router'

import Bulma from 'bulma/css/bulma.css'
Vue.use(Bulma)

import '../static/custom.css'

import Ripple from 'vue-ripple-directive'
Vue.directive('ripple', Ripple)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
