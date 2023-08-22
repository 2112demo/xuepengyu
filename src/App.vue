<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <h4 class="tabTitle"><i class="el-icon-cloudy"></i>灵活用工服务平台</h4>
        <el-menu :default-active="$route.path" router :default-openeds="['1']" :collapse="isCollapse">
          <p v-show="!isCollapse">常规操作</p>
          <el-menu-item index="/"><i class="el-icon-monitor"></i><span>首页</span></el-menu-item>
          <p v-show="!isCollapse">业务管理</p>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-tickets"></i><span>项目任务</span></template>
            <el-menu-item-group>
              <el-menu-item index="/task">批量新建订单</el-menu-item>
              <el-menu-item index="2-2">项目列表</el-menu-item>
              <el-menu-item index="2-2">任务派单</el-menu-item>
              <el-menu-item index="2-2">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-wallet"></i><span>资金发票</span></template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-office-building"></i><span>企业管理</span></template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="4-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="4-4">
              <template slot="title">选项4</template>
              <el-menu-item index="4-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <p v-show="!isCollapse">服务中心</p>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-user"></i><span>身份&安全</span></template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="5-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="5-4">
              <template slot="title">选项4</template>
              <el-menu-item index="5-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class='top'>
            <div class="topItme1">
              <i class="el-icon-more"></i>
              <i class="el-icon-full-screen"></i>
            </div>
            <div class="topItme2">
              <span>中服云(北京)文化发展有限公司</span>
              <i class="el-icon-setting"></i>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color:#f5f5f5;
}
.el-container{
  height: 100vh;
}
.el-container .el-aside{
  height: 100vh;
  background: #fff;
}
#app{
  width: 100%;
  height: 100vh;
}
.tab{
  background-color: #fff;
  height: 100%;
  /* margin-right: 240px; */
}
.tabTitle{
  background-color: #d0121b;
  height: 50px;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
.top{
  background-color: #2c4198;
  height: 50px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  font-size: 18px;
}
.top i{
  font-size: 20px;
}
.el-header{
  padding: 0;
}
.topItme1{
  width: 80px;
  display: flex;
  justify-content: space-between;
}
.topItme2{
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
