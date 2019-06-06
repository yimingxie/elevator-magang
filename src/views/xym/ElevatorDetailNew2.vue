<template>
  <div id="ed">
    <div class="ed-container clearfix">
      <div class="ed-left">
        <div class="ed-profile">
          <div class="ed-profile-state">
            <em>电梯概况2</em><span>例行维保</span>
          </div>
          <table class="ed-profile-table">
            <tr>
              <td width="76"><p class="edp-table-title">电梯编号</p></td>
              <td>
                <!-- <select name="" id="">
                  <option value="">DT1</option>
                  <option value="">DT2</option>
                  <option value="">DT3</option>
                </select> -->
                <el-select placeholder="请选择"  v-model="dtID">
                  <el-option key="'DT1'" :label="dtID" :value="dtID"></el-option>
                  <el-option key="'DT2'" :label="dtID" :value="dtID"></el-option>
                </el-select>
              </td>
            </tr>
            <tr>
              <td><p class="edp-table-title">使用地点</p></td>
              <td><p class="edp-table-p">深圳市福田区新天世纪商务中心A座</p></td>
            </tr>
            <tr>
              <td><p class="edp-table-title">使用单位</p></td>
              <td><p class="edp-table-p">深圳市新天时代投资有限公司</p></td>
            </tr>
          </table>

        </div>


        <div class="ed-elevator">
          <div class="ed-ebox"></div>
          <div class="ed-ebox-udBtn">
            <div class="ed-ebox-data-btn on">
              <div class="ed-ebox-data-up2"></div>
              <div class="ed-ebox-data-up"></div>
            </div>
            <div class="ed-ebox-data-btn">
              <div class="ed-ebox-data-down2"></div>
              <div class="ed-ebox-data-down"></div>
            </div>
          </div>
          <div class="ed-ebox-data">
            <div class="ed-ebox-sc">
              <h4>{{eleCurrentFloor}}<span>F</span></h4>
              <p>当前楼层</p>
            </div>
            <div class="ed-ebox-sc">
              <h4>{{eleSpeed}}<span>m/s</span></h4>
              <p>运行速度</p>
            </div>
            <div class="ed-ebox-sc">
              <h4>10</h4>
              <p>当前人数</p>
            </div>
            <div class="ed-ebox-sc">
              <h4>关</h4>
              <p>轿门状态</p>
            </div>
          </div>


          <div class="ed-ebox-sum clearfix">
            <div class="ede-sum-box">
              <h4>121<span>人</span></h4>
              <p>1小时累计人数</p>
            </div>
            <div class="ede-sum-box">
              <h4>831<span>人</span></h4>
              <p>今日累计人数</p>
            </div>
            <div class="ede-sum-box">
              <h4>185<span>天</span></h4>
              <p>已无故障运行</p>
            </div>
            <div class="ede-sum-box">
              <h4>7821<span>km</span></h4>
              <p>累计运行里程</p>
            </div>
          </div>
        </div>

        <div class="ed-elist">
          <div class="ed-elist-title">维保记录</div>
          <div class="ed-elist-table-container">
            <el-scrollbar style="height: 100%;">
              <table class="ed-elist-table">
                <tr>
                  <th width="16%">维保人员</th>
                  <th width="18%">维保时间</th>
                  <th width="22%">状态</th>
                  <th width="16%">时效</th>
                  <th width="">电梯运行里程(天)</th>
                </tr>
                <tr>
                  <td>01.19</td>
                  <td>陈辉</td>
                  <td>例行维保</td>
                  <td>及时</td>
                  <td>30km (15天)</td>
                </tr>
                <tr>
                  <td>01.19</td>
                  <td>陈辉</td>
                  <td>例行维保</td>
                  <td>及时</td>
                  <td>30km (15天)</td>
                </tr>
                <tr>
                  <td>01.19</td>
                  <td>陈辉</td>
                  <td>例行维保</td>
                  <td><p class="elist-fail">不及时</p></td>
                  <td>30km (15天)</td>
                </tr>
                <tr>
                  <td>01.19</td>
                  <td>陈辉</td>
                  <td>例行维保</td>
                  <td><p class="elist-fail">不及时</p></td>
                  <td>30km (15天)</td>
                </tr>
                <tr>
                  <td>01.19</td>
                  <td>陈辉</td>
                  <td>例行维保</td>
                  <td>及时</td>
                  <td>30km (15天)</td>
                </tr>
                <tr>
                  <td>01.19</td>
                  <td>陈辉</td>
                  <td>例行维保</td>
                  <td><p class="elist-fail">不及时</p></td>
                  <td>30km (15天)</td>
                </tr>
           
              </table>
            </el-scrollbar>
          </div>
        </div>
      </div>

      <!-- 导航 -->
      <div class="ed-mid">
        <div class="ed-nav">
          <div class="ed-nav-box" :class="{on : navActive == '机房'}" @click="jump(0)">
            <!-- TODO 告警 -->
            <!-- <div class="warning"></div> -->
            <div class="edn-icon edn-icon1"></div>
            <p>机房</p>
          </div>
          <div class="ed-nav-box" :class="{on : navActive == '曳引机'}" @click="jump(1)">
            <div class="edn-icon edn-icon2"></div>
            <p>曳引机</p>
          </div>
          <div class="ed-nav-box" :class="{on : navActive == '限速器'}" @click="jump(2)">
            <div class="edn-icon edn-icon3"></div>
            <p>限速器</p>
          </div>
          <div class="ed-nav-box" :class="{on : navActive == '梯门'}" @click="jump(3)">
            <div class="edn-icon edn-icon4"></div>
            <p>梯门</p>
          </div>
          <div class="ed-nav-box" :class="{on : navActive == '轿厢'}" @click="jump(4)">
            <div class="edn-icon edn-icon5"></div>
            <p>轿厢</p>
          </div>
          <div class="ed-nav-box" :class="{on : navActive == '安全回路'}" @click="jump(5)">
            <div class="edn-icon edn-icon6"></div>
            <p>安全回路</p>
          </div>
          <div class="ed-nav-box" :class="{on : navActive == '门锁回路'}" @click="jump(6)">
            <div class="edn-icon edn-icon7"></div>
            <p>门锁回路</p>
          </div>
        </div>
      </div>

      <div class="ed-right1" id="ed-right1" ref="ed-right1">
        <el-scrollbar style="height: 100%;" id="scrollbar1">
          <div class="ed-item-time-change clearfix">
            <span :class="{on : timeOn == 'now'}" @click="changeTime('now')">现在</span>
            <span :class="{on : timeOn == 'day'}" @click="changeTime('day')">今日</span>
            <span :class="{on : timeOn == 'month'}" @click="changeTime('month')">本月</span>
            <span :class="{on : timeOn == 'year'}" @click="changeTime('year')">本年</span>
          </div>


          <!-- 大类 -->
          <!-- EDMotorRoom,
          EDTractor,
          EDSpeed,
          EDDoor,
          EDBox,
          EDSafeLoop,
          EDLockLoop
        -->
          <ed-motor-room></ed-motor-room>
          <ed-tractor></ed-tractor>
          <ed-speed></ed-speed>
          <ed-door></ed-door>
          <ed-box></ed-box>
          <ed-safe-loop></ed-safe-loop>
          <ed-lock-loop></ed-lock-loop>
        

        </el-scrollbar>
      </div>


      <!-- 告警日志 -->
      <div class="ed-right2">
        <div class="warn-list">
          <div class="warn-list-title">告警日志</div>
          <div class="warn-list-ul">
            <el-scrollbar style="height: 100%;">
              <div class="warn-list-ul-n">
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房<span class="wai-fail">温度异常</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">电动机<span class="wai-fail">电压偏低</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈<span class="wai-fail">温度过高</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房<span class="wai-fail">温度异常</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">电动机<span class="wai-fail">电压偏低</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈<span class="wai-fail">温度过高</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房<span class="wai-fail">温度异常</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">电动机<span class="wai-fail">电压偏低</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈<span class="wai-fail">温度过高</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房<span class="wai-fail">温度异常</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">电动机<span class="wai-fail">电压偏低</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈<span class="wai-fail">温度过高</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房<span class="wai-fail">温度异常</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">电动机<span class="wai-fail">电压偏低</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈<span class="wai-fail">温度过高</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房<span class="wai-fail">温度异常</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">电动机<span class="wai-fail">电压偏低</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈<span class="wai-fail">温度过高</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房<span class="wai-fail">温度异常</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">电动机<span class="wai-fail">电压偏低</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈<span class="wai-fail">温度过高</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房<span class="wai-fail">温度异常</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">电动机<span class="wai-fail">电压偏低</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈<span class="wai-fail">温度过高</span></p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
              
              </div>
            </el-scrollbar>
          </div>
          
          
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import EDMotorRoom from "./EDMotorRoom";
import EDTractor from "./EDTractor";
import EDSpeed from "./EDSpeed"
import EDDoor from "./EDDoor"
import EDBox from "./EDBox"
import EDSafeLoop from "./EDSafeLoop"
import EDLockLoop from "./EDLockLoop"

import api from '../../api.js'

export default {
  data() {
    return {
      dateNow: '',
      dtID: 'dt001',
      timeOn: 'now',
      flag: true,
      dataX: ['60s', '55s', '50s', '45s', '40s', '35s', '30s', '25s', '20s', '15s', '10s', '5s', '0s'],
      dataValue: [],
      currentView: "EDMotorRoom",
      navActive: '机房',
      eleSpeed: '0',
      eleCurrentFloor: '0',

      // 机房默认值
      tempValue: '0',
      tempUnit: '℃',
      westValue: '0',
      westUnit: '%',
      windValue: '0',
      windUnit: 'm/s',
      roomWaterValue: '正常',
      roomWaterValueNum: '1',
      airValue: '开',
      airValueNum: '1',

      // 曳引机默认值
      vControlValue: '0',
      vControlUnit: 'V',
      iControlValue: '0',
      iControlUnit: 'A',
      tractorTempValue: '0',
      tempUnit: '℃',
      roomVibrateValue: '0',
      roomVibrateUnit: 'mm/s',
      brakeTempValue: '0',
      brakeTempUnit: '℃',
      brakeSkrTempValue: '0',
      brakeSkrTempUnit: '℃',
      vBrakeValue: '0',
      vBrakeUnit: 'V',
      iBrakeValue: '0',
      iBrakeUnit: 'A',
      driveValue: '100',
      driveUnit: '',

      // 限速器默认值
      rpmValue: '0',
      rpmUnit: 'RPM',
      speed: '0',

      // 梯门默认值
      floorDoorValue: '关',
      floorDoorValueNum: '0',
      eleDoorValue: '关',
      eleDoorValueNum: '0',

      // 轿厢默认值
      boxVibrateValue: '0',
      boxVibrateUnit: 'mm/s',
      eleBottomValue: '0',
      eleBottomUnit: 'm',
      currentFloor: '1',
      direction: '停',
      boxWeightValue: '0',
      boxWeightUnit: 'kg',

      // 安全回路默认值
      roomSafeValue: '通',
      roomSafeValueNum: '1',
      boxTopSafeValue: '通',
      boxTopSafeValueNum: '1',
      boxDoorSafeValue: '通',
      boxDoorSafeValueNum: '1',
      floorDoorSafeValue: '通',
      floorDoorSafeValueNum: '1',
      boxBottomSafeValue: '通',
      boxBottomSafeValueNum: '1',

      // 门锁回路默认值
      floorLockValue: '通',
      floorLockValueNum: '1',
      boxLockValue: '通',
      boxLockValueNum: '1',


      // 温湿度配置
      options: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: '#1D1B25',
            }
          },
     
        },
        xAxis: {
          type: 'value',
          // inverse: true,
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: '{value}s',
            color: '#66667F',
            margin: 12
          },
          min: 0,
          max: 60,
          interval: 10,
          name: '(℃)',
          nameLocation: 'start',
          nameTextStyle: {
            color: '#66667F'
          },
          splitLine: {
            show: false,
          },
          // nameGap: 6,
          axisLine: {
            lineStyle: {
              color: '#303240'
            }
          },
          // data: []
        },
        yAxis: {
          axisLabel: {
            show: false,
            color: '#66667F'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#303240'
            }
          },
          splitLine: {
            show: false,
          },
        },
        grid: {
          top: '20px',  
          left: '50px',  
          right: '26px',  
          bottom: '24px'
        },  
        visualMap: { //区间内控制显示颜色
          show: false,
          dimension: 1,
          type: 'continuous',
          range: [0, 500],
          inRange: {
            color: ['#29DDB6']
          },
          outOfRange: {
            color: ['#E75561']
          }
        },
        series: [
          {
            name: "机房温度",
            type: "line",
            // symbolSize: 0,
            showSymbol: false,
            smooth: true,
            lineStyle: {
              width: 3
            },
            // markLine: {
            //   data: [{
            //       name: '',
            //       yAxis: 60
            //   }],
            //   animation: false,
            //   symbolSize: 0,
            //   label: {
            //     position: 'start'
            //   },
            //   lineStyle: {
            //     normal: {
            //       type: 'solid',
            //       color: '#DF4B4B',
            //     },
            //   }
            // },
            // data: dataArr
            data: [[9, 10], [12, 20], [18, 40], [31, 80], [50, 100], [58, 180]]
          },    
        ]
      },

      // 回路配置
      options2: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: '#1D1B25',
            }
          },
          formatter: '{a}: {c}℃<br /> '
        },
        xAxis: {
          type: 'value',
          // inverse: true,
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: '{value}s',
            color: '#66667F',
            margin: 12
          },
          min: 0,
          max: 60,
          interval: 10,
          name: '(℃)',
          nameLocation: 'start',
          nameTextStyle: {
            color: '#66667F'
          },
          splitLine: {
            show: false,
          },
          // nameGap: 6,
          axisLine: {
            lineStyle: {
              color: '#303240'
            }
          },
          // data: []
        },
        yAxis: {
          interval: 1,
          splitNumber: 1,
          axisTick: {
            show: false
          },
          axisLabel: {
            // show: true,
            color: '#66667F',
            formatter: function (value, index) {
              if (value == 0) {
                return '异常'
              }
              if (value == 1) {
                return '正常'
              }
              // return '异常'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#303240'
            }
          },
          splitLine: {
            show: false,
          },
      
        },
        grid: {
          top: '20px',  
          left: '50px',  
          right: '26px',  
          bottom: '24px'
        }, 
        visualMap: { //区间内控制显示颜色
          show: false,
          dimension: 1,
          type: 'continuous',
          range: [0, 0.01],
          inRange: {
            color: ['#E75561']
          },
          outOfRange: {
            color: ['#29DDB6']
          }
        },
        series: [
          {
            name: "A类",
            type: "line",
            step: true,
            showSymbol: false,
            lineStyle: {
              width: 2
            },
            // markLine: {
            //   data: [
            //     {
            //       name: '异常',
            //       yAxis: 0
            //     },
            //   ],
            //   animation: false,
            //   symbolSize: 0,
            //   label: {
            //     position: 'start'
            //   },
            //   lineStyle: {
            //     normal: {
            //       type: 'solid',
            //       color: '#66667F',
            //     },
            //   }
            // },
            data: []
          },
          
        ]
      }

    };
  },
  mounted() {
  
    
    
    
    // setTimeout(() => {
    //   let room_temp_chart = this.$echarts.getInstanceByDom(document.getElementById("room-temp-chart"));
    //   let west_chart = this.$echarts.getInstanceByDom(document.getElementById("west-chart"));
    //   let room_wind_chart = this.$echarts.getInstanceByDom(document.getElementById("room-wind-chart"));
    //   let room_water_chart = this.$echarts.getInstanceByDom(document.getElementById("room-water-chart"));
    //   let air_chart = this.$echarts.getInstanceByDom(document.getElementById("air-chart"));

    //   let motor_v_chart = this.$echarts.getInstanceByDom(document.getElementById("motor-v-chart"));
    //   let motor_i_chart = this.$echarts.getInstanceByDom(document.getElementById("motor-i-chart"));
    //   let motor_temp_chart = this.$echarts.getInstanceByDom(document.getElementById("motor-temp-chart"));
    //   let motor_vibrate_chart = this.$echarts.getInstanceByDom(document.getElementById("motor-vibrate-chart"));
    //   let brake_temp_chart = this.$echarts.getInstanceByDom(document.getElementById("brake-temp-chart"));
    //   let brake_skr_chart = this.$echarts.getInstanceByDom(document.getElementById("brake-skr-chart"));
    //   let v_brake_chart = this.$echarts.getInstanceByDom(document.getElementById("v-brake-chart"));
    //   let i_brake_chart = this.$echarts.getInstanceByDom(document.getElementById("i-brake-chart"));
    //   let drive_chart = this.$echarts.getInstanceByDom(document.getElementById("drive-chart"));
      
    //   window.addEventListener("resize", function() {
    //     room_temp_chart.resize();
    //     west_chart.resize();
    //     room_wind_chart.resize();
    //     room_water_chart.resize();
    //     air_chart.resize();

    //     motor_v_chart.resize();
    //     motor_i_chart.resize();
    //     motor_temp_chart.resize();
    //     motor_vibrate_chart.resize();
    //     brake_temp_chart.resize();
    //     brake_skr_chart.resize();
    //     v_brake_chart.resize();
    //     i_brake_chart.resize();
    //     drive_chart.resize();
    //   });

    // }, 300)

    // 更新时间和实时数据
    this.getCurrentData()
    this.dateNow = this.formatDate()
    this.getRealTime()
    setInterval(() => {
      this.getRealTime()
      this.getCurrentData()
      this.dateNow = this.formatDate()
    }, 2000)

    // 滚动高亮
    this.scrollNav()


  },
  methods: {
    // 封装时间
    formatDate(){
        // date = new Date(date);
        var date = new Date(Date.now())
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var m1 = date.getMinutes();
        var s = date.getSeconds();
        m = m < 10 ? ("0" + m) : m;
        d = d < 10 ? ("0" + d) : d;
        // return y+"-"+m+"-"+d+" "+h+":"+m1+":"+s;
        return y + "." + m + "." + d
    },
    // 切换导航
    switchNav(name) {
      this.navActive = name
      if (name == '机房') {
        this.currentView = "EDMotorRoom";
      }
      if (name == '曳引机') {
        this.currentView = "EDTractor";
      }
      if (name == '限速器') {
        this.currentView = "EDSpeed";
      }
      if (name == '梯门') {
        this.currentView = "EDDoor";
      }
      if (name == '轿厢') {
        this.currentView = "EDBox";
      }
      if (name == '安全回路') {
        this.currentView = "EDSafeLoop";
      }
      if (name == '门锁回路') {
        this.currentView = "EDLockLoop";
      }
    },

    // 锚点平滑跳转
    jump(index) {
      let that = this
      // this.activeStep = index
      // 用 class="step-jump" 添加锚点
      let jumpArr = document.querySelectorAll('.edType')
      // let testContent = document.getElementById('testContent')
      let scrollbar1 = document.getElementById('scrollbar1')
      let scrollWrap = scrollbar1.firstChild

      if (this.flag) {
        that.flag = false

        let scrollWrapTop = scrollWrap.offsetTop

        let total = jumpArr[index].offsetTop - scrollWrapTop // 目标卷曲位置
        let currentDistance = scrollWrap.scrollTop // 当前卷曲位置
        let step = Math.floor(total / 20)

        // 若需要平滑滚动
        // if (total > currentDistance) {
        //   smoothDown()
        // } else {
        //   let newTotal = currentDistance - total
        //   step = Math.floor(newTotal / 20)
        //   smoothUp()
        // }

        // 若不需要平滑滚动
        scrollWrap.scrollTop = total
        that.flag = true



        // 向下
        function smoothDown() {
          if (currentDistance < total) {
            clearTimeout(timer)
            currentDistance += step
            scrollWrap.scrollTop = currentDistance
            let timer = setTimeout(smoothDown, 10)
          } else {
            scrollWrap.scrollTop = total
            that.flag = true
          }
        }

        // 向上
        function smoothUp () {
          if (currentDistance > total) {
            clearTimeout(timer)
            currentDistance -= step
            scrollWrap.scrollTop = currentDistance
            let timer = setTimeout(smoothUp, 10)
          } else {
            scrollWrap.scrollTop = total
            that.flag = true
          }
        }
      }
      

    },

    // 滚动高亮
    scrollNav() {
      let that = this

      let scrollbar1 = document.getElementById('scrollbar1')
      let scrollWrap = scrollbar1.firstChild // 触发滚动的主体
      // 大类
      let EDMotorRoom = document.getElementById('EDMotorRoom')
      let EDTractor = document.getElementById('EDTractor')
      let EDSpeed = document.getElementById('EDSpeed')
      let EDDoor = document.getElementById('EDDoor')
      let EDBox = document.getElementById('EDBox')
      let EDSafeLoop = document.getElementById('EDSafeLoop')
      let EDLockLoop = document.getElementById('EDLockLoop')

      let d = 80 // 提前多少距离高亮
      let scrollWrapTop = scrollWrap.offsetTop + d 
      let boxATop = EDMotorRoom.offsetTop - scrollWrapTop // A盒子距离容器顶部的距离
      let boxBTop = EDTractor.offsetTop - scrollWrapTop
      let boxCTop = EDSpeed.offsetTop - scrollWrapTop
      let boxDTop = EDDoor.offsetTop - scrollWrapTop
      let boxETop = EDBox.offsetTop - scrollWrapTop
      let boxFTop = EDSafeLoop.offsetTop - scrollWrapTop
      // let boxGTop = EDLockLoop.offsetTop - scrollWrapTop
      let boxGTop = 3050 // 为最后一个，所以要做特殊处理，scroll为2700

      

      scrollWrap.addEventListener('scroll', () => {
        var current_offset_top = scrollWrap.scrollTop; // 卷曲的高度
        console.log(current_offset_top)

        // console.log(boxATop)
        if (current_offset_top < boxBTop) {
          that.navActive = "机房";
        } else if (current_offset_top >= boxBTop && current_offset_top < boxCTop) {
          that.navActive = "曳引机";
        } else if (current_offset_top >= boxCTop && current_offset_top < boxDTop) {
          that.navActive = "限速器";
        } else if (current_offset_top >= boxDTop && current_offset_top < boxETop) {
          that.navActive = "梯门";
        } else if (current_offset_top >= boxETop && current_offset_top < boxFTop) {
          that.navActive = "轿厢";
        } else if (current_offset_top >= boxFTop && current_offset_top < boxGTop) {
          that.navActive = "安全回路";
        } else if (current_offset_top >= boxGTop) {
          that.navActive = "门锁回路";
        } 
        // else if (current_offset_top >= boxCTop) {
        //   this.currentView = "EDSpeed";
        // }

      })
    },

    // 更新电梯实时数据
    getCurrentData() {
      api.detail.getCurrent(this.dtID).then(res => {
        // console.log(res.data)
        
        // 电梯当前楼层、速度、状态
        if (res.data[19]) {
          this.eleCurrentFloor = res.data[19].louc
          this.eleSpeed = Math.abs(res.data[19].speed.toFixed(3)) || 0
          // this.eleBottomValue = res.data[19].value
          // if (res.data[19].direction === 'up') {
          //   this.direction = '上'
          // } else if (res.data[19].direction === 'down') {
          //   this.direction = '下'
          // } else {
          //   this.direction = '停'
          // }
        }
      })
    },


    // 获取实时数据（总）
    getRealTime() {
      api.detail.getCurrent(this.dtID).then(res => {

        // 机房温度
        if (res.data[1]) {
          this.tempValue = res.data[1].value
          // this.tempUnit = res.data[1].unit
        }


        // 机房湿度
        if (res.data[2]) {
          this.westValue = res.data[2].value
          this.westUnit = res.data[2].unit
        }


        // 机房风速
        if (res.data[3]) {
          this.windValue = res.data[3].value
          this.windUnit = res.data[3].unit
        }


        // 水浸
        if (res.data[4]) {
          if (res.data[4].unit == 'V') {
            this.roomWaterValue = '正常'
          } else {
            this.roomWaterValue = '异常'
          }
          this.roomWaterValueNum = res.data[4].value
        }


        // 风扇
        if (res.data[5]) {
          if (res.data[5].unit == 'V') {
            this.airValue = '开'
          } else {
            this.airValue = '关'
          }
          this.airValueNum = res.data[5].value
        }


        // 电动机电压
        if (res.data[6]) {
          this.vControlValue = res.data[6].value
          this.vControlUnit = res.data[6].unit
        }



        // 电动机电流
        if (res.data[7]) {
          this.iControlValue = res.data[7].value
          this.iControlUnit = res.data[7].unit
        }



        // 电动机温度
        if (res.data[8]) {
          this.tractorTempValue = res.data[8].value
        }



        // 电机振动
        if (res.data[9]) {
          this.roomVibrateValue = res.data[9].value
          this.roomVibrateUnit = res.data[9].unit
        }



        // 制动器线圈温度
        if (res.data[10]) {
          this.brakeTempValue = res.data[10].value
          // this.brakeDistanceUnit = res.data[10].unit
          this.brakeTempUnit = '℃'
        }



        // 制动器刹车片温度
        if (res.data[11]) {
          this.brakeSkrTempValue = res.data[11].value1
          this.brakeSkrTempUnit = '℃'
        }



        // 制动器电压
        if (res.data[12]) {
          this.vBrakeValue = res.data[12].value
          this.vBrakeUnit = res.data[12].unit
        }


        // 制动器电流
        if (res.data[13]) {
          this.iBrakeValue = res.data[13].value
          this.iBrakeUnit = res.data[13].unit
        }



        // 曳引轮磨损
        if (res.data[14]) {
          this.driveValue = res.data[14].value
          this.driveUnit = res.data[14].unit 
        }


        // 限速器转速
        if (res.data[15]) {
          this.rpmValue = res.data[15].value
          this.rpmUnit = res.data[15].unit
          this.speed = Math.abs(res.data[15].speed.toFixed(2)) || 0
        }


        // 电梯层门
        if (res.data[16]) {
          if (res.data[16].value) {
            this.floorDoorValue = '开'
          } else {
            this.floorDoorValue = '关'
          }
          this.floorDoorNum = res.data[16].value
        }


        // 电梯轿门
        if (res.data[17]) {
          if (res.data[17].value) {
            this.floorDoorValue = '开'
          } else {
            this.floorDoorValue = '关'
          }
          this.floorDoorNum = res.data[17].value
        }


        // 轿厢振动
        if (res.data[18]) {
          this.boxVibrateValue = res.data[18].value
          this.boxVibrateUnit = res.data[18].unit
        }

        // 电梯当前楼层、速度、状态
        if (res.data[19]) {
          this.eleBottomValue = res.data[19].value.toFixed(3)
          this.currentFloor = res.data[19].louc
          // this.eleBottomValue = res.data[19].value
          if (res.data[19].direction === 'up') {
            this.direction = '上'
          } else if (res.data[19].direction === 'down') {
            this.direction = '下'
          } else {
            this.direction = '停'
          }
        }


        // 轿厢荷载
        if (res.data[20]) {
          this.boxWeightValue = res.data[20].value
          this.boxWeightUnit = res.data[20].unit
        }


        // 机房安全回路
        if (res.data[21]) {
          if (res.data[21].unit == 'V') {
            this.roomSafeValue = '通'
          } else {
            this.roomSafeValue = '断'
          }
          this.roomSafeValueNum = res.data[21].value
        }


        // 轿顶安全回路
        if (res.data[22]) {
          if (res.data[22].unit == 'V') {
            this.boxTopSafeValue = '通'
          } else {
            this.boxTopSafeValue = '断'
          }
          this.boxTopSafeValueNum = res.data[22].value
        }


        // 轿门安全回路
        if (res.data[23]) {
          if (res.data[23].unit == 'V') {
            this.boxDoorSafeValue = '通'
          } else {
            this.boxDoorSafeValue = '断'
          }
          this.boxDoorSafeValueNum = res.data[23].value
        }


        // 层门安全回路
        if (res.data[24]) {
          if (res.data[24].unit == 'V') {
            this.floorDoorSafeValue = '通'
          } else {
            this.floorDoorSafeValue = '断'
          }
          this.floorDoorSafeValueNum = res.data[24].value
        }


        // 底坑安全回路
        if (res.data[25]) {
          if (res.data[25].unit == 'V') {
            this.boxBottomSafeValue = '通'
          } else {
            this.boxBottomSafeValue = '断'
          }
          this.boxBottomSafeValueNum = res.data[25].value
        }


        // 层门门锁回路
        if (res.data[26]) {
          if (res.data[26].unit == 'V') {
            this.floorLockValue = '通'
          } else {
            this.floorLockValue = '断'
          }
          this.floorLockValueNum = res.data[26].value
        }


        // 轿门门锁回路
        if (res.data[27]) {
          if (res.data[27].unit == 'V') {
            this.boxLockValue = '通'
          } else {
            this.boxLockValue = '断'
          }
          this.boxLockValueNum = res.data[27].value
        }


      })


    },

    
  },
  components: {
    'ed-motor-room': EDMotorRoom,
    'ed-tractor': EDTractor,
    'ed-speed': EDSpeed,
    'ed-door': EDDoor,
    'ed-box': EDBox,
    'ed-safe-loop': EDSafeLoop,
    'ed-lock-loop': EDLockLoop
  }
};
</script>



<style lang="scss">

#ed {


  background: #000;
  padding: 80px 36px 20px;

  .ed-container {
    margin-top: 32px;
  }
  .ed-left {
    width: 472px;
    float: left;
  }
  .ed-profile{
    position: relative;
    box-sizing: border-box;
    height: 160px;
    background: #12151c;
    box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
    border-radius: 10px;
    padding: 20px;
  }
  .ed-profile-state em{
    display: inline-block;
    font-style: normal;
    font-size: 18px;
    color: #FFFFFF;
  }
  .ed-profile-state span{
    display: inline-block;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 20px;
    height: 20px;
    background: #6B50D0;
    padding: 0 12px;
    border-radius: 4px;
    margin-left: 20px;
  }
  .ed-profile-table{
    width: 100%;
    margin-top: 8px;
  }
  .ed-profile-table td{
    padding: 4px 0;
  }
  .ed-profile-table .edp-table-title{
    font-size: 12px;
    color: #66667F;
  }
  .ed-profile-table .edp-table-p{
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ed-elevator {
    position: relative;
    box-sizing: border-box;
    // height: 600px;
    height: 495px;
    background: #12151c url('../../assets/images/xym/ele-bg.png') no-repeat center -5px;
    box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
    border-radius: 10px;
    margin-top: 20px;
    border-top: 1px solid #12151c;
  }
  .ed-elevator-name {
    position: absolute;
    right: 30px;
    top: 40px;
    font-size: 24px;
    color: #ffffff;
  }
  .ed-ebox-title {
    padding-left: 30px;
    padding-top: 8px;
  }
  .ed-ebox-title h3 {
    font-weight: normal;
    font-size: 70px;
    line-height: 70px;
    color: #0DBA7F;
  }
  .ed-ebox-title h3 span{
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    color: #66667F;
  }
  .ed-ebox-title p {
    font-size: 12px;
    color: #66667f;
  }
  .ed-ebox {
    width: 242px;
    height: 370px;
    background: url("../../assets/images/xym/evn.png") no-repeat center center;
    // background-size: 80% auto;
    margin-top: 26px;
    margin-left: 26px;
  }
  .ed-ebox-data {
    position: absolute;
    top: 32px;
    right: 20px;
    text-align: center;
    width: 120px;
  }
  .ed-ebox-data-floor {
    font-weight: normal;
    font-size: 58px;
    color: #FFFFFF;
    margin: 10px 0;
    line-height: 1 !important;
  }
  .ed-ebox-data-floor span {
    font-size: 14px;
  }
  .ed-ebox-udBtn{
    position: absolute;
    top: 150px;
    left: 278px;
  }
  .ed-ebox-data-btn {
    position: relative;
    width: 34px;
    height: 24px;
    // margin: 0 auto;
    margin-top: 16px;
  }
  .ed-ebox-data-up {
    width: 34px;
    height: 24px;
    background: url("../../assets/images/xym/up_normal.png") no-repeat center
      center;
  }
  .ed-ebox-data-up2 {
    position: absolute;
    top: -7px;
    left: 0;
    width: 34px;
    height: 24px;
    background: url("../../assets/images/xym/up_highlight.png") no-repeat center
      center;
    animation: btnMove1 1s ease infinite;
  }
  .ed-ebox-data-btn.on .ed-ebox-data-up {
    background: url("../../assets/images/xym/up_highlight.png") no-repeat center
      center;
  }
  .ed-ebox-data-down {
    width: 34px;
    height: 24px;
    background: url("../../assets/images/xym/down_normal.png") no-repeat center
      center;
  }
  .ed-ebox-data-btn.on .ed-ebox-data-down {
    background: url("../../assets/images/xym/down_highlight.png") no-repeat center
      center;
  }
  .ed-ebox-data-down2 {
    display: none;
    position: absolute;
    top: 7px;
    left: 0;
    width: 34px;
    height: 24px;
    z-index: 2;
    background: url("../../assets/images/xym/down_highlight.png") no-repeat center
      center;
  }
  @keyframes btnMove1 {
    0%{transform: translateY(0);}
    60%{transform: translateY(-3px);}
    100%{transform: translateY(0);}
  }
  .ed-ebox-data-speed {
    font-size: 24px;
    color: #ffffff;
    margin: 8px 0;
  }
  .ed-ebox-data-speed span {
    font-size: 14px;
  }
  .ed-ebox-sum {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    border-top: 2px solid #000;
  }
  .ede-sum-box {
    box-sizing: border-box;
    float: left;
    width: 25%;
    padding-left: 4%;
    line-height: 1;
  }
  .ede-sum-box h4 {
    font-weight: normal;
    font-size: 24px;
    color: #ffffff;
  }
  .ede-sum-box h4 span {
    font-size: 14px;
  }
  .ede-sum-box p {
    font-size: 12px;
    color: #66667f;
    line-height: 20px;
    margin-top: 6px;
  }
  .ed-elist {
    position: relative;
    box-sizing: border-box;
    height: 250px;
    background: #12151c;
    box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
    border-radius: 10px;
    margin-top: 20px;
    /* padding: 0 25px; */
    padding: 0 0 0 25px;
  }
  .ed-elist-title {
    font-size: 18px;
    color: #ffffff;
    padding-top: 15px;
  }
  .ed-elist-table-container {
    height: 172px;
    margin-top: 10px;
  }
  .ed-elist-table {
    box-sizing: border-box;
    width: 96%;
  }
  .ed-elist-table th {
    font-size: 12px;
    line-height: 20px;
    color: #66667f;
    font-weight: normal;
    padding: 6px 0;
    text-align: left;
  }
  .ed-elist-table td {
    font-size: 14px;
    color: #ffffff;
    line-height: 20px;
    padding: 6px 0;
    /* border-top: 1px solid #303240; */
  }
  .ed-elist-table .elist-fail{
    color: #FEC101;
  }
  .elist-video {
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    width: 16px;
    margin-right: 10px;
    margin-top: -2px;
    background: url("../../assets/images/xym/play.png") no-repeat center center;
  }
  .elist-standard {
    margin-left: 30px;
    display: inline-block;
  }
  .elist-standard.elist-standard-non {
    color: #f56f6f;
  }

  .ed-mid {
    float: left;
    width: 110px;
    margin-left: 30px;
    margin-top: 30px;
    position: relative;
    box-sizing: border-box;
    height: 850px;
    background: #24242f;
    box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
    /* border-radius: 10px; */
    background-image: linear-gradient(
      90deg,
      rgba(18, 21, 28, 0.22) 0%,
      #12151c 42%
    );
    border-radius: 10px 0 0 10px;
  }
  .ed-nav {
    margin-top: 100px;
    text-align: center;
  }
  .ed-nav-box {
    position: relative;
    box-sizing: border-box;
    height: 80px;
    padding-top: 12px;
    border-left: 4px solid #23232e;
    padding-right: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
  .ed-nav-box.on {
    border-left: 4px solid #27DBB2;
    /* background-image: linear-gradient(90deg, rgba(13,186,127,0.08) 0%, rgba(13,186,127,0.91) 100%); */
    background-image: linear-gradient(90deg, rgba(13,186,127,0.91) 0%, rgba(13,186,127,0.08) 100%);
  }
  .warning {
    position: absolute;
    top: 10px;
    right: 30px;
    width: 15px;
    height: 13px;
    background: url("../../assets/images/xym/warning.png") no-repeat center center;
  }
  .edn-icon {
    width: 32px;
    height: 32px;
    margin: 0 auto;
  }
  .edn-icon1 {
    background: url("../../assets/images/xym/motor_room_normal.png") no-repeat
      center center;
  }
  .ed-nav-box.on .edn-icon1 {
    background: url("../../assets/images/xym/motor_room_highlight.png") no-repeat
      center center;
  }
  .edn-icon2 {
    background: url("../../assets/images/xym/tractor_normal.png") no-repeat center
      center;
  }
  .ed-nav-box.on .edn-icon2 {
    background: url("../../assets/images/xym/tractor_highlight.png") no-repeat
      center center;
  }
  .ed-nav-box.on .edn-icon2 {
    background: url("../../assets/images/xym/tractor_highlight.png") no-repeat
      center center;
  }
  .edn-icon3 {
    background: url("../../assets/images/xym/governor_normal.png") no-repeat
      center center;
  }
  .ed-nav-box.on .edn-icon3 {
    background: url("../../assets/images/xym/governor_highlight.png") no-repeat
      center center;
  }
  .edn-icon4 {
    background: url("../../assets/images/xym/door_normal.png") no-repeat center
      center;
  }
  .ed-nav-box.on .edn-icon4 {
    background: url("../../assets/images/xym/door_highlight.png") no-repeat center
      center;
  }
  .edn-icon5 {
    background: url("../../assets/images/xym/landing_normal.png") no-repeat center
      center;
  }
  .ed-nav-box.on .edn-icon5 {
    background: url("../../assets/images/xym/landing_highlight.png") no-repeat
      center center;
  }
  .edn-icon6 {
    background: url("../../assets/images/xym/loop_normal.png") no-repeat center
      center;
  }
  .ed-nav-box.on .edn-icon6 {
    background: url("../../assets/images/xym/loop_highlight.png") no-repeat center
      center;
  }
  .edn-icon7 {
    background: url("../../assets/images/xym/loop_normal.png") no-repeat center
      center;
  }
  .ed-nav-box.on .edn-icon7 {
    background: url("../../assets/images/xym/loop_highlight.png") no-repeat center
      center;
  }

  .ed-nav-box p {
    font-size: 14px;
    color: #66667f;
    margin-top: 5px;
  }
  .ed-nav-box.on p {
    color: #fff;
  }
  .ed-right1 {
    float: left;
    width: 900px;
    position: relative;
    box-sizing: border-box;
    height: 945px;
    background: #12151c;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 20px 0 20px 30px;
    z-index: 10;
  }
  .ed-item {
    padding-right: 20px;
    padding-bottom: 10px;
    margin-top: 10px;
  }
  .ed-item-title {
    font-size: 20px;
    color: #ffffff;
  }
  .ed-item-time-change{
  text-align: right;
  padding-right: 20px;
  }
  .ed-item-time-change span{
    display: inline-block;
    cursor: pointer;
    line-height: 22px;
    text-align: center;
    padding: 0 15px;
    margin-left: 10px;
    font-size: 14px;
    color: #656886;
    border-radius: 5px;
  }
  .ed-item-time-change span.on{
    color: #FFFFFF;
    background-color: #0DBA7F;
  }
  .ed-item-chart-box {
    position: relative;
    /* padding: 20px 0 20px; */
    /* border-bottom: 1px solid #303240; */
    margin-top: 20px;
  }
  .ed-item-chart-data {
    float: left;
    width: 180px;
    margin-top: 14px;
  }
  .edic-data-icon {
    float: left;
    width: 48px;
    height: 48px;
    margin-top: 8px;
  }
  .edic-data-icon1 {
    background: url("../../assets/images/xym/temp_normal.png") no-repeat center
      center;
  }
  .edic-data-icon2 {
    background: url("../../assets/images/xym/humidity_normal.png") no-repeat
      center center;
  }
  .edic-data-icon3 {
    background: url("../../assets/images/xym/wind_normal.png") no-repeat center
      center;
  }
  .edic-data-icon4 {
    background: url("../../assets/images/xym/water_normal.png") no-repeat center
      center;
  }
  .edic-data-icon5 {
    background: url("../../assets/images/xym/air_normal.png") no-repeat center
      center;
  }
  .edic-data-icon6 {
    background: url("../../assets/images/xym/v_normal.png") no-repeat center
      center;
  }
  .edic-data-icon7 {
    background: url("../../assets/images/xym/a_normal.png") no-repeat center
      center;
  }
  .edic-data-icon8 {
    background: url("../../assets/images/xym/temp_normal.png") no-repeat center
      center;
  }
  .edic-data-icon9 {
    background: url("../../assets/images/xym/vibrate_normal.png") no-repeat center
      center;
  }
  .edic-data-icon10 {
    background: url("../../assets/images/xym/temp_normal.png") no-repeat center
      center;
  }
  .edic-data-icon11 {
    background: url("../../assets/images/xym/temp_normal.png") no-repeat center
      center;
  }
  .edic-data-icon12 {
    background: url("../../assets/images/xym/v_normal.png") no-repeat center
      center;
  }
  .edic-data-icon13 {
    background: url("../../assets/images/xym/a_normal.png") no-repeat center
      center;
  }
  .edic-data-icon14 {
    background: url("../../assets/images/xym/drive_normal.png") no-repeat center
      center;
  }
  .edic-data-icon15 {
    background: url("../../assets/images/xym/speed_normal.png") no-repeat center
      center;
  }
  .edic-data-icon16 {
    background: url("../../assets/images/xym/floor_door_normal.png") no-repeat center
      center;
  }
  .edic-data-icon18 {
    background: url("../../assets/images/xym/vibrate_normal.png") no-repeat center
      center;
  }
  .edic-data-icon19 {
    background: url("../../assets/images/xym/position_normal.png") no-repeat center
      center;
  }
  .edic-data-icon20 {
    background: url("../../assets/images/xym/room_weight_normal.png") no-repeat center
      center;
  }
  .edic-data-icon21 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-icon22 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-icon23 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-icon24 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-icon25 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-icon26 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-icon27 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-p {
    float: left;
    margin-left: 14px;
    margin-top: 10px;
    line-height: 1;
  }
  .edic-data-p h4 {
    font-weight: normal;
    font-size: 26px;
    color: #ffffff;
  }
  .edic-data-p h4 em {
    font-style: normal;
    font-size: 24px;
  }
  .edic-data-p h4 span {
    font-size: 14px;
    margin-left: 5px;
  }
  .edic-data-p p {
    font-size: 14px;
    color: #66667f;
    margin-top: 8px;
  }
  .ed-item-chart {
    float: left;
    width: 650px;
    height: 100px;
    /* margin-left: 10px; */
  }
  .item-chart {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .ed-item-warn {
    position: absolute;
    top: 20px;
    right: 0;
    display: inline-block;
    background: url("../../assets/images/xym/warning.png") no-repeat left center;
    font-size: 14px;
    color: #656886;
    line-height: 20px;
    padding-left: 20px;
    cursor: pointer;
  }
  .ed-right2{
    float: left;
    width: 280px;
    position: relative;
    box-sizing: border-box;
    height: 945px;
    background: #12151c;
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); */
    border-radius: 10px;
    padding: 20px;
    padding-right: 0;
    margin-left: 30px;
  }

  .warn-list-title{
    font-size: 18px;
    color: #FFFFFF;
    /* padding-top: 10px; */
  }
  .warn-list-ul{
    padding: 10px 0;
    margin-top: 10px;
    height: 850px;
  }
  .warn-list-li{
    padding: 10px 0;
    padding-right: 20px;
  }
  .wai-p{
    float: left;
    line-height: 24px;
    font-size: 14px;
    color: #FFFFFF;

    .wai-fail{
      color: #FEC101;
    }
  }
  
  .wai-time{
    float: right;
    line-height: 24px;
    font-size: 12px;
    color: #656886;
  }
  .ed-ebox-sc{
    text-align: center;
    margin-top: 24px;
  }
  .ed-ebox-sc h4{
    font-weight: normal;
    font-size: 28px;
    color: #FFFFFF;
    line-height: 1;
  }
  .ed-ebox-sc h4 span {
    font-size: 14px;
    color: #fff;
  }
  .ed-ebox-sc p{
    font-size: 12px;
    color: #66667F;
    margin-top: 10px;
    line-height: 1;
  }


}


/* 适配 */
@media screen and (max-width: 1910px) {
  #ed{
    padding: 80px 20px 20px;

    .ed-right1{width: 42%;padding: 14px 0 20px 30px;}
    .ed-item-chart{width: 68%;}
    .ed-item-chart-data{width: 150px;}
    .edic-data-p{margin-left: 10px;}
    .ed-left{width: 30%;}
    .ed-mid{width: 80px;margin-left: 20px;}
    .ed-nav-box p{font-size: 14px;}
    .ed-right2{width: 18%;margin-left: 20px;padding: 14px 0 14px 14px;}
    .wai-p{font-size: 12px;}
    .wai-time{font-size: 10px;}
    .ed-ebox-title h3{line-height: 60px;margin-top: 10px;}
    .ed-ebox-title h3 span{display: block;}
    .ed-ebox-data-floor{font-size: 24px;}
    .ed-ebox-sc h4{font-size: 24px;}
    .ed-ebox-data{right: 17px;}
    .ed-ebox{background-size: 200px auto;margin-left: 0;}
    .ede-sum-box h4{font-size: 18px;}
    .ede-sum-box h4 span{font-size: 12px;}
    .ede-sum-box p{font-size: 10px;}
    .edic-data-p{width: 90px;}
    .edic-data-p h4{font-size: 23px;}
    .edic-data-p h4 span{font-size: 12px;}
    .ed-ebox-udBtn{left: 236px;}
    /* .edic-data-p p{width: 60px;line-height: 1.3;} */
  }
  
  

}
@media screen and (max-width: 1350px) {
  #ed{
    min-width: 1350px;
  }
}

</style>
