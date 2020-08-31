<template>
  <div>
    <Title title="栏目管理"></Title>
    <p>点击删除以下频道</p>
    <div class="category">
      <div class="hezi" v-for="item in category" :key="item.id">{{item.name}}</div>
    </div>
    <p>点击添加以下频道</p>
  </div>
</template>

<script>
import Title from "../components/title";
export default {
  data() {
    return {
      category: [],
    };
  },
  components: { Title },
  created() {
    this.$axios({
      method: "get",
      url: "/category",
    }).then((res) => {
      //成功回调
      console.log(res);
      this.category = res.data.data;
    });
  },
};
</script>
<style lang="less" scoped>
.category {
  height: 240px;
//   background-color: pink;
padding-top: 10/360*100vw;
  .hezi {
    display: inline;
    padding: 10/360 * 100vw 25/360 * 100vw;
    border: 1px solid rgb(138, 136, 136);
    text-align: center;
    line-height: 35/360 * 100vw;
    text-align: center;
    margin-left: 5/360 * 100vw;
  }
}
p{
    background-color: rgb(233, 229, 229);
    padding: 5/360*100vw 10/360*100vw;
}
</style>