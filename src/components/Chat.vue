<template>
  <div>
      <MessageArea/>
      <SubmitMessage/>
  </div>
</template>

<script>
  import MessageArea from '@/components/MessageArea.vue'
  import SubmitMessage from '@/components/SubmitMessage.vue'


  export default {
    components: {
      MessageArea,
      SubmitMessage
    },
    name: 'Chat'
  }
</script>