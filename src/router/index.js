import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeContainer from '../components/tabar/HomeContainer.vue'
import CartContainer from '@/components/tabar/CartContainer.vue'
import MemberContainer from '@/components/tabar/MemberContainer.vue'
import SearchContainer from '@/components/tabar/SearchContainer.vue'

Vue.use(VueRouter)

const routes = [{ path: '/', redirect: '/home', },
    { path: '/home', component: HomeContainer },
    { path: '/cart', component: CartContainer },
    { path: '/member', component: MemberContainer },
    { path: '/search', component: SearchContainer }
]

const router = new VueRouter({
    routes,
    linkActiveClass: ' mui-active'
})

export default router