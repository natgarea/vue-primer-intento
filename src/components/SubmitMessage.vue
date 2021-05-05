<template>
  <div class="">
       <div class="d-flex justify-content-between py-2 px-5">
          <div>
            <textarea :value="messageContent" @keyup.enter="updateContent"></textarea>
          </div>
          <div>
            <p class="h1"><b-icon-arrow-right-circle-fill variant="primary" @click="updateContent">
              </b-icon-arrow-right-circle-fill></p>
          </div>
        </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default {
    name: 'SubmitMessage',
    computed: {
      ...mapState({
        messageContent: state => state.messageContent
      })
    },
    methods: {
      ...mapMutations(['setMessage']),
      ...mapActions(['sendMessage']),
      ...mapMutations(['loadMessages']),
      ...mapActions(['getMessages']),
      updateContent (e) {
          this.$store.commit('updateContent', e.target.value)
          this.sendMessage()
      }
    },
    updated() {
      this.getMessages()
    }
    // no tienen un hr sino un border

  }
</script>