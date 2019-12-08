import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeContainer from '../components/tabar/HomeContainer.vue'
import CartContainer from '@/components/tabar/CartContainer.vue'
import MemberContainer from '@/components/tabar/MemberContainer.vue'
import SearchContainer from '@/components/tabar/SearchContainer.vue'
import NewsList from '@/components/news/NewsList.vue'
import NewsInfo from '@/components/news/NewsInfo.vue'
import PhotoList from '@/components/photos/PhotoList.vue'
import PhotoInfo from '@/components/photos/PhotoInfo.vue'
import GoodList from '@/components/goods/GoodList.vue'
import GoodsInfo from '@/components/goods/GoodsInfo.vue'
import GoodsDesc from '@/components/goods/GoodsDesc.vue'
import GoodsComments from '@/components/goods/GoodComments.vue'
Vue.use(VueRouter)

const routes = [{ path: '/', redirect: '/home', },
    { path: '/home', component: HomeContainer },
    { path: '/cart', component: CartContainer },
    { path: '/member', component: MemberContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsInfo/:id', component: NewsInfo }, //绑定id 
    { path: '/home/PhotoList', component: PhotoList },
    { path: '/home/PotoInfo/:id', component: PhotoInfo },
    { path: '/home/GoodList', component: GoodList },
    { path: '/home/GoodsList/:id', component: GoodsInfo, name: "goodinfo" },
    { path: '/home/GoodsDesc/:id', component: GoodsDesc, name: "goodsdesc" },
    { path: '/home/GoodsComments/:id', component: GoodsComments, name: "goodscomment" },

]

const router = new VueRouter({
    routes,
    linkActiveClass: ' mui-active'
})

export default router