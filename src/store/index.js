import Vue from 'vue'
import Vuex from 'vuex'
import preloadedMessages from '@/assets/data/messages.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
      loadMessages(state, messagesAction) {
        state.messages = messagesAction;
      },
  },
  actions: {
    getMessages: function({ commit }) {
      commit('loadMessages', preloadedMessages)
    }
  },
  modules: {
  }
})
