<template>
  <div id="EDMotorRoom">
    <!-- 环境组件 -->
    
    <div class="ed-item">
      <div class="ed-item-title">环境</div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon1"></div>
          <div class="edic-data-p">
            <h4>{{tempValue}}<span>{{tempUnit}}</span></h4>
            <p>机房温度</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="room-temp-chart" ref="room-temp-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon2"></div>
          <div class="edic-data-p">
            <h4>{{westValue}}<span>{{westUnit}}</span></h4>
            <p>机房湿度</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="west-chart" ref="west-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon3"></div>
          <div class="edic-data-p">
            <h4>{{windValue}}<span>{{windUnit}}</span></h4>
            <p>机房风速</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="room-wind-chart" ref="room-wind-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon4"></div>
          <div class="edic-data-p">
            <h4><em>{{roomWaterValue}}</em><span></span></h4>
            <p>机房水浸</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="room-water-chart" ref="roomWaterChart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon5"></div>
          <div class="edic-data-p">
            <h4><em>{{airValue}}</em><span></span></h4>
            <p>空调/排气扇</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="air-chart" ref="air-chart"></div>
        </div>
      </div>

  
    </div>



  </div>
</template>

<script>
import api from '../../api.js'



export default {

  data() {
    return {
      dtID: 'dt001',
      timeOn: 'now',
      flag: true,
      dataX: ['60s', '55s', '50s', '45s', '40s', '35s', '30s', '25s', '20s', '15s', '10s', '5s', '0s'],
      dataValue: [],

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
      
    }
  },
  mounted() {
    setTimeout(() => {
      let room_temp_chart = this.$echarts.getInstanceByDom(document.getElementById("room-temp-chart"));
      let west_chart = this.$echarts.getInstanceByDom(document.getElementById("west-chart"));
      let room_wind_chart = this.$echarts.getInstanceByDom(document.getElementById("room-wind-chart"));
      let room_water_chart = this.$echarts.getInstanceByDom(document.getElementById("room-water-chart"));
      let air_chart = this.$echarts.getInstanceByDom(document.getElementById("air-chart"));
      
      window.addEventListener("resize", function() {
        room_temp_chart.resize();
        west_chart.resize();
        room_wind_chart.resize();
        room_water_chart.resize();
        air_chart.resize();
      });

    }, 300)

    this.getRealTime()
    const intervalTimer = setInterval(() => {
      this.getRealTime()
    }, 2000)
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once('hook:beforeDestroy', () => {            
      clearInterval(intervalTimer);                                    
    })

    
  },
  methods: {
    GMTToStr(time){
        let date = new Date(time)
        let Str=date.getFullYear() + '-' +
        (date.getMonth() + 1) + '-' + 
        date.getDate() + ' ' + 
        date.getHours() + ':' + 
        date.getMinutes() + ':' + 
        date.getSeconds()
        return Str
    },

    // 切换时间
    changeTime(name) {
      // this.timeOn = name
    },

    // 获取实时数据
    getRealTime() {
      api.detail.getCurrent(this.dtID).then(res => {
  
        // 机房温度
        if (res.data[1]) {
          this.tempValue = res.data[1].value
          // this.tempUnit = res.data[1].unit
        }
        this.drawTemp()

        // 机房湿度
        if (res.data[2]) {
          this.westValue = res.data[2].value
          this.westUnit = res.data[2].unit
        }
        this.drawWest()

        // 机房风速
        if (res.data[3]) {
          this.windValue = res.data[3].value
          this.windUnit = res.data[3].unit
        }
        this.drawWind()

        // 水浸
        if (res.data[4]) {
          if (res.data[4].unit == 'V') {
            this.roomWaterValue = '正常'
          } else {
            this.roomWaterValue = '异常'
          }
          this.roomWaterValueNum = res.data[4].value
        }
        this.drawRoomWater()

        // 风扇
        if (res.data[5]) {
          if (res.data[5].unit == 'V') {
            this.airValue = '开'
          } else {
            this.airValue = '关'
          }
          this.airValueNum = res.data[5].value
        }
        this.drawAir()

      })




    },

    // 第一种情况
    // 机房温度
    drawTemp() {
      let that = this
      let dataValue = [] // 类似于[[x1, y1], [x2, y2], ...]

      api.detail.getD1(this.dtID).then(res => {
        // res.data.result.forEach((item, i) => {
        //   dataValue.unshift(item.value)
        // })
        // dataValue.push(currentVal)
        // motorVChart(dataValue)

        // 组装xy数据
        let unit = res.data.result[0].unit
        let nowTimestamp = Date.now()
  
        res.data.result.forEach((item, i) => {
          let arr2 = []
          let second = Math.floor((nowTimestamp - new Date(item.time).getTime()) / 1000)
          arr2 = [second, item.value]
          dataValue.push(arr2)
        })
        // console.log(dataArr)
        motorVChart(dataValue, unit, nowTimestamp) // 传当时时间戳防止时间错乱
      })
      .catch(err => {
        motorVChart(dataValue)
      })

      function motorVChart(dataValue, unit, nowTimestamp) {
        let chart = that.$echarts.init(document.getElementById('room-temp-chart'))
        // 当没数据，x轴转为类目轴
        // if (dataValue.length <= 0) {
        //   that.options.xAxis.type = 'category'
        //   that.options.xAxis.data = that.dataX
        // } else {
        //   that.options.xAxis.type = 'value'
        //   that.options.xAxis.data = []
        // }
        that.options.xAxis.type = 'value'
        that.options.series[0].data = dataValue
        that.options.xAxis.name = '(℃)'
        that.options.series[0].name = '机房温度'
        that.options.tooltip.formatter = function (params,ticket,callback) {
          var date = nowTimestamp
          // var timestamp = date + value * 1000
          // var time = new Date(timestamp)
          var key = params[0].data[0] 
          var value = params[0].data[1]

          var timestamp = date - key * 1000
          var time = new Date(timestamp)
          let min = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes()
          let s = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds()
          var timeFormat = time.getHours() + ':' + min + ':' + s

          // var res = '时间：' + timeFormat + '<br>值：' + value;
          var res = params[0].seriesName + '：' + value + '℃' + '<br>时间：' + timeFormat
          return res
          
        }
        chart.setOption(that.options)
      }
    },

    // 机房湿度
    drawWest() {
      let that = this
      let dataValue = []

      api.detail.getD2(this.dtID).then(res => {
        // 组装xy数据
        let unit = res.data.result[0].unit
        let nowTimestamp = Date.now()
  
        res.data.result.forEach((item, i) => {
          let arr2 = []
          let second = Math.floor((nowTimestamp - new Date(item.time).getTime()) / 1000)
          arr2 = [second, item.value]
          dataValue.push(arr2)
        })
        motorVChart(dataValue, unit, nowTimestamp)
      })
      .catch(err => {
        motorVChart(dataValue)
      })

      function motorVChart(dataValue, unit, nowTimestamp) {
        let chart = that.$echarts.init(document.getElementById('west-chart'))
        that.options.xAxis.type = 'value'
        that.options.series[0].data = dataValue
        that.options.xAxis.name = '(%)'
        that.options.series[0].name = '机房湿度'
        that.options.tooltip.formatter = function (params,ticket,callback) {
          var date = nowTimestamp
          var key = params[0].data[0] 
          var value = params[0].data[1]

          var timestamp = date - key * 1000
          var time = new Date(timestamp)
          let min = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes()
          let s = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds()
          var timeFormat = time.getHours() + ':' + min + ':' + s
          var res = params[0].seriesName + '：' + value + '℃' + '<br>时间：' + timeFormat
          return res
          
        }
        chart.setOption(that.options)
      }
    },

    // 机房风速
    drawWind() {
      let that = this
      let dataValue = []

      api.detail.getD3(this.dtID).then(res => {
        // 组装xy数据
        let unit = res.data.result[0].unit
        let nowTimestamp = Date.now()
  
        res.data.result.forEach((item, i) => {
          let arr2 = []
          let second = Math.floor((nowTimestamp - new Date(item.time).getTime()) / 1000)
          arr2 = [second, item.value]
          dataValue.push(arr2)
        })
        // console.log(dataArr)
        motorVChart(dataValue, unit, nowTimestamp) // 传当时时间戳防止时间错乱
      })
      .catch(err => {
        motorVChart(dataValue)
      })

      function motorVChart(dataValue, unit, nowTimestamp) {
        let chart = that.$echarts.init(document.getElementById('room-wind-chart'))
        that.options.series[0].data = dataValue

        that.options.xAxis.name = '(m/s)'
        that.options.series[0].name = '机房风速'
        that.options.tooltip.formatter = function (params,ticket,callback) {
          var date = nowTimestamp
          var key = params[0].data[0] 
          var value = params[0].data[1]

          var timestamp = date - key * 1000
          var time = new Date(timestamp)
          let min = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes()
          let s = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds()
          var timeFormat = time.getHours() + ':' + min + ':' + s
          var res = params[0].seriesName + '：' + value + '℃' + '<br>时间：' + timeFormat
          return res
          
        }

        chart.setOption(that.options)
      }
    },

    // 机房水浸
    drawRoomWater() {
      let that = this
      let dataValue = []

      api.detail.getD4(this.dtID).then(res => {
        // 组装xy数据
        let unit = res.data.result[0].unit
        let nowTimestamp = Date.now()
        res.data.result.forEach((item, i) => {
          let value
          let arr2 = []
          let second = Math.floor((nowTimestamp - new Date(item.time).getTime()) / 1000)
          if (item.unit == 'mV') {
            value = 0
          } else {
            value = 1
          }
          arr2 = [second, value]
          dataValue.push(arr2)
        })
        motorVChart(dataValue, unit, nowTimestamp)
      })
      .catch(err => {
        motorVChart(dataValue)
      })

      function motorVChart(dataValue, unit, nowTimestamp) {
        let chart = that.$echarts.init(document.getElementById('room-water-chart'))
        that.options2.series[0].data = dataValue
        that.options2.xAxis.name = ''
        that.options2.series[0].name = '机房水浸'
        that.options2.tooltip.formatter = function (params,ticket,callback) {
          var date = Date.now()
          var key = params[0].data[0]
          var value = params[0].data[1]
          if (value == 1) {
            value = '正常'
          } else {
            value = '异常'
          }

          var timestamp = date - key * 1000
          var time = new Date(timestamp)
          let min = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes()
          let s = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds()
          var timeFormat = time.getHours() + ':' + min + ':' + s
          var res = params[0].seriesName + '：' + value + '<br>时间：' + timeFormat
          return res
        }
        chart.setOption(that.options2)
      }
    },

    // 空调
    drawAir() {
      let that = this
      let dataValue = []

      api.detail.getD5(this.dtID).then(res => {
        // 组装xy数据
        let unit = res.data.result[0].unit
        let nowTimestamp = Date.now()
        res.data.result.forEach((item, i) => {
          let value
          let arr2 = []
          let second = Math.floor((nowTimestamp - new Date(item.time).getTime()) / 1000)
          if (item.unit == 'mV') {
            value = 0
          } else {
            value = 1
          }
          arr2 = [second, value]
          dataValue.push(arr2)
        })
        motorVChart(dataValue, unit, nowTimestamp)
      })
      .catch(err => {
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('air-chart'))
        that.options2.xAxis.data = that.dataX
        that.options2.series[0].data = dataValue
        that.options2.xAxis.name = ''
        that.options2.series[0].name = '空调/排气扇'
        that.options2.tooltip.formatter = function (params,ticket,callback) {
          var date = Date.now()
          var key = params[0].data[0]
          var value = params[0].data[1]
          if (value == 1) {
            value = '开'
          } else {
            value = '关'
          }

          var timestamp = date - key * 1000
          var time = new Date(timestamp)
          let min = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes()
          let s = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds()
          var timeFormat = time.getHours() + ':' + min + ':' + s
          var res = params[0].seriesName + '：' + value + '<br>时间：' + timeFormat
          return res
        }
        chart.setOption(that.options2)
      }
    },
    

  },
  components: {

  }
}
</script>

<style>
  /* @import url("../../assets/stylus/css-reset.css"); */

  /* .beifen{
    -webkit-appearance none
    background-color #fff
    background-image none
    border-radius 4px
    border 1px solid #dcdfe6
    box-sizing border-box
    color #606266
    display inline-block
    font-size inherit
    height 40px
    line-height 40px
    outline none
    padding 0 15px
    transition border-color .2s cubic-bezier(.645,.045,.355,1)
    width 100%
  } */


</style>
