<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div id="myChart" style="width: 1000px;height:400px;"></div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="type"
        label="销售额"
        width="120">
      </el-table-column>
      <el-table-column
        prop="January"
        label="1月"
        width="70">
      </el-table-column>
      <el-table-column
        prop="February"
        label="2月"
        width="70">
      </el-table-column>
      <el-table-column
        prop="March"
        label="3月"
        width="70">
      </el-table-column>
      <el-table-column
        prop="April"
        label="4月"
        width="70">
      </el-table-column>
      <el-table-column
        prop="May"
        label="5月"
        width="70">
      </el-table-column>
      <el-table-column
        prop="June"
        label="6月"
        width="70">
      </el-table-column>
      <el-table-column
        prop="July"
        label="7月"
        width="70">
      </el-table-column>
      <el-table-column
        prop="August"
        label="8月"
        width="70">
      </el-table-column>
      <el-table-column
        prop="September"
        label="9月"
        width="70">
      </el-table-column>
      <el-table-column
        prop="October"
        label="10月"
        width="70">
      </el-table-column>
      <el-table-column
        prop="November"
        label="11月"
        width="70">
      </el-table-column>
      <el-table-column
        prop="December"
        label="12月"
        width="70">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'typeMoney',
    data(){
      return{
        tableData:[]
      }
    },
    created(){
      this.$get(this.ME.allMoneyByMonth,{},data=>{
        this.tableData=data.tableData;
      })
    },
    mounted(){
      this.$get(this.ME.allMoneyByMonth,{},data=>{
        let myChart = echarts.init(document.getElementById('myChart'));
        let series=[];
        data.tableData.forEach(v => {
          let obj={};
          obj.type="line";
          obj.data=new Array(v.January,v.February,v.March,v.April,v.May,v.June,v.July,v.August,v.September,v.October,v.November,v.December);
          series.push(obj);
        })
        let option = {
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
          },
          yAxis: {
            type: 'value'
          },
          series: series
        };
        myChart.setOption(option)
      })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
