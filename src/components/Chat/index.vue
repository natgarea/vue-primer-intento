<template>
  <div>
      <MessageArea/>
      <SubmitMessage/>
  </div>
</template>

<script>
  import MessageArea from '@/components/Chat/MessageArea'
  import SubmitMessage from '@/components/Chat/SubmitMessage'


  export default {
    components: {
      MessageArea,
      SubmitMessage
    },
    name: 'Chat'
  }
</script>