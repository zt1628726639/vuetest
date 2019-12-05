<template>
  <div class="cmt-container">
    <h3>评论区</h3>
    <textarea placeholder="请输入要BB的内容(最多吐槽20字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list" v-for="(item, i) in comments" :key="item.id">
      <div class="cmt-item">
        <div class="cmt-tittle">
          第{{ i + 1 }}楼&nbsp;&nbsp;用户：{{
          item.user_name
          }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
        </div>
        <div class="cmt-body">{{ item.content === "undefined" ? "此用户很懒" : item.content }}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import qs from 'qs';
export default {
  data() {
    return {
      pageIndex: 1, //默认展示第一页数据，
      comments: [], //评论数据
      msg:""//评论框里的评论数据
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$axios
        .get("getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(response => {
          if (response.data.status === 0) {
            // this.comments = response.data.message;
            //获取新数据的时候，应该用旧数据拼接上新数据
            this.comments = this.comments.concat(response.data.message);
          } else {
            Toast("获取失败");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    postComment(){
      if (this.msg.trim().length===0){
        return Toast("不能为空")
      }
      //发表评论
      // 参数1：请求的url地址
      //参数2：提交给服务器的数据对象 {content:this.msg}
      // 参数3：定义提交的时候，表单中数据的格式 {emulateJSON:true}
      this.$axios.post("postcomment/" + this.$route.params.id,qs.stringify({
        content:this.msg.trim()
      }))
      .then(response=>{
        if(response.data.status === 0){
          var cmt ={
            user_name:"匿名用户",
            add_time:Date.now(),
            content:this.msg.trim()
          }
          this.comments.unshift(cmt);
          this.msg = "";
        }
      });
    }
  },
  props: ["id"]
};
</script>

<style lang="scss">
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-tittle {
        line-height: 30px;
        background-color: #e7e7e7;
      }
      .cmt-body {
        padding-top: 10px;
        height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
