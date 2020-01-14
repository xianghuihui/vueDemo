<template>
  <el-row class="container">
    <el-col :span="5" class="col_header">
      <el-col :span="1.5">
        <span>|</span>用户管理
      </el-col>
    </el-col>
    <el-col :span="24" class="col_main">
      <div class="col_main_1">
        <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe :header-cell-style="headClass" style="width: 100%">
          <el-table-column prop="id" label="ID" width="80"></el-table-column>
          <el-table-column prop="name" label="姓名" width="130"></el-table-column>
          <el-table-column prop="sex" label="性别" width="100"></el-table-column>
          <el-table-column prop="phone" label="电话" width="180"></el-table-column>
          <el-table-column prop="age" label="年龄" width="150"></el-table-column>
          <el-table-column prop="date" label="日期" width="150"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">修改
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            layout="total, prev, pager, next"
            :total="tableData.length"
            prev-text="上一页"
            next-text="下一页">
          </el-pagination>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        currentPage: 1, //默认显示页面为1
        pagesize: 10, //    每页的数据条数
        tableData: [], //需要data定义一些，tableData定义一个空数组，请求的数据都是存放这里面
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('http://localhost:3000/tableData').then(response => {
          /*console.log(response.data);*/
          this.tableData = response.data;
        }, response => {
          console.log("error");
        });
      },
      //每页下拉显示数据
      handleSizeChange: function(size) {
        this.pagesize = size;
        /*console.log(this.pagesize) */
      },
      //点击第几页
      handleCurrentChange: function(currentPage) {
        this.currentPage = currentPage;
        /*console.log(this.currentPage) */
      },
      handleDelete(index, row) {
        // 设置类似于console类型的功能
        this.$confirm("永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            // 移除对应索引位置的数据，可以对row进行设置向后台请求删除数据
            this.tableData.splice(index, 1);
            console.log(row)
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      },
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
  .el-table{
    min-height: 590px;
  }
</style>
