<template>
  <div>
    <div class="tit" @click="$router.push('/personal')">
      <Title title="编辑资料" />
    </div>
    <img v-if="user.head_img" class="avatar" :src="$axios.defaults.baseURL+user.head_img" alt />
    <img
      v-else
      src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1927727249,2644777397&fm=26&gp=0.jpg"
      alt
      class="avatar"
    />
    <PersonalBar labelText="昵称" :descText="user.nickname" @handleClick="showusername=true" />
    <PersonalBar labelText="密码" descText="******" @handleClick="showpassword=true" />
    <PersonalBar
      labelText="性别"
      :descText="user.gender==1?'男':'女'"
      @handleClick="showgender=true"
    />
    <van-dialog v-model="showusername" title="修改昵称" show-cancel-button @confirm="setnickname">
      <van-cell-group>
        <van-field v-model="username" placeholder="请输入用户名" />
      </van-cell-group>
    </van-dialog>

    <van-dialog v-model="showpassword" title="修改密码" show-cancel-button @confirm="setpassword">
      <van-cell-group>
        <van-field v-model="password" type="password" placeholder="请输入密码" />
      </van-cell-group>
    </van-dialog>

    <van-action-sheet v-model="showgender" cancel-text="取消" :actions="actions" @select="setgender" />
  </div>
</template>

<script>
import Title from "../../components/title";
import PersonalBar from "../../components/personalBar";
export default {
  data() {
    return {
      user: {},
      showusername: false,
      showpassword: false,
      showgender:false,
      username: "",
      password: "",
      actions: [
        { name: "nan", gender: 1 },
        { name: "nv", gender: 0 },
      ],
    };
  },
  components: {
    Title,
    PersonalBar,
  },
  methods: {
    loadPage() {
      this.$axios({
        url: "/user/" + localStorage.getItem("userId"),
    
      }).then((res) => {
        // console.log(res.data);
        this.user = res.data.data;
        console.log(this.user);
      });
    },
    setnickname() {
      this.updata({ nickname: this.username });
      this.username = "";
    },
    setpassword() {
      this.updata({ password: this.password });
      this.password = "";
    },
    setgender(a) {
      this.updata({ gender: a.gender });
      this.showgender=false
    },
    updata(aaa) {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("userId"),
    
        data: aaa,
      }).then((res) => {
        //成功回调
        console.log(res);
        this.loadPage();
      });
    },
  },
  created() {
    this.loadPage();
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
