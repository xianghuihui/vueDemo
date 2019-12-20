<template>
  <el-container>
    <el-header>
      <el-menu
        class="el-menu-demo"
        mode="horizontal">
        <el-col :span="5" class="logo" :class="'logo-width'">
          <a href="/" style="text-decoration:none;">
            <img src="../assets/logo.png">
            <!--后台管理系统-->
          </a>
        </el-col>
        <el-col :span="0.8">
          <div class="tools" @click.prevent="collapse" v-model="isCollapse">
            <transition name="fade" mode="out-in">
              <i v-if="!isCollapse" key="1" class="el-icon-s-fold"></i>
              <i v-else key="2" class="el-icon-s-unfold"></i>
            </transition>
          </div>
        </el-col>
        <el-col :span="10" class="userinfo">
          <el-dropdown trigger="hover">
            <span class="userinfo-inner">
              <img src="../assets/user.jpg">
               你好：{{ sysUserName }}狒狒
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <a href="/" class="homeA">首页</a>
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
      <el-aside :style="isCollapse?{ 'width': '64px' }:{ 'width': '230px' }">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color = rgba(0,0,0,0)
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse" :default-active="$route.path" unique-opened router>
          <template v-for="(item,index) in menuData" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="!item.leaf">
              <template slot="title" class="left_menu">
                <i :class="item.iconCls"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
                {{child.name}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
              <i :class="item.iconCls"></i>{{item.children[0].name}}
            </el-menu-item>
          </template>
          <!--<el-menu-item index="2">
            <i class="el-icon-s-check"></i>
            <span slot="title">角色管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-orange"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>-->
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
    let initMenu = function() {
      for(let i in this.$router.options.routes) {
        let root = this.$router.options.routes[i]
        if(root.hidden)
          continue
        let children = []
        for(let j in root.children) {
          let item = root.children[j]
          if(item.hidden)
            continue
          children.push(item)
        }

        if(children.length < 1)
          continue
        this.menuData.push(root)
        root.children = children
      }
    }
    export default {
      data:function(){
        return {
          sysName: '后台管理系统',
          menuData: [],
          sysUserName: sessionStorage.getItem('username'),
          isCollapse: false,
        }
      },
      methods: {
        //注销
        logout: function(){
          this.$confirm('确认退出?', '提示', {
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
        },
        collapse: function() {
          this.isCollapse = !this.isCollapse;
        },
        initMenu: initMenu,
      },
      mounted: function() {
        this.initMenu()
      }
    }
</script>
<style>

  .el-submenu__title:hover{
    background: #3881F0!important;
  }
</style>
<style scoped="scoped" lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
  }
  .el-header{
    text-align: center;
    line-height: 60px;
    .logo {
      height: 60px;
      font-size: 22px;
      padding-left: 7px;
      padding-right: 7px;
      background: linear-gradient(to top left, #77B7FF, #44E5DF);
      background: -webkit-linear-gradient(to top left, #77B7FF, #44E5DF);
      background: -o-linear-gradient(to top left, #77B7FF, #44E5DF);
      background: -moz-linear-gradient(to top left, #77B7FF, #44E5DF);
      background: -ms-linear-gradient(to top left, #77B7FF, #44E5DF);
      img {
        width: 220px;
        float: left;
        margin: 2px 0 0px 0px;
      }
    }
    .logo-width {
      width: 230px;
    }
    .tools {
      width: 60px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
      font-size: 28px;
      color: rgba(116, 187, 253, 0.8);
    }

    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        img {
          width: 35px;
          height: 35px;
          border-radius: 20px;
          margin: 12px 10px 10px 10px;
          float: left;
        }
      }
    }
  }

  .homeA{
    color: black;
    text-decoration: none;
  }

  .el-dropdown-item:hover{
    color: #409eff;
  }

  .el-aside {
    transition: all .4s ease;
    background: linear-gradient(to top, #4EBFE9, #5EA6FB)!important;
    background: -webkit-linear-gradient(to top, #4EBFE9, #5EA6FB)!important;
    background: -o-linear-gradient(to top, #4EBFE9, #5EA6FB)!important;
    background: -moz-linear-gradient(to top, #4EBFE9, #5EA6FB)!important;
    background: -ms-linear-gradient(to top, #4EBFE9, #5EA6FB)!important;
    line-height: 200px;
    .el-menu{
      border-right: none;
      .el-submenu .el-menu-item{
        padding-left: 55px!important;
      }
    }

  }
  .el-menu-item:hover{
    background-color: #3881F0 !important;
  }

  .el-main {
    text-align: center;
    /*line-height: 160px;*/
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
    box-shadow: #BAD1F3 0px 0px 25px;
  }
  .el-aside, .el-main{
    padding-top: 60px;
  }
  .el-aside{
    background: #545c64;
  }
  .htTitle{
    width: 200px;
    font-size: 26px;
    border-bottom: 1px solid #E9EEF3;
  }
  .el-main{
    padding: 100px 40px 40px 40px;
  }
</style>
