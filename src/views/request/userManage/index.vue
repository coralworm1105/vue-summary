<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="6">
        <el-tree :data="userDeptResult.list" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-col>
      <el-col :span="18">
        <div>{{searchTitle}}<span style="red">{{userListResult.totalCount ? userListResult.totalCount : 0}}</span>人</div>
        <div class="search">
          <el-input v-model="searchParam.searchKey" size="small" placeholder="请输入内容"></el-input>
          <el-button type="primary" size="small" @click="handleSearch">搜索</el-button>
        </div>
        <el-table class="table-border-top-none" :empty-text="tableTip" border stripe :data="userListResult.list">
          <el-table-column label="姓名" prop="chineseName"></el-table-column>
          <el-table-column label="职务" prop="post"></el-table-column>
          <el-table-column label="帐号" prop="username" align='center'></el-table-column>
          <el-table-column label="帐号状态" prop="statusLabel" align='center'>
            <template slot-scope="scope">{{scope.row.status ? '已冻结' : '正常'}}</template>
          </el-table-column>
          <el-table-column label="角色" prop="roles" align='center'>
            <template slot-scope="scope">{{renderRole(scope.row.roles)}}</template>
          </el-table-column>
          <el-table-column label="操作" align='center'>
            <template slot-scope="scope">
                <el-button type="text" size="small" class="el-table-operation" @click.native.prevent="deleteRow(scope.$index, scope.row)">删除</el-button>
                <el-button type="text" size="small" class="el-table-operation" @click="editItem(scope.row)">编辑</el-button>
              </template>
          </el-table-column>
        </el-table>        
      </el-col>
    </el-row>
  </div>    
</template>
<script>
import {
  fetchUserDepttList,
  fetchUserList,
  fetchUserDetail,
  fetchUserDelete,
  fetchRoleList,
  fetchChangeUserStatus,
} from '@apis/manage';
export default {
  data(){
    return{
      searchParam: {
        searchKey:''
      },
      searchTitle: '',
      userListResult: { list: [], loading: false },
      userRoleSetResult: { list: [], loading: false },
      userDeptResult: { list: [], loading: false },
      spinloading: false,
      searchtitle: '',
      defaultProps: {
        children: 'children',
        label: 'deptName'
      },
      tableTip: '暂无数据'
    }
  },
  methods: {
    // 点击树节点的时候获取 当前部门 deptid
    handleNodeClick(info, node){
      if (!info.children) {
        this.spinloading = true;
        this.searchTitle = info.deptName;
        this.searchParam = {
          ...this.searchParam,
          deptCode: info.deptCode,
          pageNo: 1,
          keyword: '',
        };
        this.getData(() => {
          this.spinloading = false;
        });
      }
    },   
    // 获取用户列表数据
    getData(callback) {
      fetchUserList({ ...this.searchParam }, (res) => {
        this.userListResult = res.data,
        callback && callback();
      });
    },
    getRoleList(){
      fetchRoleList({}, (res) => {
        this.userRoleSetResult = Object.assign({}, res.data);
      });
      fetchUserDepttList({}, (res) => {
        if (res.data.list.length > 0) {
              // userDeptResult: res.data.list,
          this.spinloading = false,
          this.searchParam = {
            ...this.searchParam,
            deptCode: res.data.list[0].deptCode,
          };
          this.userDeptResult = res.data;
          this.getData(() => {
            this.searchtitle = '杭州市';
          });
        } else {
          this.spinloading = false;
        }
      });      
    },
    deleteRow(){

    },
    editItem(){

    },
    handleSearch(){
      this.getData();
    },
    renderRole(roles){
      const roleNames = [];
      (roles || []).map((item) => {
        roleNames.push(item.roleName);
      });
      return roleNames.length === 0 ? '' : roleNames.join(',');
    }
  },
  created() {
    this.getRoleList();
  }, 
}
</script>
<style lang="scss">
  .wrapper{
    .el-input{
      width:180px;
    }
    .search{
      padding:10px 0;
    }
  }
</style>
