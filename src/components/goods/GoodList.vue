<template>
  <div class="goods-all">

    <!-- <router-link tag="div" :to="'/home/GoodsList/'+item.id" class="goods" v-for="item in goodlist" :key="item.id">
    <img :src="item.img_url" alt="">
    <h1 class="goods-name">{{ item.title}}</h1>
    <div class="info">
      <p class="price">
        <span class="new">￥{{ item.sell_price }}</span>
        <span class="old">￥{{ item.market_price }}</span>
      </p>
      <p class="sell">
        <span>热卖</span>
        <span>剩{{ item.stock_quantity }}件</span>
      </p>
    </div>
    </router-link> -->   
    <!-- 路由导航 -->


    <!-- 编程式导航 -->
    <div @click="goDetails(item.id)" class="goods" v-for="item in goodlist" :key="item.id">
    <img :src="item.img_url" alt="">
    <h1 class="goods-name">{{ item.title}}</h1>
    <div class="info">
      <p class="price">
        <span class="new">￥{{ item.sell_price }}</span>
        <span class="old">￥{{ item.market_price }}</span>
      </p>
      <p class="sell">
        <span>热卖</span>
        <span>剩{{ item.stock_quantity }}件</span>
      </p>
    </div>
    </div>

    <mt-button type="danger" size="large" @click="getMore()"> 加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      pageindex:1,//默认页数
      goodlist:[]
    }
  },
  created(){this.getGoodList()},
  methods:{
    getMore(){
      this.pageindex++
      this.getGoodList()
    },
    getGoodList(){
      this.$axios.get("getgoods?pageindex=" + this.pageindex).then(response=>{
        if(response.data.status === 0){
          if(response.data.message.length === 10){ //判断返回数组长度
             response.data.message.splice(8,1)//将不显示图片的元素删除
            this.goodlist=response.data.message
          }else if (response.data.message.length === 5){
            response.data.message.splice(0,1)
            this.goodlist=this.goodlist.concat(response.data.message)
          }
          
        }
      })
    },
    goDetails(id){
      // 使用js的方法进行路由导航
      // 注意一定要区分 this.$route 和 this.$router 这两个对象
      // 其中：this.$route 是路由{参数对象 }，所有路由中的参数 params ，query 都属于他
      // 其中：this.$router 是一个路由{导航对象}，用它可以方便的使用 js 代码，实现路由的前进，后退，跳转到新的 URL 地址
      // 第一种方式
        // this.$router.push('/home/GoodsList/' + id)
      // 第二种方式
        // this.$router.push({ path: '/home/GoodsList/'+id})
      //第三种方式 
        this.$router.push({name : "goodinfo",params:{ id : id }})
        // path+query    name+params
    }
  }
}
</script> 

<style lang="scss" scoped>
  .goods-all{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1vw;
    .goods{
      height: 40vh;
      box-shadow: 0 0 8px rgb(221, 218, 218);
      width: 49%;
      padding: 1vw;
      position: relative;
      img{width: 100%}
      .goods-name{
        font-size: 16px;
      }
      .info{
        width: 95%;
        position: absolute;
        bottom: 1vw;
        background-color: #eee;
        padding: 1vw;
       .price{
        .new{color: red;
        font-style: oblique;
        margin-right: 2vw;
        font-size: 16px}
        .old{font-size: 13px;
        text-decoration: line-through}
      } 
      .sell{
       display: flex;
       justify-content: space-between
       
     }
    }
    }
  }
</style>