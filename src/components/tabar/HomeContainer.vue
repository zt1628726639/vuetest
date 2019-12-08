<template>
        <div>
            
            <swiper :baseUrl="Url"  :Full="true"></swiper>

            <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="@/imgs/4.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/PhotoList">
                    <img src="@/imgs/1.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/GoodList">
                    <img src="@/imgs/2.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
                    <img src="@/imgs/5.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
                    <img src="@/imgs/3.png" alt="">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
                    <img src="@/imgs/6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></router-link></li>

		        </ul> 

        </div>
    </template>
<script>
    import {
        Toast
    } from 'mint-ui'
    import swiper from '@/components/subcomponent/Swiper.vue'
    export default{
        data() {
            return {
                lblist: [],
                Url:'getlunbo'
            }
        },
        methods: {
        
        },
        components:{
            swiper
        }
    }
</script>

<style scoped lang="scss">
    .mint-swipe {
        height: 200px;
    }
    
    .mint-swipe-item img {
        width: 100%;
        height: 100%;
    }

    
    .mui-grid-view.mui-grid-9 {
        background-color: white;
        .mui-table-view-cell {
        border: 0;
        background-color: white;
        img {
            width: 60px;
            height: 60px;
        };
        .mui-media-body{
            font-size: 13px;
        }
    }
    }
    
</style>