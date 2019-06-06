<template>
    <!-- 地图 -->
    <div id="MapContainer" class="panel">
        <!-- <div id="locTip" style="position:fixed;top:85px;z-index:200">点击地图进行区域定位
        </div> -->
        <div v-if="isEnlargeMap" class="circleType">
            <i class="circle"></i><span>正常运行</span>
            <i class="circle" style="background:#6B50D0"></i><span>例行维保</span>
            <i class="circle" style="background:#FEC101"></i><span>故障检修</span>
            <i class="circle" style="background:#F56F6F"></i><span>事故救援</span>
        </div>
        <div class="MapTitle">
            <span v-if="!isEnlargeMap" class="MapTitle_title">本市地图</span>
            
            <span id="isAllMap" v-if="!isEnlargeMap" class="MapTitle_btn">查看全市电梯分布</span>
            <div class="search1">
                <input class="search_input" placeholder="电梯名称/注册代码" />
                <span class="search_btn"></span>
            </div>
            <span v-if="isEnlargeMap" class="MapTitle_title"><span @click="drawMap()"> &lt; 返回全市 / </span>  深圳市{{ region }}</span>
            
        </div>
        <div class="row" style="height: 100%;">
            <div class="col-xs-9" style="padding-left:2px;padding-right:2px;height: 100%;">
                <div id="container" tabindex="0" style="height: 100%;"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import api from 'api'
    import echarts from 'echarts'
    import gcoord from 'gcoord'
    import AMapUI from 'AMapUI'
    var _this = this
    // var sel = '<router-link to="/index">Home</router-link>'
    var sel = '<a >查看详情</a>'
    
    // 生成html 和 时间
    var MyComponent = Vue.extend({
        template: `<div class="infoWindows" :class="infoWindowsClass">
            <span class="topImg" ></span>
            <div class="infoWindows_title"><span>电梯概况</span><i>{{typeInfo}}</i></div>
            <div class="infoWindows_info"> 设备名称</div>
            <div class="infoWindows_data">{{ name }}</div>
            <div class="infoWindows_info"> 设备型号：</div>
            <div class="infoWindows_data">{{ name }}</div>
            <div class="infoWindows_info"> 使用单位：</div>
            <div class="infoWindows_data">{{ name }}</div>
            <div class="infoWindows_info"> 使用地点：</div>
            <div class="infoWindows_data">{{ name }}</div>
            <div class="infoWindows_details"> <a :href='url'>查看详情</a> </div>
            <i class="detailIcon"></i>
            <span class="bottomImg"></span>
        </div>`,
        data() {
            return {
                // dataJson:[],
                location:'000，000',
                name:0,
                title:1,
                type:9,
                selectValue :'12楼A区',
                options : [{
                    value: '12A',
                    label: '12楼A区'
                }, {
                    value: '12B',
                    label: '12楼B区'
                }, {
                    value: '12C',
                    label: '12楼C区'
                }], 
                // topImgClass: 'topImg1',
                // bottomImgClass: 'bottomImg1',
                typeInfo:'',
                infoWindowsClass:'infoWindowsClass1',
                url : '/lift/gov/#/detail'
            }
        },
        // created(){
            // Vue.nextTick(function () {
                
            // })
            // this.$nextTick(() => {
            //     // DOM 更新了
            //     console.log('type' + this.type)
            //     this.url = '/lift/gov/#/detail?id=' + this.type
            // })
        // },
        // beforeCreate:function(){
        //     console.log("组件实例化之前执行的函数");
        // },
        // created:function(){
        //     console.log("组件实例化化完毕，但页面还未显示");
        // },
        // beforeMount:function(){
        //     console.log("组件挂载前，页面仍未展示，但虚拟dom已经配置");
        // },
        // mounted:function(){
        //     console.log('type' + this.type)
        //     console.log("组件挂载后，此方法执行后，页面显示");
        // },
        // beforeUpdate:function(){
        //     console.log('type' + this.type)
        //     console.log("组件更新前，页面仍未更新，但虚拟dom已经配置");
        // },
        // updated:function(){
        //     console.log('type' + this.type)
        //     console.log("组件更新，此方法执行后，页面显示");
        // },

        watch:{
            type(){
                if( this.type === 0) {
                    this.infoWindowsClass = 'infoWindowsClass1'
                    this.typeInfo = '正常运行'
                } else if(this.type === 1) {
                    this.infoWindowsClass = 'infoWindowsClass2'
                    this.typeInfo = '例行维保'
                } else if(this.type === 2) {
                    this.infoWindowsClass = 'infoWindowsClass3'
                    this.typeInfo = '故障检修'
                } else {
                    this.infoWindowsClass = 'infoWindowsClass4'
                    this.typeInfo = '事故救援'
                }
                // console.log('1111111===' + JSON.stringify(this.topImgClass))
                // console.log('type' + this.type)
                this.url = '/lift/gov/#/detail?id=' + this.type
            }
        },
        method:{
            aaa() {
                
            }
        }
    });
    var component= new MyComponent().$mount();
    export default {
        name: 'HelloWorld',
        data () {
            return {
                isEnlargeMap:false,
                region:'',
                placeholderTitle:'请输入电梯名称/注册代码'
            }
        },
        // 传值到父组件
        watch:{
            value (newVal, oldVal) {
                this.region = newVal
                this.$emit('page-update')
            },
            region (val) {
                this.$emit('input', val)
            },
        },
        mounted(){
            this.region = this.value    // 在生命周期中，把获取的value值获取给region
            let _this = this
            // api.corp.elevator(1,5).then(res => {
            //     console.log(JSON.stringify(res))
            // })

            // 地图缩放适配
            let zoom_x = 10
            let windowWeight = document.body.offsetWidth
            if (windowWeight < 1800) {
                zoom_x = 9
            }

            this.drawMap(zoom_x)

            window.addEventListener("resize", function() {
                let windowWeight = document.body.offsetWidth
                if (windowWeight < 1800) {
                    zoom_x = 9
                } else {
                    zoom_x = 10
                }

                _this.drawMap(zoom_x)

            });
            
        },


        methods: {
            // goDetail() {
            //     console.log(11)
            // },
            aaa () {
                alert(1)
                router.push({ name: 'index', params: { id: 123 }})
            },
            toAmap(location){
                return gcoord.transform(
                    location,    // 经纬度坐标
                    gcoord.WGS84,
                    gcoord.AMap
                );
                // return result
            },
            toWgs(location){
                return gcoord.transform(
                    location,    // 经纬度坐标
                    gcoord.AMap,
                    gcoord.WGS84
                );
                // return result
            },
            drawMap(zoom_x){
                var _this = this
                // _this.isAllMap = false
                _this.region = ''
                _this.isEnlargeMap = false
                //创建地图
                var map = new AMap.Map('container', {
                    cursor: 'default',
                    // zoom: 10,
                    zoom: zoom_x,
                    center: [114.191998,22.641178],
                    mapStyle: "amap://styles/1bfbe59619e6c0b9f07090f826d40521"
                });
                // 搜索地图
                // var autoOptions = {
                //     input: "tipinput"
                // };
                // var auto = new AMap.Autocomplete(autoOptions);
                // var placeSearch = new AMap.PlaceSearch({
                //     map: map
                // });  //构造地点查询类1
                // AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
                // function select(e) {
                //     placeSearch.setCity(e.poi.adcode);
                //     placeSearch.search(e.poi.name);  //关键字查询查询
                // }
                // 搜索地图 end-//
                // var count = 0, clickListener;
                // var _onClick = function(e) {
                //     map.remove(overlays)
                //     new AMap.Marker({
                //         position: e.lnglat,
                //         map: map
                //     })
                //     map.emit('count', {count: count += 1});//触发自定义事件
                // }
                // // map.on("count", _onCount); 
                // clickListener = AMap.event.addListener(map, "click", _onClick);
                // // 画定位图标
                // var mouseTool = new AMap.MouseTool(map);
                // //监听draw事件可获取画好的覆盖物
                // var overlays = [];
                // mouseTool.on('draw',function(e) {
                //     // 清除所有标点
                //     // 设置缩放级别和中心点
                    
                //     map.remove(overlays)
                //     overlays = [];
                //     overlays.push(e.obj);
                // })
                // function draw(type){
                //     switch(type){
                //         case 'marker':{
                //             mouseTool.marker({
                //             //同Marker的Option设置
                //         });
                //     break;
                // }}}
                // draw('marker')
                AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], function(DistrictExplorer, $){
                    initPage(DistrictExplorer);
                });
                AMapUI.loadUI(['overlay/SvgMarker'], function(SvgMarker) {
                if (!SvgMarker.supportSvg) {
                    //当前环境并不支持SVG，此时SvgMarker会回退到父类，即SimpleMarker
                    alert('当前环境不支持SVG');
                }
                
            
                
               
                // map.on("zoomchange", function() {
                   
                // })

                
                });


                //**************控制地图行政区划显示开始***********************
                function getAllRings(feature) {


                    var coords = feature.geometry.coordinates,
                        rings = [];


                    for (var i = 0, len = coords.length; i < len; i++) {
                        rings.push(coords[i][0]);
                    }


                    return rings;
                }
                function getLongestRing(feature) {
                    var rings = getAllRings(feature);
                    rings.sort(function(a, b) {
                        return b.length - a.length;
                    });
                    return rings[0];
                }
                //just some colors
                var colors = [
                    "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(13,186,127,0.80)"
                ];
                var locationMaker = [];
                function initPage(DistrictExplorer) {
                //创建一个实例
                var districtExplorer = new DistrictExplorer({
                    map: map
                });
                /////////////////////////////////

                function listenMouseEvents() {

                    var isLocating = false;
                    map.on('mousemove', function(e) {

                        if (isLocating) {
                            return;
                        }

                        isLocating = true;
                        
                        // $('#locTip').html('定位中......');
    
                        districtExplorer.locatePosition(e.lnglat, function(err, features) {

                            isLocating = false;
                           
                            // console.log(rrr)
                            // console.log(_this.region)
                            // 当鼠标在当前区域移动时 不绘制绿色轮廓
                            if (err) {
                                // console.error(err);
                                return;
                            }
                            
                            renderFeatures(features);
                          
                            // 地理位置信息
                            // refreshLocTip(e.lnglat, features);
                            

                            // locMarker.setPosition(e.lnglat);
                            // locMarker.setMap(map);
                        }, {
                            levelLimit: 4
                        });

                    });
                    
                    var markers = []; //markers数组，用于接多个图标点
                            
                    var infoWindow = new AMap.InfoWindow({
                        isCustom: true,  //使用自定义窗体
                        content: component.$el,
                        offset: new AMap.Pixel(162, 278),
                        closeWhenClickMap:true, //点击地图关闭
                        autoMove: false // 自动适配地图
                    });
                    // 地图缩小到zoom<12 时 去掉所有图标点
                    // map.on("zoomchange", function() {
                    //     if(map.getZoom() < 11) {
                    //         map.remove(markers);
                    //         infoWindow.close()
                    //     }
                    // })
                     //创建地图图标方法
                    function funcreateMakers() {
                        //创建地图图标方法
                        // 添加makers
                        map.remove(markers);
                        infoWindow.close()
                        // map.clearMap();
                        // 请求数据接口
                        var lnglats = [
                        {
                            id: 1,
                            position:[114.053267,22.520914],
                            name: '新天世纪商务中心',
                            type: 1
                        }, {
                            id: 2,
                            position:[114.052867,22.520914],
                            name: '新天世纪商务中心',
                            type: 2
                        }, {
                            id: 2,
                            position:[114.053167,22.521084],
                            name: '新天世纪商务中心',
                            type: 3
                        }, {
                            id: 2,
                            position:[114.052967,22.521084],
                            name: '新天世纪商务中心',
                            type: 0
                        }, {
                            id: 2,
                            position:[114.053167,22.520744],
                            name: '新天世纪商务中心',
                            type: 3
                        }, {
                            id: 2,
                            position:[114.052967,22.520744],
                            name: '新天世纪商务中心',
                            type: 1
                        }]
                        for (var i = 0, marker; i < lnglats.length; i++) { // 故障检修
                            if(lnglats[i].type === 2){
                                marker = new AMap.Marker({
                                    map: map,
                                    position: lnglats[i].position,
                                //  position: new AMap.LngLat(116.38,39.92),
                                    // 将一张图片的地址设置为 icon
                                    // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
                                    icon: require('../assets/images/hs/guzhang.png'),
                                    size: new AMap.Size(25, 34),
                                    offset: new AMap.Pixel(-20,-38),
                                });
                                
                            } else if(lnglats[i].type === 3){ // 事故救援
                                marker = new AMap.Marker({
                                    map: map,
                                    position: lnglats[i].position,
                                //  position: new AMap.LngLat(116.38,39.92),
                                    // 将一张图片的地址设置为 icon
                                    // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
                                    icon: require('../assets/images/hs/shigu.png'),
                                    size: new AMap.Size(25, 34),
                                    offset: new AMap.Pixel(-20,-38),
                                });
                                
                            } else if(lnglats[i].type === 0){ // 正常运行
                                // marker = new AMap.CircleMarker({
                                //     center:lnglats[i].position,
                                //     radius:7,//3D视图下，CircleMarker半径不要超过64px
                                //     strokeColor:'#0DBA7F',
                                //     strokeWeight:3,
                                //     strokeOpacity:0.8,
                                //     fillColor:'#0BDD95',
                                //     fillOpacity:1,
                                //     zIndex:10,
                                //     // bubble:true,
                                //     cursor:'pointer',
                                //     clickable: true,
                                // })
                                 marker = new AMap.Marker({
                                    map: map,
                                    position: lnglats[i].position,
                                //  position: new AMap.LngLat(116.38,39.92),
                                    // 将一张图片的地址设置为 icon
                                    // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
                                    icon: require('../assets/images/hs/greenDot.png'),
                                    size: new AMap.Size(25, 34),
                                    offset: new AMap.Pixel(-20,-38),
                                });
                            } else if(lnglats[i].type === 1){ // 例行维保
                                // marker = new AMap.CircleMarker({
                                //     center:lnglats[i].position,
                                //     radius:7,//3D视图下，CircleMarker半径不要超过64px
                                //     strokeColor:'#6B50D0',
                                //     strokeWeight:3,
                                //     strokeOpacity:0.8,
                                //     fillColor:'#947AF6',
                                //     fillOpacity:1,
                                //     zIndex:10,
                                //     bubble:true,
                                //     cursor:'pointer',
                                //     clickable: true,
                                // })
                                 marker = new AMap.Marker({
                                    map: map,
                                    position: lnglats[i].position,
                                //  position: new AMap.LngLat(116.38,39.92),
                                    // 将一张图片的地址设置为 icon
                                    // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
                                    icon: require('../assets/images/hs/purpleDot.png'),
                                    size: new AMap.Size(25, 34),
                                    offset: new AMap.Pixel(-20,-38),
                                });
                            }
                            // 赋值，传值
                            marker.name = lnglats[i].name
                            marker.type = lnglats[i].type
                            // console.log('JSON====' + JSON.stringify(lnglats[i]))
                            // marker.options = lnglats[i].eleOptions
                            // console.log(lnglats[i].eleOptions)
                            // infoWindow.setContent(this.createInfoWindow(title, content.join("<br/>")));

                            marker.on('click', markerClick);
                            // marker.emit('click', {target: marker}); // 默认打开信息窗体
                            map.add(marker);
                            markers.push(marker);
                            
                        }
                        function markerClick(e) {
                            infoWindow.close()
                            component.$data.type = e.target.type
                            component.$data.name = e.target.name
                            // component.$data.options = e.target.options
                            // component.$data.selectValue = e.target.options[0].label
                            if(e.target.getPosition){
                                infoWindow.open(map, e.target.getPosition());
                            } else {
                                // console.log(e.target.getCenter())
                                infoWindow.open(map, e.target.getCenter());
                                
                            }
                        }
                    }
                    // 查看全市电梯分布按钮，显示全市分布点
                    var $node = $('#isAllMap');
                    $node.on('click', function(e) {
                        funcreateMakers()
                    })
                    map.on('click', function(e) {

                            districtExplorer.locatePosition(e.lnglat, function(err, features) {
                                var i, len = features.length
                                // 只处理深圳市点击放大事件等
                                if( features[len-2].properties.adcode === 440300){
                                        isLocating = false;

                                        if (err) {
                                            // console.error(err);
                                            return;
                                        }
                                       
                                        // 当zoom小于11 点击地图放大 并添加图标点
                                        // if(map.getZoom() < 15) {
                                            if(!(_this.region === features[features.length-1].properties.name) || map.getZoom() < 14){  // 鼠标点击处为地图中心 放大 ,不是点击当前已选择区域时才放大
                                                map.setZoomAndCenter(14, e.lnglat); 
                                            }
                                            
                                            // map.setZoomAndCenter(14, features[len-1].properties.centroid); // 每个区域中心处为地图中心

                                            // 放大后添加图标点
                                            // if ( map.getZoom() > 10 ) {
                                                _this.isEnlargeMap = true
                                                _this.region = features[features.length-1].properties.name
                                                funcreateMakers()
                                            // }
                                            // else {
                                            //     map.remove(markers);
                                            //     infoWindow.close()
                                            // }
                                        // }
                                        
                                        // console.log('aaaaaaaa==' + JSON.stringify(features[features.length-1].properties))

                                        // locMarker.setPosition(e.lnglat);
                                        // locMarker.setMap(map);
                                }
                            }, {
                                levelLimit: 4
                            });
                    });
                    
                }

                listenMouseEvents();
                // 绘制深圳市级区域轮廓
                function renderFeatures(features) {

                    //清除已有的绘制内容
                    districtExplorer.clearFeaturePolygons();
                    map.remove(locationMaker)

                    // 当鼠标移动到当前所选区域时，不绘制绿色区域
                    if (!features.length || (_this.region === features[features.length-1].properties.name)) {
                        // renderCountry(false);
                        return;
                    }

                    var len = features.length
                    
                    // if( features[len-2].properties.adcode === 440300 && map.getZoom() < 11){
                    if( features[len-2].properties.adcode === 440300) { // 只在深圳市绘制图形
    
                        for (var i = 0, len; i < len; i++) {
                            // 添加南山区等各个区标识
                            if(map.getZoom() < 17) {
                                var zoomStyleMapping1 = {
                                    1:0,
                                    2:0,
                                    3:0,
                                    4:0,
                                    5:0,
                                    6:0,
                                    7:0,
                                    8:0,
                                    9:0,
                                    10:0,
                                    11:1,
                                    12:1,
                                    13:1,
                                    14:1,
                                    15:1,
                                    16:2,
                                    17:2,
                                    18:2,
                                    19:2,
                                    20:2,
                                }
                                // console.log(JSON.stringify(features[features.length-1].properties))
                                var regionName = features[features.length-1].properties.name
                                // console.log('regionName==' + regionName)
                                var startMarker = new AMap.ElasticMarker({
                                    position:features[features.length-1].properties.centroid,
                                    // zooms:[8,12],// 在哪些层级中显示
                                    offset:[-30,-120],
                                    zoomStyleMapping:zoomStyleMapping1,
                                    map: map,
                                    styles:[{
                                        icon:{
                                            img:require('../assets/images/hs/locationTip.png'),
                                            size:[25,118],//可见区域的大小
                                            ancher:[0,100],//锚点
                                            fitZoom:11,//最合适的级别
                                            scaleFactor:2,//地图放大一级的缩放比例系数
                                            maxScale:1.4,//最大放大比例
                                            minScale:0.8,//最小放大比例
                                            // imageOffset:[0,-10],
                                        },
                                        label: {
                                            content:regionName,//文本内容
                                            position:'BM',//文本位置相对于图标的基准点，
                                            //BL、BM、BR、ML、MR、TL、TM、TR分别代表左下角、底部中央、右下角、
                                            //左侧中央、右侧中央、左上角、顶部中央、右上角。 
                                            //缺省时代表相对图标的锚点位置
                                            offset:[-30,-120],//相对position的偏移量
                                            minZoom:5,//label的最小显示级别
                                            maxScale:1.4,//最大放大比例
                                            minScale:0.8,//最小放大比例
                                        }
                                    },{
                                        icon:{
                                            img:require('../assets/images/hs/locationTip.png'),
                                            size:[25,118],//可见区域的大小
                                            ancher:[0,100],//锚点
                                            fitZoom:13,//最合适的级别
                                            scaleFactor:2,//地图放大一级的缩放比例系数
                                            maxScale:1.2,//最大放大比例
                                            minScale:1.2,//最小放大比例
                                            // imageOffset:[0,-10],
                                        },
                                        label:{
                                            content:regionName,//文本内容
                                            position:'BM',//文本位置相对于图标的基准点，
                                            //BL、BM、BR、ML、MR、TL、TM、TR分别代表左下角、底部中央、右下角、
                                            //左侧中央、右侧中央、左上角、顶部中央、右上角。 
                                            //缺省时代表相对图标的锚点位置
                                            offset:[-30,-170],//相对position的偏移量
                                            minZoom:5//label的最小显示级别
                                        }
                                    },{
                                        icon:{
                                            img:require('../assets/images/hs/locationTip.png'),
                                            size:[25,118],//可见区域的大小
                                            ancher:[0,100],//锚点
                                            fitZoom:14,//最合适的级别
                                            scaleFactor:2,//地图放大一级的缩放比例系数
                                            maxScale:1.4,//最大放大比例
                                            minScale:1.2,//最小放大比例
                                            // imageOffset:[0,-10],
                                        },
                                        label:{
                                            content:regionName,//文本内容
                                            position:'BM',//文本位置相对于图标的基准点，
                                            //BL、BM、BR、ML、MR、TL、TM、TR分别代表左下角、底部中央、右下角、
                                            //左侧中央、右侧中央、左上角、顶部中央、右上角。 
                                            //缺省时代表相对图标的锚点位置
                                            offset:[-30,-190],//相对position的偏移量
                                            minZoom:5//label的最小显示级别
                                        }
                                    }],
                                
                                })
                            
                            
                                locationMaker.push(startMarker)
                                map.add(startMarker)
                            }
                            
                            // 添加南山区等各个区标识 end--

                            var strokeColor = colors[i % colors.length];
                            var fillColor = colors[i % colors.length];

                            districtExplorer.renderFeature(features[i], {
                                cursor: 'default',
                                bubble: true,
                                strokeColor: strokeColor, //线颜色
                                strokeOpacity: 1, //线透明度
                                strokeWeight: 1, //线宽
                                fillColor: fillColor, //填充色
                                fillOpacity: 0.2, //填充透明度
                            });
                        }
                    }
                    
                }

                // //更新位置头部的提示内容
                function refreshLocTip(lngLat, features) {

                    var i, len = features.length,
                        $node = $('#locTip');

                    if (!len) {
                        $node.html(lngLat.toString() + '：未知区域');
                        return;
                    }

                    var routes = [];

                    for (i = 0; i < len; i++) {

                        routes.push('<span style="color:' + colors[i] + '">' + features[i].properties.name + '</span>');
                    }
                    // console.log('aaaaaaaa==' + JSON.stringify(features[len-1].properties))
                    $node.html(lngLat.toString() + '：' + routes.join(' &gt; '));
                }

                // function renderCountry(setBounds) {

                //     districtExplorer.loadCountryNode(function(err, countryNode) {

                //         if (setBounds) {
                //             map.setBounds(countryNode.getBounds());
                //         }

                //         districtExplorer.renderParentFeature(countryNode, {
                //             cursor: 'default',
                //             bubble: true,
                //             strokeColor: 'red', //线颜色
                //             strokeOpacity: 0, //线透明度
                //             strokeWeight: 2, //线宽
                //             fillColor: colors[0], //填充色
                //             fillOpacity: 0.2, //填充透明度
                //         });
                //     });
                // }

                // renderCountry(true);    

                //////////////////////////////////


                var countryCode = 100000, //全国
                    provCodes = [
                        //110000, //北京
                        //510000 //四川
                        // 440300
                    ],
                    cityCodes = [
                        // 320800,
                        440300 // 深圳
                    ];
                districtExplorer.loadMultiAreaNodes(
                    //只需加载全国和市，全国的节点包含省级
                    [countryCode].concat(cityCodes),
                    function(error, areaNodes) {
                        var countryNode = areaNodes[0],
                            cityNodes = areaNodes.slice(1);
                        var path = [];
                        //首先放置背景区域，这里是大陆的边界11111111
                        // path.push(getLongestRing(countryNode.getParentFeature()));
                        for (var i = 0, len = provCodes.length; i < len; i++) {
                            //逐个放置需要镂空的省级区域
                            path.push.apply(path, getAllRings(countryNode.getSubFeatureByAdcode(provCodes[i])));
                        }

                        for (var i = 0, len = cityNodes.length; i < len; i++) {
                            //逐个放置需要镂空的市级区域
                            path.push.apply(path, getAllRings(cityNodes[i].getParentFeature()));
                        }

                        //绘制带环多边形
                        //http://lbs.amap.com/api/javascript-api/reference/overlay#Polygon
                        var polygon = new AMap.Polygon({
                            bubble: true,
                            lineJoin: 'round',
                            strokeColor: '#66667F', //线颜色
                            strokeOpacity: 1, //线透明度
                            strokeWeight: 1, //线宽
                            fillColor: '#fff', //填充色
                            fillOpacity: 0.08, //填充透明度
                            map: map,
                            path: path
                        });
                    });
                }
                //**************控制地图行政区划显示结束***********************
            },
        }
    };
</script>

<style lang="stylus">
// 配置
@import '../assets/stylus/base'
div
    outline:none
#MapContainer {
    width: 642px;
    margin: 0px;
    absolute left 0 top 0 bottom 0
    padding-top 80px
    box-sizing: border-box;
    
    // background #1B1B26

    .MapTitle{
        size 100% 62px
        line-height 62px
        background: rgba(29,29,37,0.90);
        padding 0 0 0 22px
        box-sizing: border-box;
        position: absolute;
        z-index: 999;
        .MapTitle_title{
            font-size: 14px;
            color: #fff;
            letter-spacing: 0.03px;
            span {
                color: #66667F;
                margin-right: 5px;
                cursor pointer
            }
        }
        .MapTitle_btn{
            // size 117px 24px
            line-height 21px
            display inline-block
            float right
            margin 18px 22px 0 0
            background: #0DBA7F;
            border-radius: 16.5px;
            padding 4px 10px 3px 10px
            font-size 12px
            cursor pointer
        }
    }
}
.infoWindows
    background: rgba(36,36,47,0.90);
    border: 1px solid #fff;
    padding 20px 17px 0 17px
    width 207px
    box-sizing border-box
    .topImg
        size 263px 45px
        display inline-block
        absolute top -35px left -36px
    .bottomImg
        size 263px 45px
        display inline-block
        absolute bottom -18px left -20px
    .infoWindows_title
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0.03px;
        margin-bottom 10px
        i 
            border: 1px solid #F56F6F;
            border-radius: 4px;
            font-size: 10px;
            color: #F56F6F;
            letter-spacing: 0.02px;
            margin-left 20px
            padding 3px 7px
    .infoWindows_info
        font-size: 10px;
        color: #66667F;
        letter-spacing: 0.02px;
    .infoWindows_data
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0.03px;
        margin-bottom 6px
        word-wrap : break-word 
    .infoWindows_details
        
        width 100%
        text-align right
        margin-top 13px
        padding: 8px 22px;
        box-sizing: border-box;
        border-top 1px solid #fff
        
        a
            position relative
            z-index 1111
            display inline-block
            color white
        a:hover
            text-decoration none
    .detailIcon
        background url("../assets/images/hs/detailsIcon.png") no-repeat
        size 20px
        display inline-block
        absolute bottom 7px right 12px
.infoWindowsClass1
    border: 1px solid #0BDD95;
    .topImg
        background url("../assets/images/hs/greenTop.png") no-repeat
    .bottomImg
        background url("../assets/images/hs/greenBottom.png") no-repeat
    .infoWindows_title
        i 
            border: 1px solid #0BDD95;
            color: #0BDD95;
        
.infoWindowsClass2
    border: 1px solid #6B50D0;
    .topImg
        background url("../assets/images/hs/purpleTop.png") no-repeat
    .bottomImg
        background url("../assets/images/hs/purpleBottom.png") no-repeat
    .infoWindows_title
        i 
            border: 1px solid #6B50D0;
            color: #6B50D0;
.infoWindowsClass3
    border: 1px solid #EAB50F;
    .topImg
        background url("../assets/images/hs/yellowTop.png") no-repeat
    .bottomImg
        background url("../assets/images/hs/yellowBottom.png") no-repeat
    .infoWindows_title
        i 
            border: 1px solid #EAB50F;
            color: #EAB50F;
.infoWindowsClass4
    border: 1px solid #F56F6F;
    .topImg
        background url("../assets/images/hs/redTop.png") no-repeat
    .bottomImg
        background url("../assets/images/hs/redBottom.png") no-repeat
    .infoWindows_title
        i 
            border: 1px solid #F56F6F;
            color: #F56F6F;
.amap-marker-label {
    width: 60px;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    height: 18px;
    color: green;
    font-size: 14px;
    color: #0DBA7F;
    text-align: center;
    background: rgba(36,36,47,0.80);
    border: 1px solid #0DBA7F;
    border-radius: 4px;
}
.circleType
    absolute bottom 10px right 10px
    z-index: 99;
    .circle
        size 10px
        display inline-block
        border-radius 50%
        background: #0DBA7F 
        margin-right 5px
        box-shadow: 0 0 4px #191C25;
    span 
        margin-right 10px
        text-shadow: 0 0 4px #191C25;
        -webkit-text-stroke: 0.1px #191c25
        text-stroke: 0.1px #191c25
.search1
    float right
    font-size: 0;
    margin 18px 16px 0 0
    white-space: nowrap;
    height: 28px;
    line-height: 28px;
    .search_input
        border: 1px solid rgba(56,61,80,0.60);
        border-radius: 16.5px 0 0 16.5px;
        size 152px 28px
        line-height: 28px
        background: transparent;
        color: #fff;
        font-size 14px
        display: inline-block
        padding 0 16px
        box-sizing: border-box;
        vertical-align: top
    .search_btn
        background: url('../assets/images/hs/search.png') no-repeat #0DBA7F center;
        border-radius: 0 16.5px 16.5px 0;
        size 32px 28px
        cursor pointer
        display: inline-block

</style>