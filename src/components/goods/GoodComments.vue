<template>
  <div class="goodscom">
    <comment :id="this.$route.params.id"></comment>
  </div>
</template>
<script>
import comment from '@/components/subcomponent/Comment.vue'
export default {
  data(){
    return{}
  },
  methods:{},
  components:{
    comment
  }
}
</script>
<style lang="scss" scoped>

</style>