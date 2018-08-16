<template>
  <div>
    <div class="contentOne">
      <div class="contentOneItem">
        <p>今日销售额</p>
        <p>{{todayMoney}}元</p>
      </div>
      <div class="contentOneItem">
        <p>今日销售额</p>
        <p>{{AllMoney}}元</p>
      </div>
    </div>
    <div class="contentTwo">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>今日销售数量</span>
        </div>
        <div class="cardContent">
          <div class="contentTwoItemOne">
            <span class="cardTxt">基础套餐</span>
            <span class="cardNum">{{jichutaocan}}</span>
            <span class="cardTxt cardTxt2">专属基础套餐</span>
            <span class="cardNum cardNum2">{{zhuanshujichu}}</span>
          </div>
          <div class="contentTwoItemTwo">
            <span class="cardTxt">全套模测套餐</span>
            <span class="cardNum">{{quantaomoce}}</span>
            <span class="cardTxt cardTxt2">专属模测套餐</span>
            <span class="cardNum cardNum2">{{zhuanshumoce}}</span>
          </div>
          <div class="contentTwoItemThree">
            <div class="contentTwoItemTwo">
              <span class="cardTxt">单个关卡</span>
              <span class="cardNum">{{dangeguanka}}</span>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="contentThree">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="销售额走势" name="first"><allMoney></allMoney></el-tab-pane>
        <el-tab-pane label="各商品销售额走势" name="second"><typeMoney></typeMoney></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import typeMoney from '../components/typeMoney'
  import allMoney from '../components/allMoney'
  export default {
    components:{
      typeMoney,
      allMoney
    },
    data() {
      return {
        todayMoney:'',
        AllMoney:'',
        jichutaocan:'',
        quantaomoce:'',
        dangeguanka:'',
        zhuanshumoce:'',
        zhuanshujichu:'',
        activeName: 'first',

      };
    },
    created(){
      this.$get(this.ME.orderStatistics,{},data=>{
        this.todayMoney=data.todayMoney;
        this.AllMoney=data.AllMoney;
        this.jichutaocan=data.jichutaocan;
        this.quantaomoce=data.quantaomoce;
        this.dangeguanka=data.dangeguanka;
        this.zhuanshumoce=data.zhuanshumoce;
        this.zhuanshujichu=data.zhuanshujichu;
      })


    },
    methods: {
    }
  }
</script>

<style scoped>
  .contentOne{
    height:80px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 10px 0px rgba(222,222,222,0.17);
    display: flex;
  }
  .contentOne .contentOneItem:nth-of-type(2){
    margin-left: 52px;
  }
  .contentOneItem{
    margin-left: 25px;
    position: relative;
    top:14px;
    color: #394765;
  }
  .contentOneItem p:nth-of-type(1){
    font-size:12px;
  }
  .contentOneItem p:nth-of-type(2){
    margin-top: 15px;
    font-size:20px;
  }
  .contentTwo{
    margin-top: 20px;
  }
  .clearfix{
    font-size:16px;
    color: #394765;
  }
  .cardContent{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 170px;
  }
  .contentTwoItemOne,.contentTwoItemTwo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
  .cardTxt{
    font-size:14px;
    color: #B6BCC8;
    position: relative;
    bottom: 35px;
  }
  .cardNum{
    font-size:20px;
    color: #394765;
    position: relative;
    bottom: 35px;
  }
  .cardTxt2{
    position: relative;
    top: 10px;
  }
  .cardNum2{
    position: relative;
    top: 10px;
  }
  .contentTwo{
    margin-top: 20px;
  }
  .contentThree{
    margin-bottom: 70px;
  }
</style>