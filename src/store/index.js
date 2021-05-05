import Vue from 'vue'
import Vuex from 'vuex'
import preloadedMessages from '@/assets/data/messages.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    newMessage: {},
    messageContent: ''
  },
  mutations: {
      loadMessages(state, messagesAction) {
        state.messages = messagesAction;
      },
      setMessage(state) {
        state.messages.push({
          "attachment":false,
          "user":"user",
          "logged_as_user":true,
          "timestamp": new Date(),
          "content":state.messageContent});
        state.messageContent = '';
      },
      updateContent (state, content) {
        state.messageContent = content

      }
  },
  actions: {
    getMessages: function({ commit }) {
      commit('loadMessages', preloadedMessages)
    },
    sendMessage: function({ commit }) {
      commit('setMessage', this.state.messageContent)
    }
  },
  modules: {
  }
})
