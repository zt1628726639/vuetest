import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$axios = axios

axios.defaults.baseURL = "http://www.liulongbin.top:3005/api/";