<template>
  <div>
    <Title title="编辑资料" />
    <img v-if="user.head_img" class="avatar" :src="'axios.defaults.baseURL'+user.head_img" alt />
    <img
      v-else
      src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1927727249,2644777397&fm=26&gp=0.jpg"
      alt
      class="avatar"
    />
    <PersonalBar 
        labelText="昵称" 
        descText="火星网友" 
        @handleClick="$router.push('/yemian1')" />
    <PersonalBar 
        labelText="密码" 
        descText="******" 
        @handleClick="$router.push('/yemian1')" />
    <PersonalBar 
        labelText="性别" 
        descText="男" 
        @handleClick="$router.push('/yemian1')" />
  </div>
</template>

<script>
import Title from "../../components/title";
import PersonalBar from "../../components/personalBar";
export default {
  data() {
    return {
      user: {},
    };
  },
  components: {
    Title,
    PersonalBar,
  },
};
</script>

<style lang='less' scoped>
img {
  display: flex;
  width: 70/360 * 100vw;
  height: 70/360 * 100vw;
  object-fit: cover;
  border-radius: 50%;
  margin: auto;
}
</style>
