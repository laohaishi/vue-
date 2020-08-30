<template>
  <div>
    {{num}}
    <digui :num="num-1" v-if="num>0" />
  </div>
</template>

<script>
export default {
  name: "digui",
  props: ["num"],
};
</script>

<style lang="less" scoped>
div {
  border: 1px solid red;
}
</style>