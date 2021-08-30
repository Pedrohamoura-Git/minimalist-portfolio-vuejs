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
// (V) - CORRIGIR O TAMANHO DOS CONTAINER NA HOMEPAGE,
// (V) - CORRIGIR AS IMAGENS MOBILE NA PÁGINA DE PORTFÓLIO,
// (V) - ATUALIZAR A DESCRIÇÃO DOS DOIS ÚLTIMOS PROJETOS,
// () - SUBIR O PROJETO PARA O NETLIFLY,
//  (V) - ADICIONAR TODOS OS NOMES NO ProjectNavbar,
//  () - FAZER OS NOMES ANIMADOS APARECEREM NA BUILD FINAL,
// () - CONFERIR SE O FORMULÁRIO ESTÁ FUNCIONANDO CORRETAMENTE,

// OPTIONALS 
// (X) - ADICIONAR TRANSIÇÃO NO ROUTER-VIEW,
// () - USAR O FIREBASE PARA ARMAZENAR O ARRAY DE OBJETO COM OS PROJETOS,
// () - ADICIONAR PAGINATION,
// (X) - CORRIGIR O BUG COM A TRANSIÇÃO DO NAVLIST,