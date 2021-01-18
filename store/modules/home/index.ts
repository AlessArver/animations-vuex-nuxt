const state = () => ({
  text: ""
});

const mutations = {
  setText(state, text) {
    state.text = text;
  }
};

const actions = {
  setText({ commit }, text) {
    console.log("actions", text);
    return commit("setText", text);
  }
};

const getters = {
  text: state => state.text
};

export default {
  state,
  mutations,
  actions,
  getters
};
