<template>
  <div id="test">
    <div class="chart-container clearfix">
      <div class="chart" id="chart1" ref="chart1"></div>
      <div class="chart" id="chart2" ref="chart2"></div>
      <div class="chart" id="chart3" ref="chart3"></div>
    </div>
    <div class="tip-container">
      <input id="tipinput" type="text">
    </div>
    <div id="container"></div>

    <!-- 正式模拟 -->
    <div id="chart4" ref="chart4"></div>
    <div id="chart5" ref="chart5"></div>

    <div id="chart6" ref="chart6"></div>
    <div id="chart7" ref="chart7"></div>

    <!-- 日历 -->
    <div class="calendar-container">
      <div class="calendar-header">
        <div class="left btn">&lt;</div>
        <div class="year"></div>
        <div class="right btn">&gt;</div>
      </div>
      <div class="calendar-body">
        <div class="week-row">
          <div class="week box">日</div>
          <div class="week box">一</div>
          <div class="week box">二</div>
          <div class="week box">三</div>
          <div class="week box">四</div>
          <div class="week box">五</div>
          <div class="week box">六</div>
        </div>

        <div class="day-rows">
          <!--日期的渲染的地方-->
        </div>
      </div>
    </div>

    <div id="chart8" ref="chart8"></div>


    <!-- 滚动高亮 -->
    <div id="test_scroll" ref="testScroll">
      <div class="test_scroll_nav">
        <span :class="{on : navActive == 'A'}" @click="jump(0)">A</span>
        <span :class="{on : navActive == 'B'}" @click="jump(1)">B</span>
        <span :class="{on : navActive == 'C'}" @click="jump(2)">C</span>
        <span :class="{on : navActive == 'D'}" @click="jump(3)">D</span>
      </div>
      <div class="test_content" id="testContent" ref="testContent">
        
        <div class="test_scroll_floor">
          <div class="test_scroll_box" id="boxA">
            <h3>A</h3>
            <p>lsdfjlksdfj <br>lksdjflskdjflksdjf <br>lsjfdlksjdfl</p>
          </div>
          <div class="test_scroll_box" id="boxB">
            <h3>B</h3>
            <p>lsdfjlksdfj <br>lksdjflskdjflksdjf <br>lsjfdlksjdfl</p>
          </div>
          <div class="test_scroll_box" id="boxC">
            <h3>C</h3>
            <p>lsdfjlksdfj <br>lksdjflskdjflksdjf <br>lsjfdlksjdfl</p>
          </div>
        </div>
      </div>

    </div>


    <!-- 测试时序 -->
    <div id="chart9" ref="chart9"></div>
    <div id="chart10" ref="chart10"></div>
    <div id="chart11" ref="chart11"></div>

  </div>
</template>

<script>
import Vue from "vue";
import AMap from "AMap";
import Loca from "Loca";
import api from '../../api.js'
import { setInterval } from 'timers';


export default {
  data() {
    return {
      dtID: 'dt001',
      list: "",
      flag: true,
      navActive: 'A',
      testData: "123",
      testList: [1, 2, 3, 4, 5],
      pieData: ""
    };
  },
  mounted() {
    let dataValue = []
    // api.detail.getD1(this.dtID).then(res => {
    //   console.log(res.data)
     
  
    // })
    // .catch(err => {
    //   console.log(666)
    // })



    this.drawChart1();
    this.drawChart2();
    this.drawChart3();
    this.drawChart4();
    this.drawChart5();
    // this.drawChart6();
    // this.drawChart7();
    this.getCalendar()
    this.drawChart8();
    this.drawChart9();
    this.drawChart10();
    this.drawChart11();
    setInterval(() => {
      this.drawChart11();
    }, 2000)

    // 图表自适应
    let chart1 = this.$echarts.getInstanceByDom(
      document.getElementById("chart1")
    );
    let chart2 = this.$echarts.getInstanceByDom(
      document.getElementById("chart2")
    );
    let chart3 = this.$echarts.getInstanceByDom(
      document.getElementById("chart3")
    );
    window.addEventListener("resize", function() {
      chart1.resize();
      chart2.resize();
      chart3.resize();
    });

    this.getMapData();


    // 滚动高亮
    let test_scroll = this.$refs.testScroll
    let testContent = document.getElementById('testContent')
    let boxA = document.getElementById('boxA')
    let boxB = document.getElementById('boxB')
    let boxC = document.getElementById('boxC')
    let testContentTop = testContent.offsetTop
    let boxATop = boxA.offsetTop - testContentTop
    let boxBTop = boxB.offsetTop - testContentTop
    let boxCTop = boxC.offsetTop - testContentTop
    testContent.addEventListener('scroll', () => {
      var current_offset_top = testContent.scrollTop;
      // console.log(boxATop)
      if (current_offset_top < boxBTop) {
        this.navActive = 'A'
      } else if (current_offset_top >= boxBTop && current_offset_top < boxCTop) {
        this.navActive = 'B'
      } else if (current_offset_top >= boxCTop) {
        this.navActive = 'C'
      }

    })







  },
  methods: {
    drawChart1() {
      let lineChart1 = this.$echarts.init(document.getElementById("chart1"));
      let options = {
        backgroundColor: "black",
        title: {
          text: "维保"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          itemHeight: 6,
          top: "bottom",
          textStyle: {
            color: "red"
          }
        },
        xAxis: {
          // data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
          data: ["1日", "2日", "3日", "4日", "5日", "6日", "7日"],
          axisLabel: {
            color: "#fff"
          }
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          },
          axisLabel: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "已维保",
            type: "bar",
            stack: "repair",
            itemStyle: {
              color: "green"
            },
            data: ["66", "77", "66", "77", "66", "77"]
          },
          {
            name: "已维保",
            type: "line",
            smooth: true,
            itemStyle: {
              color: "green"
            },
            data: ["66", "77", "66", "77", "66", "77"]
          },
          {
            name: "待维保",
            type: "bar",
            stack: "repair",
            itemStyle: {
              color: "blue"
            },
            data: ["34", "99", "100", "77", "66", "77"]
          }
        ]
      };
      lineChart1.setOption(options);
    },
    drawChart2() {
      let lineChart2 = this.$echarts.init(document.getElementById("chart2"));
      let options = {
        title: {
          text: "故障总数"
        },
        tooltip: {},
        legend: {
          itemWidth: 10,
          itemHeight: 10, // 改图例图标高度
          textStyle: {
            height: 9,
            rich: {}
          },
          // 改变图例图标
          data: [
            { name: "A类", icon: "roundRect" },
            { name: "B类", icon: "circle" }
          ]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        xAxis: {
          boundaryGap: false,
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        yAxis: {},
        series: [
          {
            name: "A类",
            type: "line",
            stack: "总量1",
            itemStyle: {
              color: "#6B50D0",
              border: "#6B50D0"
            },
            areaStyle: {
              color: "#6B50D0",
              opacity: 1
            },
            data: ["66", "77", "66", "77", "66", "77"]
          },
          {
            name: "B类",
            type: "line",
            stack: "总量1",
            areaStyle: {},
            data: ["11", "22", "33", "55", "11", "33"]
          }
        ]
      };
      lineChart2.setOption(options);
    },
    drawChart3() {
      let lineChart3 = this.$echarts.init(document.getElementById("chart3"));
      let options = {
        title: {
          text: "维保人员维保电梯数"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          top: 0,
          right: 0,
          data: [
            { name: "15以下", icon: "circle" },
            { name: "15-20", icon: "circle" },
            { name: "20-25", icon: "circle" },
            { name: "25-30", icon: "circle" },
            { name: "30以上", icon: "circle" }
          ]
        },
        radius: [20, 110],
        roseType: "radius",
        xAxis: {
          show: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [20, 100],
            center: ["50%", "50%"],
            roseType: "area",
            data: [
              {
                value: 9,
                name: "15以下",
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "red" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#7A2B55" // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              },
              { value: 13, name: "15-20" },
              { value: 17, name: "20-25" },
              { value: 21, name: "25-30" },
              { value: 40, name: "30以上" }
            ]
          }
        ]
      };
      lineChart3.setOption(options);
    },
    getMapData() {
      var that = this;

      var json = [
        {
          id: "111",
          title: "电梯A",
          lng: "116.397428",
          lat: "39.90923",
          state: "状态良好",
          address: "北京市"
          // elevators: [
          //   {name: '电梯A', id: '111'}, {name: '电梯B', id: '222'}
          // ]
        },
        {
          id: "222",
          title: "电梯B",
          lng: "114.02",
          lat: "22.53",
          state: "故障",
          address: "北京市"
        }
      ];

      var jsonEleA = {
        id: "111",
        name: "电梯A",
        state: "状态良好",
        address: "北京市故宫"
      };

      var jsonEleB = {
        id: "222",
        name: "电梯B",
        state: "故障",
        address: "广州"
      };

      this.list = json;
      // var center = []
      // center.push(this.list[0].lng)
      // center.push(this.list[0].lat)

      let map = new AMap.Map("container", {
        mapStyle: "amap://styles/dark",
        zoom: 10, //级别
        // center: center, //中心点坐标
        center: [114.03, 22.61], //中心点坐标
        // zooms: [4,18],//设置地图级别范围
        // pitch: 30,
        viewMode: "3D", //使用3D视图
        features: ["bg", "building", "point"]
      });

      // 搜索输入提示
      AMap.plugin(["AMap.Autocomplete", "AMap.PlaceSearch"], function() {
        var autoOptions = {
          // 城市，默认全国
          city: "全国",
          // 使用联想输入的input的id
          input: "tipinput"
        };
        var autocomplete = new AMap.Autocomplete(autoOptions);

        var placeSearch = new AMap.PlaceSearch({
          city: "全国",
          map: map
        });
        AMap.event.addListener(autocomplete, "select", function(e) {
          //针对选中的poi实现自己的功能
          placeSearch.search(e.poi.name);

          // 移动中心点不显示蓝点
          // console.log(e.poi)
          // var position = []
          // position.push(e.poi.location.lng)
          // position.push(e.poi.location.lat)
          // map.setCenter(position)
        });
      });

      // marker容器
      var markerList = [];

      // 遍历数据并创建多个marker
      json.forEach((item, i) => {
        var marker = new AMap.Marker({
          position: new AMap.LngLat(`${item.lng}`, `${item.lat}`),
          offset: new AMap.Pixel(-20, -20),
          icon: require("../../assets/images/160109.png"), // 添加 Icon 图标 URL
          title: `${item.title}`
        });

        //创建信息窗口
        var MyComponent = Vue.extend({
          data() {
            return {
              id: "",
              title: "",
              lng: "",
              lat: "",
              state: "",
              address: ""
            };
          },
          mounted() {
            // this.list = item.elevators
            // 默认选中第一个，并查询第一个电梯数据
            // this.value = this.list[0].name
            // this.getInfo(this.list[0].id)
            //   <el-select v-model="value" placeholder="请选择" @change="selectChange">
            //   <el-option v-for="item in list" :label="item.name" :value="item.id" :key="item.id"></el-option>
            // </el-select>

            this.id = item.id;
            this.title = item.title;
            this.lng = item.lng;
            this.lat = item.lat;
            this.state = item.state;
            this.address = item.address;
          },
          template: `
          <div class="info-box">
            <a href="javascript:;" v-on:click="closeWindow()">×</a>
            <p>id: {{id}}</p>
            <p>title: {{title}}</p>
            <p>state: {{state}}</p>
            <p>address: {{address}}</p>
            <span class="info-link" @click="goDetail(id)">详细信息</span>
          </div>
          `,
          methods: {
            closeWindow() {
              infoWindow.close();
            },
            // 改变下拉菜单时触发
            // selectChange(val) {
            //   this.getInfo(val)
            // },
            // 获取电梯详细信息
            // getInfo(id) {
            //   console.log(id)
            //   if (id == jsonEleA.id) {
            //     this.info.id = jsonEleA.id
            //     this.info.name = jsonEleA.name
            //     this.info.state = jsonEleA.state
            //     this.info.address = jsonEleA.address
            //   } else {
            //     this.info.id = jsonEleB.id
            //     this.info.name = jsonEleB.name
            //     this.info.state = jsonEleB.state
            //     this.info.address = jsonEleB.address
            //   }
            // },
            // 详细信息跳转传参
            goDetail(id) {
              that.$router.push({
                path: "/detail",
                query: {
                  id: id
                }
              });
            }
          }
        });

        var component = new MyComponent().$mount();

        // 创建 infoWindow 实例
        var infoWindow = new AMap.InfoWindow({
          isCustom: true, //使用自定义窗体
          // content: createInfoWindow(content.join("<br/>")),
          content: component.$el,
          offset: new AMap.Pixel(16, -45)
        });
        AMap.event.addListener(marker, "click", function() {
          infoWindow.open(map, marker.getPosition());
        });
        markerList.push(marker);
      });

      console.log(markerList);
      map.add(markerList);

      //鼠标点击marker弹出自定义的信息窗体
      // AMap.event.addListener(marker1, 'click', function () {
      //     infoWindow.open(map, marker1.getPosition());
      // });

      var colors = {};
      var getColorByAdcode = function(adcode) {
        if (!colors[adcode]) {
          var gb = Math.random() * 155 + 50;
          colors[adcode] = "rgb(0," + gb + ",0)";
        }

        return colors[adcode];
      };

      var disProvince = new AMap.DistrictLayer.Province({
        zIndex: 12,
        adcode: ["440300"],
        depth: 2,
        styles: {
          fill: function(properties) {
            var adcode = properties.adcode;
            return getColorByAdcode(adcode);
          },
          "province-stroke": "cornflowerblue",
          "city-stroke": "white", //中国地级市边界
          "county-stroke": "rgba(255,255,255,0.5)" //中国区县边界
        }
      });

      disProvince.setMap(map);

      map.on("click", function(e) {
        // document.getElementById("lnglat").value = e.lnglat.getLng() + ',' + e.lnglat.getLat()
        // console.log(e.lnglat.getLng())
      });
    },

    // 正式模拟
    drawChart4() {
      let chart4 = this.$echarts.init(document.getElementById("chart4"));
      let options = {
        backgroundColor: "#24242F",
        title: {
          text: "维保及时率",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          itemHeight: 10,
          top: "bottom",
          textStyle: {
            color: "#5B5B72",
            height: 9,
            rich: {}
          },
          // 更改图例图标
          data: [
            { name: "已维保", icon: "circle" },
            { name: "待维保", icon: "circle" }
          ]
        },

        xAxis: {
          data: ["1日", "2日", "3日", "4日", "5日", "6日", "7日"],
          // boundaryGap: false, // 刻度在中间
          boundaryGap: ["30%", "30%"],
          axisLabel: {
            color: "#5B5B72"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#36363F"
            }
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#3F3F48"
            }
          },
          axisLabel: {
            color: "#5B5B72"
          }
        },
        series: [
          {
            name: "已维保",
            type: "bar",
            stack: "repair",
            itemStyle: {
              color: "#0DBA7F"
            },
            data: ["66", "77", "66", "77", "66", "77"]
          },
          {
            name: "待维保",
            type: "bar",
            stack: "repair",
            itemStyle: {
              color: "#F1C101"
            },
            data: ["34", "99", "100", "77", "66", "77"]
          }
        ]
      };
      chart4.setOption(options);
    },

    drawChart5() {
      var that = this;
      let chart5 = this.$echarts.init(document.getElementById("chart5"));

      // 模拟数据
      this.pieData = [
        {
          value: 9,
          name: "15以下",
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#F75F5F" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#7A2B55" // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        },
        {
          value: 13,
          name: "15-20",
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#FCBF01" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#735430" // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        },
        {
          value: 17,
          name: "20-25",
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#FCBF01" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#735430" // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        },
        { value: 21, name: "25-30" },
        { value: 40, name: "30以上" }
      ];

      // 动态生成图例legend
      let legendData = [];
      this.pieData.forEach((item, i) => {
        var obj = { name: item.name, icon: "circle" };
        legendData.push(obj);
      });

      let options = {
        title: {
          text: "维保人员维保电梯数"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          top: "middle",
          // 格式化图例（动态）
          formatter: function(name) {
            for (var i = 0; i < that.pieData.length; i++) {
              if (name == that.pieData[i].name) {
                return name + ": " + that.pieData[i].value;
              }
            }
          },
          right: 0,
          data: legendData
        },
        roseType: "radius",
        xAxis: {
          show: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [90, 150],
            center: ["50%", "50%"],
            roseType: "area",
            data: this.pieData
          }
        ]
      };
      that.testData = "111";
      chart5.setOption(options);
    },

    drawChart6() {
      var myChart = this.$echarts.init(document.getElementById("chart6"));
      var base = +new Date(2017, 3, 8);
      var oneDay = 24 * 3600 * 1000;
      var date = [];
      var data = [Math.random() * 150];
      var now = new Date(base);
      var day = 30;
      function addData(shift) {
        now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/");
        date.push(now);
        data.push((Math.random() - 0.5) * 10 + data[data.length - 1]);
        if (shift) {
          // console.log(data);
          date.shift();
          data.shift();
        }
        now = new Date(+new Date(now) + oneDay);
      }

      for (var i = 0; i < day; i++) {
        addData();
      }
      //设置图标配置项
      myChart.setOption({
        title: {
          text: "ECharts 30天内数据实时更新"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date
        },
        yAxis: {
          boundaryGap: [0, "100%"],
          type: "value"
        },
        series: [
          {
            name: "成交",
            type: "line",
            smooth: true, //数据光滑过度
            symbol: "none", //下一个数据点
            stack: "a",
            areaStyle: {
              normal: {
                color: "red"
              }
            },
            data: data
          }
        ]
      });
      setInterval(function() {
        addData(true);
        myChart.setOption({
          xAxis: {
            data: date
          },
          series: [
            {
              name: "成交",
              data: data
            }
          ]
        });
      }, 1000);
    },

    drawChart7() {
      let data = ["66", "77"];
      let date = ["132", "321"];

      let chart7 = this.$echarts.init(document.getElementById("chart7"));
      let options = {
        title: {
          text: "动态更新数据"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          data: date
        },
        yAxis: {},
        symbol: "none", //下一个数据点
        series: [
          {
            name: "历史数据",
            areaStyle: {},
            type: "line",
            smooth: true,
            data: data
          }
        ]
      };

      chart7.setOption(options);

      // 定时动态更新数据
      setInterval(() => {
        let random = Math.floor(Math.random() * 100);
        let dateTime = Date.now();
        data.push(random);
        date.push(dateTime);
        if (data.length > 7) {
          data.shift();
          date.shift();
        }
        chart7.setOption({
          xAxis: {
            data: date
          },
          series: [
            {
              name: "历史数据",
              type: "line",
              areaStyle: {},
              smooth: true,
              data: data
            }
          ]
        });
      }, 2000);
    },

    getCalendar() {
      // 获取今天日期
      let curTime = new Date(),
        curYear = curTime.getFullYear(),
        curMonth = curTime.getMonth(),
        curDate = curTime.getDate();

      let localTime = new Date(),
        localMonth = localTime.getMonth();


      // 判断平年还是闰年
      function isLeapYear(year) {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
      }

      // 渲染日历
      function render(curYear, curMonth) {
        document.querySelector(".year").innerHTML = `${curYear}年${curMonth + 1}月`;

        // 判断今年是平年还是闰年，并确定今年的每个月有多少天
        let daysInMonth = [31, isLeapYear(curYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // 确定今天日期所在月的第一天是星期几
        let firstDayInMonth = new Date(curYear, curMonth, 1),
          firstDayWeek = firstDayInMonth.getDay(); // 2

        // console.log(firstDayInMonth + '===' + firstDayWeek)

        // 根据当前月的天数和当前月第一天星期几来确定当前月的行数，向上取整
        let calendarRows = Math.ceil(
          (firstDayWeek + daysInMonth[curMonth]) / 7
        );

        // 将每一行的日期放入到rows数组中
        let rows = [];

        // 外循环渲染日历的每一行
        for (let i = 0; i < calendarRows; i++) {
          rows[i] = `<p class="day-row">`;

          // 内循环渲染日历的每一天

          for (let j = 0; j < 7; j++) {
            // 内外循环构成了一个calendarRows*7的表格，为当前月的每个表格设置idx索引；

            // 利用idx索引与当前月第一天星期几来确定当前月的日期

            let idx = i * 7 + j,
              date = idx - firstDayWeek + 1;

            // 过滤掉无效日期、渲染有效日期
            // console.log(localMonth)

            if (date <= 0 || date > daysInMonth[curMonth]) {
              rows[i] += `<p class="day box"></p>`;
            } else if (date === curDate) {
              // 判断是否是当前日期
              if (curMonth === localMonth) {
                rows[i] += `<p class="day box curday">${date}</p>`;
              } else {
                rows[i] += `<p class="day box">${date}</p>`;
              }

            } else {
              rows[i] += `<p class="day box">${date}</p>`;
            }
          }

          rows[i] += `</p>`;
        }
        let dateStr = rows.join("");

        document.querySelector(".day-rows").innerHTML = dateStr;
      }

      // 首次调用render函数

      render(curYear, curMonth);

      let leftBtn = document.querySelector(".left"),
        rightBtn = document.querySelector(".right");

      // 向左切换月份

      leftBtn.addEventListener("click", function() {
        curMonth--;

        if (curMonth < 0) {
          curYear -= 1;

          curMonth = 11;
        }

        render(curYear, curMonth);
      });

      // 向右切换月份

      rightBtn.addEventListener("click", function() {
        curMonth++;

        if (curMonth > 11) {
          curYear += 1;

          curMonth = 0;
        }

        render(curYear, curMonth);
      });
    },

    drawChart8() {
      let chart8 = this.$echarts.init(document.getElementById('chart8'))
      let options = {
        tooltip: {},
        backgroundColor: 'black',
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          }
        },
        xAxis: {
          boundaryGap: false,
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        yAxis: {},
        visualMap: { //区间内控制显示颜色
          show: true,
          type: 'continuous',
          // dimension: 1,
          min: 0,
          max: 100,
          range: [0, 60],
          inRange: {
            color: ['transparent', '#00cc00', '#00ff00']
          },
          outOfRange: {
            color: ['#00ff00', 'red']
          }
        },
        series: [
          {
            name: "A类",
            type: "line",
            smooth: true,
            itemStyle: {
              color: "green",
              border: "#6B50D0"
            },
            areaStyle: {
              // color: {
              //   type: 'linear',
              //   x: 0,
              //   y: 0,
              //   x2: 0,
              //   y2: 1,
              //   colorStops: [{
              //       offset: 0, color: 'green' // 0% 处的颜色
              //   }, {
              //       offset: 1, color: 'transparent' // 100% 处的颜色
              //   }],
              //   global: false // 缺省为 false
              // },
            },
            data: [10, 20, 60, 80, 30, 50]
          },
          // {
          //   name: "B类",
          //   type: "line",
          //   itemStyle: {
          //     // color: "green",
          //     // border: "#6B50D0"
          //   },
          //   areaStyle: {
          //     color: {
          //       type: 'linear',
          //       x: 0,
          //       y: 0,
          //       x2: 0,
          //       y2: 1,
          //       colorStops: [{
          //           offset: 0, color: 'red' // 0% 处的颜色
          //       }, {
          //           offset: 1, color: 'transparent' // 100% 处的颜色
          //       }],
          //       global: false // 缺省为 false
          //     },
          //   },
          //   data: ["0", "0", "60", "80", "0", "0"]
          // }
        ]
      };
      chart8.setOption(options)
    },

    // 锚点平滑跳转
    jump(index) {
      let that = this
      // this.activeStep = index
      // 用 class="step-jump" 添加锚点
      let jumpArr = document.querySelectorAll('.test_scroll_box')
      let testContent = document.getElementById('testContent')
      if (this.flag) {
        that.flag = false

        let testContentTop = testContent.offsetTop

        let total = jumpArr[index].offsetTop - testContentTop // 目标卷曲位置
        let currentDistance = testContent.scrollTop // 当前卷曲位置
        let step = Math.floor(total / 10)
        if (total > currentDistance) {
          smoothDown()
        } else {
          let newTotal = currentDistance - total
          step = Math.floor(newTotal / 50)
          smoothUp()
        }

        // 向下
        function smoothDown() {
          if (currentDistance < total) {
            clearTimeout(timer)
            currentDistance += step
            testContent.scrollTop = currentDistance
            let timer = setTimeout(smoothDown, 10)
          } else {
            testContent.scrollTop = total
            that.flag = true
          }
        }

        // 向上
        function smoothUp () {
          if (currentDistance > total) {
            clearTimeout(timer)
            currentDistance -= step
            testContent.scrollTop = currentDistance
            let timer = setTimeout(smoothUp, 10)
          } else {
            testContent.scrollTop = total
            that.flag = true
          }
        }
      }
      



    },

    drawChart9() {
      let lineChart9 = this.$echarts.init(document.getElementById("chart9"));
      let options = {
        title: {
          text: "故障总数"
        },
        tooltip: {
          // trigger: "axis",
          // axisPointer: {
          //   type: "cross",
          //   label: {
          //     backgroundColor: "#6a7985"
          //   }
          // }
        },
        xAxis: [{
          show: false,
          type: 'time',
          boundaryGap: false,
          axisLabel: {
            color: '#ffffff',
            formatter: function (value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var date = new Date(value);
                // var texts = [(date.getMonth() + 1), date.getDate()];
                // if (index === 0) {
                //     texts.unshift(date.getYear());
                // }
                // return texts.join('/');

                var arr = [date.getHours(), date.getMinutes()]
                return arr.join(':');

            }
          }
          // data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        {
          type: 'category',
          position: "bottom",
          axisLabel: {
            color: '#ffffff',
          },
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        }
        ],
        yAxis: {},
        series: [
          {
            name: "A类",
            type: "line",
            stack: "总量1",
            itemStyle: {
              color: "#6B50D0",
              border: "#6B50D0"
            },
            areaStyle: {
              color: "#6B50D0",
              opacity: 1
            },
            // data: [[0, 66], [10, 88], [25, 100], [40, 200], [55, 60]]
            data: [[1550027330507, 66], [1550027332931, 88], [1550027342931, 100], [1550027352931, 200], [1550027362931, 60]]
          }
        ]
      };
      lineChart9.setOption(options);
    },

    drawChart10() {

      api.detail.getD1(this.dtID).then(res => {
        console.log(res.data)

        // 组装xy数据
        let nowTimestamp = Date.now()
        let dataArr = [] // 类似于[[x1, y1], [x2, y2], ...]
        res.data.result.forEach((item, i) => {
          let arr2 = []
          let second = Math.floor((nowTimestamp - new Date(item.time).getTime()) / 1000)
          arr2 = [second, item.value]
          dataArr.push(arr2)
        })
        console.log(dataArr)



        let lineChart10 = this.$echarts.init(document.getElementById("chart10"));
        let options = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              lineStyle: {
                color: '#1D1B25',
              }
            },
            formatter: function (params,ticket,callback) {
              var date = Date.now()
              // var timestamp = date + value * 1000
              // var time = new Date(timestamp)
              console.log(params)
              var key = params[0].data[0]
              var value = params[0].data[1]

              var timestamp = date + key * 1000
              var time = new Date(timestamp)
              var timeFormat = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()

              // var res = '时间：' + timeFormat + '<br>值：' + value;
              var res = params[0].seriesName + '：' + value + '<br>时间：' + timeFormat
              return res
              
            }
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
            left: '40px',  
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
              data: dataArr
              // data: [[9, 10], [12, 20], [18, 40], [31, 80], [50, 100], [58, 180]]
            },    
          ]
        }
        lineChart10.setOption(options);

      
      })
      .catch(err => {
        console.log('err')
      })




      
    },

    drawChart11() {

      api.detail.getD18(this.dtID).then(res => {
        console.log(res.data)

        // 组装xy数据
        // let nowTimestamp = Date.now()
        // let dataArr = [] // 类似于[[x1, y1], [x2, y2], ...]
        // res.data.result.forEach((item, i) => {
        //   let arr2 = []
        //   let second = Math.floor((nowTimestamp - new Date(item.time).getTime()) / 1000)
        //   arr2 = [second, item.value]
        //   dataArr.push(arr2)
        // })
        // console.log(dataArr)

        // [[time, value]]
        let dataValue = []
        res.data.result.forEach((item, i) => {
          let arr = [new Date(item.time).getTime(), item.value]
          dataValue.push(arr)
        })



        let lineChart11 = this.$echarts.init(document.getElementById("chart11"));
        let options = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              lineStyle: {
                color: '#1D1B25',
              }
            },
            formatter: function (params,ticket,callback) {
              // var date = Date.now()
              // var timestamp = date + value * 1000
              // var time = new Date(timestamp)
              // console.log(params)
              var key = params[0].data[0]
              var value = params[0].data[1]

              var time = new Date(key)
              var timeFormat = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()

              // var res = '时间：' + timeFormat + '<br>值：' + value;
              var res = params[0].seriesName + '：' + value + '<br>时间：' + timeFormat
              return res
              
            }
          },
          xAxis: {
            type: 'time',
            // inverse: true,
            boundaryGap: false,
            axisTick: {
              show: false
            },
            splitNumber: 6,
            axisLabel: {
              // formatter: '{value}s',
              color: '#66667F',
              margin: 12
            },
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
            left: '40px',  
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
              data: dataValue
              // data: [[9, 10], [12, 20], [18, 40], [31, 80], [50, 100], [58, 180]]
            },    
          ]
        }
        lineChart11.setOption(options);

      
      })
      .catch(err => {
        console.log('err')
      })




      
    },
  },
  components: {}
};
</script>





<style lang="scss" scope>
// @import url("../../assets/stylus/css-reset.css");

#test {
  // color: #000 !important;
  padding: 80px 20px;



  .chart {
    float: left;
    width: 32%;
    height: 200px;
    margin-left: 1.6%;
    border: 1px solid white;
  }

  .chart-container .chart:first-child {
    margin-left: 0;
  }

  .tip-container {
    position: relative;
  }

  #tipinput {
    position: absolute;
    top: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    left: 20px;
    z-index: 100;
    padding: 5px;
  }

  #container {
    width: 100%;
    height: 500px;
    margin-top: 20px;
  }

  .info-box {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 20px;
    width: 300px;
  }

  .info-link:hover {
    color: blue;
    cursor: pointer;
  }

  #chart4 {
    width: 800px;
    height: 600px;
    border: 1px solid red;
  }

  #chart5 {
    width: 800px;
    height: 600px;
    border: 1px solid red;
  }

  #chart6 {
    width: 800px;
    height: 600px;
    border: 1px solid red;
  }

  #chart7 {
    width: 100%;
    height: 600px;
    border: 1px solid red;
  }

  #chart8 {
    width: 800px;
    height: 600px;
    border: 1px solid red;
  }

  #chart9 {
    width: 800px;
    height: 600px;
    border: 1px solid red;
  }

  #chart10 {
    width: 800px;
    height: 600px;
    border: 1px solid red;
  }

  #chart11 {
    width: 800px;
    height: 600px;
    border: 1px solid red;
  }

  // 日历
  .calendar-container {
    width: calc(31px * 7 + 1px);
  }

  .calendar-header {
    display: flex;
    justify-content: space-between;
  }

  .year {
    text-align: center;
    line-height: 30px;
  }

  .btn {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }

  .calendar-body {
    border-right: 1px solid #9e9e9e;
    border-bottom: 1px solid #9e9e9e;
  }

  .week-row, .day-rows, .day-row {
    overflow: hidden;
  }

  .box {
    float: left;
    width: 30px;
    height: 30px;
    border-top: 1px solid #9e9e9e;
    border-left: 1px solid #9e9e9e;
    text-align: center;
    line-height: 30px;
  }

  .week {
    background: #00bcd4;
  }

  .day {
    background: #ffeb3b;
  }

  .curday {
    background: #ff5722;
  }



  #test_scroll{
    position: relative;
    height: 600px;
    width: 800px;
    background: #fff;
    margin-top: 100px;
    color: #000;
    border: 1px solid red;
  }
  .test_content{
    height: 400px;
    overflow-y: scroll;
    margin-top: 100px;
    border-top: 1px solid red;
  }
  .test_scroll_nav{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .test_scroll_nav span{
    display: inline-block;
    padding: 5px;
    color: #000;
    margin: 0 5px;
    cursor: pointer;
  }
  .test_scroll_nav span.on{
    background: red;
    color: #fff;
  }
  .test_scroll_floor{
    height: 1000px;
  }
  .test_scroll_box{
    margin-top: 20px;
  }



}
</style>
