<template>
  <div class="container p-5">
    <b-button v-b-modal.modal-1>Abrir modal</b-button>

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
  import Chat from '@/components/Chat.vue'

  export default {
    components: {
      Chat
    },
    name: 'Modal'
  }
</script>