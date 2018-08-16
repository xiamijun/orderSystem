<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="orderList">
    <p style="font-weight: bold;font-size: 20px;margin-top: 5px;margin-left: 5px">订单列表</p>
    <div class="search">
      <el-input v-model="input" placeholder="请输入手机号/昵称" style="width: 500px"></el-input>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <div class="search2">
      <div class="orderStatus">
        <div>订单状态：</div>
        <div :class="{activeBlue:activeStatus===1}" class="changeStatus" @click="changeStatus(1)">全部</div>
        <div :class="{activeBlue:activeStatus===2}" class="changeStatus" @click="changeStatus(2)">已支付</div>
        <div :class="{activeBlue:activeStatus===3}" class="changeStatus" @click="changeStatus(3)">待支付</div>
        <div :class="{activeBlue:activeStatus===4}" class="changeStatus" @click="changeStatus(4)">已退款</div>
        <div :class="{activeBlue:activeStatus===5}" class="changeStatus" @click="changeStatus(5)">待退款</div>
      </div>
      <div style="margin-top: 20px">
        <label>商品名称：</label>
        <el-select v-model="value" placeholder="请选择" @change="changeGood($event,value)">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="listTable">
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          prop="phone"
          label="手机号"
          width="140">
        </el-table-column>
        <el-table-column
          prop="type"
          label="套餐类型"
          sortable
          width="110">
        </el-table-column>
        <el-table-column
          prop="time"
          sortable
          label="购买时间">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          sortable
          width="90">
        </el-table-column>
        <el-table-column
          prop="money"
          label="订单金额"
          sortable
          width="110">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <template v-if="scope.row.status==='待支付'||scope.row.status==='已退款'">
              ----------------------
            </template>
            <el-select v-model="value2" placeholder="请选择" @change="changeSelect($event,value)" v-else>
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          prop="hint"
          label="备注"
          width="180">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalSize">
      </el-pagination>
    </div>
    <el-dialog
      title="待退款"
      :visible.sync="daiTuiKuanDialog"
      width="30%"
      :before-close="handleClose">
      <p style="margin-bottom: 10px">确认标记为待退款吗？</p>
      <label>退款原因：</label>
      <el-input v-model="inputDaiTuiKuan" placeholder="请输入"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="daiTuiKuanDialog = false">取 消</el-button>
        <el-button type="primary" @click="daiTuiKuanDialog = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="已退款"
      :visible.sync="yiTuiKuanDialog"
      width="30%"
      :before-close="handleClose">
      <label>退款金额：</label>
      <el-input v-model="inputYiTuiKuan" placeholder="请输入" style="width: 200px"></el-input>元
      <span slot="footer" class="dialog-footer">
        <el-button @click="yiTuiKuanDialog = false">取 消</el-button>
        <el-button type="primary" @click="yiTuiKuanDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import tableSelect from '../components/tableSelect'
  export default {
    name: 'orderList',
    components:{
      tableSelect
    },
    data(){
      return{
        activeStatus:1,
        input:'',
        options: [{
          value: '全部',
          label: '全部'
        },{
          value: '基础套餐',
          label: '基础套餐'
        }, {
          value: '专属基础套餐',
          label: '专属基础套餐'
        }, {
          value: '全套模测套餐',
          label: '全套模测套餐'
        }, {
          value: '专属模测套餐',
          label: '专属模测套餐'
        }, {
          value: '单个关卡',
          label: '单个关卡'
        }],
        value: '',
        options2: [{
          value: '待退款',
          label: '待退款'
        }, {
          value: '已退款',
          label: '已退款'
        }],
        value2: '',
        tableData:[],
        tableDataOri20:[],
        tableDataOri50:[],
        tableDataOri100:[],
        currentPage:1,
        pageSize:20,
        totalSize:0,
        inputDaiTuiKuan:'',
        daiTuiKuanDialog:false,
        inputYiTuiKuan:'',
        yiTuiKuanDialog:false
      }
    },
    created(){
      this.getData(20);
    },
    methods:{
      getData(num){
        switch (num) {
          case 20:
            this.$get(this.ME.orderListTwenty,{},(data)=>{
              this.tableData=data.tableData;
              this.tableDataOri20=data.tableData;
              this.totalSize=200;
            })
            break;
          case 50:
            this.$get(this.ME.orderListFifty,{},(data)=>{
              this.tableData=data.tableData;
              this.tableDataOri50=data.tableData;
              this.totalSize=200;
            })
            break;
          case 100:
            this.$get(this.ME.orderListHundred,{},(data)=>{
              this.tableData=data.tableData;
              this.tableDataOri100=data.tableData;
              this.totalSize=200;
            })
            break;
        }
      },
      changeStatus(data){
        this.activeStatus=data;
        switch (data) {
          case 1:
            this.tableData=this.tableDataOri20
            this.totalSize=200;
            break;
          case 2:
            this.tableData=this.tableDataOri20.filter(value => {
              return value.status==='已支付'
            })
            this.totalSize=this.tableData.length;
            break;
          case 3:
            this.tableData=this.tableDataOri20.filter(value => {
              return value.status==='待支付'
            })
            this.totalSize=this.tableData.length;
            break;
          case 4:
            this.tableData=this.tableDataOri20.filter(value => {
              return value.status==='已退款'
            })
            this.totalSize=this.tableData.length;
            break;
          case 5:
            this.tableData=this.tableDataOri20.filter(value => {
              return value.status==='待退款'
            })
            this.totalSize=this.tableData.length;
            break;
        }
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        switch (val){
          case 20:
            this.getData(20);
            break;
          case 50:
            this.getData(50);
            break;
          case 100:
            this.getData(100);
            break;
        }
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      changeSelect(value){
        if (value==='待退款') {
          this.daiTuiKuanDialog=true;
        }else if (value==='已退款') {
          this.yiTuiKuanDialog=true;
        }
      },
      search(){
        if (this.input==='') {
          this.tableData=this.tableDataOri20;
          this.totalSize=200;
        }else {
          this.tableData=this.tableDataOri20.filter(value => {
            return value.phone===this.input
          })
          this.totalSize=this.tableData.length;
        }
      },
      changeGood(value){
        switch (value) {
          case '全部':
            this.tableData=this.tableDataOri20;
            this.totalSize=200;
            break;
          case '基础套餐':
            this.tableData=this.tableDataOri20.filter(value => {
              return value.type==='基础套餐'
            })
            this.totalSize=this.tableData.length;
            break;
          case '专属基础套餐':
            this.tableData=this.tableDataOri20.filter(value => {
              return value.type==='专属基础套餐'
            })
            this.totalSize=this.tableData.length;
            break;
          case '全套模测套餐':
            this.tableData=this.tableDataOri20.filter(value => {
              return value.type==='全套模测套餐'
            })
            this.totalSize=this.tableData.length;
            break;
          case '专属模测套餐':
            this.tableData=this.tableDataOri20.filter(value => {
              return value.type==='专属模测套餐'
            })
            this.totalSize=this.tableData.length;
            break;
          case '单个关卡':
            this.tableData=this.tableDataOri20.filter(value => {
              return value.type==='单个关卡'
            })
            this.totalSize=this.tableData.length;
            break;
        }
      },
    },
    watch:{
      daiTuiKuanDialog(val){
        if (!val) {
          this.value2='';
          this.inputDaiTuiKuan='';
        }
      },
      yiTuiKuanDialog(val){
        if (!val) {
          this.value2='';
          this.inputYiTuiKuan='';
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .orderList{
    background-color: #FFFFFF;
  }
  .search{
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search2{
    margin-top: 20px;
    margin-left: 20px;
  }
  .orderStatus{
    display: flex;
  }
  .orderStatus div{
    width: 70px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .changeStatus{
    cursor: pointer;
  }
  .activeBlue{
    background-color: #06A8F0;
    color: #FFFFFF;
  }
</style>
