<template>
  <div>
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<swiper :baseUrl="url" :baseID="id" :isFull="true"></swiper>
					</div>
				</div>
			</div>

    <div class="mui-card">
				<div class="mui-card-header">{{ goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<p>市场价:<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;&nbsp;&nbsp;销售价:<span class="price">￥{{goodsinfo.sell_price}}</span></p>
					<p>数量：<numberbox @getcount="getSelectCount" :max="goodsinfo.stock_quantity"></numberbox></p>
					<mt-button type="primary" size="small">立即购买</mt-button>&nbsp;
					<mt-button type="danger" size="small" @click="addToshopCar" >加入购物车</mt-button>
					</div>
				</div>

			</div>

		<transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
		   		<div class="ball" v-show="ballFlag" ref="ball"></div>
		</transition>				


    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodsinfo.goods_no}}</p>
						<p>库存情况：{{goodsinfo.stock_quantity}}件</p>
						<p>上架时间：{{goodsinfo.add_time | dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<!-- 加br不生效必然是父元素启用了flex布局 因为将他们全部横向排列了 -->
					<mt-button type="primary" size="large" plain @click="getGoodsdesc(id)">图文介绍</mt-button>
					<mt-button type="danger" size="large" plain @click="getGoodComment(id)">商品评论</mt-button>
				</div>
			</div>
  </div>
</template>

<script>
// const ballPosition = this.$refs.ball.getBoundingClientRect();
// const badgePosition = document.getElementById("test").getBoundingClientRect()
import numberbox from '@/components/subcomponent/goodsinfo_numberbox.vue'
import swiper from '@/components/subcomponent/Swiper.vue'
export default{
  data(){
		return{
				ballFlag:false,
				id:this.$route.params.id,
				lbtu:[],
				url:"getthumimages/"+this.$route.params.id,
				goodsinfo:{},
				selectCount:1 //
		}
	},
	created(){
		this.getgoodsinfo()
		console.log()
		},
  methods: {
		getgoodsinfo(){
			this.$axios.get("goods/getinfo/"+this.id).then(response=>{
				if(response.data.status === 0){
					this.goodsinfo = response.data.message[0];
					
				}
			})
		},
		getGoodsdesc(id){
			this.$router.push({name:"goodsdesc",params:{id}})
		},
		getGoodComment(id){
			this.$router.push({name:"goodscomment",params:{id}})
		},
		addToshopCar(){
			this.ballFlag = !this.ballFlag
		},
		beforeEnter(el){
			el.style.transform = "translate(0,0)"
		},
		enter(el,done){
			el.offsetWidth;
			el.style.transform = "translate(120px, 375px)"
			el.style.transition = "all 1s cubic-bezier(0.94, 0.18, 0.05, 0.95)"
			done()
		},
		afterEnter(el){
			this.ballFlag = !this.ballFlag
		},
		getSelectCount(count){
			this.selectCount = count
			console.log("父组件拿到的值"+this.selectCount)
		}
				},
	components:{
		swiper,numberbox
	},
}

</script> 

<style lang="scss" scoped>
  .price{
		font-size: 2.5vh;
		color: red;
		font-weight: 700
	}
	.mui-card-footer{
		display: block;
		margin: 0;
		button{
			margin-top:1vh;
		}
	}
	.ball{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: red;
		position: absolute;
		z-index: 999;
		left: 31%;
		top: 50%;
	}
</style>