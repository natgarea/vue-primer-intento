<template>
  <div>
    <p>Hola</p>
      <p>hola {{message.user}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    props: ['message']
  }
</script>