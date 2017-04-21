import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

import ckeditorNote from './modules/ckeditorNote'

Vue.use(Vuex)

const state = {
  token: null,
  user: null,
  email: ''
}


// const inBrowser = typeof window !== 'undefined'
//
// // if in browser, use pre-fetched state injected by SSR
// const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    ckeditorNote
  }
})

export default store