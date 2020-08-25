<template>
  <div class="barWrapper" @click="handleClick">
      <div class="label">{{labelText}}</div>
      <div class="desc">{{descText}}</div>
      <span class="iconfont iconjiantou1"></span>
  </div>
</template>

<script>
export default {
    props:['labelText','descText'],
    methods:{
        handleClick(){
            this.$emit('handleClick')
        }
    }
}
</script>

<style lang="less" scoped>
.barWrapper {
    display: flex;
    padding: 12/360*100vw 20/360*100vw;
    padding-left: 0;
    margin-left: 20/360*100vw;
    border-bottom: 1px solid #e4e4e4;
    .label {
        font-size: 14/360*100vw;
        color: rgb(250, 249, 249);
    }
    .desc {
        flex: 1;
        text-align: right;
        font-size: 14/360*100vw;
        color: rgb(255, 251, 251);
        padding-right: 6/360*100vw;
    }
}
</style>