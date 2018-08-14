<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="head">
    <div class="topBackground">
      <img src="../assets/images/music.png" alt="">
      <span class="title">音乐素养展示与评价活动</span>
      <span>用户系统</span>
      <span>订单系统</span>
      <img src="../assets/images/user.png" alt="">
      <span class="username">路小雨</span>
      <span class="checkOut">注销</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'headerComponent',
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .head{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    box-shadow:5px 0px 10px rgba(0,0,0,0.05);
  }
  .topBackground {
    width: 100%;
    min-width: 1024px;
    height:68px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .topBackground .title{
    font-size:20px;
    font-family:FZY3JW--GB1-0;
    color:#39424B;
  }
  .topBackground span:nth-of-type(2){
    color: #7A8087;
  }
  .topBackground span:nth-of-type(3){
    color: #209CEA;
  }
  .topBackground span:nth-of-type(2),.topBackground span:nth-of-type(2){
    cursor: pointer;
  }
  .username,.checkOut{
    color:#7A8087
  }
</style>
