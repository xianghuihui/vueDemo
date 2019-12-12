<template>
  <el-container>
    <el-header>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-col :span="5" class="logo" :class="'logo-width'">
          <a href="/" style="text-decoration:none;color:#FFFFFF;">
            <img src="../assets/logo.png">
            后台管理系统
          </a>
        </el-col>
        <el-col :span="10" class="userinfo">
          <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner">
            <img src="../assets/user.jpg">
             你好：{{ sysUserName }}
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <a href="#/">首页</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a @click="">修改密码</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a @click="logout">注销登录</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="230px">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">角色管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
      data:function(){
        return {
          sysName: '后台管理系统',
          menuData: [],
          collapsed: false,
          sysUserName: sessionStorage.getItem('username')
        }
      },
      methods: {
        //注销
        logout: function(){
          this.$confirm('确认删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            //请求后端改变登录状态
            //清空
            sessionStorage.clear()
            //跳转到登录页
            this.$router.push('/user');
          }).catch(() => {

          });
        }
      }
    }
</script>

<style scoped="scoped" lang="scss">
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .logo {
    height: 60px;
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
    border-color: rgba(238, 241, 146, 0.3);
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-right-style: solid;
  }

  .logo img {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 0px;
  }
  .logo .txt {
    color: #fff;
  }
  .logo-width {
    width: 230px;
  }
  .logo-collapse-width {
    width: 60px;
  }

  .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
    .userinfo-inner {
      cursor: pointer;
      color: #fff;
      img {
        width: 35px;
        height: 35px;
        border-radius: 20px;
        margin: 12px 10px 10px 10px;
        float: left;
      }
    }
    /*.el-dropdown-menu{
      a{
        text-decoration: none;
        color: white;
      }
    }*/
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
    .el-submenu .el-menu-item{
      padding-left: 55px!important;
    }
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-container{
    position: absolute;
    width: 100%;
    top: 0px ;
    left: 0 ;
    bottom: 0;
  }
  .el-header{
    padding: 0;
    z-index: 1000;
  }

  /*header菜单需要靠右的添加.fr即可(如：<el-menu-item class="fr" index="3">消息中心</el-menu-item>)*/
  .el-header .fr{
    float: right;
  }
  .el-header .el-menu{
    border-bottom: none;
  }
  .el-aside, .el-main{
    padding-top: 60px;
  }
  .el-aside{
    background: #545c64;
  }
  .el-aside .el-menu{
    border-right: none;
  }
  .htTitle{
    width: 200px;
    font-size: 26px;
    border-bottom: 1px solid #E9EEF3;
  }
  .el-main{
    padding: 60px 0 0 0;
  }
</style>
