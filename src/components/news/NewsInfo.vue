<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>  
    <!-- $route.params.id 回去URL中的id -->
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
      <span>点击：{{newsinfo.click}} 次</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content"></div>

    <!-- 评论区 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import Comment from "@/components/subcomponent/Comment.vue"

export default {
  data(){
    return{
      newsinfo:{},
      id:this.$route.params.id
    }
  },
  created(){
  this.getNewsInfo()},
  methods:{
    getNewsInfo(){
      this.$axios.get("getnew/"+this.id).then(response=>{
        if(response.data.status === 0){
            this.newsinfo = response.data.message[0]
        }
      })
    }
  },
  components:{
    "comment-box":Comment
  }
}
</script>

<style lang="scss">
.newsinfo-container{
  padding: 5px;
  .title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between
  }
  .content{
    color:gray;
    width: 100%
  }
}
</style>