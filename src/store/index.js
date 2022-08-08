import Vue from 'vue'
import Vuex from 'vuex'

import ChatStore from './Chat'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser : null,
    socket : null,
  },
  
  mutations: {

    setCurrentUser(state, user) {
      state.currentUser = user
    },

    setSocket(state , socket) {
      state.socket = socket;
    }
    
  },

  actions: {
  },
  modules: {
    ChatStore,
  }
})
