<template>
  <div>
    <indexHeader></indexHeader>
    <!-- 该组件中的v-model可以动态绑定监听当前被点击的下标 -->
    <div class="tabs">
      <van-tabs v-model="index">
        <van-tab :title="item.name" v-for="item in category" :key="item.id"></van-tab>
      </van-tabs>
      <span class="iconfont icon"></span>
    </div>
    <listContent></listContent>
  </div>
</template>

<script>
import indexHeader from "../components/indexHeader";
import listContent from "../components/activeList";
export default {
  data() {
    return {
      category: [],
      index: 0,
    };
  },
  components: {
    indexHeader,
    listContent,
  },
  created() {
    this.$axios({
      url: "/category",
    }).then((res) => {
      //成功回调
      // console.log(res.data.data);
      this.category = res.data.data;
      // console.log(this.category);
    });
    // this.$axios({
    //   method:'get',
    //   url:'/post',
    //   params:{category:1}
    // }).then(res=>{
    //   //成功回调
    //   console.log(res.data.data)
    // });
  },
};
</script>

<style>
</style>