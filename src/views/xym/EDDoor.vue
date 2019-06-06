<template>
  <div id="EDDoor">
    <!-- <div class="ed-item-time-change clearfix">
      <span :class="{on : timeOn == 'now'}" @click="changeTime('now')">现在</span>
      <span :class="{on : timeOn == 'day'}" @click="changeTime('day')">今日</span>
      <span :class="{on : timeOn == 'month'}" @click="changeTime('month')">本月</span>
      <span :class="{on : timeOn == 'year'}" @click="changeTime('year')">本年</span>
    </div> -->

    <div class="ed-item">
      <div class="ed-item-title">层门</div>
      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon16"></div>
          <div class="edic-data-p">
            <h4><em>{{floorDoorValue}}</em><span></span></h4>
            <p>层门开关</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="floor-door-chart" ref="floor-door-chart"></div>
        </div>
      </div>

    </div>

    <div class="ed-item">
      <div class="ed-item-title">轿门</div>
      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon16"></div>
          <div class="edic-data-p">
            <h4><em>{{eleDoorValue}}</em><span></span></h4>
            <p>轿门开关</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="ele-door-chart" ref="ele-door-chart"></div>
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
      dataX: ['60s', '55s', '50s', '45s', '40s', '35s', '30s', '25s', '20s', '15s', '10s', '5s', '0s'],
      dataValue: [],
      floorDoorValue: '关',
      floorDoorValueNum: '0',
      eleDoorValue: '关',
      eleDoorValueNum: '0',

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
    this.getRealTime()
    const intervalTimer = setInterval(() => {
      this.getRealTime()
    }, 2000)
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once('hook:beforeDestroy', () => {            
      clearInterval(intervalTimer);                                    
    })

    setTimeout(() => {
      let floor_door_chart = this.$echarts.getInstanceByDom(document.getElementById("floor-door-chart"));
      let ele_door_chart = this.$echarts.getInstanceByDom(document.getElementById("ele-door-chart"));
  
      window.addEventListener("resize", function() {
        floor_door_chart.resize();
        ele_door_chart.resize();
      
      });
    }, 300)



  },
  methods: {
    // 切换时间
    changeTime(name) {
      // this.timeOn = name
    },

    // 获取实时数据
    getRealTime() {
      api.detail.getCurrent(this.dtID).then(res => {
        // 电梯层门
        if (res.data[16]) {
          if (res.data[16].value) {
            this.floorDoorValue = '开'
          } else {
            this.floorDoorValue = '关'
          }
          this.floorDoorNum = res.data[16].value
        }
        this.drawFloorDoor()

        // 电梯轿门
        if (res.data[17]) {
          if (res.data[17].value) {
            this.floorDoorValue = '开'
          } else {
            this.floorDoorValue = '关'
          }
          this.floorDoorNum = res.data[17].value
        }
        this.drawEleDoor()
      })

    },

    // 层门
    drawFloorDoor() {
      let that = this
      let dataValue = []

      api.detail.getD16(this.dtID).then(res => {
        // 组装xy数据
        let unit = res.data.result[0].unit
        let nowTimestamp = Date.now()
        res.data.result.forEach((item, i) => {
          let value
          let arr2 = []
          let second = Math.floor((nowTimestamp - new Date(item.time).getTime()) / 1000)
          if (item.unit == 'off') {
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
        let chart = that.$echarts.init(document.getElementById('floor-door-chart'))
        that.options2.series[0].data = dataValue
        that.options2.xAxis.name = ''
        that.options2.series[0].name = '层门开关'
        that.options2.yAxis.axisLabel.formatter = function (value, index) {
          if (value == 0) {
            return '关'
          }
          if (value == 1) {
            return '开'
          }
        }
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

    // 轿门
    drawEleDoor() {
      let that = this
      let dataValue = []

      api.detail.getD16(this.dtID).then(res => {
        // 组装xy数据
        let unit = res.data.result[0].unit
        let nowTimestamp = Date.now()
        res.data.result.forEach((item, i) => {
          let value
          let arr2 = []
          let second = Math.floor((nowTimestamp - new Date(item.time).getTime()) / 1000)
          if (item.unit == 'off') {
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
        let chart = that.$echarts.init(document.getElementById('ele-door-chart'))
        that.options2.series[0].data = dataValue
        that.options2.xAxis.name = ''
        that.options2.series[0].name = '轿门开关'
        that.options2.yAxis.axisLabel.formatter = function (value, index) {
          if (value == 0) {
            return '关'
          }
          if (value == 1) {
            return '开'
          }
        }
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
    }

  },
  components: {

  }
}
</script>

<style scoped>

</style>
