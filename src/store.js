import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cv: []
  },
  mutations: {
    setCV (state, value) {
      state.cv = value
    }
  },
  getters: {
    getCV: state => state.cv,
    getSection: (state, getters) => (section) => {
      return state.cv[section]
    },
    getName: state => state.cv['bio']['firstname'] + ' ' + state.cv['bio']['lastname']
  }
})
