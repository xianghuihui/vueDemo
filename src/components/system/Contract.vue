<template>
  <div class="bigDiv">
    <h2>联系人管理</h2>
    <el-table
      :data="tableData"
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
    }
  }
</script>
<style>
  .bigDiv{
    text-align: center;
  }
</style>
