<template>
  <div id="app">
    首页
    <login></login>
  </div>
</template>

<script>
import login from './components/login'
export default {
  components: {
    login
  }
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
