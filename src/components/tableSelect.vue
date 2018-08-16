<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <el-select v-model="value2" placeholder="请选择">
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>

  export default {
    name: 'tableSelect',
    data(){
      return{
        options2: [{
          value: '待退款',
          label: '待退款'
        }, {
          value: '已退款',
          label: '已退款'
        }],
        value2: '',
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
