<template>
    <div class="dataList1">
      <div id="dateContainer">
        <div class="nowTime">
            <button class="preMon" @click="preMon" :style="{background:tabIndex === 0?'#0DBA7F' : '#1B1B23'}">
              现在：{{ NowMonth + 1}}月
              <p class="totalTask">任务总数：256221</p>
            </button>
            <button class="thisMon" @click="Expired" :style="{background:tabIndex === 1?'#DF4B4B' : '#1B1B23'}">
              <div :style="{color:tabIndex === 1?'#fff' : '#DF4B4B'}">25</div>
              <p class="totalTask">已过期 ></p>
            </button>
            <button class="nextMon" @click="nextMon" :style="{background:tabIndex === 2?'#6B50D0' : '#1B1B23'}">
              <div :style="{color:tabIndex === 2?'#fff' : '#6B50D0'}">25345</div>
              <p class="totalTask">下个月 ></p>
            </button>
        </div>
        <table border="1" id="table">
          <thead>
            <tr class="xinqi">
              <td class="isRed">日</td>
              <td>一</td>
              <td>二</td>
              <td>三</td>
              <td>四</td>
              <td>五</td>
              <td class="isRed">六</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in tr_str" :key=i>
              <!-- <td v-if="tabIndex !== 1" v-for="k in 7" :key = k v-bind:class="{highlight: tabIndex !== 1 && dnow===(i-1) * 7 + k - firstnow} " @click="change((i-1) * 7 + k - firstnow)" :style="{background:(i-1) * 7 + k - firstnow >= NowDay &&  (i-1) * 7 + k - firstnow < NowDay + 8  && NowMonth === mnow ? 'rgba(223,75,75,0.10)' : ''}">  -->
              <td v-if="tabIndex !== 1" v-for="k in 7" :key = "k+i" v-bind:class="{highlight: tabIndex !== 1 && dnow===(i-1) * 7 + k - firstnow} " @click="change((i-1) * 7 + k - firstnow)" :style="{background: bgRed((i-1) * 7 + k - firstnow)}"> 
                <div class="dateNub">
                  {{ getTitle((i-1) * 7 + k - firstnow) }}
                </div>

                <div class="" v-for="(LMsg,index) in jsonHtml" :key= index  v-if="(i-1) * 7 + k - firstnow === jsonHtml[index].date && (i-1) * 7 + k - firstnow <= m_days[mnow]">
                  <p v-if="(i-1) * 7 + k - firstnow <= NowDay && NowMonth === mnow">{{ LMsg.msg }}</p>
                  <p v-else>0</p>
                  <div class="GqTotal">共{{ LMsg.total }}</div>
                </div>
              </td>
              <!-- 已过期 日历无点击事件 -->
              <td v-if="tabIndex === 1" v-for="k in 7" :key = k v-bind:class="{highlight: tabIndex !== 1 && dnow===(i-1) * 7 + k - firstnow} " >  
                <div class="dateNub">
                  {{ getTitle((i-1) * 7 + k - firstnow) }}
                </div>

                <div class="" v-for="(LMsg,index) in jsonHtml" :key= index  v-if="(i-1) * 7 + k - firstnow === jsonHtml[index].date && (i-1) * 7 + k - firstnow <= m_days[mnow]">
                  <p v-if="(i-1) * 7 + k - firstnow <= NowDay && NowMonth === mnow">{{ LMsg.msg }}</p>
                  <p v-else>0</p>
                  <div class="GqTotal">共{{ LMsg.total }}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class='taskTable'>
        <div class="date__showNowTime" >
          <span v-if="showDateTitle"><span v-text="mnow + 1"></span>月<span v-text="dnow"></span>日</span>
          <span v-if="!showDateTitle">已过期</span>
          <div class="search" style="margin-right:20px">
              <input class="search_input" placeholder="请输入电梯名称/注册代码"/>
              <span class="search_btn"></span>
          </div>
        </div>
        <el-table
          empty-text=" " 
          @filter-change="handleFilterChange"
          :data="liftDatas"
          height="370"
          border
          class="tableBg">
          <el-table-column
            prop="id"
            label="电梯编号"
            min-width="50"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            :show-overflow-tooltip=true
            >
          </el-table-column>
          <el-table-column
            prop="person"
            label="维保人员"
            min-width="50">
          </el-table-column>
          <el-table-column  
            label="维保公司"
            prop="company"
            :show-overflow-tooltip=true
            >
          </el-table-column>
          <el-table-column
            prop="maintenanceTime"
            label="维保时长/min"
            min-width='85'
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="averageMil"
            label="月均里程/km"
            min-width='80'
            sortable>
          </el-table-column>
          <el-table-column 
            label="操作" width="50">
            <template slot-scope="scope">
              <span class="tableLast">详情</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </template>



  <script>
   export default {
    data() {
      return {
        showDateTitle: true,
        NowMonth:'', //今天是几月份
        NowDay:'', //今天是几号
        newDate: '',//当前的日期的信息
        ynow: '',//当前的年数
        mnow: '',//当前选择的月份
        dnow: '',//当前的天数
        firstDay: '',//第一天
        firstnow: '',//当前的星期
        m_days: [],//每个月的天数
        tr_str: '',//行数
        tabIndex:0, //三栏按钮切换
        show1: true,
        jsonHtml : [
          {date: 1,msg: 1230, total:1234},
          {date: 2,msg: 750, total:1934},
          {date: 3, msg: 2212,total:2300},
          {date: 4,msg: 1231,total:3456},
          {date: 6,msg: 2345,total:2346},
          {date: 12,msg: 532,total:3253},
          {date: 15,msg: 1234,total:3468},
          {date: 20,msg: 300,total:2456},
          {date: 13, msg: 1097,total:2300},
          {date: 24,msg: 356,total:3456},
          {date: 16,msg: 986,total:2346},
          {date: 11,msg: 230,total:3253},
          {date: 17,msg: 1234,total:3468},
          {date: 18,msg: 245,total:2456},
          {date: 8,msg: 237,total:2456},
          {date: 25,msg: 789,total:3468},
          {date: 21,msg: 500,total:2456},
          {date: 22, msg: 290,total:2300},
          {date: 26,msg: 560,total:3456},
          {date: 28,msg: 653,total:2346},
          {date: 31,msg: 653,total:2346},
        ],
        liftDatas : [],
        tableStatus: [{ text: '紧急', value: '紧急' },{ text: '南山', value: '南山' }],
        addresss: ['南光城市花园A座','花园城数码大厦A座','吉荣花园一期','吉荣花园二期','吉荣花园三期','南光城市花园B座','花园城数码大厦B座','花园城数码大厦C座','花园城数码大厦D座','花园城一期','花园城二期','花园城三期','花园城四期','花园城五期'],
        persons:['尹霞','杨帆','廖秀英','江霞','马敏','汤涛','小明','李磊','苏超','江霞','江霞' ],
        dt: ['DT','D'],
      }
    },
    mounted() {
      //画出当前的月份的天数对应的表格
      this.getDaysInfo();
      //进行数据的获取，显示到对应的位置
      var _this = this
      this.showColumn()
      window.addEventListener("resize", function() {
        _this.showColumn()
      })
      this.isShowTable()
      this.changeJsonData()
    },
    methods: {
      changeJsonData(){
        if(this.showTable || this.tabIndex === 1){
          this.liftDatas = [
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: this.addresss[this.randomN()],person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000), averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: this.addresss[this.randomN()],person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+Math.floor(Math.random()*10),address: this.addresss[this.randomN()],person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: this.addresss[this.randomN()],person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: this.addresss[this.randomN()],person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: this.addresss[this.randomN()],person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: this.addresss[this.randomN()],person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: this.addresss[this.randomN()],person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: this.addresss[this.randomN()],person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: this.addresss[this.randomN()],person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: this.addresss[this.randomN()],person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: '吉荣花园',person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: '花园城数码大厦',person:this.persons[this.randomN()],company:'深圳松达电梯有限公司',maintenanceTime:5432,averageMil:4245},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: '吉荣花园',person:'汤涛',company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: '南光城市花园A座',person:'尹霞',company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: '花园城数码大厦',person:'尹霞',company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: '花园城数码大厦',person:'杨帆',company:'深圳松达电梯有限公司',maintenanceTime:this.selectfrom(1000,9000),averageMil:this.selectfrom(1000,9000)},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: '吉荣花园',person:'江霞',company:'深圳松达电梯有限公司',maintenanceTime:5235,averageMil:7658},
            {id: this.dt[this.selectfrom(0,1)]+ Math.floor(Math.random()*10),address: '花园城数码大厦',person:'廖秀英',company:'深圳松达电梯有限公司',maintenanceTime:6584,averageMil:5367},
            {id: 'DT8'+ Math.floor(Math.random()*10),address: '南光城市花园A座',person:'马敏',company:'深圳松达电梯有限公司',maintenanceTime:4256,averageMil:5436},
            {id: 'T8'+ Math.floor(Math.random()*10),address: '花园城数码大厦',person:'苏超',company:'深圳松达电梯有限公司',maintenanceTime:4325,averageMil:4366},
            {id: 'DT4'+ Math.floor(Math.random()*10),address: '花园城数码大厦',person:'小明',company:'深圳松达电梯有限公司',maintenanceTime:3253,averageMil:5436},
            {id: 'T1'+ Math.floor(Math.random()*10),address: '吉荣花园',person:'马敏',company:'深圳松达电梯有限公司',maintenanceTime:3251,averageMil:6876},
            {id: 'DT7'+ Math.floor(Math.random()*10),address: '花园城数码大厦',person:'汤涛',company:'深圳松达电梯有限公司',maintenanceTime:6532,averageMil:8756},
            {id: 'DT11'+ Math.floor(Math.random()*10),address: '吉荣花园',person:'李磊',company:'深圳松达电梯有限公司',maintenanceTime:1245,averageMil:6588},
            {id: 'DT12'+ Math.floor(Math.random()*10),address: '花园城数码大厦',person:'苏超',company:'深圳松达电梯有限公司',maintenanceTime:4363,averageMil:6566},
          ]
        } else if(!this.showTable && this.tabIndex !== 1){
          this.liftDatas = []
        }
         
        // console.log('111111111===' + JSON.stringify(this.randomJson(this.liftDatas))); 
        // var arr = {}
        // for (var i=0;i++;i<25) {
        //   alert(1)
        //   arr.push(this.randomJson(this.liftDatas));
        // }
        // console.log('aaa=' + JSON.stringify(arr))
      },
      // JS获取n至m随机整数
      selectfrom (lowValue,highValue){
          var choice=highValue-lowValue+1;
          return Math.floor(Math.random()*choice+lowValue);
          
      },
      randomNumber(lower,upper){
        return Math.floor(Math.random()*(upper-lower+1))+lower;
      },
      randomJson(result){
        var flag=0;
        var flag1=0;
        flag1=this.randomNumber(0,result.length);  	
        if(flag1!=flag){	
        if(typeof(result[flag1])==undefined){
          this.randomJson(result);
        }else{
          // console.log(result[flag1]);
          flag=flag1; 
          return result[flag1];
        }		
        }else{
          this.randomJson(result);
        }
      },
      randomN(){
        return Math.floor(Math.random()*10)
      },
      // 根据分辨率决定显示几列
      showColumn(){
        let windowWeight = document.body.offsetWidth
        if (windowWeight >= 1440 && windowWeight < 1570) {
          this.show1 = 1 // 展示5列
        } else if (windowWeight < 1440) {
          this.show1 = 2 // 展示4列
        } else {
          this.show1 = 0 // 展示6列
        }
      },
      // 筛选时触发事件
      handleFilterChange(filters) {
        // console.log(filters);
        // console.log('筛选条件变化');
      },
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      getTitle (data1) {
        if (data1 <= 0 || data1 > this.m_days[this.mnow] ) {
          return '';
        } else if(data1 === this.NowDay && this.NowMonth === this.mnow){
          return '今天';
        } else {
          return data1;
        }
      },
      bgRed (date) {
        var durDate = this.NowDay + 7 // 今天(包含)后的6天背景色为红色
        if(date >= this.NowDay && date < durDate && this.NowMonth === this.mnow && date <= this.m_days[this.NowMonth]){
          return 'rgba(223,75,75,0.10)'
        } else if(durDate > this.m_days[this.NowMonth] && date < (durDate - this.m_days[this.NowMonth]) && (this.NowMonth + 1) === (this.mnow ) && date > 0 && date <= this.m_days[this.mnow]){  // 下个月的判断条件
          return 'rgba(223,75,75,0.10)'
        } else {
        
        }
        // (i-1) * 7 + k - firstnow >= NowDay &&  (i-1) * 7 + k - firstnow < NowDay + 8  && NowMonth === mnow ? 'rgba(223,75,75,0.10)' : ''}">  -->
        
      },
      change (index) { // 点击表格td
        if(index !='' && index > 0 && index <= this.m_days[this.mnow] ){
          this.dnow = index
          this.isShowTable()
          this.changeJsonData()
        }
      },
      getDaysInfo () {
        var _this = this;
        this.sureDate(_this);
      },
      is_leap (year) {//判断是不是闰年
        return (year%100==0?(year%400==0?1:0):(year%4==0?1:0));
      },
      //两个参数代表的含义分别是this对象以及判断当前的操作是不是在进行月份的修改
      sureDate(_this,other) {
        this.newDate = new Date();
        this.ynow = this.newDate.getFullYear();
        this.NowMonth=this.newDate.getMonth();//常量 不变
        this.NowDay=this.newDate.getDate(); //常量 不变
        if(!other) {
          this.mnow=this.newDate.getMonth(); //月份 随着点击日历变化
        }
        this.dnow=this.newDate.getDate(); //日期 随着点击日历变化
        if (other && other === "next") {
          this.dnow = 1
        } else {
          this.dnow = this.NowDay
        }
        
        // 设置日期为当月的第一天
        this.firstDay = new Date(this.ynow,this.mnow,1);
        // console.log(this.firstDay)

        // 获取每月第一天是星期几
        this.firstnow=this.firstDay.getDay();
        // console.log(this.firstnow)

        this.m_days = [31,28+this.is_leap(this.ynow),31,30,31,30,31,31,30,31,30,31];
        // 表格有几行
        this.tr_str = Math.ceil((_this.m_days[this.mnow] + this.firstnow)/7);
        // this.showMsg();
      },
      preMon() {
        this.tabIndex = 0;
        var _this = this;
        this.mnow= this.NowMonth
        this.showDateTitle = true
        this.isShowTable()
        this.bgRed()
        this.changeJsonData()
        this.sureDate(_this,"up");
      },
      // 已过期
      Expired(){
        this.tabIndex = 1;
        this.showDateTitle = false
        this.isShowTable()
        this.changeJsonData()
      },
      nextMon() {
        this.tabIndex = 2;
        var _this = this;
        this.mnow = this.NowMonth + 1
        this.showDateTitle = true
        this.isShowTable()
        this.bgRed()
        this.changeJsonData()
        this.sureDate(_this,"next");
      },
      // 是否显示数据表格
      isShowTable(){
        var _this = this
        // 筛选date == index的对象
        var menu_node1 = this.jsonHtml.filter(function (e) { return e.date == _this.dnow; });
        if(menu_node1.length === 0){
          this.showTable = false
        } else {
          this.showTable = true
        }
      }
    },
    
   }
</script>
<style lang="stylus" >
// 配置
@import '../assets/stylus/base'

.tableClass
  border none
  background: #1B1B23;
  tr
    &:hover 
      background rgba(102,102,127,0.23)
  th
    color: #66667F;
    text-align: left;
    border none
    border-bottom: 1px solid rgba(102,102,127,0.23);
    padding 8px
  td
    color: #FFFFFF;
    text-align: left;
    border none
    border-bottom: 1px solid rgba(102,102,127,0.23);
    padding 8px
    &:last-child
      color #0DBA7F
      cursor pointer
.dataList1
  clearfix()
  background #1B1B23;
  position relative
  #dateContainer
    background: #1B1B23;
    box-shadow: 0 30px 29px -18px rgba(0,0,0,0.50);
    margin-bottom 8px
    // float left
    // width 37%
    box-sizing border-box
    #table
      width 100%
      td
        border: 1px solid rgba(102,102,127,0.23);
        size 157px 67.2px
        font-size: 12px;
        color: #66667F;
        letter-spacing: 0.02px;
        vertical-align top
        // cursor pointer
      .thisDay
        background red
      .highlight
        background: #0DBA7F!important;
        color: rgba(255,255,255,0.60);
      .xinqi td
        height 33px
        background: #23232D;
        font-size: 12px;
        color: #66667F;
        letter-spacing: 0.02px;
        text-align: center;
        vertical-align middle
      .dateNub
        text-align left
        margin 5px 0 0 5px
      p
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0.02px;
        text-align: center;
        line-height 21px
  .nowTime
    clearfix()
    .preMon,.nextMon,.thisMon
      // size 29% 63px
      size 25% 63px
      background: #1B1B23;
      font-size: 18px;
      color: #FFFFFF;
      float left
      cursor pointer
      text-align left
      padding 5px 0 5px 3%
      border:1px solid rgba(8,8,10,0.60)
    .preMon
      // width 42%
      width 50%
    .totalTask
      font-size: 14px;
      color: rgba(255,255,255,0.60);
      letter-spacing: 0.03px;
      margin-top 5px
  #table2
    width 100%
    margin-top 12px
  .date__showNowTime
    font-size: 18px;
    margin 30px 0 10px 0
  .right_wrapper
    float left
    width 60%
  .taskTable
    padding-left 20px
  .GqTotal
    text-align right;
    margin: 0 5px 5px
  .tableLast
    color: #0DBA7F;
    cursor pointer;
.el-table__empty-block
  background: url("../assets/images/hs/dataNoneSearch.png") no-repeat center !important
</style>
