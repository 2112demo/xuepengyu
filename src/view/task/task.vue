<template lang="">
  <div>
    <div class='iconBox'><i class="el-icon-tickets">/项目任务/批量新建订单</i></div>
    <div class='main'>
      <el-steps :active="active" finish-status="success" simple style="margin-top: 10px">
        <el-step title="01项目信息"></el-step>
        <el-step title="02 人员导入" ></el-step>
        <el-step title="03 数据校验" ></el-step>
      </el-steps>
      <div :class="project1">
        <!-- 类型 -->
        <div>
          <label for="">任务类型</label>
          <el-select v-model="value" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <!-- 地址 -->
        <div class="block">
          <span class="demonstration">地址</span>
          <el-cascader
            v-model="value1"
            :options="options1"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"></el-cascader>
        </div>
        <!-- 日期 -->
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <!-- 项目类型 -->
        <div>
          <label for="">项目名称</label>
          <input type="text" v-model="xmtext">
        </div>
        <!-- 项目描述 -->
        <div>
          <label for="">任务描述</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <!-- 详细地址 -->
        <div>
          <label for="">详细地址</label>
          <input type="text" v-model="xxdz">
        </div>
      </div>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'task',
  data () {
    return {
      active: 0,
      options: [
        {value: '选项1', label: '快递运输'}, {value: '选项2', label: '外卖'}, {value: '选项3', label: '跑腿'}, {value: '选项4', label: '闪送'}, {value: '选项5', label: '快递'}
      ],
      value: '',
      value1: [],
      options1: [{value: '101', label: '北京', children: [{value: '1011', label: '东城'}, {value: '1012', label: '朝阳'}, {value: '1013', label: '海淀'}]}],
      xmtext: '',
      xxdz: ''
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
<style scoped>
.iconBox{
  height: 50px;
  line-height: 50px;
}
  .main{
    width: 99%;
    margin: 10px auto 0;
    height: 780px;
    background-color: #fff;
    /* margin-top: 10px; */
  }
</style>
