import { createStore } from 'vuex'

export default createStore({
  state: {
    burguerIsActive: false,
  },
  mutations: {
    mutateBurguer(state) {
      state.burguerIsActive = !state.burguerIsActive
    }
  },
  actions: {
  },
  modules: {
  }
})
