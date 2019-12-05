<template>
  <div class="photoinfo-container">
    <h3>{{photoInfo.title}}</h3>
      <p class="subtitle">
        <span>发表时间：{{photoInfo.add_time | dateFormat}}</span>
        <span>点击次数：{{photoInfo.click}}次</span>
      </p>



    <!-- component -->
    <viewer :images="images" class="thumbs">
      <img v-for="item in images" :src="item.src" :key="item.src">
    </viewer>



      <div class="content" v-html="photoInfo.content"></div>
      <hr>
      <com-box :id="id"></com-box>
  </div>
</template>

<script>
import Comment from '@/components/subcomponent/Comment.vue'
export default {
  data(){
    return{
      id:this.$route.params.id,
      photoInfo:{},
      images:[]
    }
  },
  created(){this.getPhotoInfo(),
  this.getThumbs()},
  methods:{
    getPhotoInfo(){
      this.$axios.get('getimageInfo/'+this.id)
      .then(response=>{
        if(response.data.status === 0){
           this.photoInfo = response.data.message[0]
        }
      })
    },
    getThumbs(){
      this.$axios.get("getthumimages/"+this.id).then(response=>{
        if(response.data.status===0){
          // response.data.message.forEach(item => {
          //   this.w=30;
          //   this.h=40;
          // });
          this.images = response.data.message
        }
      }
      )
    },
  },
  components:{
    "com-box":Comment
  }
}
</script> 

<style lang="scss" scoped>
  .photoinfo-container{
    padding: 2vw;
    h3{
      font-size: 14px;
      color: #26a2ff;
      text-align: center
    }
    .subtitle{
      padding-top: 1.5vw;
      display: flex;
      justify-content: space-between;
    }
      .content{
        line-height: 4.5vh;
        font-size: 13px;
      }
  }
  .thumbs{
   img{
    margin: 1vw;
    width: 30vw;
    height: 16vh;
    box-shadow:  0 0 8px #ccc
  } 
  }
  
</style>