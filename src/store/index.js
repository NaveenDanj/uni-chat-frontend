import Vue from 'vue'
import Vuex from 'vuex'

import ChatStore from './Chat';
import ContactStore from './Contact';

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
    chat : ChatStore,
    contact : ContactStore
  }

});
