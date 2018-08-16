<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <label>选择日期：</label>
    <el-date-picker
      v-model="valueDay"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1"
      @change="changeSelect">
    </el-date-picker>
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
        prop="hour1"
        label="1-8点"
        width="90">
      </el-table-column>
      <el-table-column
        prop="hour10"
        label="10点"
        width="90">
      </el-table-column>
      <el-table-column
        prop="hour12"
        label="12点"
        width="90">
      </el-table-column>
      <el-table-column
        prop="hour14"
        label="14点"
        width="90">
      </el-table-column>
      <el-table-column
        prop="hour16"
        label="16点"
        width="90">
      </el-table-column>
      <el-table-column
        prop="hour18"
        label="18点"
        width="90">
      </el-table-column>
      <el-table-column
        prop="hour20"
        label="20点"
        width="90">
      </el-table-column>
      <el-table-column
        prop="hour22"
        label="22点"
        width="90">
      </el-table-column>
      <el-table-column
        prop="hour24"
        label="24点"
        width="90">
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
        tableData:[],
        valueDay: '2018-08-16',
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
      }
    },
    created(){
      this.getTableData();
    },
    mounted(){
      this.getChartData();
    },
    methods:{
      getTableData(){
        this.$get(this.ME.allMoneyByHour,{},data=>{
          this.tableData=data.tableData;
        })
      },
      getChartData(){
        this.$get(this.ME.allMoneyByHour,{},data=>{
          let myChart = echarts.init(document.getElementById('myChart'));
          let series=[];
          data.tableData.forEach(v => {
            let obj={};
            obj.type="line";
            obj.data=new Array(v.hour1,v.hour10,v.hour12,v.hour14,v.hour16,v.hour18,v.hour20,v.hour22,v.hour24);
            series.push(obj);
          })
          let option = {
            toolbox: {
              x:'950',
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              data: ['1-8点','10点','12点','14点','16点','18点','20点','22点','24点']
            },
            yAxis: {
              type: 'value'
            },
            series: series
          };
          myChart.setOption(option)
        })
      },
      changeSelect(){
        this.getTableData();
        this.getChartData();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
