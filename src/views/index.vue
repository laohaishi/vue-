<template>
  <div id="app">
      <router-view></router-view>
      <router-link to="/login">登录</router-link><br>
      <router-link to="/register">注册</router-link><br>
      <router-link to="/index">个人中心</router-link><br>
      <van-button type=primary>主要按钮</van-button><br>
      <van-button type=primary size='mini'>主要按钮</van-button>
  </div>
</template>

<script>
export default {
    mounted(){
      this.$axios({
      url:'http://127.0.0.1:3000'
    }).then(res=>{
      console.log('请求成功');
      console.log(res.data);
    }).catch(err=>{
      console.log('请求失败');
      console.log(err);
    })
    }
}
</script>

<style>

</style>