<template lang="">
  <div class="sendRoders">
    <div>
      <i class="el-icon-s-order">/项目任务/任务派单</i>
    </div>
    <div class="main">
      <div class="mainTop">
        <el-button round>全部任务</el-button>
        <div class="inpBox">
          <el-input v-model="sfname" placeholder="姓名/身份证"></el-input>
          <el-select v-model="Sevalue" placeholder="选择状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div class="block">
            <el-date-picker
              v-model="dateValue"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <el-button type="primary">主要按钮</el-button>
        </div>
      </div>
      <div class="mainBottom">
        <el-table
        :data="tableData"
        stripe
        style="width: 100%">
          <el-table-column
            prop="id"
            label="订单/任务编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="项目名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="price"
            label="任务金额">
          </el-table-column>
          <el-table-column
            prop="pop"
            label="接单人">
          </el-table-column>
          <el-table-column
            prop="sfnum"
            label="身份证号">
          </el-table-column>
          <el-table-column
            prop="zt"
            label="接单状态">
          </el-table-column>
          <el-table-column
            prop="time"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="cz"
            label="操作">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sendRoders',
  data () {
    return {
      sfname: '',
      options: [
        {
          value: '选项1',
          label: '已接单'
        }, {
          value: '选项2',
          label: '未接单'
        }
      ],
      Sevalue: '',
      dateValue: '',
      tableData: [
        {
          id: '1',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '2',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '3',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '4',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '5',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '6',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '7',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '8',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '9',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '10',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '11',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '12',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '13',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '14',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '15',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '16',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '17',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        },
        {
          id: '18',
          name: '外卖骑手项目',
          price: '1',
          pop: '赵伟翔',
          sfnum: 54250542505425054250,
          zt: '已接单',
          time: '2023-08-25',
          cz: '订单详情'
        }
      ]
    }
  }
}
</script>
<style lang="">
.sendRoders{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 87vw;
  margin:  0 auto;
}
.main{
  flex: 1;
  background: #fff;
}
.mainTop{
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 80px;
  align-items: center;
}
.inpBox{
  display: flex;
}
.inpBox .el-input{
  width: 200px;
}
</style>
