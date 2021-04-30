<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div class="logo"><img src="../assets/img/logo.png"></div>
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" router="">
        <el-menu-item index="/main">Home</el-menu-item>
        <el-menu-item index="/yearlyreview">Category</el-menu-item>
        <el-menu-item index="3" disabled>Project</el-menu-item>
        <el-submenu index="4">
          <template slot="title">Sourcing</template>
          <el-menu-item index="4-1" disabled>Requirement Management</el-menu-item>
          <el-menu-item index="4-2" disabled>RFQ</el-menu-item>
          <el-menu-item index="/pricea">Abnormal Clarification</el-menu-item>
          <el-menu-item index="/negotiation">Negotiation Recommendation</el-menu-item>
          <el-menu-item index="4-3">CSC Meeting Presentation</el-menu-item>
          <el-menu-item index="4-3">Low Cost Solution</el-menu-item>
        </el-submenu>
        <el-menu-item index="5" disabled>Price</el-menu-item>
        <el-menu-item index="6" disabled>Supplier</el-menu-item>
        <el-menu-item index="7" disabled>BKM</el-menu-item>
        <el-submenu index="8">
          <template slot="title">Data Analytics</template>
          <el-menu-item index="8-1">M.G. Categorization</el-menu-item>
        </el-submenu>
        <el-menu-item index="9" disabled>Aeko</el-menu-item>
      </el-menu>
      <div class="logout">
        <div class="touxiang"><img src="../assets/img/my.jpg"></div>
        <el-link type="info"  @click="logout">Sign Out</el-link>
      </div>
    </el-header>
    <!-- 主区域 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.el-container{
  height: 100%;
}
.logo{
  display: flex;
  align-items:center;
  height: 60px;
  float: left;
  width: 83px;
  margin-right: 60px;
}
.logo img{
  width: 83px;
  height: 40px;
}
.el-menu-demo{
  display: flex;
  justify-items: center;
  float: left;
}
.el-menu.el-menu--horizontal{
  border-bottom: 0px;
}
.el-main{
  background-color: #f2f2f2;
}
.logout{
  height: 100%;
  display: flex;
  align-items:center;
  float: right;
}
.touxiang{
  margin-right: 8px;
}
.touxiang img{
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
</style>
