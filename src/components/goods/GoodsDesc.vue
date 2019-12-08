<template>
  <div class="goodsdesc">
    <h3>{{info.title}}</h3>
    <hr>
    <div class="desccontent" v-html="info.content">
      
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      info:{}
    }
  },
  created(){this.getDesc()},
  methods:{
    getDesc(){
      this.$axios.get("goods/getdesc/"+this.$route.params.id).then(response=>{
        if(response.data.status === 0){
          this.info = response.data.message[0]
        }
      })
    }
  }
}
</script>
<style lang="scss">
.goodsdesc{
  h3{
    font-size: 2vh;
    color: #226aff;
    text-align: center;
  }
  .desccontent{
    padding: 1vh;
    img{
      height: 100%;
      width: 100%;
    }
  }
}
</style>