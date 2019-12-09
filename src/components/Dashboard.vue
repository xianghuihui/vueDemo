<template>
  <div id="app" class="block">
    <el-carousel trigger="click" :height="height">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="small">首页</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        height: 0
      }
    },
    beforeMount:function () {
      this.height = jQuery(window).height() - 60 + 'px';
    }
  }
</script>
<style>
  .block{
    text-align: center;
  }
  .el-carousel__item h3 {
    font-size: 24px;
    opacity: 0.75;
    /*margin: 0;*/
  }
  .small {
    padding-top: 25%;
    font-size: 30px;
  }
  .el-carousel{
    width: 88%;
  }
  .el-carousel__item:nth-child(2n) {
    background: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
