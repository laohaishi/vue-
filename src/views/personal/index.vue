<template>
  <div id="app">
    <div class="profile">
      <img src alt />
      <div class="info">
        <div class="name">
          <span class="iconfont iconxingbienan"></span>
          火星网友
        </div>
        <div class="date">2020-08-22</div>
      </div>
      <span class="iconfont iconjiantou1"></span>
    </div>
    <Personal labelText='我的关注' descText='关注我的用户' @handleClick="logLabel('跳出我的关注')"></Personal>
    <Personal labelText='我的跟帖' descText='跟帖/回复' @handleClick="logLabel('跳出我的跟帖')"></Personal>
    <Personal labelText='我的收藏' descText='文章/视频' @handleClick="logLabel('跳出我的收藏')"></Personal>
    <Personal labelText='设置'  @handleClick="logLabel('跳出设置')"></Personal>
    
  </div>
</template>

<script>
import Personal from "../../components/personalBar";
export default {
  components: { Personal },
  methods:{
      logLabel(label){
          console.log(label);
      }

  }
};
</script>

<style lang="less" scoped>
.profile {
  padding: 24/360 * 100vw;
  display: flex;
  align-items: center;
  border-bottom: 4/360 * 100vw solid #e4e4e4;
  .avatar {
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    // 可以用 object-fit: ; 属性决定显示方式
    // cover 在保持长宽比的情况下, 尽可能覆盖全部位置
    object-fit: cover;
    // contain 在保持长宽比的情况下, 尽可能显示图片
    // object-fit: contain;
    border-radius: 50%;
  }
  .info {
    flex: 1;
    padding-left: 16/360 * 100vw;
    .name {
      font-size: 16/360 * 100vw;
    }
    .date {
      font-size: 14/360 * 100vw;
      color: #888;
      margin-top: 6/360 * 100vw;
    }
  }
}
</style>