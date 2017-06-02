import Vue from 'vue'
import Vuex from 'vuex'

import settings from 'lib/settings'

Vue.use(Vuex)

const state = {
  lang: settings.lang,

  assets: {
    images: {}
  }
}

const mutations = {
  ADD_IMAGE_ASSET(state, imageUrl) {
    state.assets.images.push(imageUrl)
  }
}

const actions = {
  addImageAsset({commit}, imageUrl) {
    commit('ADD_IMAGE_ASSET', imageUrl)
  }
}


const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
