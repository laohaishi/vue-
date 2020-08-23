<template>
  <div>
    <router-link to="/login">登录</router-link>
    <br />
    <router-link to="/register">注册</router-link>
    <br />
    <router-link to="/personal">个人中心</router-link>
    <br />
    <van-button type="primary">主要按钮</van-button>
    <br />
    <van-button type="primary" size="mini">主要按钮</van-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(()=>{
      this.$toast('哈哈哈')
    },1000)
    this.$axios({
      // url: "http://157.122.54.189:9083/post",
      method:'get',
      url: "http://127.0.0.1:3000/post",
      params:{
        category:1
      }
    }).then((res) => {
        console.log("请求成功");
        console.log(res.data);
      }).catch((err) => {
        console.log("请求失败");
        console.log(err);
      });
      this.$axios({
        method:'post',
        url:'http://127.0.0.1:3000/login',
        data:{
          username:'10086',
          password:'123'
        }
      }).then(res=>{
        console.log(res.data);
      })
  },
};
</script>

<style>
</style>