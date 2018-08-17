<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="head">
    <div class="topBackground">
      <img src="../assets/images/music.png" alt="" style="margin-left: 19%">
      <span class="title" style="margin-left: 10px">音乐素养展示与评价活动</span>
      <span style="margin-left: 40px">用户系统</span>
      <span style="margin-left: 40px">订单系统</span>
      <img src="../assets/images/user.png" alt="" style="margin-left: 34%">
      <span class="username" style="margin-left: 10px">路小雨</span>
      <span class="checkOut" style="margin-left: 10px">注销</span>
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
    justify-content: flex-start;
    flex-wrap: wrap;
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
  .topBackground span:nth-of-type(2),.topBackground span:nth-of-type(3),.topBackground span:nth-of-type(5){
    cursor: pointer;
  }
  .username,.checkOut{
    color:#7A8087
  }
</style>
