<template lang="">
  <div class ='index'>
    <div class='iconBox'><i class="el-icon-monitor">/首页</i></div>
    <div class="main">
      <div class='mainItem'>
        <h1 class="itemTitle">最近项目</h1>
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
            <el-timeline-item timestamp="2018/4/2" placement="top">
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
      <div class='mainItem'>
        <h1 class="itemTitle">资金动态</h1>
        <template>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="所属店铺">
                    <span>{{ props.row.shop }}</span>
                  </el-form-item>
                  <el-form-item label="商品 ID">
                    <span>{{ props.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="店铺 ID">
                    <span>{{ props.row.shopId }}</span>
                  </el-form-item>
                  <el-form-item label="商品分类">
                    <span>{{ props.row.category }}</span>
                  </el-form-item>
                  <el-form-item label="店铺地址">
                    <span>{{ props.row.address }}</span>
                  </el-form-item>
                  <el-form-item label="商品描述">
                    <span>{{ props.row.desc }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
              <el-table-column label="类型" prop="name"></el-table-column>
              <el-table-column label="" prop=""></el-table-column>
              <el-table-column class="tableRight" label="账单明细" prop="price"></el-table-column>
          </el-table>
        </template>
      </div>
      <div class='mainItem throwMainItme'>
        <div class="remitBox">
          <i class="el-icon-s-order"></i>
          <div class="remitTextBox">
            <h1 class="remitTop">批量打款</h1>
            <div class="remitBottom">批量订单快速到账</div>
          </div>
        </div>
        <div class="templateBox">
          <i class="el-icon-s-claim"></i>
          <div class="tlTextBox">
            <h1 class="tlTop">模板下载</h1>
            <div class="tlBottom">批量下发的Excel模板</div>
          </div>
        </div>
        <div class="quickLinkBox">
          <h1 class="itemTitle">快速链接</h1>
          <div>
            <el-row :gutter="20">
              <el-col class="qlbText" :span="8" v-for="(item, index) in qlB" :key="index"><div class="grid-content bg-purple"><el-button class="linkBtn" type="info">{{item.name}}</el-button></div></el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class='mainItem1'></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      tableData: [
        {
          id: '12987122',
          name: '平台结算',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '-0.02'
        }, {
          id: '12987123',
          name: '平台结算',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '-0.10'
        }, {
          id: '12987125',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        }, {
          id: '12987126',
          name: '平台结算',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '-0.02'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        },
        {
          id: '12987126',
          name: '充值',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          price: '+1'
        }
      ],
      qlB: [
        {name: '项目列表', src: '#'},
        {name: '订单列表', src: '#'},
        {name: '异常订单', src: '#'},
        {name: '发票申请', src: '#'},
        {name: '交易明细', src: '#'},
        {name: '专属账户', src: '#'},
        {name: '企业信息', src: '#'},
        {name: '账号密码', src: '#'}
      ]
    }
  }
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
}
.index{
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
overflow:auto;
padding: 5px 10px;
}
.mainItem::-webkit-scrollbar{
 display: none;
}
.mainItem1{
  width: 500px;
}
.itemTitle{
  height: 50px;
  line-height: 50px;
  padding-left: 5px;
  border-bottom: 2px solid #eeeeee;
  margin-bottom: 15px;
}
.throwMainItme{
  background: none;
  border-radius: 0;
  display: flex;
  flex-direction: column;
}
.remitBox{
  height: 150px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 10px 0;
}
.remitBox i{
  font-size: 50px;
  color: #2953ff;
}
.remitBox .remitTextBox{
  text-align: right;
}
.remitBox .remitTextBox .remitBottom{
  color: #3a54e2;
  font-weight: bold;
}
.templateBox{
  height: 150px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 10px 0;
}
.templateBox i{
  font-size: 50px;
  color: #207245;
}
.tlTextBox{
  text-align: right;
}
.tlBottom{
  color: #28c982;
  font-weight: bold;
}
.quickLinkBox{
  background: #fff;
  flex: 1;
  border-radius: 10px;
}
.qlbText{
  text-align: center;
}
.linkBtn{
  width: 100px;
  height: 40px;
  margin: 10px 0;
  background: #f5f6fa;
  color: #000;
}
</style>
