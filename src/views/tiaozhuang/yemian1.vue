<template>
  <div id="yemian1">
    <!-- <p>我的关注</p> -->
    <!-- <p><router-link to="/personal">返回</router-link></p> -->
    <div class="tit" @click="$router.push('/edit')">
      <Title title="我的关注" />
    </div>

    <div class="list">
      <div class="item" v-for="item in List" :key="item.id">
        <div class="tupian">
          <img v-if="item.head_img" :src="$axios.defaults.baseURL+item.head_img" alt />
          <img v-else src="@/assets/logo.png" alt />
        </div>
        <div class="text">
          <span>{{item.nickname}}</span>
          <div class="time">2019-10-10</div>
        </div>
        <div class="btn" @click="del(item.id)">取消关注</div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/title";
export default {
  data() {
    return {
      List: [],
    };
  },
  components: {
    Title,
  },
  created() {
    this.loadPage();
  },
  methods: {
    loadPage() {
      this.$axios({
        url: "/user_follows",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then((res) => {
        console.log(res.data);
        this.List = res.data.data;
      });
    },
    del(id) {
      this.$axios({
        url: "/user_unfollow/" + id,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then((res) => {
        console.log(res.data);
        this.loadPage();
      });
    },
  },
};
</script>

<style lang='less' scoped>
#yemian1 {
  .item {
    display: flex;
    padding: 20/360 * 100vw;
    .tupian > img {
      width: 40/360 * 100vw;
      height: 40/360 * 100vw;
      background-color: rgb(250, 250, 246);
      border-radius: 20px;
    }
    .text {
      flex: 1;
      padding-left: 20/360 * 100vw;
      .time {
        font: rgb(185, 182, 182);
      }
    }
    .btn {
      width: 100/360 * 100vw;
      height: 30/360 * 100vw;
      background-color: rgba(148, 141, 141, 0.4);
      line-height: 30px;
      border-radius: 15px;
      text-align: center;
    }
  }
}
</style>