<template>
  <div>
    <ul class="list-unstyled">
    <!--un b-media distinto para attachment-->
    <b-media
      v-if="!message.attachment"
      :right-align="message.logged_as_user ? true : false"
      :class="message.logged_as_user ? 'm-2 ml-4' : 'm-2 mr-4'"
      tag="li">
      <template #aside vertical-align="center">
        <b-img blank blank-color="#abc" rounded="circle" width="30" alt="placeholder"></b-img>
      </template>
      <div class="d-flex">
        <div v-if="!message.logged_as_user" class="arrow-left float-left"/>
        <div class="d-inline-block p-3"
        :class="message.logged_as_user ? 'ml-auto bg-primary text-white' :
        'bg-light text-dark'">
          <p class="mb-0">{{message.content}}</p>
          <p class="mb-0 mt-1 small">{{moment(message.timestamp).format('DD MMM YYYY / kk:mm A')}}</p>
        </div>
        <div v-if="message.logged_as_user" class="arrow-right float-right"/>
      </div>
    </b-media>

    <b-media v-if="message.attachment" tag="li">
      <hr v-if="index !== 0"/>
      <div class="d-flex justify-content-between py-2 px-5">
        <div>
        <p class="mb-0 text-uppercase font-weight-bold">Versión {{message.version}}</p>
        <p class="mb-0"><a href="message.url">{{message.title}}</a></p>
        <p class="mb-0 mt-1 small">
          <span class="mr-3">Documento / {{message.file_type}} ({{message.file_size}})</span>
          <span>{{moment(message.timestamp).format('DD MMM YYYY / kk:mm A')}}</span>
        </p>
        </div>
        <div>
              <p class="h1"><b-icon-cloud-download-fill variant="primary"></b-icon-cloud-download-fill></p>
        </div>
      </div>
      <hr/>
    </b-media>

    </ul>
      
  </div>
</template>

<script>
  export default {
    name: 'Message',
    props: ['message', 'index'],
    //añadir data de received messages para su clase
    // idem con sent messages
  }
</script>