<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");
#app {
  background: url("./img/bg.jpg") no-repeat;
  background-size: cover;
  background-color: rgba(247, 247, 247, 0);
  color: rgb(247, 247, 247);
  width: 100%;
  height: 680px;
}
// div {
//   width: 300/360 * 100vw;
// }
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
