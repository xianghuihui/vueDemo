<template>
    <div class="loginDiv">
      <div class="loginDiv_1">
        <div class="login_form">
          <el-form ref="loginForm">
            <p>账户登录<span>ACCOUNT LOGIN</span></p>
            <div class="inputDiv">
              <el-form-item prop="username">
                <input type="text"  class="qxs-ic_user qxs-icon" @keyup.enter="handleLogin" placeholder="用户名" v-model="userInfo.username">
              </el-form-item>
              <el-form-item prop="password">
                <input type="password"  class="qxs-ic_password qxs-icon" @keyup.enter="handleLogin" placeholder="密码" v-model="userInfo.password">
              </el-form-item>
            </div>
            <el-form-item prop="code">
              <input type="text"  class="qxs-ic_code" @keyup.enter="handleLogin" placeholder="验证码" v-model="userInfo.code">
              <div class="login-code" title="刷新" @click="refreshCode">
                <Identify :identifyCode="identifyCode"></Identify>
              </div>
            </el-form-item>
            <el-button class="login_btn" type="primary" @click="handleLogin">登录</el-button>
            <a href="#/register" class="register">去注册</a>
            <div class="biggap third-party-title">
              <h5 class="text-center">
                <span>第三方账号登录</span>
              </h5>
            </div>
            <div class="third-auth">
              <a title="用微信账户登录" class="wx" href="javascript:;"></a>
              <a title="用QQ账户登录" class="qq" href="javascript:;"></a>
            </div>
          </el-form>
          <Loading v-if="isLoging" marginTop="-220px"></Loading>
        </div>
        <div class="loginDiv_2">
          <div class="logoImg">
            <img src="../assets/logo.png">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Loading from './Loading.vue'
  import {Login} from "../api/user/login";
  import Identify from '@/components/identify/identify.vue'

  export default {
    data () {
      return {
        userInfo :{
          username : '',
          password : '',
          code: ""
        },
        show : false,
        isLoging: false,
        identifyCodes: '1234567890abcdefjhijklinopqrsduvwxyz',
        identifyCode: '',
      }
    },
    components:{
      Loading,
      Identify
    },
    methods: {
      // 重置验证码
      refreshCode () {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
      },
      makeCode (o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
        }
      },
      randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      handleLogin (){
        if(!this.userInfo.username){
          this.$message.error("请输入用户名");
          return;
        }
        if(!this.userInfo.password){
          this.$message.error("请输入密码");
          return;
        }
        if(!this.userInfo.code){
          this.$message.error("请输入验证码");
          return;
        }
        if (this.userInfo.code.toLowerCase() !== this.identifyCode.toLowerCase()) {
          this.$message.error('请输入正确验证码')
          this.refreshCode()
          return
        }
        this.isLoging = true;

        let params = {
          userName: this.userInfo.username,
          passWord: this.userInfo.password
        }
        Login(params).then(res => {
          if (res.status == 200) {
            if(res.data.error_code == 1000){
              sessionStorage.username = this.userInfo.username;
              sessionStorage.token = "123456";
              this.$notify({
                title : '提示信息',
                message : res.data.error_msg,
                type : 'success'
              });
              this.isLoging = false;
              this.$router.push({path:'/'})
            }else{
              this.$notify({
                title : '提示信息',
                message : res.data.error_msg,
                type : 'error'
              });
              this.isLoging = false;
            }
          }else {
            this.$notify({
              title : '提示信息',
              message : '系统出错',
              type : 'error'
            });
            this.isLoging = false;
          }
        })
        /*axios.get('http://localhost:3000/data?username='+this.userInfo.username+'&password='+this.userInfo.password)
          .then(res => {
            /!*console.log(res.data)*!/
            if(res.data.length > 0){
              //this.$store.commit('setToken',res.data);
              sessionStorage.username = this.userInfo.username;
              //sessionStorage.token_expire = res.data.expire;
              sessionStorage.token = res.data[0].token;
              this.$notify({
                title : '提示信息',
                message : '登录成功',
                type : 'success'
              });
              this.isLoging = false;
              this.$router.push({path:'/'})
            }else {
              this.isLoging = false;
              this.$notify({
                title : '提示信息',
                message : '账号或密码错误',
                type : 'error'
              });
            }
          })
          .catch(err => {
            console.log(err)
        ``})*/
      }
    },
    mounted() {
      // 初始化验证码
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    }
  }
</script>

<style scoped>
.loginDiv{
  height: 100%;
  width: 100%;
  background-size: 100%;
  text-align: center;
}
.loginDiv_1{
  width: 860px;
  height: 540px;
  display: inline-block;
  margin-top: 200px;
  border-radius: 6px;
  box-shadow: #BAD1F3 0px 0px 20px;
}
.login_form {
  width: 330px;
  height: 440px;
  padding: 50px;
  float: left;
  text-align: left;
}
.register{
  margin-top: 20px;
  float: right;
  color: #409eff;
}
.loginDiv_2{
  width: 430px;
  height: 540px;
  float: left;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background: url("../assets/login/loginBg.png");
}
.logoImg{
  text-align: left;
  margin: 450px 0 0 20px;
}
.logoImg img{
  width: 250px;
}
.login_form p{
  font-weight: 600;
  font-size: 18px;
}
.login_form p span{
  font-size: 14px;
  color: #CCCCCC;
  margin-left: 10px;
}
.inputDiv{
  margin: 30px 0 20px 0;
  border: 1px solid #c6e2ff;
  padding: 10px 20px;
  box-shadow: #5EA6FB 0px 0px 5px;
  border-radius: 10px;
}
.qxs-ic_user {
  background: url("../assets/login/ic_user.png") no-repeat;
  background-position: 1%;
  outline: none;
}
.qxs-ic_password {
  background: url("../assets/login/ic_password.png") no-repeat;
  background-position: 1%;
  /*margin-bottom: 20px;*/
  outline: none;
}
.qxs-ic_code {
  width: 200px;
  height: 40px;
  border: 0;
  outline: none;
  border-radius: 6px;
  box-shadow: #BAD1F3 0px 0px 20px;
  margin-bottom: 30px;
  padding-left: 10px;
}
.login-code{
  display: inline-block;
  vertical-align: top;
  margin: 2px 0 0 20px;
  cursor: pointer;
}
.el-form-item{
  margin: 0;
}
.login_logo {
  height: 100%;
}
.login_btn {
  width: 100%;
  font-size: 16px;
  background: -webkit-linear-gradient(left, #2154FA, #5EA6FB); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #2154FA, #5EA6FB); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #2154FA, #5EA6FB); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #2154FA, #5EA6FB); /* 标准的语法 */
  /*filter: brightness(1.4);*/
  border-radius: 5px;
  border: 1px solid #59A5FB;
  box-shadow: #A6D2FB 0px 10px 15px;
}
  .third-party-title{
  }
  .biggap{
    margin-top: 40px;
  }
.third-party-title h5{
  margin-bottom: -10px;
  font-size: 14px;
}
  .text-center{
    text-align: center;
  }
.third-auth {
  text-align: center;
  position: relative;
  padding: 20px 0;
}
.third-auth a.wx {
   background-position: center;
 }
.third-auth a.qq {
  background-position: 0 0;
}
.third-auth a {
  color: #666;
  margin: 15px 20px 0 20px;
  width: 40px;
  height: 40px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 4px;
  zoom: 1;
  background: #fff url(../assets/login/authn.png) no-repeat center center;
}
a, a:focus, a:active {
  outline: 0;
}
a:focus, a:visited {
  text-decoration: none;
}a {
   text-decoration: none;
 }
.isloading{
  background: #d6d6d6;
}

</style>
