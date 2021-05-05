<template>
  <div>
      <div v-for="(message, index) of messages" :key="index">
        <Message :message="message" :index="index"/>
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
    created() {
      this.getMessages()
    }
  }
</script>