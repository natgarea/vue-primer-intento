<template>
  <div>

    <b-button v-b-modal.modal-1 variant="primary" class="m-5"><h1>Chat</h1></b-button>

    <b-modal
      id="modal-1"
      size="lg"
      title="Comentarios"
      centered hide-footer>
      <Chat />
    </b-modal>

  </div>
</template>

<script>
  import Chat from '@/components/Chat'

  export default {
    components: {
      Chat
    },
    name: 'Modal'
  }
</script>