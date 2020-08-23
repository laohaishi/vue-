<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less">
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");
div {
  width: 200/360 * 100vw;
}
span {
  color: greenyellow;
}
* {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
}

a:hover {
  text-decoration: none;
}

ul,
li,
ol {
  list-style: none;
}
</style>
