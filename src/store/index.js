import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    showNavList: false,
    showBurger: true,
    projectId: 0,
  },
  mutations: {
    mutateShowNavList(state, payload) {
      state.showNavList = payload
    },
    mutateShowBurguer(state, payload) {
      state.showBurger = payload
    },
    mutateProjectId(state, payload) {
      state.projectsIds = payload
    },
  },
  actions: {},
  modules: {}
})