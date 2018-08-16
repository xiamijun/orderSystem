<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <label>选择月份：</label>
    <el-date-picker
      v-model="valueMonth"
      type="month"
      placeholder="选择月"
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
        prop="day1"
        label="01"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day2"
        label="02"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day3"
        label="03"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day4"
        label="04"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day5"
        label="05"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day6"
        label="06"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day7"
        label="07"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day8"
        label="08"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day9"
        label="09"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day10"
        label="10"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day11"
        label="11"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day12"
        label="12"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day13"
        label="13"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day14"
        label="14"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day15"
        label="15"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day16"
        label="16"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day17"
        label="17"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day18"
        label="18"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day19"
        label="19"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day20"
        label="20"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day21"
        label="21"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day22"
        label="22"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day23"
        label="23"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day24"
        label="24"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day25"
        label="25"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day26"
        label="26"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day27"
        label="27"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day28"
        label="28"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day29"
        label="29"
        width="70">
      </el-table-column>
      <el-table-column
        prop="day30"
        label="30"
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
        tableData:[],
        valueMonth: '2018-08'
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
        this.$get(this.ME.allMoneyByDay,{},data=>{
          this.tableData=data.tableData;
        })
      },
      getChartData(){
        this.$get(this.ME.allMoneyByDay,{},data=>{
          let myChart = echarts.init(document.getElementById('myChart'));
          let series=[];
          data.tableData.forEach(v => {
            let obj={};
            obj.type="line";
            obj.data=new Array(v.day1,v.day2,v.day3,v.day4,v.day5,v.day6,v.day7,v.day8,v.day9,v.day10,v.day11,v.day12,v.day13,v.day14,v.day15,v.day16,v.day17,v.day18,v.day19,v.day20,v.day21,v.day22,v.day23,v.day24,v.day25,v.day26,v.day27,v.day28,v.day29,v.day30);
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
              data: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
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
