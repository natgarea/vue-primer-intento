import Vue from 'vue'
import App from './App.vue'
import store from './store'
import moment from 'moment'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

moment.locale('es')
Vue.prototype.moment = moment

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
