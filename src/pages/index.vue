<template>
  <div>
    <headerComponent></headerComponent>
    <div class="container">
      <div class="left">
        <div class="tab1" :class="{tabBlue:activeTab===1}" @click="changeTab(1)"><span>订单统计</span></div>
        <div class="tab2" :class="{tabBlue:activeTab===2}" @click="changeTab(2)"><span>订单列表</span></div>
      </div>
      <div class="contentArea">
        <orderStatistics v-if="activeTab===1"></orderStatistics>
      </div>
    </div>
  </div>
</template>

<script>
  import headerComponent from '@/components/header.vue'
  import orderStatistics from './orderStatistics.vue'
  export default {
    components:{
      headerComponent,
      orderStatistics
    },
    data() {
      return {
        activeTab:1
      };
    },
    methods: {
      changeTab(data){
        this.activeTab=data;
      }
    }
  }
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: center;
  }
  .contentArea {
    width: 1000px;
    /*min-width: 1024px;*/
    margin-top: 88px;
    margin-left: 20px;
  }
  .left{
    margin-top: 88px;
    width:180px;
    height:80px;
    background: #fff;
    min-width: 67px;
  }
  .tab1,.tab2{
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .tabBlue{
    background-color: #45B5FB;
    color: #fff;
  }
</style>