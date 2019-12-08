<template>
  <div id="container">
    <!-- 顶部 header 区域 -->

    <mt-header fixed title="我的项目">
      <mt-button icon="back" slot="left" @click="back()" v-show="flag"></mt-button>
    </mt-header>

    <!-- 中间的 router-view 区域 -->
  <transition>
    <router-view></router-view>
  </transition>
      

    <!-- 底部 tapbar 区域 -->

    <nav class="mui-bar mui-bar-tab">
        <router-link to="/home" class="mui-tab-item" >
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to="/member" class="mui-tab-item" >
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link to="/cart" class="mui-tab-item" >
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="badge" class="mui-badge">0</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link to="/search" class="mui-tab-item" >
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
  </div>
</template>


<script>
export default {
  data(){
    return {
      flag : false
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  },
  created(){
    if(this.$route.path === '/home'){
      this.flag = false
    }else{
      this.flag = true
    }
  },
  watch: {
      '$route.path': function (newVal, oldVal) {
         if (newVal === '/home') {
          this.flag = false
          }else if(oldVal === '/home') {
          this.flag = !this.flag
          }else{
             this.flag = true
          }
   
        }
      }
}
</script>

<style scoped>
    #container {
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
        
    }
    .mui-bar .mui-bar-tab{
      width: 100%
    }
    .mint-header.is-fixed{
      z-index: 3;
    }
    .v-enter
    {
      opacity: 0;
      transform: translateX(100%);
      width: 100%;
    }
    .v-leave-to{
      opacity: 0;
      transform: translateX(-100%);
      position: absolute;
    }
    .v-enter-active,
    .v-leave-active{
      transition: all 0.3s ease;
    }
</style>
