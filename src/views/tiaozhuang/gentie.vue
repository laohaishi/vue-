<template>
  <div>
    <Tit title="我的跟帖"></Tit>
    <div class="content" v-for="item in data" :key="item.id">
      <span>2020-08-30</span>
      <span>13:02:44</span>
      <!-- <digui > -->
      <div class="huifu" v-if="item.parent">
        <p>回复:罗大神</p>
        <p>{{item.parent.content}}</p>
      </div>
      <!-- </digui> -->
      <div class="info">{{item.content}}</div>
      <div class="oright">
        <span class="pp">原文:罗小帅憨憨猪</span>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Tit from "../../components/title";
export default {
  name:'digui',
  data () {
    return {
      data:[]
    }
  },
  components: { Tit },
  created () {
    this.$axios({
      method:'get',
      url:'/user_comments',
      params: 1
    }).then(res=>{
      //成功回调
      console.log(res);
      this.data=res.data.data;
    });
  }
};
</script>
<style lang="less" scoped>
.content {
  border-bottom: 1px solid #ccc;
  padding: 20/360 * 100vw 20/360 * 100vw 0;
  span {
    color: #ccc;
  }
  .huifu {
    margin-top: 5/360 * 100vw;
    background-color: rgb(236, 233, 233);
    padding: 15/360 * 100vw 20/360 * 100vw;
    p {
      padding-bottom: 10/360 * 100vw;
      color: rgb(173, 171, 171);
    }
  }
  .info {
    padding-top: 5/360 * 100vw;
  }
  .oright {  
    display: flex; 
    padding: 20/360 * 100vw 0; 
    .pp{
      flex: 1;
       color: rgb(141, 138, 138);
    }
  }
}
</style>