<template lang="">
  <div class ='index'>
    <div class='iconBox'><i class="el-icon-monitor">/首页</i></div>
    <div class="main">
      <div class='mainItem'>
        <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <p>项目：<span style="color:#808dea">外卖骑手项目</span></p>
                <p>进度：<span style="color:#b158ff">待报审</span></p>
                <p>订单量：<span style="color:#808dea">2</span></p>
                <p>订单额度：<span style="color:#000">0.20</span>元</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <p>项目：<span style="color:#808dea">外卖骑手项目</span></p>
                <p>进度：<span style="color:#b158ff">待报审</span></p>
                <p>订单量：<span style="color:#808dea">2</span></p>
                <p>订单额度：<span style="color:#000">0.20</span>元</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <p>项目：<span style="color:#808dea">外卖骑手项目</span></p>
                <p>进度：<span style="color:#b158ff">待报审</span></p>
                <p>订单量：<span style="color:#808dea">2</span></p>
                <p>订单额度：<span style="color:#000">0.20</span>元</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
      <div class='mainItem'></div>
      <div class='mainItem'></div>
      <div class='mainItem1'></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index'
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
}
.index{
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.index{
  padding: 0 10px;
}
.iconBox{
  height: 45px;
  line-height: 45px;
}
.main{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.mainItem{
width: 500px;
margin: 10px 0;
height: 700px;
background: #fff;
border-radius: 10px;
}
.mainItem1{
  width: 500px;
}
</style>
