<template>
    <el-carousel trigger="click" height="height">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="small">首页</div>
      </el-carousel-item>
    </el-carousel>
</template>
<script>
  export default {
    data(){
      return{
        height: 0
      }
    },
    beforeMount:function () {

    }
  }
</script>
<style>
  .el-carousel__item h3 {
    font-size: 24px;
    opacity: 0.75;
    /*margin: 0;*/
  }
  .small {
    width: 100%;
    height: 100%;
    line-height: 2900%;
    font-size: 30px;
  }
  .el-carousel{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    background: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel__container{
    height: 100%;
  }
</style>
