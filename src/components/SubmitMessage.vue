<template>
  <div>
    <form>
      <b-row class="py-2 px-5">
          <b-col md="11" class="p-0 mt-1">
            <b-form-input type="text" v-model="messageContent"></b-form-input>
          </b-col>
          <b-col md="1">
              <b-button variant="link" class="border-0 p-0">
                <p class="h1 mb-0">
                  <b-icon-arrow-right-circle-fill variant="primary" @click="sendMessage">
                  </b-icon-arrow-right-circle-fill>
                </p>
              </b-button>
          </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
  import {mapMutations, mapActions} from 'vuex';

  export default {
    name: 'SubmitMessage',
    computed: {
      messageContent: {
        get () {
          return this.$store.state.messageContent
        },
        set (value) {
          this.$store.commit('updateContent', value)
          console.log(this.messageContent)
        }
      }
    },
    methods: {
      ...mapMutations(['setMessage', 'loadMessages']),
      ...mapActions(['sendMessage', 'getMessages']),
        updateContent(e) {
          this.$store.commit("updateContent",e.target.value);
        }
    },
    updated() {
      this.getMessages()
    }
    // no tienen un hr sino un border

  }
</script>