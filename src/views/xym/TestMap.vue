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
  </div>
</template>

<script>
import Vue from "vue";
import AMap from "AMap";
import Loca from "Loca";
export default {
  data() {
    return {
      list: ""
    };
  },
  mounted() {
    this.drawChart1();
    this.drawChart2();
    this.drawChart3();

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
  },
  methods: {
    drawChart1() {
      let lineChart1 = this.$echarts.init(document.getElementById("chart1"));
      let options = {
        title: {
          text: "电梯总数"
        },
        tooltip: {},
        legend: {
          data: ["Tok"]
        },
        xAxis: {
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        yAxis: {},
        series: [
          {
            name: "Tok",
            type: "line",
            smooth: true,
            data: ["66", "77", "66", "77", "66", "77"]
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
          data: ["Tok"]
        },
        xAxis: {
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        yAxis: {},
        series: [
          {
            name: "Tok",
            type: "line",
            smooth: true,
            data: ["66", "77", "66", "77", "66", "77"]
          }
        ]
      };
      lineChart2.setOption(options);
    },
    drawChart3() {
      let lineChart3 = this.$echarts.init(document.getElementById("chart3"));
      let options = {
        title: {
          text: "事故总数"
        },
        tooltip: {},
        legend: {
          data: ["Tok"]
        },
        xAxis: {
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        yAxis: {},
        series: [
          {
            name: "Tok",
            type: "line",
            smooth: true,
            data: ["66", "77", "66", "77", "66", "77"]
          }
        ]
      };
      lineChart3.setOption(options);
    },
    getMapData() {
      var that = this;

      var json = [
        {
          id: "",
          title: "建筑1",
          lng: "116.397428",
          lat: "39.90923",
          address: "北京市",
          elevators: [
            { name: "电梯A", id: "111" },
            { name: "电梯B", id: "222" }
          ]
        },

        {
          title: "建筑2",
          lng: "113.46",
          lat: "22.27",
          address: "深圳市",
          elevators: [
            { name: "电梯C", id: "111" },
            { name: "电梯D", id: "222" }
          ]
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
      var center = [];
      center.push(this.list[0].lng);
      center.push(this.list[0].lat);

      let map = new AMap.Map("container", {
        // mapStyle: 'amap://styles/darkblue',
        // zoom:11,//级别
        center: center, //中心点坐标
        // zooms: [4,18],//设置地图级别范围
        // pitch: 30,
        viewMode: "3D" //使用3D视图
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

      var testxxx = 666;

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
              list: [],
              value: "",
              info: {
                id: "",
                name: "",
                state: "",
                address: ""
              }
            };
          },
          mounted() {
            this.list = item.elevators;
            // 默认选中第一个，并查询第一个电梯数据
            this.value = this.list[0].name;
            this.getInfo(this.list[0].id);
          },
          template: `
          <div class="info-box">
            <a href="javascript:;" v-on:click="closeWindow()">×</a>
            <el-select v-model="value" placeholder="请选择" @change="selectChange">
              <el-option v-for="item in list" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
            <p>id: {{this.info.id}}</p>
            <p>name: {{this.info.name}}</p>
            <p>state: {{this.info.state}}</p>
            <p>address: {{this.info.address}}</p>
            <span class="info-link" @click="goDetail(info.id)">详细信息</span>
          </div>
          `,
          methods: {
            closeWindow() {
              infoWindow.close();
            },
            // 改变下拉菜单时触发
            selectChange(val) {
              this.getInfo(val);
            },
            // 获取电梯详细信息
            getInfo(id) {
              console.log(id);
              if (id == jsonEleA.id) {
                this.info.id = jsonEleA.id;
                this.info.name = jsonEleA.name;
                this.info.state = jsonEleA.state;
                this.info.address = jsonEleA.address;
              } else {
                this.info.id = jsonEleB.id;
                this.info.name = jsonEleB.name;
                this.info.state = jsonEleB.state;
                this.info.address = jsonEleB.address;
              }
            },
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
    }
  },
  components: {}
};
</script>




<style lang="stylus">
#test {
  color: #000 !important;
  padding: 20px;

  .chart-container {
    // overflow: hidden;
  }

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
}
</style>
