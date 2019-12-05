import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui-master/css/mui.css'
import './lib/mui-master/css/icons-extra.css'
import './lib/mui-master/fonts/mui-icons-extra.ttf'
import moment from 'moment'
import '@/net/http.js'
import Mint from 'mint-ui';

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'



Vue.use(Viewer)
Vue.use(Mint);
// import axios from 'axios'
// Vue.prototype.$axios = axios

// axios.defaults.baseURL = "http://www.liulongbin.top:3005/api/";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Header.name, Header)
// Vue.component(Button.name, Button)
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')