<template>
  <div id="index">
    <div class="buju">
      <router-link to="/login">登录</router-link>
      <br />
      <router-link to="/register">注册</router-link>
      <br />
      <router-link to="/personal">个人中心</router-link>
    </div>
    <br />
    <router-view></router-view>
    <button>确认</button>
    <!-- <van-button type="primary" id="btn" height='10px'>主要按钮</van-button>
    <br />
    <van-button type="primary" size="mini" class="btn">主要按钮</van-button>-->
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$toast("哈哈哈");
    }, 1000);
    this.$axios({
      method: "get",
      url: "http://127.0.0.1:3000/post",
      params: {
        category: 1,
      },
    })
      .then((res) => {
        console.log("请求成功");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("请求失败");
        console.log(err);
      });
    this.$axios({
      method: "post",
      url: "http://127.0.0.1:3000/login",
      data: {
        username: "10086",
        password: "123",
      },
    }).then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<style lang='less' scoped>
#index {
  background: url("../img/bg.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 680px;
  display: flex;
  flex-direction: column-reverse;
  color: aliceblue;
  position: relative;
  button {
    width: 70%;
    height: 50px;
    background-color: skyblue;
    border-radius: 25px;
    margin: auto;
  }
  .buju {
    position: absolute;
    left: 42%;
    top: 31%;
  }
}
</style>