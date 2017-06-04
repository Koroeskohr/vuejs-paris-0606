import Vue from 'vue'
import Vuex from 'vuex'

import settings from 'lib/settings'

Vue.use(Vuex)

const state = {
  lang: settings.lang,
  currentScene: "scene-test",
  settings: {
    debug: true,
  },
  assets: {
    images: []
  }
}

const mutations = {
  ADD_IMAGE_ASSET(state, image) {
    state.assets.images.push(image)
  },  
  LOAD_SCENE(state, scene) {
    state.currentScene = scene
  }
}

const actions = {
  addImageAsset({commit}, image) {
    commit('ADD_IMAGE_ASSET', image)
  },
  loadScene({commit}, scene) {
    commit('LOAD_SCENE', scene)
  }
}

const getters = {
  textureCount: state => {
    return state.assets.images.length
  },
  textureEmpty: state => {
    return state.assets.images.length == 0
  },
}


const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
