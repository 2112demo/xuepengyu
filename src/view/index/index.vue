<template lang="">
  <div class ='index'>
    <div class='iconBox'><i class="el-icon-monitor">/首页</i></div>
    <div class="main">
      <div class='mainItem'></div>
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
<style lang="">
*{
  padding: 0;
  margin: 0;
}
body{
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
