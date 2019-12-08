<template>
        <div>
            
            <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lblist" :key="item.id">
              <img :src="item.img"  :class="{'fullWidth':Full,'fullHeight':isFull }">
            </mt-swipe-item>
        </mt-swipe>

        </div>
    </template>
<script>

    export default{
        data() {
            return {
                lblist: []
            }
        },
        created() {
            this.getLunbo()
        },
        methods: {
            getLunbo() {
                if(this.baseID===undefined){
                    this.$axios.get(this.baseUrl).then((response) => {
                    if (response.data.status === 0) {
                        this.lblist = response.data.message
                    } 
                })
                }
                else{
                    this.$axios.get(this.baseUrl).then((response) => {
                    if (response.data.status === 0) {
                        response.data.message.forEach(item => {
                            item.img = item.src 
                        });
                        this.lblist = response.data.message
                    } 
                })
                }
                
            }
        },
        props:["baseUrl","baseID","isFull","Full"],
    }

</script>

<style scoped lang="scss">
    .mint-swipe {
        height: 200px;
    }
    
    .mint-swipe-item{
        text-align: center;
    }
    

    .fullHeight{
        height: 100%;
    }
    .fullWidth{
        width: 100%;
        height: 100%;
    }
    
</style>