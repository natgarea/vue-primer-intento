<template>
  <div>
    <ul class="list-unstyled">
    <b-media v-if="!message.attachment" tag="li">
      <template #aside>
        <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
      </template>
      <p class="mb-0">
        {{message.content}}
      </p>
      <p>{{moment(message.timestamp).format('DD MMM YYYY / hh:mm A')}}</p>
    </b-media>
    </ul>
      
  </div>
</template>

<script>
  export default {
    name: 'Message',
    props: ['message'],
    // el timestamp lo quiero modificar con moment()
  }
</script>