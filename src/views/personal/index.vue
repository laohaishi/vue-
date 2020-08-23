<template>
  <div class="pro">
    <div class="profile">
      <!-- <img class="avatar" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1927727249,2644777397&fm=26&gp=0.jpg" alt=""> -->
      <img v-if='user.head_img' class="avatar" :src="'http://127.0.0.1:3000'+user.head_img" alt="">
      <img v-else src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1927727249,2644777397&fm=26&gp=0.jpg" alt="" class="avatar">
      <div class="info">
        <div class="name">
          <!-- 方法一: -->
          <span v-if="user.gender==1" class="iconfont iconxingbienan"></span>
          <span v-if='user.gender==0' class="iconfont iconxingbienv"></span>
          <!-- 方法二: -->
          <!-- <span class="iconfont" :class='{
            iconxingbienan:userInfo.gender==1,
            iconxingbienv:userInfo.gender==0
            }'></span> -->
          {{user.nickname}}
        </div>
        <div class="date">2020-08-22</div>
        <!-- <div v-if="user.create_date" class="date">{{user.create_date.split('T')[0]}}</div> -->
      </div>
      <span class="iconfont iconjiantou1" id="icon"></span>
    </div>
    <Personal labelText='我的关注' descText='关注我的用户' @handleClick="logLabel('跳出我的关注')"></Personal>
    <Personal labelText='我的跟帖' descText='跟帖/回复' @handleClick="logLabel('跳出我的跟帖')"></Personal>
    <Personal labelText='我的收藏' descText='文章/视频' @handleClick="logLabel('跳出我的收藏')"></Personal>
    <Personal labelText='设置'  @handleClick="logLabel('跳出我的')"></Personal>
    <Personal labelText='退出登录'  @handleClick="logOut"></Personal>
    
  </div>
</template>

<script>
import Personal from "../../components/personalBar";
export default {
  data () {
    return {
    user:{}  
    }
  },
  components: { Personal },
  methods:{
      logLabel(label){
          console.log(label);
      },
      logOut(){
        localStorage.clear();
        this.$router.replace('/')
      }
  },
  created () {
        // console.log(localStorage.getItem('token'));
        // console.log(localStorage.getItem('userId'));
        this.$axios({
          url:'http://127.0.0.1:3000/user/' + localStorage.getItem('userId'),
          headers:{
            Authorization:'Bearer '+localStorage.getItem('token')
          }
        }).then(res=>{
          if(res.data.message=='用户信息验证失败'){
            localStorage.clear();
            this.$router.replace('/login')
            return;
          }
          console.log(res.data);
          this.user=res.data.data
          console.log(this.user);
        })
      }
};
</script>

<style lang="less" scoped>
.profile {
  padding: 20/360 * 100vw;
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
    width: 300px;
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
  .icon{
    padding-left: 30px;
  }
   .iconxingbienan {
            color: #71b1e1;
        }
        .iconxingbienv {
            color: #ea46ba;
        }
}
</style>