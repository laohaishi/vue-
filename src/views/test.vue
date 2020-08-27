<template>
  <div>
      2345
    <!-- <Test></Test> -->
    <button @click="show=true">aa</button>
    <van-dialog  v-model="show"  title="标题" @confirm="aa" show-cancel-button>
      <!-- <img src="https://img.yzcdn.cn/vant/apple-3.jpg" /> -->
      dd
    </van-dialog>
  </div>
</template>

<script>
import Test from "../components/acitveList";
// export default {
    
//   components: { Test },
// };
export default {
  data() {
    return {
      show: false,
    };
  },
  methods:{
      aa(){
          console.log('aa');

      }
  }
};
</script>

<style>
</style>