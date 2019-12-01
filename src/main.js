import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui-master/css/mui.css'
import './lib/mui-master/css/icons-extra.css'
import './lib/mui-master/fonts/mui-icons-extra.ttf'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name, Header)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')