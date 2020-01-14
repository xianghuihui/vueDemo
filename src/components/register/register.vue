<template>
    <div class="loginDiv">
      <div class="loginDiv_1">
        <div class="login_form">
          <el-form ref="loginForm">
            <p>账户注册<span>ACCOUNT REGISTER</span></p>
            <div class="inputDiv">
              <el-form-item prop="username">
                <input type="text"  class="qxs-ic_user qxs-icon" @keyup.enter="handleLogin" placeholder="用户名" v-model="userInfo.username">
              </el-form-item>
              <el-form-item prop="phone">
                <input type="text"  class="qxs-ic_phone qxs-icon" @keyup.enter="handleLogin" placeholder="手机号" v-model="userInfo.phone">
                <div class="login-code">
                  <button type="button" :disabled="disabled" @click="sendcode" class="btns">{{btntxt}}</button>
                </div>
              </el-form-item>
            </div>
            <el-form-item prop="code">
              <input type="text"  class="qxs-ic_code" @keyup.enter="handleLogin" placeholder="验证码" v-model="userInfo.code">
            </el-form-item>
            <el-button class="login_btn" type="primary" @click="handleLogin">注册</el-button>
            <a href="#/login" class="register">去登录</a>
          </el-form>
          <Loading v-if="isLoging" marginTop="-150px"></Loading>
        </div>
        <div class="loginDiv_2">
          <div class="logoImg">
            <img src="@/assets/logo.png">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Loading from '../Loading.vue'
  import {Register} from "@/api/user/register";

  export default {
    data () {
      return {
        userInfo :{
          username : '',
          phone : '',
          code: ""
        },
        show : false,
        isLoging: false,
        btntxt:"获取验证码",
        disabled:false,
      }
    },
    components:{
      Loading
    },
    methods: {
      //验证手机号码部分
      sendcode:function(){
        var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
        if(!this.userInfo.phone){
          this.$message.error('请输入手机号码')
        }else if(!reg.test(this.userInfo.phone)){
          this.$message.error('请输入正确手机号码')
        }else{
          this.time=60;
          this.disabled=true;
          this.timer();
          /*axios.post(url).then(
           res=>{
           this.phonedata=res.data;
          })*/
        }
      },
      timer() {
        if (this.time > 0) {
          this.time--;
          this.btntxt=this.time+"s后重新获取";
          setTimeout(this.timer, 1000);
        } else{
          this.time=0;
          this.btntxt="获取验证码";
          this.disabled=false;
        }
      },

      handleLogin (){
        if(!this.userInfo.username){
          this.$message.error("请输入用户名");
          return;
        }
        var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
        if(!this.userInfo.phone){
          this.$message.error('请输入手机号码')
          return;
        }else if(!reg.test(this.userInfo.phone)){
          this.$message.error('请输入正确手机号码')
          return;
        }
        if(!this.userInfo.code){
          this.$message.error("请输入验证码");
          return;
        }

        this.isLoging = true;

        let params = {
          name: this.userInfo.username,
          phone: this.userInfo.phone
        }
        console.log(params)
        Register(params).then(res => {
          console.log(res.data)
          if (res.status == 200) {
            if(res.data.error_code == 1000){
              sessionStorage.username = this.userInfo.username;
              this.$notify({
                title : '提示信息',
                message : '注册成功',
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
      }
    },
    mounted() {

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
  background: url("../../assets/login/loginBg.png");
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
  background: url("../../assets/login/ic_user.png") no-repeat;
  background-position: 1%;
  outline: none;
}
.qxs-ic_phone {
  width: 49%;
  background: url("../../assets/login/ic_phone.png") no-repeat;
  background-position: 2%;
  outline: none;
}
.qxs-ic_code{
  width: 96.5%;
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
}
.btns{
  width: 93px;
  height: 37px;
  border: none;
  outline: none;
  border-radius: 6px;
  background-color: #5EA6FB;
  cursor: pointer;
  color: white;
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
