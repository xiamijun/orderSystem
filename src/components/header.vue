<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="head">
    <div class="topBackground">
      <span>Vue模板</span>
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
  }
  .topBackground {
    width: 100%;
    min-width: 1024px;
    height: 0.6rem;
    position: relative;
    background: -webkit-linear-gradient(#09A7F0, #7697FE); /* Safari 5.1 - 6.0 */
  }
  .topBackground span{
    font-size: .2rem;
    line-height: .6rem;
    margin-left: 1.14rem;
    color: #fff;
    position: relative;
  }
  .topBackground::before{
    content: '';
    width: .73rem;
    height: .2rem;
    display: block;
    position: absolute;
    top: 50%;
    left: .27rem;
    margin-top: -.1rem;
    background: url("../assets/images/logo.png") no-repeat center;
    background-size: .73rem .2rem;
  }
  .topBackground::after{
    content: '';
    width: 1.39rem;
    height: .59rem;
    display: block;
    position: absolute;
    top: 50%;
    right: .3rem;
    margin-top: -.3rem;
    background-size: 1.39rem .59rem;
  }
</style>
