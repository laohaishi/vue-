<template>
  <div class="xqHeader">
      <span class="iconfont iconjiantou2"></span>
      <span class="iconfont iconnew"></span>
      <div class="button">已关注</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.xqHeader{
  display: flex;
  padding:10/360*100vw;
  align-items: center;
  .iconjiantou2{
    font-size: 20/360*100vw;
  }
  .iconnew{
    font-size: 60/360*100vw;
    flex: 1;
    
  }
  .button{
    border: 1px solid #ccc;
    padding: 3px 10px;
    line-height: 20px;
    height: 20px;
    border-radius: 12px;
  }
}
</style>