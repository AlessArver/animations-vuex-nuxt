import Vue from 'vue'

const state = () => ({
  text: ''
})

const mutations = {
  setText(state, text) {
    state.text = text
  }
}

const actions = {
  setText({ commit }, text) {
    return commit('setText', text)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
