<template>
  <el-row class="container">
    <el-col :span="5" class="col_header">
      <el-col :span="1.5">
        <span>|</span>用户管理
      </el-col>
    </el-col>
    <el-col :span="24" class="col_main">
      <div class="col_main_1">
        <el-table
          :data="tableData"
          stripe
          :header-cell-style="headClass"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="ID"
            width="80">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="130">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            width="100">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="电话"
            width="180">
          </el-table-column>
          <el-table-column
            prop="age"
            label="年龄"
            width="150">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          id:'1',
          name: '王小虎',
          sex: '男',
          phone: '18845210368',
          age: '30',
          date: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'2',
          name: '王小虎',
          sex: '男',
          phone: '18845210368',
          age: '30',
          date: '2016-05-04',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id:'3',
          name: '王小虎',
          sex: '男',
          phone: '18845210368',
          age: '30',
          date: '2016-05-01',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id:'4',
          name: '王小虎',
          sex: '男',
          phone: '18845210368',
          age: '30',
          date: '2016-05-03',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      headClass(){
        return 'background:#eef1f6;'
      }
    }
  }
</script>
<style lang="scss">
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
  .col_main_1{
    margin-top: 20px;
    /*box-shadow: #BAD1F3 0px 0px 20px;*/
    height: auto;
    width: 100%;
  }
</style>
