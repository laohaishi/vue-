<template>
    <div id="edit">
      <span class="iconfont iconjiantou2"></span>
      <span>{{title}}</span>
    </div>
</template>

<script>
export default {
props:['title']
}
</script>

<style lang='less' scoped>
#edit {
  display: flex;
  align-items: center;
  span {
    flex: 1;
    padding: 20/360 * 100vw;
    font-weight: bold;
    font-size: 14/360*100vw;
  }
}

</style>