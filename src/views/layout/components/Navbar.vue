<template>
  <el-menu class="navbar" mode="horizontal" :class="{'navbarDataAnalysis': $route.path === '/dataanalysis/index'}">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="true"></hamburger>
    <span class="title">后台管理系统</span>
    <el-dropdown @command="handleCommand" class="current-user" trigger="click">
      <div class="user-info">
        <img src="../../../assets/avatar.png" width="40" height="40">
        <span>{{loginUsername}}</span>
        <i class="el-icon-arrow-down"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="modify">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      user: {}
    }
  },
  computed: {
    loginUsername() {
      return 'admin'
    }

  },
  methods: {
    handleCommand(command) {
    },
    toggleSideBar() {
    },
    logout() {
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  position: relative;
  height: 60px;
  line-height: 60px;
  background-color: #031321;
  border-bottom: 2px solid #041f40;
  border-radius: 0px !important;
  padding-right: 60px;
  .hamburger-container {
    fill: #fff;
    line-height: 68px;
    height: 60px;
    width: 60px;
    text-align: center;
    float: left;
    padding: 0 10px;
  }
  .title {
    color: #fff;
    font-size: 30px;
  }
  .current-user {
    position: absolute;
    right: 60px;
    top: 0;
    font-size: 0;
    .user-info {
      cursor: pointer;
      img {
        vertical-align: middle;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      span, i {
        margin-left: 10px;
        vertical-align: middle;
        font-size: 18px;
        color: #fff;
      }
    }
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
}
</style>

