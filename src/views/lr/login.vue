<template>
  <div id="login">
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
    <Btn btnText='登录' @handleClick='login'></Btn>
    </div>
  </div>
</template>

<script>
import Input from "../../components/input";
import Btn from "../../components/btn";

export default {
  data () {
    return {
      username:'',
      password:''
    }
  },
  components: {
    Btn,
    Input
  },
  methods:{
    login(){     
      if(!this.username || !this.password){
        this.$toast.fail('请填写完整信息')
        return;
      }
      console.log(this.username,this.password);
      this.$axios({    
        method:'post',
        url:'http://127.0.0.1:3000/login',
        data:{
          username:this.username,
          password:this.password
        }
      }).then(res=>{
        if(res.data.message=='登录成功'){
          this.$toast.success('登录成功')
          console.log(res.data.data);
          localStorage.setItem('token',res.data.data.token)
          localStorage.setItem('userId',res.data.data.user.id)
          this.$router.push('/personal')
        }else{
          this.$toast.fail(res.data.message)
        }
      })
    },
    setUsername(newUsername){
      this.username=newUsername
    },
    setPassword(newPassword){
      this.password=newPassword
    }

  }
};
</script>

<style lang="less" scoped>
#login{
  background: url('../../img/bg.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  height: 680px;
  color: rgb(135, 136, 138);
}
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
  font-size: 126/360*100vw;
  color: #cc3300;
}
.buju{
  margin: 23%;
}
</style>