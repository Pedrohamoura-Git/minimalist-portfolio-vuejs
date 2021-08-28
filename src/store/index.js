import { createStore } from 'vuex'

export default createStore({
  state: {
    showNavList: false,
    showBurger: true,
  },
  mutations: {
    mutateShowNavList(state, payload) {
      state.showNavList = payload
    },
    mutateShowBurguer(state, payload) {
      state.showBurger = payload
    }
  },
  actions: {
    // CRIAR UMA ACTION COM SWICTH QUE CHAME UMA MUTATION A DEPENDER DO INDICE PASSADO  
  },
  modules: {
  }
})
