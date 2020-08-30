<template>
  <div>
    <van-tabs v-model="active">
      <van-tab :title="name" >内容 1</van-tab>    
    </van-tabs>
    <span class="iconfont icon"></span>
  </div>
</template>

<script>
export default {
  props:['name'],
    data () {
        return {
            active:2,
            
        }
    },
  
};
</script>

<style>
</style>