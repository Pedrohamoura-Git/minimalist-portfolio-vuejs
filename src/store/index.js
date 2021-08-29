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

// (V) - FINALIZAR A PÁGINA DE PORTFOLIO, 
// (V) - REMOVER A IMAGEM HERO DE CADA PÁGINA DE PROJETO,
// () - ADICIONAR PAGINATION,
// () - CORRIGIR O BUG COM A TRANSIÇÃO DO NAVLIST,
// () - ADICIONAR TRANSIÇÃO NO ROUTER-VIEW,
// () - ATUALIZAR A DESCRIÇÃO DOS DOIS ÚLTIMOS PROJETOS,
// () - USAR O FIREBASE PARA ARMAZENAR O ARRAY DE OBJETO COM OS PROJETOS,
// () - SUBIR O PROJETO PARA O NETLIFLY,
// () - CONFERIR SE O FORMULÁRIO ESTÁ FUNCIONANDO CORRETAMENTE,