<template>
  <div >
    <div v-for="item in list" :key="item.id" @click="$router.push('/xiangqingye?id='+item.id)">
      <div class="onelist" v-if="item.type == 1 && item.cover.length >= 1 && item.cover.length < 3">
        <div class="content">
          <div class="title">{{item.title}}</div>
          <div class="info">
            <span>{{item.user.nickname}}</span>
            <span>{{item.comments?item.comments.length:item.comment_length}}跟帖</span>
          </div>
        </div>
        <img :src="item.cover[0].url" alt />
      </div>
      <div class="twoList" v-if="item.type == 1 && item.cover.length >= 3">
        <div class="content">
          <div class="title">{{item.title}}</div>
          <div class="img">
            <img :src="item.cover[0].url" alt />
            <img :src="item.cover[1].url" alt />
            <img :src="item.cover[2].url" alt />
          </div>
          <div class="info">
            <span>{{item.user.nickname}}</span>
            <span>{{item.comment_length}}跟帖</span>
          </div>
        </div>
      </div> 
      <div class="threeList" v-if="item.type == 2 && item.cover.length >= 1">
        <div class="content">
          <div class="title">{{item.title}}</div>
          <div class="coverWrapper">
            <img :src="item.cover[0].url" alt />
            <span class="iconfont iconshipin"></span>
          </div>
          <div class="info">
            <span>{{item.user.nickname}}</span>
            <span>{{item.comment_length}}跟帖</span>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "/post",
      params: { category: 1 },
    }).then((res) => {
      //成功回调
      //   console.log(res.data.data);
      this.list = res.data.data;
      console.log(this.list);
    });
  },
};
</script>

<style lang="less" scoped>
.onelist {
  border-bottom: 1px solid #ccc;
  padding: 5/360 * 100vw;
  display: flex;
  margin-left: 20/360 * 100vw;
  .content {
    flex: 1;
    padding: 20/360 * 100vw 20/360 * 100vw 0 0;
  }
  img {
    width: 80px;
  }
}
.info {
  padding-top: 10/360 * 100vw;
  span {
    color: rgb(155, 151, 151);
    padding-right: 10/360 * 100vw;
  }
}
.twoList {
  padding: 5/360 * 100vw;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;

  .content {
    .img {
      //   display: flex;
      //   justify-content: space-between;
      padding-top: 5/360 * 100vw;
      img {
        width: 110px;
        height: 100px;
        padding-left: 4px;
      }
    }
  }
}
.threeList{
  padding: 5/360 * 100vw;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  .coverWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10/360*100vw 0;
    img {
      height: 170/360*100vw;
      width: 100%;
      object-fit: cover;
    }
    .iconshipin {
      position: absolute;
      font-size: 46/360*100vw;
      color: #fff;
      background: #ccc;
      border-radius: 50%;
    }
  }
}
</style>