import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import router from "./router.js"

// import "./assets/iconfont/iconfont";
// import "./assets/iconfont/iconfont.css";
// import "./assets/js/media_750";
// import "./assets/css/base.css";
// import "./assets/css/reset.css";
// import "./assets/css/style.css";
//
// import YDUI from 'vue-ydui';
// import 'vue-ydui/dist/ydui.rem.css';
// Vue.use(YDUI);

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
