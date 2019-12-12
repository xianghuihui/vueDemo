<template>
    <div class="loginDiv">
      <div class="login_form">
        <el-form ref="loginForm">
          <h2>登录</h2>
          <el-form-item prop="username">
            <input type="text"  class="qxs-ic_user qxs-icon" @keyup.enter="handleLogin" placeholder="用户名" v-model="userInfo.username">
          </el-form-item>
          <el-form-item prop="password">
            <input type="password"  class="qxs-ic_password qxs-icon" @keyup.enter="handleLogin" placeholder="密码" v-model="userInfo.password">
          </el-form-item>
          <el-button class="login_btn" type="primary" @click="handleLogin">登录</el-button>
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
      </div>
      <Loading v-if="isLoging" marginTop="-12%"></Loading>
    </div>
</template>

<script>
  import Loading from './Loading.vue'
  import {Login} from "../api/user/login";

  export default {
    data () {
      return {
        userInfo :{
          username : '狒狒',
          password : '123456',
        },
        show : false,
        isLoging: false,
      }
    },
    components:{
      Loading
    },
    methods: {
      handleLogin (){
        if(!this.userInfo.username){
          this.$message.error("请输入用户名");
          return;
        }
        if(!this.userInfo.password){
          this.$message.error("请输入密码");
          return;
        }
        this.isLoging = true;

        let params = {
          name: this.userInfo.username,
          pwd: this.userInfo.password
        }
        Login(params).then(res => {
          if (res.status == 200) {
            sessionStorage.username = this.userInfo.username;
            sessionStorage.token = "123456";
            this.$notify({
              title : '提示信息',
              message : '登录成功',
              type : 'success'
            });
            this.isLoging = false;
            this.$router.push({path:'/'})
          }else {
            this.$notify({
              title : '提示信息',
              message : '账号或密码错误',
              type : 'error'
            });
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
    mounted: function() {

    }
  }
</script>

<style scoped>
.loginDiv{
  background: url("../assets/login/loginBg.jpg");
  height: 100%;
  width: 100%;
  background-size: 100%;
  text-align: center;
}
.login_form {
  /*padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;*/
  display: inline-block;
  width: 400px;
  height: 380px;
  padding: 30px;
  background: rgba(255,255,255,0.3);
  margin-top: 10%;
  color: white;
  border-radius: 5px;
}
.qxs-ic_user {
  background: url("../assets/login/ic_user.png") no-repeat;
  background-position: 3%;
  outline: none;
}
.qxs-ic_password {
  background: url("../assets/login/ic_password.png") no-repeat;
  background-position: 3%;
  margin-bottom: 20px;
  outline: none;
}
.login_logo {
  height: 100%;
}
.login_btn {
  width: 100%;
  font-size: 16px;
  background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
  filter: brightness(1.4);
  border-radius: 5px;
  border: none;
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
.isloading{background: #d6d6d6}
</style>
