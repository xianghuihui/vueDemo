<template>
  <el-row class="container">
    <el-col :span="5" class="col_header">
      <el-col :span="1.5">
        <span>|</span>zzb & xh
      </el-col>
    </el-col>
    <el-col :span="24" class="col_main">
      <div class="col_main_1">
        <div class="col_main_left">
          <div class="col_main_left2">
            <i class="fa fa-users" aria-hidden="true"></i>
          </div>
        </div>
        <div class="col_main_right">
          <span>1200</span>
          <p>会员总数(人)</p>
        </div>
      </div>
      <div  class="col_main_1">
        <div class="col_main_left">
          <div class="col_main_left2 left2_1">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
        </div>
        <div class="col_main_right">
          <span>230</span>
          <p>本月新增会员(人)</p>
        </div>
      </div>
      <div  class="col_main_1">
        <div class="col_main_left">
          <div class="col_main_left2 left2_2">
            <i class="fa fa-address-book-o" aria-hidden="true"></i>
          </div>
        </div>
        <div class="col_main_right">
          <span>120</span>
          <p>今日到店会员(人)</p>
        </div>
      </div>
      <div  class="col_main_1">
        <div class="col_main_left">
          <div class="col_main_left2 left2_3">
            <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
          </div>
        </div>
        <div class="col_main_right">
          <span>20.3%</span>
          <p>会员增长率</p>
        </div>
      </div>
    </el-col>
    <el-col :span="24" class="col_footer">
      <div class="col_footer_1" id="col_footer_1">

      </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    mounted(){
      this.drawLine();
    },
    methods:{
      drawLine(){
        let echarts = require('echarts/lib/echarts')
        let myChart = echarts.init(document.getElementById('col_footer_1'));
        myChart.setOption({
          title: {
            text: "DECEMBER 2019",
            left: "center",
            bottom: "5%",
            textStyle: {
              fontSize: 16
            }
          },
          grid: {
            top: '20%',
            left: '10%',
            right: '10%',
            bottom: '15%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            axisLabel: {
              margin: 30,
              color: '#00000063'
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: true,
              length: 25,
              lineStyle: {
                color: "#0000001f"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#0000001f'
              }
            }
          },
          yAxis: [{
            type: 'value',
            position: 'right',
            axisLabel: {
              margin: 20,
              color: '#00000063'
            },

            axisTick: {
              show: true,
              length: 15,
              lineStyle: {
                color: "#0000001f",
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#0000001f'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#0000001f',
                width: 2
              }
            }
          }],
          series: [{
            name: '注册总量',
            type: 'line',
            smooth: true, //是否平滑曲线显示
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#D181FC'
                },
                  {
                    offset: 0.2,
                    color: '#6A6BF9'
                  },
                  {
                    offset: 0.4,
                    color: '#2F93F6'
                  },
                  {
                    offset: 0.6,
                    color: '#A856FE'
                  },
                  {
                    offset: 1,
                    color: '#52DAF2'
                  }
                ], false), // 线条颜色
              },
            },
            label: {
              show: false,
            },
            itemStyle: {
              color: "red",
              borderColor: "#fff",
              borderWidth: 3
            },
            tooltip: {
              show: false
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#eb64fb'
                },
                  {
                    offset: 1,
                    color: '#3fbbff0d'
                  }
                ], false),
              }
            },
            data: [393, 438, 485, 631, 689, 824, 987, 1000, 1100, 1200]
          }]
        })
      }
    }
  }
</script>
<style scoped="scoped" lang="scss">
  .container{
    width: 100%;
  }
  .col_header{
    width: 100%;
    span{
      color: #3296FA;
      margin-right: 10px;
    }
  }
  .col_main{
    .col_main_1{
      margin-top: 20px;
      box-shadow: #BAD1F3 0px 0px 20px;
      margin-right: 60px;
      height: 120px;
      width: 300px;
      float: left;
    }
    .col_main_left{
      width: 60px;
      height: 60px;
      box-shadow: #BAD1F3 0px 0px 20px;
      border-radius: 40px;
      margin: 29px;
      float: left;
      .col_main_left2{
        width: 40px;
        height: 40px;
        display: inline-block;
        background: linear-gradient(to bottom left, #77B7FF, #44E5DF);
        background: -webkit-linear-gradient(to bottom left, #77B7FF, #44E5DF);
        background: -o-linear-gradient(to bottom left, #77B7FF, #44E5DF);
        background: -moz-linear-gradient(to bottom left, #77B7FF, #44E5DF);
        background: -ms-linear-gradient(to bottom left, #77B7FF, #44E5DF);
        border-radius: 40px;
        margin-top: 10px;
        line-height: 48px;
        .fa{
          font-size: 25px;
          color: white;
        }
      }
      .left2_1{
        background: linear-gradient(to bottom left, #80A8FF, #BEB5FB);
        background: -webkit-linear-gradient(to bottom left, #80A8FF, #BEB5FB);
        background: -o-linear-gradient(to bottom left, #80A8FF, #BEB5FB);
        background: -moz-linear-gradient(to bottom left, #80A8FF, #BEB5FB);
        background: -ms-linear-gradient(to bottom left, #80A8FF, #BEB5FB);
      }
      .left2_2{
         background: linear-gradient(to bottom left, #FF9D78, #FECF77);
         background: -webkit-linear-gradient(to bottom left, #FF9D78, #FECF77);
         background: -o-linear-gradient(to bottom left, #FF9D78, #FECF77);
         background: -moz-linear-gradient(to bottom left, #FF9D78, #FECF77);
         background: -ms-linear-gradient(to bottom left, #FF9D78, #FECF77);
      }
      .left2_3{
        background: linear-gradient(to bottom left, #FD7DA0, #F8B2E2);
        background: -webkit-linear-gradient(to bottom left, #FD7DA0, #F8B2E2);
        background: -o-linear-gradient(to bottom left, #FD7DA0, #F8B2E2);
        background: -moz-linear-gradient(to bottom left, #FD7DA0, #F8B2E2);
        background: -ms-linear-gradient(to bottom left, #FD7DA0, #F8B2E2);
      }
    }
    .col_main_right{
      float: right;
      text-align: right;
      margin-top: 30px;
      padding-right: 29px;
      span {
        font-size: 28px;
        font-family: '幼圆';
      }
    }
  }
  .col_footer_1{
    width: 1380px;
    height: 540px;
    margin-top: 50px;
    box-shadow: #BAD1F3 0px 0px 20px;

  }
</style>
