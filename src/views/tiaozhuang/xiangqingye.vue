<template>
  <div>
    <div class="activeContent" v-if="list.type==1">
      <xiangqingHead></xiangqingHead>
      <h2>{{list.title}}</h2>
      <div class="text">
        <span>{{user.nickname}}</span>
        <span>2019-10-10</span>
      </div>
      <p v-html="list.content"></p>
      <div class="btn">
        <span class="iconfont icondianzan">{{list.like_length}}</span>
        <div class="weixin">
          <span class="iconfont iconweixin"></span> 微信
        </div>
      </div>
    </div>
    <div class="videoContent" v-if="list.type==2">
      <video
        src="https://video.pearvideo.com/mp4/adshort/20200421/cont-1670293-15098199_adpkg-ad_hd.mp4"
        controls
        poster="https://timgmb04.bdimg.com/timg?searchbox_feed&quality=100&wh_rate=0&size=b576_324&ref=http%3A%2F%2Fwww.baidu.com&sec=1568739067&di=612dd27cae470b93b01a4b32ef72fbac&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fe18c6ffa079441431f8988ca4c3ac106.jpeg"
      ></video>
      <div class="info">
        <img v-if="user.head_img" :src="$axios.defaults.baseURL+user.head_img" alt="">
        <img v-else src="@/img/bg.jpg" alt />
        <span>{{user.nickname}}</span>
        <div class="button">关注</div>
      </div>
      <p>{{list.title}}</p>
      <div class="btn">
        <span class="iconfont icondianzan"> {{list.like_length}}</span>
        <div class="weixin">
          <span class="iconfont iconweixin"></span> 微信
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xiangqingHead from "../../components/xiangqingHead";
export default {
  components: { xiangqingHead },
  data() {
    return {
      list: {},
      user: {},
    };
  },
  created() {
    console.log("当前文章 id = ", this.$route.query.id);
    this.$axios({
      method: "get",
      url: "/post/" + this.$route.query.id,
    }).then((res) => {
      //成功回调
      console.log(res);
      this.list = res.data.data;
      console.log(this.list.user);
      this.user = this.list.user;
    });
  },
};
</script>
<style lang="less" scoped>
.activeContent {
  padding: 10/360 * 100vw;
  .text {
    font-size: 12/360 * 100vw;
    color: rgb(179, 173, 173);
    span {
      padding-right: 10px;
    }
  }
  p {
    padding-top: 30/360 * 100vw;
    /deep/ img {
      max-width: 100%;
    }
  }
}
.btn {
  display: flex;
  justify-content: space-around;
  padding-top: 30/360 * 100vw;
  .icondianzan,
  .weixin {
    padding: 5/360 * 100vw 20/360 * 100vw;
    border: 1px solid rgb(114, 111, 111);
    border-radius: 20/360 * 100vw;
  }
  .iconweixin {
    color: green;
  }
}
.videoContent {
  padding-top: 20/360 * 100vw;
  video {
    max-width: 100%;
  }
  .info {
    display: flex;
    padding: 5/360 * 100vw 10/360 * 100vw;
    align-items: center;
    img {
      width: 25/360 * 100vw;
      height: 25/360 * 100vw;
      border-radius: 50%;
    }
    span {
      flex: 1;
      color: rgb(161, 158, 158);
      font-size: 14px;
      padding-left: 5/360 * 100vw;
    }
    .button {
      border: 1px solid rgb(160, 156, 156);
      padding: 5px 20/360 * 100vw;
      border-radius: 20/360 * 100vw;
      font-size: 14px;
    }
  }
  p {
    padding-left: 10/360 * 100vw;
  }
}
</style>