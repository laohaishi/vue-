<template>
  <div>
    <div class="item">
      <h2>精彩跟帖</h2>
      <div class="gentie">
        <img src="@/img/bg.jpg" alt />
        <div class="info">
          <div class="text">哈哈哈</div>
          <div class="date">2020-08-31</div>
        </div>
        <div class="btn">回复</div>
      </div>
      <div class="content">adjkshajjahj</div>
    </div>
    <div class="more" @click="$router.push('/gentie')">更多跟帖</div>
    <div class="bottom">
      <input type="text" />
      <div class="father">
        <span class="iconfont iconpinglun-"></span>
        <span class="num">1024</span>
      </div>
      <span class="iconfont iconshoucang"></span>
      <span class="iconfont iconfenxiang"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.item {
  border-bottom: 1px solid #ccc;
  padding: 10/360 * 100vw;
  h2 {
    text-align: center;
  }
  .gentie {
    display: flex;
    padding-top: 20/360 * 100vw;
    img {
      width: 35/360 * 100vw;
      height: 35/360 * 100vw;
      border-radius: 50%;
    }
    .info {
      flex: 1;
      padding-left: 10/360 * 100vw;
    }
  }
  .content {
    padding-top: 10/360 * 100vw;
  }
}
.more {
  width: 120/360 * 100vw;
  border: 1px solid #ccc;
  margin: 50/360 * 100vw auto;
  text-align: center;
  border-radius: 15/360 * 100vw;
  padding: 2/360 * 100vw 0;
  font-size: 14px;
}
.bottom {
  position: fixed;
  bottom: 0px;
  display: flex;
  background-color: rgb(235, 229, 229);
  width: 100%;
  height: 50/360 * 100vw;
  align-items: center;
  padding: 0 10/360 * 100vw;
  .iconfont {
      font-size: 20px;
      padding: 0 15/360*100vw;
  }
  input {
    width: 179/360 * 100vw;
    height: 30/360 * 100vw;
    background-color: #c4c0c0;
    border: none;
    outline: none;
    border-radius: 15/360 * 100vw;
    // flex: 1;
  }
  .father {
    position: relative;
    padding-left: 20/360 * 100vw;
    .iconpinglun- {
      font-size: 30px;
    }
    .num {
        padding: 0 2/360*100vw;
      background-color: red;
      border-radius: 10px;
      color: white;
      position: absolute;
      top: 0;
      left: 45px;
    }
  }
}
</style>