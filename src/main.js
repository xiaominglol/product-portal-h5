import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Uncaught (in promise) TypeError: Cannot read property 'protocol' of undefined
// Vue.use(axios)
//https://blog.csdn.net/weixin_42707181/article/details/88688099
Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
