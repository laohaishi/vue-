<template>
  <div class="btn" @click="handleClick">{{btnText}}</div>
</template>

<script>
export default {
  props: ["btnText"],
  methods: {
    handleClick() {
      console.log("我是子组件，我被点击了");
      //通过发送事件告诉父子件它的子组件被点击了
      this.$emit("handleClick");
    },
  },
};
</script>

<style lang="less" scoped>
.btn {
  width: 38.777778vw;
  height: 13.555556vw;
  background-color: #cc3300;
  color: #fff;
  font-size: 18/360 * 100vw;
  line-height: 48/360 * 100vw;
  border-radius: 24/360 * 100vw;
  text-align: center;
  margin: 40/360 * 100vw 9% 0/360*100vw;
}
</style>