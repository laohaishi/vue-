<template>
  <div>
    <div class="header">
      <span class="iconfont iconnew new" @click="$router.push('/login')"></span>
      <div class="inp">
        <span class="iconfont iconsearch"></span>
        搜索新闻
      </div>
      <span class="iconfont iconwode personal" @click="$router.push('/personal')"></span>
    </div>
  </div>
</template>

<script>
export default {
methods:{
 
}
}
</script>

<style lang="less" scoped>
    .header{
      background-color: rgb(86, 231, 134);
      padding:6/360*100vw;
      display:flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 16px;
      .new{
        font-size: 50px;
      }
      .inp{
        flex:1;
        margin:0 30px;
        background-color: rgba(243, 239, 239, 0.432);
        width: 100/360*100vw;
        height: 40/360*100vw;
        line-height: 40/360*100vw;
        text-align: center;
        border-radius: 20/360*100vw;   
        .iconfont{
          font-size: 14px;
        }
      }
      .personal{
        font-size: 30px;
        
      }
    }
</style>