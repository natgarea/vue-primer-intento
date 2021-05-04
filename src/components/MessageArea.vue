<template>
  <div>
    <p>{{messages.length}}</p>
      <div v-for="(message, index) of messages" :key="index">
        <p>{{index}} - {{message.user}}</p>
        <Message :message="message"/>
        
      </div>
  </div>
</template>

<script>
  import Message from '@/components/Message.vue'
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default {
    components: {
      Message
    },
    name: 'MessageArea',
    computed: {
      ...mapState(['messages']),
      sortedMessages (state) {
        return state.messages.sort((x, y) => x.timestamp - y.timestamp);
      }
    },
    methods: {
      ...mapMutations(['loadMessages']),
      ...mapActions(['getMessages'])
    },
    mounted() {
      this.getMessages()
    }
  }
</script>