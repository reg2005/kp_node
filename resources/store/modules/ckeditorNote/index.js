import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const state = {
  show: null,
}

const store = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

export default store