<template>
  <div>
    <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id == 0 ? 'mui-active':'']" v-for="item in cates" :key="item.id" href="#item1mobile" data-wid="tab-top-subpage-1.html"  @tap="getImgListByCateId(item.id)" >
							<!-- 上面的取得的id是标签的id 并不是图片的id  -->
							{{item.title}}
						</a>
					</div>
				</div>
				<ul class="photo-list">
  				<router-link v-for="item in imageList" :key="item.id" :to="'/home/PotoInfo/'+item.id" tag="li">
    				<img v-lazy="item.img_url">
						<div class="info">
							<h1 class="info-title">{{ item.title }}</h1>
							<div class="info-body">{{ item.zhaiyao }}</div>
						</div>
  				</router-link>
				</ul>
				<!-- <img v-for="img in imageList" :key="img.id" v-lazy="img.img_url" > -->

			</div>
		
  </div>
	<!-- 图片列表 -->

</template>

<script>
import mui from'@/lib/mui-master/js/mui.js'
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
export default {
		data(){
			return{
				cates:[],
				imageList: []
			}
		},
		created(){
			this.getAllCategory(),
			this.getImgListByCateId(0)
			},
		mounted(){ //当组件中的dom结构被渲染好并放到页面之后，会执行这个钩子函数
		// 如果要操作元素，最好在 mounted 里面，因为这时候的 DOM 元素是最新的
		 // 初始化
		mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
		},
		methods:{
			getAllCategory(){
				this.$axios.get("getimgcategory").then(response=>{
					if(response.data.status === 0){
						response.data.message.unshift({title:'全部',id:0})
						this.cates = response.data.message
					}
				})
			},
			getImgListByCateId(cateId){//根据分类id获取图片地址
				this.$axios.get("getimages/"+cateId).then(response=>{
					if(response.data.status === 0){
						this.imageList = response.data.message
					}
				})
			}
		}
}
</script>

<style lang="scss">
* { touch-action: pan-y; } 
.photo-list{
	padding: 1vw;
	li{
		list-style: none;
		position: relative;
		background-color: #ccc;
		text-align: center;
		margin: 2vw 2vw; 
		border-radius: 1%;
		box-shadow:  0 0 6px #ccc;
		height: 50vh;
		img{
			vertical-align: middle;
			width: 100%;
			height: 100%;
			border-radius: 1%;
		}
		.info{
			text-align: left;
			position: absolute;
			bottom: 0;
			padding: 1vw;
			color: white;
			background-color: rgba($color: #000000, $alpha: 0.4);
			height: 11vh;
			.info-title{
				font-size: 14px;
			}
			.info-body{
				font-size: 13px;
			}
		}
		img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
	}
}
</style>