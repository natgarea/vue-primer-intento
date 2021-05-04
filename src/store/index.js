import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    attachments: [],
    messages: []
  },
  mutations: {
    loadAttachments(state, attachmentsAction) {
      state.attachments = attachmentsAction;
    },
    loadMessages(state, messagesAction) {
      state.messages = messagesAction;
    }
  },
  actions: {
    getAttachments: async function({ commit }) {
      const data = await fetch('');
      const attachments = await data.json();
      commit('loadAttachments', attachments)
    },
    getMessages: async function({ commit }) {
      const data = await fetch('');
      const messages = await data.json();
      commit('loadMessages', messages)
    }
  },
  modules: {
  }
})
