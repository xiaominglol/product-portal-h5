import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import router from "./router.js"


new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
