<template>
  <div>
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="buju">
      <Input
      type="text"
      placeholder="请输入用户名/手机号"
      :rule='/^\d{5,11}$/'
      err_message='请输入合法的手机号'
      @valChange='setUsername'
    />
    <Input
      type="password"
      placeholder="请输入密码"
      :rule='/^\d{3,6}$/'
      err_message='请输入合法的密码'
      @valChange='setPassword'
    />
    <Input
      type="text"
      placeholder="昵称"
      :rule='/^\w{3,5}$/'
      err_message='请输入正确的昵称'
      @valChange='setNickname'
    />
    <Btn btnText='注册' @handleClick='register'></Btn>
    </div>
    
  </div>
</template>

<script>
import Btn from "../../components/btn";
import Input from "../../components/input";
export default {
  data () {
    return {
    username:'',
    password:'',
    nickname:''  
    }
  },
  components: { Btn, Input },
  methods:{
    setUsername(newUsername){
      this.username=newUsername
    },
    setPassword(newPassword){
      this.password=newPassword
    },
    setNickname(newNickname){
      this.nickname=newNickname
    },
    register(){
      if(!this.username || !this.password || !this.nickname){
        this.$toast.fail('请输入完整信息')
        return
      }
      this.$axios({
        method:'post',
        url:'http://127.0.0.1:3000/register',
        data:{
          username:this.username,
          password:this.password,
          nickname:this.nickname
        }
      }).then(res=>{
        if(res.data.message=='注册成功'){
          this.$toast.success('注册成功')
          this.$router.replace('/login')
        }else{
          this.$toast.fail(res.data.message)
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.pageWrapper {
  padding: 24/360 * 100vw;
}
.iconicon-test {
  font-size: 26/360 * 100vw;
}
.logo {
  text-align: center;
}
.iconnew {
  font-size: 126/360 * 100vw;
  color: #00cc77;
}
.buju{
  margin: 25%;
}
</style>