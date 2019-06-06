<template>
    <div class="main-wrap">
        <!-- 地图 -->
        <chinaMap v-model="region"></chinaMap>
        <!-- 搜索地图 -->
         <!-- <table>
            <tr>
                <td>
                    <label>请输入关键字：</label>
                </td>
            </tr>
            <tr>
                <td>
                    <input id="tipinput"/>
                </td>
            </tr>
        </table> -->
        <div class="right">
           <div class="panel">
                <div class="sum-gradient"></div>
                <el-row class="">
                    <el-col :span="4">
                        <div class=" summary summary1">
                            
                            <div class="summaryItem tab" style="background-image: linear-gradient(90deg, #0DBA7F 0%, rgba(13,186,127,0.40) 100%);">
                                <div class="tabTitle"><span class="info-number" id='time1'>电梯维保统计</span></div>
                                <div class="info-label"><img src="../assets/images/hs/today.png" alt=""/>今天</div>
                                <div class="info-label"><img src="../assets/images/hs/quyu.png" alt=""/>深圳市{{ region }}</div>
                            </div>
                            <div class="summaryItem" style="margin-top:8px;background: #1D1D26;box-shadow: 0 21px 20px -14px rgba(10,23,63,0.15);">
                                <div><span class="info-number" id='time1' style="color: #DF4B4B;">30%</span></div>
                                <div class="info-label">维保超时率</div>
                                <span class="aside-border-line"></span>
                                <el-row>
                                    <el-col :span="12" style="position: relative;">
                                       <div style="position: relative;">
                                          <!-- <div style="position: absolute;right: 10px;top: 8px;background: #18181e;width: 1px;height: 38px;"></div> -->

                                           <span class="info-number fontSize18" style="color: #0DBA7F;" id='time1'>11854</span>
                                           </div>
                                        <div class="info-label fontSize12">已维保数</div>
                                    </el-col>
                                    <el-col :span="12" >
                                       <div><span class="info-number fontSize18" id='time1'>17300</span></div>
                                        <div class="info-label fontSize12">总需维保数</div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="20" >
                        <div class=" charts">
                            <div class="chart_Total_title chart_Total_title_x">
                                <span class="chart_title">维保时效统计<span class="unit">/次</span></span>
                                <div class="chart-x-title">
                                    <span class="chart_title">91582<span class="unit">维保电梯数</span></span>
                                    <span class="chart_title">2356<span class="unit">维保及时数</span></span>
                                    <span class="chart_title">30%<span class="unit">维保超时率</span></span>
                                </div>
                                <!-- <span class="chart_title">91582<span class="unit">维保电梯数</span></span>
                                <span class="chart_title">2356<span class="unit">维保及时数</span></span>
                                <span class="chart_title">2356<span class="unit">维保及时率</span></span> -->
                                <span class="chart_title_right">
                                    <el-date-picker
                                        v-model="value1"
                                        type="month"
                                        placeholder="选择月">
                                    </el-date-picker>
                                    <el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select>
                                    <button class="rank btn" disabled>公司排名</button>
                                </span>
                            </div>
                            <div id="chartbar1"></div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="">
                    <el-col :span="24">
                        <div class="spiltBar"></div>
                    </el-col>
                </el-row>
                <el-row class="">
                    <el-col :span="4">
                        <div class=" summary summary2">
                            <div style="border-bottom:2px solid #131319">
                                <span  class="rect" ></span>
                                <span class="iconImg iconImg1"></span>
                                <div class="summaryItem" >
                                    <div><span class="info-number" id='time1'>15321</span></div>
                                    <div class="info-label">维保人员数</div>
                                    <span class="border-line"></span>
                                    <div class="chart_title">16<span class="unit">梯/天</span></div>
                                </div>
                                <div style="clear:both"></div>
                            </div>
                            <div>
                                <span class="rect"></span>
                                <span class="iconImg iconImg2"></span>
                                <div class="summaryItem" >
                                    <div><span class="info-number" id='time1'>1854</span></div>
                                    <div class="info-label">维保企业数</div>
                                    <span class="border-line"></span>
                                    <div class="chart_title">206<span class="unit">梯/天</span></div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="20" >
                        <div class="charts">
                            <div class="chart_Total_title chart_Total_title_x">
                                <span class="chart_title">人均维保梯数统计</span>
                                <div class="chart-x-title">
                                    <span class="chart_title">91582<span class="unit">维保电梯数</span></span>
                                    <span class="chart_title">20梯/月<span class="unit">维保人员</span></span>
                                    <span class="chart_title">60梯/月<span class="unit">维保人员</span></span>
                                </div>
                                <!-- <span class="chart_title">91582<span class="unit">维保电梯数</span></span>
                                <span class="chart_title">20梯/月<span class="unit">维保人员</span></span>
                                <span class="chart_title">60梯/月<span class="unit">维保人员</span></span> -->
                                <span class="chart_title_right">
                                    <el-date-picker
                                        v-model="value1"
                                        type="month"
                                        placeholder="选择月">
                                    </el-date-picker>
                                    <el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select>
                                    <button class="rank btn" disabled>公司排名</button>
                                </span>
                            </div>
                            <el-row class="" >
                                <el-col :span="16" style="border-right: rgba(48,52,72,0.80) 1px solid;">
                                    <div id="chartbar2"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="chart_Total_title" style="padding-left:20px">
                                        <span class="chart_title fontSize14"><span style="display:inline-block;width:4px;height:12px;background:#fff9f9;border-radius: 2px;margin-right:8px"></span>维保人员月均维保梯数</span>
                                    </div>
                                    <div id="chartpie"></div>
                                </el-col>
                            </el-row>
                            
                        </div>
                    </el-col>
                </el-row>
                <el-row class="">
                    <el-col :span="24">
                        <div class="spiltBar"></div>
                    </el-col>
                </el-row>
                 <el-row class="">
                    <el-col :span="4">
                        <div class=" summary summary2">
                            <div style="border-bottom:2px solid #131319">
                                <span  class="rect" ></span>
                                <span class="iconImg iconImg3"></span>
                                <div class="summaryItem" style="padding: 51px 0 20px 49px;">
                                    <div><span class="info-number" id='time1'>3.5</span><span class="unit">h</span></div>
                                    <div class="info-label">维保平均时长</div>
                                </div>
                                <div style="clear:both"></div>
                            </div>
                            <div>
                                <span class="rect" style="border-bottom-left-radius: 10px;"></span>
                                <span class="iconImg iconImg4"></span>
                                <div class="summaryItem" style="padding: 51px 0 20px 49px;">
                                    <div><span class="info-number" id='time1'>10</span><span class="unit">%</span></div>
                                    <div class="info-label">低于40分钟</div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="20">
                        <div class="charts">
                            <div class="chart_Total_title chart_Total_title_x">
                                <span class="chart_title">维保时长<span class="unit">/ 分钟</span></span>
                                <div class="chart-x-title">
                                    <span class="chart_title">3.5h<span class="unit">平均时长</span></span>
                                    <span class="chart_title">20%<span class="unit">低于40分钟</span></span>
                                    <span class="chart_title">30%<span class="unit">低于50分钟</span></span>
                                </div>
                                <!-- <span class="chart_title">3.5h<span class="unit">平均时长</span></span>
                                <span class="chart_title">20%<span class="unit">低于40分钟</span></span>
                                <span class="chart_title">20%<span class="unit">低于50分钟</span></span> -->
                                <span class="chart_title_right">
                                    <el-date-picker
                                        v-model="value1"
                                        type="month"
                                        placeholder="选择月">
                                    </el-date-picker>
                                    <el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select>
                                    <button class="rank btn" disabled>公司排名</button>
                                </span>
                            </div>
                            <el-row class="" >
                                <el-col :span="16" style="border-right: rgba(48,52,72,0.80) 1px solid;">
                                    <div id="chartbar4"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div id="chartpie3"></div>
                                </el-col>
                            </el-row>
                            
                        </div>
                    </el-col>
                </el-row>
           </div>
           <div class="panel">
                <div class="sum-gradient"></div>
                <el-row class="">
                    <el-col :span="4">
                        <div class="summary summary3">
                            <div class="summaryItem tab" style="background-image: linear-gradient(90deg, #0DBA7F 0%, rgba(13,186,127,0.40) 100%);">
                                <div class="tabTitle"><span class="info-number" id='time1'>电梯运行里程</span></div>
                                <div class="info-label"><img src="../assets/images/hs/today.png" alt=""/>今天</div>
                                <div class="info-label"><img src="../assets/images/hs/quyu.png" alt=""/>深圳市{{ region }}</div>
                            </div>
                            <div class="summaryItem summaryItemList">
                                <div class=""><span class="info-number" id='time1' style="color: #0DBA7F;">1687</span><span class="unit" style="color: rgb(13, 186, 127);"> km</span></div>
                                <div class="info-label">2019年累计运行里程</div>
                                <div><span class="info-number fontSize18" id='time1'>300</span><span class="unit"> km/梯</span></div>
                                <div class="info-label">当月累计里程平均值</div>
                                <div><span class="info-number fontSize18" id='time1'>787</span><span class="unit"> km/梯</span></div>
                                <div class="info-label">半年累计里程平均值</div>
                                <div><span class="info-number fontSize18" id='time1'>1600</span><span class="unit"> km/梯</span></div>
                                <div class="info-label">年度累计里程平均值</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="20" >
                        <div class=" charts">
                            <div class="chart_Total_title">
                                <span class="chart_title">电梯运行里程<span class="unit">/ km</span></span>
                                <span class="chart_title_right">
                                    <el-date-picker
                                        v-model="value1"
                                        type="year"
                                        placeholder="选择年">
                                    </el-date-picker>
                                    <el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select>
                                    <button class="rank btn" disabled>电梯品牌维保公司质量排名</button>
                                </span>
                            </div>
                            <el-row class="" style="border-bottom: 1px solid rgba(48,52,72,0.80);">
                                <el-col :span="16" style="border-right: 1px solid rgba(48, 52, 72, 0.8);">
                                    <div id="chartbar3"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div id="chartpie2"></div>
                                </el-col>
                            </el-row>
                            <el-row class="" style="margin-top:20px">
                                <el-col :span="12" >
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14">配件成本<span class="unit">/ 元</span></span>
                                    </div>
                                    <div id="lineChart"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14" style="margin-left:12px;">故障数<span class="unit">/ 次</span></span>
                                    </div>
                                    <div id="lineChart2"></div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
           </div>
            <div class="panel">
                <div class="sum-gradient"></div>
                <el-row class="">
                    <el-col :span="4">
                        <div class="summary summary3">
                            
                            <div class="summaryItem tab" style="background-image: linear-gradient(90deg, rgba(254,56,143,0.40) 0%, #F75F5F 100%);">
                                <div class="tabTitle"><span class="info-number" id='time1'>电梯实时故障预测健康管理</span></div>
                                <div class="info-label"><img src="../assets/images/hs/today.png" alt=""/>今天</div>
                                <div class="info-label"><img src="../assets/images/hs/quyu.png" alt=""/>深圳市{{ region }}</div>
                            </div>
                            <div class="summaryItem summaryItemList" >
                                <div class=""><span class="info-number" id='time1'>3687</span></div>
                                <div class="info-label">总预警数</div>
                                <div style="position:relative">
                                    <div class="proportionBar">
                                        <div class="proportionBar_item" v-bind:style="{height:ratio[0]+'%'}"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[1]+'%' }"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[2]+'%' }"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[3]+'%' }"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[4]+'%' }"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[5]+'%' }"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[6]+'%' }"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[7]+'%' }"></div>
                                    </div>
                                    <canvas id="myCanvas" width="100" height="397" style="position: absolute;"></canvas>
                                    <div class="proportionInfo">
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background: #5A39D5;"></span>
                                            <i class="circle" style="background: #5A39D5;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[0] }}%</span></div>
                                            <div class="info-label">机房环境</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background: #8423E2;"></span>
                                            <i class="circle" style="background: #8423E2;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[1] }}%</span></div>
                                            <div class="info-label">控制柜</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background: #E22340;"></span>
                                            <i class="circle" style="background: #E22340;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[2] }}%</span></div>
                                            <div class="info-label">曳引机</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background: #F56F6F;"></span>
                                            <i class="circle" style="background: #F56F6F;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[3] }}%</span></div>
                                            <div class="info-label">限速器</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background: #FEC101;"></span>
                                            <i class="circle" style="background: #FEC101;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[4] }}%</span></div>
                                            <div class="info-label">制动器</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background: #F9D562;"></span>
                                            <i class="circle" style="background: #F9D562;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[5] }}%</span></div>
                                            <div class="info-label">控制轿厢柜</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background:#CB500F;"></span>
                                            <i class="circle" style="background:#CB500F;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[6] }}%</span></div>
                                            <div class="info-label">安全回路</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background:#FE7D01;"></span>
                                            <i class="circle" style="background:#FE7D01;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[7] }}%</span></div>
                                            <div class="info-label">门锁回路</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="20" >
                        <div class=" charts" style="padding-bottom: 30px;position: relative;">
                            <div class="chart_Total_title chart_Total_title_x">
                                <span class="chart_title">电梯实时故障预测统计<span class="unit">/次</span></span>
                                <div class="chart-x-title">
                                    <span class="chart_title">95325<span class="unit">年度预警数/次</span></span>
                                    <span class="chart_title">31200<span class="unit">月度预警数/次</span></span>
                                </div>
                                <!-- <span class="chart_title">95325<span class="unit">年度预警数</span></span>
                                <span class="chart_title">31200<span class="unit">月度预警数</span></span> -->
                                <span class="chart_title_right">
                                    <el-date-picker
                                        v-model="value1"
                                        type="month"
                                        placeholder="选择月">
                                    </el-date-picker>
                                    <el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select>
                                    <button class="rank btn" disabled>公司排名</button>
                                </span>
                            </div>
                            <el-row class="" style="border-bottom: 1px solid rgba(48,52,72,0.80);">
                                <div id="chartbar5"></div>
                            </el-row>
                            <el-row class="" style="margin-top:20px">
                                <el-col :span="12" >
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14">机房环境预警数<span class="unit">/次</span></span>
                                    </div>
                                    <div id="lineChart3"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14" style="margin-left:12px">控制柜预警数<span class="unit">/次</span></span>
                                    </div>
                                    <div id="lineChart4"></div>
                                </el-col>
                            </el-row>
                            <el-row class="" style="margin-top:20px">
                                <el-col :span="12" >
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14">曳引机预警数<span class="unit">/次</span></span>
                                    </div>
                                    <div id="lineChart5"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14" style="margin-left:12px">限速器预警数<span class="unit">/次</span></span>
                                    </div>
                                    <div id="lineChart6"></div>
                                </el-col>
                            </el-row>
                            <el-row class="" style="margin-top:20px">
                                <el-col :span="12" >
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14">制动器预警数<span class="unit">/次</span></span>
                                    </div>
                                    <div id="lineChart7"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14" style="margin-left:12px">轿厢预警数<span class="unit">/次</span></span>
                                    </div>
                                    <div id="lineChart8"></div>
                                </el-col>
                            </el-row>
                            <el-row class="" style="margin-top:20px">
                                <el-col :span="12" >
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14">安全回路预警数<span class="unit">/次</span></span>
                                    </div>
                                    <div id="lineChart9"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14" style="margin-left:12px">门锁回路预警数<span class="unit">/次</span></span>
                                    </div>
                                    <div id="lineChart10"></div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
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
    import china_map from "./china_map";
    export default {
        name: 'HelloWorld',
        components: {
            'chinaMap': china_map,
        },
        data () {
            return {
                value1:'2019-4',
                selectValue:'',
                options: [{
                    value: '440303',
                    label: '罗湖区'
                }, {
                    value: '440304',
                    label: '福田区'
                }, {
                    value: '440305',
                    label: '南山区'
                }, {
                    value: '440306',
                    label: '宝安区'
                }, {
                    value: '440307',
                    label: '龙岗区'
                }, {
                    value: '440308',
                    label: '盐田区'
                }, {
                    value: '440309',
                    label: '龙华区'
                }, {
                    value: '440310',
                    label: '坪山区'
                }],
                today:'',
                month:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                day:['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日'],
                ratio:[20,15,15,10,10,10,10,10],
                // isAllMap: false,
                region:'',
                Xdata: [this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000)]
            }
        },
        mounted(){
            let _this = this
            // api.corp.getBuilding(1111).then(res => {
            //     console.log(JSON.stringify(res))
            // })
            // 维保及时率统计
            this.drawBarChart()
            // 人均维保梯数统计
            this.drawBarChart2()
            this.drawPieChart()
            // 电梯运行里程
            this.drawBarChart3()
            this.drawPieChart2()
            this.drawLineChart()
            this.drawLineChart2()
            // 维保时长
            this.drawBarChart4()
            this.drawPieChart3()
            // 电梯实时故障预测统计
            this.drawBarChart5()
            this.drawLineChart3()
            this.drawLineChart4()
            this.drawLineChart5()
            this.drawLineChart6()
            this.drawLineChart7()
            this.drawLineChart8()
            this.drawLineChart9()
            this.drawLineChart10()
            // 图表 end---
            this.drawLine()
            this.today = this.getCurrentDate(1)

            // 图表自适应
            let chartbar1 = this.$echarts.getInstanceByDom(document.getElementById("chartbar1"));
            let chartbar2 = this.$echarts.getInstanceByDom(document.getElementById("chartbar2"));
            let chartpie = this.$echarts.getInstanceByDom(document.getElementById("chartpie"));
            let chartbar4 = this.$echarts.getInstanceByDom(document.getElementById("chartbar4"));
            let chartpie3 = this.$echarts.getInstanceByDom(document.getElementById("chartpie3"));
            let chartbar3 = this.$echarts.getInstanceByDom(document.getElementById("chartbar3"));
            let chartpie2 = this.$echarts.getInstanceByDom(document.getElementById("chartpie2"));
            let lineChart = this.$echarts.getInstanceByDom(document.getElementById("lineChart"));
            let lineChart2 = this.$echarts.getInstanceByDom(document.getElementById("lineChart2"));
            let chartbar5 = this.$echarts.getInstanceByDom(document.getElementById("chartbar5"));
            let lineChart3 = this.$echarts.getInstanceByDom(document.getElementById("lineChart3"));
            let lineChart4 = this.$echarts.getInstanceByDom(document.getElementById("lineChart4"));
            let lineChart5 = this.$echarts.getInstanceByDom(document.getElementById("lineChart5"));
            let lineChart6 = this.$echarts.getInstanceByDom(document.getElementById("lineChart6"));
            let lineChart7 = this.$echarts.getInstanceByDom(document.getElementById("lineChart7"));
            let lineChart8 = this.$echarts.getInstanceByDom(document.getElementById("lineChart8"));
            let lineChart9 = this.$echarts.getInstanceByDom(document.getElementById("lineChart9"));
            let lineChart10 = this.$echarts.getInstanceByDom(document.getElementById("lineChart10"));


            window.addEventListener("resize", function() {
                chartbar1.resize();
                chartbar2.resize();
                chartpie.resize();
                chartbar4.resize();
                chartpie3.resize();
                chartbar3.resize();
                chartpie2.resize();
                lineChart.resize();
                lineChart2.resize();
                chartbar5.resize();
                lineChart3.resize();
                lineChart4.resize();
                lineChart5.resize();
                lineChart6.resize();
                lineChart7.resize();
                lineChart8.resize();
                lineChart9.resize();
                lineChart10.resize();
            });
        },
        methods: {
            // goDetail() {
            //     console.log(11)
            // },
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
            drawLine(){
                // 画线
                var c = document.getElementById("myCanvas");//初始化
                var ctx = c.getContext("2d");
                //第一条线
                var y1 = this.ratio[0] / 2 * 3.97
                ctx.strokeStyle = '#5A39D5';
                ctx.beginPath();
                ctx.moveTo(0, y1);//起始位置
                ctx.lineTo(42, 18);//停止位置
                ctx.stroke();
                //第二条线
                var y2 = ( this.ratio[0] + this.ratio[1] / 2 ) * 3.97
                ctx.strokeStyle = '#8423E2';
                ctx.beginPath();
                ctx.moveTo(0, y2);//起始位置
                ctx.lineTo(42, 71);//停止位置
                ctx.stroke();
                //第三条线
                var y3 = ( this.ratio[0] + this.ratio[1] + this.ratio[2] / 2 ) * 3.97
                ctx.strokeStyle = '#E22340';
                ctx.beginPath();
                ctx.moveTo(0, y3);//起始位置
                ctx.lineTo(42, 121);//停止位置
                ctx.stroke();
                //第四条线
                var y4 = ( this.ratio[0] + this.ratio[1] + this.ratio[2] + this.ratio[3] / 2 ) * 3.97
                ctx.strokeStyle = '#F56F6F';
                ctx.beginPath();
                ctx.moveTo(0, y4);//起始位置
                ctx.lineTo(42, 171);//停止位置
                ctx.stroke();
                //第五条线
                var y5 = ( this.ratio[0] + this.ratio[1] + this.ratio[2] + this.ratio[3] + this.ratio[4] / 2 ) * 3.97
                // ctx.strokeStyle = '#CB500F';
                ctx.strokeStyle = '#FEC101';
                ctx.beginPath();
                ctx.moveTo(0, y5);//起始位置
                ctx.lineTo(42, 221);//停止位置
                ctx.stroke();
                //第六条线
                var y6 = ( this.ratio[0] + this.ratio[1] + this.ratio[2] + this.ratio[3] + this.ratio[4] + this.ratio[5] / 2 ) * 3.97
                // ctx.strokeStyle = '#FB7027';
                ctx.strokeStyle = '#F9D562';
                ctx.beginPath();
                ctx.moveTo(0, y6);//起始位置
                ctx.lineTo(42, 273);//停止位置
                ctx.stroke();
                //第七条线
                var y7 = ( this.ratio[0] + this.ratio[1] + this.ratio[2] + this.ratio[3] + this.ratio[4] + this.ratio[5] + this.ratio[6] / 2 ) * 3.97
                // ctx.strokeStyle = '#FEC101';
                ctx.strokeStyle = '#CB500F';
                ctx.beginPath();
                ctx.moveTo(0, y7);//起始位置
                ctx.lineTo(42, 324);//停止位置
                ctx.stroke();
                //第八条线
                var y8 = ( this.ratio[0] + this.ratio[1] + this.ratio[2] + this.ratio[3] + this.ratio[4] + this.ratio[5] + this.ratio[6] + this.ratio[7] / 2 ) * 3.97
                // ctx.strokeStyle = '#F9D562';
                ctx.strokeStyle = '#FE7D01';
                ctx.beginPath();
                ctx.moveTo(0, y8);//起始位置
                ctx.lineTo(42, 374);//停止位置
                ctx.stroke();
            },
            getCurrentDate(format) {
                var now = new Date();
                var year = now.getFullYear(); //得到年份
                var month = now.getMonth();//得到月份
                var date = now.getDate();//得到日期
                var day = now.getDay();//得到周几
                var hour = now.getHours();//得到小时
                var minu = now.getMinutes();//得到分钟
                var sec = now.getSeconds();//得到秒
                month = month + 1;
                if (month < 10) month = "0" + month;
                if (date < 10) date = "0" + date;
                if (hour < 10) hour = "0" + hour;
                if (minu < 10) minu = "0" + minu;
                if (sec < 10) sec = "0" + sec;
                var time = "";
                //精确到天
                if(format==1){
                    time = year + "." + month + "." + date;
                }
                //精确到分
                else if(format==2){
                    time = year + "-" + month + "-" + date+ " " + hour + ":" + minu + ":" + sec;
                }
                return time;
            },
            // JS获取n至m随机整数
            selectfrom (lowValue,highValue){
                var choice=highValue-lowValue+1;
                return Math.floor(Math.random()*choice+lowValue);
                
            },
            getDaysBeforeAfterInStringFormat(nDays) {
                var dd = new Date();
                dd.setDate(dd.getDate()+nDays);//获取AddDayCount天后的日期
                var y = dd.getFullYear();
                var m = dd.getMonth()+1;//获取当前月份的日期
                var d = dd.getDate();

                var yy = y;
                var mm = m<10 ? ('0'+m) : (''+m);
                var dd = d<10 ? ('0'+d) : (''+d);

                return mm + "-" + dd;
            },
            // 柱状图1
            drawBarChart() {
                
                var option = {
                    // color: ['#59B785', '#F3C242', '#4cabce', '#e5323e'],
                    color: ['#DF4B4B', '#0DBA7F', '#4cabce', '#e5323e'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['直接访问','及时','超时','视频广告','搜索引擎','百度','谷歌','必应','其他'],
                        show: true,
                        itemGap: 90,
                        // x : '90',
                        bottom : '0',
                        // right:'-50',
                        // top: '100',
                        orient: 'horizontal',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            fontSize: 12
                        },
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        // formatter: function(name) {
                        //     var index = 0;
                        //     var clientlabels = ['aa','bb','cc'];
                        //     var clientcounts = [9,1,10];
                        //     clientlabels.forEach(function(value,i){
                        //         if(value == name){
                        //             index = i;
                        //         }
                        //     });
                        //     return name + "  " + clientcounts[index];
                        // }
                    },
                    grid: {
                        top:'6%',
                        left: '0%',
                        right: '2%',
                        bottom: '11%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.day,
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            // splitLine:{
                            //     show:true,
                            // },
                            //X轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize : 12,  
                                    // fontFamily : '微软雅黑',  
                                    color:'#66667F'
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            nameTextStyle: {  
                                color: ['red']  
                            },  
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                } 
                            },
                            //分割线
                            splitLine:{
                                show:true,
                                lineStyle: {
                                // 使用深浅的间隔色
                                    color: '#3F3F49',
                                    type:'dashed',
                                    // width:3,
                                }
                            },
                            //Y轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                                }
                            },
                            splitNumber :7
                        }
                    ],
                    series : [
                        {
                            name:'超时',
                            type:'bar',
                            stack: '广告',
                            data: this.Xdata,
                        },
                        {
                            name:'及时',
                            type:'bar',
                            stack: '广告',
                            data: this.Xdata,
                            barWidth:'45%'
                        },
                        
                    ]
                }
                var trendChart = echarts.init(document.getElementById('chartbar1'))
                
                trendChart.setOption(option)
            },
             // 柱状图2
            drawBarChart2() {
                var xData = function() {
                    var data = ['六月','七月','八月','九月','十月'];
                    // for (var i = 0; i < 5; i++) {
                    //     data.push(data[i]);
                    // }
                    // console.log('data:' + data)
                    return data;
                }();
                var data = [this.selectfrom(13, 30),this.selectfrom(13, 30), this.selectfrom(18, 40), this.selectfrom(30, 70), this.selectfrom(15, 40)]
                var option = {
                    color: ['#738BD6', '#6B50D0', '#0DBA7F','#e5323e'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['维保电梯数','维保企业数','维保人员数','视频广告','搜索引擎','百度','谷歌','必应','其他'],
                        show: true,
                        itemGap: 30,
                        // x : '90',
                        bottom : '0',
                        // right:'-50',
                        // top: '100',
                        orient: 'horizontal',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            fontSize: 12
                        },
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        // formatter: function(name) {
                        //     var index = 0;
                        //     var clientlabels = ['aa','bb','cc'];
                        //     var clientcounts = [9,1,10];
                        //     clientlabels.forEach(function(value,i){
                        //         if(value == name){
                        //             index = i;
                        //         }
                        //     });
                        //     return name + "  " + clientcounts[index];
                        // }
                    },
                    grid: {
                        top:'6%',
                        left: '0%',
                        right: '5%',
                        bottom: '15%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.day,
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            // splitLine:{
                            //     show:true,
                            // },
                            //X轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize : 12,  
                                    // fontFamily : '微软雅黑',  
                                    color:'#66667F'
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            nameTextStyle: {  
                                color: ['red']  
                            },  
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            splitLine:{
                                show:true,
                                lineStyle: {
                                // 使用深浅的间隔色
                                    color: '#3F3F49',
                                    type:'dashed',
                                    // width:3,
                                }
                            },
                            //Y轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                                }
                            },
                            splitNumber :7
                        }
                    ],
                    series : [
                        {
                            name:'维保人员数',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata,
                            barWidth:'50%'
                        },
                        {
                            name:'维保企业数',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        },
                        {
                            name:'维保电梯数',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        },
                    ]
                }
                var trendChart = echarts.init(document.getElementById('chartbar2'))
                trendChart.setOption(option)
            },
             // 饼状图
            drawPieChart() {
                var data = [13.7, 13.4, 13.5, 36.1, 17.4]
                    var option = {
                    title : {
                        text: '',
                        subtext: '',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    grid: {
                        // top:'6%',
                        // left: '0%',
                        right: '0%',
                        // bottom: '11%',
                        // containLabel: true
                    },
                    legend: {
                        show: true,
                        x2 : -3,
                        y : 'center',
                        // right:'-50',
                        // top: '100',
                        orient: 'vertical',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        itemGap: 15,
                        textStyle: {
                            lineHeight:100,
                            color: '#66667F',
                            rich : {
                                white: {
                                    color: "#fff",
                                    fontSize: 12,
                                },
                                titleNameWidth: {
                                    width:48
                                }
                            },
                        },
                        // itemGap:'10%',
                        // height :'10',
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        formatter: function(name) {
                            var index = 0;
                            var clientlabels = ['30以上','25-30','20-25','15-20','15以下'];
                            var clientcounts = [40,21,17,13,9];
                            clientlabels.forEach(function(value,i){
                                if(value == name){
                                    index = i;
                                }
                            });
                            return "{titleNameWidth|" + name + " }  " + "{white|" + clientcounts[index] + '%}';
                        }

                    },
                    
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'维保人员维保梯数',
                            type:'pie',
                            radius : [45, 65],
                            center : ['30%', '50%'],
                            // roseType : 'radius',
                            label: {
                                normal: {
                                    show: false,
                                    color:'red'
                                },
                                // emphasis: {
                                //     show: false,
                                //     formatter: '{a}{c}{b}: {d}',
                                //     position: 'inside', 
                                // }
                            },
                            lableLine: {
                                normal: {
                                    // show: false
                                },
                                // emphasis: {
                                //     show: true
                                // }
                            },
                            // itemStyle: {
                            //     normal: {
                            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{


                            //         // 0% 处的颜色   
                            //         offset: 0, color: 'green'  },
                            //     {
                                    
                            //         // 100% 处的颜色
                            //     offset: 1, color: 'yellow' 
                            //     }], false)
                            //     }
                            // },
                            // data:this.chartpie3Data,
                            data:[{
                                value:40,
                                name:'30以上',
                                itemStyle:{
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [//{
                                        //     offset: 0, color: 'red' // 0% 处的颜色
                                        // }, 
                                        {
                                            offset: 0.2, color: '#0CB77D' // 0% 处的颜色
                                        }, 
                                        //  {offset: 0.5, color: 'green' // 0% 处的颜色
                                        //  }, 
                                        {
                                            offset: 1, color: '#1A5F4F' // 100% 处的颜色
                                        }],
                                        globalCoord: true // 缺省为 false
                                    }
                                },
                            }, {
                                value:21, 
                                name:'25-30',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: '#7188D2'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: '#3C4360' 
                                        }], false)
                                    },
                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }, {
                                value:17, 
                                name:'20-25',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(109,81,212,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: 'rgba(109,81,212,1)' 
                                        }], false)
                                    },
                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }, {
                                value:13, 
                                name:'15-20',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, 
                                        // color: 'rgba(254,168,56,0.3)'},
                                        color: 'rgba(254,125,1,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, 
                                        // color: '#FEC101',
                                        color: 'rgba(254,125,1,1)',
                                        }], false)
                                    },
                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }, {
                                value:9, 
                                name:'15以下',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(254,56,143,0.4)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: '#F75F5F' 
                                        }], false)
                                    },

                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }],
                            // color: ['red','#24505D','#5FD1B7','#3787B7','#7b91bf','#b068b1','#6b68ad','#c02c3a']
                        },
                        
                    ]
                }

                var trendChart = echarts.init(document.getElementById('chartpie'))
                trendChart.setOption(option)
            },
             // 柱状图3
            drawBarChart3() {
              
                var data = [this.selectfrom(13, 30),this.selectfrom(13, 30), this.selectfrom(18, 40), this.selectfrom(30, 70), this.selectfrom(15, 40)]
                var option = {
                    color: ['#0DBA7F', '#F3C242', '#4cabce', '#e5323e'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['直接访问','及时','超时','视频广告','搜索引擎','百度','谷歌','必应','其他'],
                        show: true,
                        itemGap: 90,
                        // x : '90',
                        bottom : '0',
                        // right:'-50',
                        // top: '100',
                        orient: 'horizontal',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            fontSize: 12
                        },
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        // formatter: function(name) {
                        //     var index = 0;
                        //     var clientlabels = ['aa','bb','cc'];
                        //     var clientcounts = [9,1,10];
                        //     clientlabels.forEach(function(value,i){
                        //         if(value == name){
                        //             index = i;
                        //         }
                        //     });
                        //     return name + "  " + clientcounts[index];
                        // }
                    },
                    grid: {
                        top:'6%',
                        left: '0%',
                        right: '5%',
                        bottom: '11%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.month,
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            // splitLine:{
                            //     show:true,
                            // },
                            //X轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize : 12,  
                                    // fontFamily : '微软雅黑',  
                                    color:'#66667F'
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            nameTextStyle: {  
                                color: ['red']  
                            },  
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            splitLine:{
                                show:true,
                                lineStyle: {
                                // 使用深浅的间隔色
                                    color: '#3F3F49',
                                    type:'dashed',
                                    // width:3,
                                }
                            },
                            //Y轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                                }
                            },
                            splitNumber :7
                        }
                    ],
                    series : [
                        {
                            name:'电梯运行里程',
                            type:'bar',
                            data:[120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230],
                            barWidth:'45%'
                        },
                        
                    ]
                }
                var trendChart = echarts.init(document.getElementById('chartbar3'))
                trendChart.setOption(option)
            },
             // 饼状图2
            drawPieChart2() {
                var option = {
                    title : {
                        text: '',
                        subtext: '',
                        x:'center'
                    },
                    // grid: {
                    //     left: '20%'
                    // },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        show: true,
                        x2 : '0',
                        y : 'center',
                        // right:'-50',
                        // top: '100',
                        orient: 'vertical',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        itemGap: 15,
                        textStyle: {
                            color: '#66667F',
                            rich : {
                                white: {
                                    color: "#fff",
                                    fontSize: 12,
                                },
                                titleNameWidth: {
                                    width:93
                                }
                            },
                        },
                        // itemGap:'10%',
                        padding: [20, 0],
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        formatter: function(name) {
                            var index = 0;
                            var clientlabels = ['A类 (75%以上)','B类 (50-75%)','C类 (25-50%)','D类 (0-25%)'];
                            var clientcounts = [41,27,19,13];
                            clientlabels.forEach(function(value,i){
                                if(value == name){
                                    index = i;
                                }
                            });
                            return  "{titleNameWidth|" + name + " } " + "{white|" + clientcounts[index] + '%}';
                        }

                    },
                    
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'电梯运行里程',
                            type:'pie',
                            // radius : [28, 75],
                            // radius : [40, 60],
                            // center : ['19%', '50%'],
                            radius : [45, 65],
                            center : ['27%', '50%'],
                            // roseType : 'radius',
                            label: {
                                normal: {
                                    show: false,
                                    color:'red'
                                },
                            },
                            data:[{
                                value:41,
                                name:'A类 (75%以上)',
                                itemStyle:{
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [//{
                                        //     offset: 0, color: 'red' // 0% 处的颜色
                                        // }, 
                                        {
                                            offset: 0.2, color: '#0DBA7F' // 0% 处的颜色
                                        }, 
                                        //  {offset: 0.5, color: 'green' // 0% 处的颜色
                                        //  }, 
                                        {
                                            offset: 1, color: 'rgba(13,186,127,0.4)' // 100% 处的颜色
                                        }],
                                        globalCoord: true // 缺省为 false
                                    }
                                },
                            }, {
                                value:27, 
                                name:'B类 (50-75%)',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(2,126,115,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: '#027E73' 
                                        }], false)
                                    },
                                },
                            }, {
                                value:19, 
                                name:'C类 (25-50%)',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(115,139,214,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: '#738BD6' 
                                        }], false)
                                    },
                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }, {
                                value:13, 
                                name:'D类 (0-25%)',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(109,81,212,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: '#6D51D4'
                                        }], false)
                                    },

                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }],
                            // color: ['red','#24505D','#5FD1B7','#3787B7','#7b91bf','#b068b1','#6b68ad','#c02c3a']
                        },
                        
                    ]
                }

                var trendChart = echarts.init(document.getElementById('chartpie2'))
                trendChart.setOption(option)
            },
             // 柱状图4
            drawBarChart4() {
                var xData = function() {
                    var data = ['六月','七月','八月','九月','十月'];
                    // for (var i = 0; i < 5; i++) {
                    //     data.push(data[i]);
                    // }
                    // console.log('data:' + data)
                    return data;
                }();
                var data = [this.selectfrom(13, 30),this.selectfrom(13, 30), this.selectfrom(18, 40), this.selectfrom(30, 70), this.selectfrom(15, 40)]
                var option = {
                    // color: ['#F56F6F', '#FEC101', '#6B50D0', '#0DBA7F','#e5323e'],
                    color: ['#BC3535', '#FE7D01', '#6B50D0', '#0DBA7F','#e5323e'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['40分钟以上','30-40分钟','20-30分钟','20分钟以下','搜索引擎','百度','谷歌','必应','其他'],
                        show: true,
                        // itemGap: 30,
                        // x : '90',
                        bottom : '0',
                        // right:'-50',
                        // top: '100',
                        orient: 'horizontal',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            fontSize: 12
                        },
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        // formatter: function(name) {
                        //     var index = 0;
                        //     var clientlabels = ['aa','bb','cc'];
                        //     var clientcounts = [9,1,10];
                        //     clientlabels.forEach(function(value,i){
                        //         if(value == name){
                        //             index = i;
                        //         }
                        //     });
                        //     return name + "  " + clientcounts[index];
                        // }
                    },
                    grid: {
                        top:'6%',
                        left: '0%',
                        right: '5%',
                        bottom: '15%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.day,
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            // splitLine:{
                            //     show:true,
                            // },
                            //X轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize : 12,  
                                    // fontFamily : '微软雅黑',  
                                    color:'#66667F'
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            nameTextStyle: {  
                                color: ['red']  
                            },  
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            splitLine:{
                                show:true,
                                lineStyle: {
                                // 使用深浅的间隔色
                                    color: '#3F3F49',
                                    type:'dashed',
                                    // width:3,
                                }
                            },
                            //Y轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                                }
                            },
                            splitNumber :7
                        }
                    ],
                    series : [
                        {
                            name:'20分钟以下',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        },{
                            name:'20-30分钟',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        }, {
                            name:'30-40分钟',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        },{
                            name:'40分钟以上',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata,
                            barWidth:'50%'
                        },
                    ]
                }

 
                var trendChart = echarts.init(document.getElementById('chartbar4'))
                trendChart.setOption(option)
            },
             // 饼状图3
            drawPieChart3() {
                var data = [13.7, 13.4, 13.5, 36.1, 17.4]
                    var option = {
                    title : {
                        text: '',
                        subtext: '',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        show: true,
                        x2 : '0',
                        y : 'center',
                        // right:'-50',
                        // top: '100',
                        orient: 'vertical',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        itemGap: 15,
                        textStyle: {
                            color: '#66667F',
                            rich : {
                                white: {
                                    color: "#fff",
                                    fontSize: 12,
                                },
                                titleNameWidth: {
                                    width:75
                                }
                            },
                        },
                        // itemGap:'10%',
                        padding: [20, 0],
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        formatter: function(name) {
                            var index = 0;
                            var clientlabels = ['40分钟以上','30-40分钟','20-30分钟','20分钟以下'];
                            var clientcounts = [41,27,13,19];
                            clientlabels.forEach(function(value,i){
                                if(value == name){
                                    index = i;
                                }
                            });
                            return "{titleNameWidth|" +  name + " } " + "{white|" + clientcounts[index] + '%}';
                        }

                    },
                    
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'维保时长',
                            type:'pie',
                            // radius : [36, 85],
                            radius : [45, 65],
                            center : ['30%', '50%'],
                          
                            // roseType : 'radius',
                            label: {
                                normal: {
                                    show: false,
                                    color:'red'
                                },
                                // emphasis: {
                                //     show: false,
                                //     formatter: '{a}{c}{b}: {d}',
                                //     position: 'inside', 
                                // }
                            },
                            lableLine: {
                                normal: {
                                    // show: false
                                },
                                // emphasis: {
                                //     show: true
                                // }
                            },
                            // itemStyle: {
                            //     normal: {
                            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{


                            //         // 0% 处的颜色   
                            //         offset: 0, color: 'green'  },
                            //     {
                                    
                            //         // 100% 处的颜色
                            //     offset: 1, color: 'yellow' 
                            //     }], false)
                            //     }
                            // },
                            // data:this.chartpie3Data,
                            data:[{
                                value:41,
                                name:'40分钟以上',
                                itemStyle:{
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [//{
                                        //     offset: 0, color: 'red' // 0% 处的颜色
                                        // }, 
                                        {
                                            offset: 0.2, color: '#0CB77D' // 0% 处的颜色
                                        }, 
                                        //  {offset: 0.5, color: 'green' // 0% 处的颜色
                                        //  }, 
                                        {
                                            offset: 1, color: '#1A5F4F' // 100% 处的颜色
                                        }],
                                        globalCoord: true // 缺省为 false
                                    }
                                },
                            }, {
                                value:27, 
                                name:'30-40分钟',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(109,81,212,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: 'rgba(109,81,212,1)' 
                                        }], false)
                                    },
                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }, {
                                value:13, 
                                name:'20-30分钟',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, 
                                        // color: 'rgba(254,168,56,0.3)'},
                                        color: 'rgba(254,125,1,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, 
                                        // color: '#FEC101',
                                        color: 'rgba(254,125,1,1)',
                                        }], false)
                                    },
                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }, {
                                value:19, 
                                name:'20分钟以下',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(254,56,143,0.4)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: '#F75F5F' 
                                        }], false)
                                    },

                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }],
                            // color: ['red','#24505D','#5FD1B7','#3787B7','#7b91bf','#b068b1','#6b68ad','#c02c3a']
                        },
                        
                    ]
                }

                var trendChart = echarts.init(document.getElementById('chartpie3'))
                trendChart.setOption(option)
            },
            // 渐变折线图1
            drawLineChart(){
                var chart = document.getElementById("lineChart");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['A类','B类','C类','D类'],
                    itemGap: 20,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    itemWidth: 8,
                    show:true,
                    icon:'circle',

                    // backgroundColor:'red'
                },
                color:['#6B50D0','#738BD5','#027E73','#0DBA7F'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left:'3%',
                    // y: '30%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.month,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'D类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(107,80,208,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [200, 135, 22, 105, 120, 143,116, 20, 126, 108, 87, 108, 87, 105, 142],
                    },
                    {
                        name:'C类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(115,139,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [200, 126, 108, 87, 15, 22, 105,120, 116, 25, 143, 108, 87, 105, 202],
                    },
                    {
                        name:'B类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(2,126,115,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [12, 116, 200, 126, 108, 87, 25, 143, 108, 87, 15, 15, 22, 105,22],
                    },
                    {
                        name:'A类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(13,186,127,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [12, 116, 200, 87, 105, 202, 105,126, 108, 25, 143, 108, 87, 150, 22],
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图2
            drawLineChart2(){
                var chart = document.getElementById("lineChart2");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['A类','B类','C类','D类'],
                    itemGap: 20,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    itemWidth: 20,
                    show:true,
                    icon:'circle',
                    itemWidth:8,
                    // backgroundColor:'red'
                },
                color:['#6B50D0','#738BD5','#027E73','#0DBA7F'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%',
                    // y: '30%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.month,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'D类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(107,80,208,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [200, 135, 22, 105, 120, 143,116, 20, 126, 108, 87, 108, 87, 105, 142],
                    },
                    {
                        name:'C类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(115,139,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [200, 126, 108, 87, 15, 22, 105,120, 116, 25, 143, 108, 87, 105, 202],
                    },
                    {
                        name:'B类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(2,126,115,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [12, 116, 200, 126, 108, 87, 25, 143, 108, 87, 15, 15, 22, 105,22],
                    },
                    {
                        name:'A类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(13,186,127,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [12, 116, 200, 87, 105, 202, 105,126, 108, 25, 143, 108, 87, 150, 22],
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 柱状图4
            drawBarChart5() {
                var xData = function() {
                    var data = ['六月','七月','八月','九月','十月'];
                    // for (var i = 0; i < 5; i++) {
                    //     data.push(data[i]);
                    // }
                    // console.log('data:' + data)
                    return data;
                }();
                var data = [this.selectfrom(13, 30),this.selectfrom(13, 30), this.selectfrom(18, 40), this.selectfrom(30, 70), this.selectfrom(15, 40)]
                var option = {
                    color: ['#F9D562','#FEC101','#FB7027','#CB500F','#F56F6F','#E22340','#8423E2','#5A39D5'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['机房环境','控制柜','曳引机','限速器','制动器','轿厢','安全回路','门锁回路'],
                        show: true,
                        itemGap: 10,
                        // x : '90',
                        bottom : '10',
                        // right:'-50',
                        // top: '100',
                        orient: 'horizontal',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            fontSize: 12
                        },
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        // formatter: function(name) {
                        //     var index = 0;
                        //     var clientlabels = ['aa','bb','cc'];
                        //     var clientcounts = [9,1,10];
                        //     clientlabels.forEach(function(value,i){
                        //         if(value == name){
                        //             index = i;
                        //         }
                        //     });
                        //     return name + "  " + clientcounts[index];
                        // }
                    },
                    grid: {
                        top:'6%',
                        left: '0%',
                        right: '5%',
                        bottom: '15%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.day,
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            // splitLine:{
                            //     show:true,
                            // },
                            //X轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize : 12,  
                                    // fontFamily : '微软雅黑',  
                                    color:'#66667F'
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            nameTextStyle: {  
                                color: ['red']  
                            },  
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            splitLine:{
                                show:true,
                                lineStyle: {
                                // 使用深浅的间隔色
                                    color: '#3F3F49',
                                    type:'dashed',
                                    // width:3,
                                }
                            },
                            //Y轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                                }
                            },
                            splitNumber :7
                        }
                    ],
                    series : [
                        {
                            name:'门锁回路',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        },{
                            name:'安全回路',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        }, {
                            name:'轿厢',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        }, {
                            name:'制动器',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata,
                        }, {
                            name:'限速器',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata,
                        }, {
                            name:'曳引机',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        }, {
                            name:'控制柜',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        },{
                            name:'机房环境',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata,
                            barWidth:'50%'
                        },
                    ]
                }
                var trendChart = echarts.init(document.getElementById('chartbar5'))
                trendChart.setOption(option)
            },
             // 渐变折线图3
            drawLineChart3(){
                var chart = document.getElementById("lineChart3");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['异常入侵','风速','温湿度','门窗','排气扇','空调'],
                    itemGap: 10,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    show:true,
                    icon:'circle',
                    itemWidth:8,
                    // backgroundColor:'red'
                },
                // color:['#F9D562','#FB7027','#CB500F',' #F56F6F','#E22340','#5A39D5'],
                color:['#FE7D01','#CB500F','#FEC101',' #F56F6F','#E22340','#5A39D5'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'异常入侵',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'风速',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(251,112,39,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'温湿度',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(203,80,15,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'门窗',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(245,111,111,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },{
                        name:'排气扇',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(226,35,64,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'空调',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(90,57,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图4
            drawLineChart4(){
                var chart = document.getElementById("lineChart4");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['双联维保开关','故障代码','接触器','平层状态'],
                    itemGap: 10,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    show:true,
                    icon:'circle',
                    itemWidth: 8,
                    // backgroundColor:'red'
                },
                // color:['#F9D562','#FB7027','#E22340','#6B50D0'],
                color:['#FE7D01','#FEC101','#E22340','#6B50D0'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'双联维保开关',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)' 
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'故障代码',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(251,112,39,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'接触器',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(226,35,64,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'平层状态',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(90,57,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图5
            drawLineChart5(){
                var chart = document.getElementById("lineChart5");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['电压/电流','外壳温度','轴承振动'],
                    itemGap: 10,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    itemWidth: 8,
                    show:true,
                    icon:'circle',
                    // backgroundColor:'red'
                },
                // color:['#F9D562','#E22340','#6B50D0'],
                color:['#FE7D01','#E22340','#6B50D0'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'电压/电流',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)'    
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'外壳温度',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                             color:'rgba(226,35,64,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'轴承振动',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(90,57,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图6
            drawLineChart6(){
                var chart = document.getElementById("lineChart6");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['限速器'],
                    itemGap: 10,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    itemWidth: 8,
                    show:true,
                    icon:'circle',
                    // backgroundColor:'red'
                },
                // color:['#F9D562'],
                color:['#FE7D01'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'限速器',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)' 
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图7
            drawLineChart7(){
                var chart1 = document.getElementById("lineChart7");
                var echart = echarts.init(chart1);
                var option = {
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        data: ['线圈温度','刹车片温度','电压/电流','制动力'],
                        itemGap: 10,
                        // orient: 'vertical',  //垂直显示
                        y: 'bottom',    //延Y轴居中
                        x: 'center', //居右显示
                        textStyle:{
                            fontSize : 12,  
                            fontFamily : 'Microsoft YaHei',  
                            color:'#66667F'  
                        },
                        itemWidth: 8,
                        show:true,
                        icon:'circle',
                        // backgroundColor:'red'
                    },
                    // color:['#F9D562','#FB7027','#E22340','#6B50D0'],
                    color:['#FE7D01','#FEC101','#E22340','#6B50D0'],
                    //工具栏
                    toolbox: {
                        show : false ,
                        feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                        }
                    },
                    grid: {
                        right: '3%', //相当于距离左边效果:padding-left
                        left: '3%', //相当于距离上边效果:padding-top
                        bottom: '15%',
                        top: '10%',
                        containLabel: true
                    },
                    calculable : true,
                    xAxis : [{
                        type : 'category',
                        boundaryGap : false,
                        data : this.day,
                        axisLine:{
                            lineStyle:{  
                                color:'#24242f',  
                                width:1,//这里是为了突出显示加上的  
                            }  
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                            }
                        }
                    }],
                    yAxis : [{
                        type: 'value',
                        // min:0,
                        // max:150,
                        axisLine: {
                            lineStyle: {
                                color: '#24242f',  
                                width: 1//这里是为了突出显示加上的  
                            }
                        },
                        // 分割线
                        splitLine: {
                            show: true ,
                            lineStyle: {
                            // 使用深浅的间隔色
                                color: '#3F3F49',
                                type: 'dashed',
                                // width:3,
                            }
                        },
                        //Y轴文字
                        axisLabel: {
                            show: true,
                            textStyle: {
                                fontSize : 12,  
                                color:'#66667F'
                            }
                        }
                    }],
                    series : [
                        {
                            name:'线圈温度',
                            type:'line',
                            smooth:true,
                            areaStyle: {
                                color:'rgba(249,213,98,0.3)' 
                            },
                            showSymbol: false,
                            stack: '总量5',
                            data: this.Xdata,
                        },
                        {
                            name:'刹车片温度',
                            type:'line',
                            smooth:true,
                            areaStyle: {
                                color:'rgba(251,112,39,0.3)'
                            },
                            showSymbol: false,
                            stack: '总量5',
                            data: this.Xdata,
                        },
                        {
                            name:'电压/电流',
                            type:'line',
                            smooth:true,
                            areaStyle: {
                                color:'rgba(226,35,64,0.3)'

                            },
                            showSymbol: false,
                            stack: '总量5',
                            data: this.Xdata,
                        },
                        {
                            name:'制动力',
                            type:'line',
                            smooth:true,
                            areaStyle: {
                                color:'rgba(90,57,213,0.3)'
                            },
                            showSymbol: false,
                            stack: '总量5',
                            data: this.Xdata,
                        },
                    ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图8
            drawLineChart8(){
                var chart = document.getElementById("lineChart8");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['轿门','振动','位置','载荷'],
                    itemGap: 10,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    itemWidth: 8,
                    show:true,
                    icon:'circle',
                    // backgroundColor:'red'
                },
                // color:['#F9D562','#FB7027','#E22340','#6B50D0'],
                color:['#FE7D01','#FEC101','#E22340','#6B50D0'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'轿门',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)' 
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'振动',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(251,112,39,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'位置',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(226,35,64,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'载荷',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(90,57,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图9
            drawLineChart9(){
                var chart = document.getElementById("lineChart9");
                var echart = echarts.init(chart);
                var option = {
                    tooltip : {
                        trigger: 'axis',
                    },
                    legend: {
                        data:['机房安全回路','轿顶安全回路','轿门安全回路','层门安全回路','底坑安全回路'],
                        itemGap: 10,
                        itemWidth:8,
                        // orient: 'vertical',  //垂直显示
                        y: 'bottom',    //延Y轴居中
                        x: 'center', //居右显示
                        textStyle:{
                            fontSize : 12,  
                            fontFamily : 'Microsoft YaHei',  
                            color:'#66667F'  
                        },
                        show:true,
                        icon:'circle',
                        // backgroundColor:'red'
                    },
                    // color:['#FEC101','#FB7027','#CB500F','#E22340','#6B50D0'],
                    color:['#FE7D01','#CB500F','#FEC101','#E22340','#6B50D0'],
                    //工具栏
                    toolbox: {
                        show : false ,
                        feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                        }
                    },
                    grid: {
                        right: '3%', //相当于距离左边效果:padding-left
                        left: '3%', //相当于距离上边效果:padding-top
                        // bottom: '15%',
                        bottom: '20%',
                        top: '10%',
                        containLabel: true
                    },
                    calculable : true,
                    xAxis : [{
                        type : 'category',
                        boundaryGap : false,
                        data : this.day,
                        axisLine:{
                            lineStyle:{  
                                color:'#24242f',  
                                width:1,//这里是为了突出显示加上的  
                            }  
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                            }
                        }
                    }],
                    yAxis : [
                        {
                        type : 'value',
                        // min:0,
                        // max:150,
                        axisLine:{  
                            lineStyle:{  
                                color:'#24242f',  
                                width:1,//这里是为了突出显示加上的  
                            }  
                        },
                        //分割线
                        splitLine:{
                            show:true,
                            lineStyle: {
                            // 使用深浅的间隔色
                                color: '#3F3F49',
                                type:'dashed',
                                // width:3,
                            }
                        },
                        //Y轴文字
                        axisLabel: {
                            show: true,
                            textStyle: {
                            fontSize : 12,  
                            color:'#66667F'
                            }
                        },
                        }
                    ],
                    series : [
                        {
                            name:'机房安全回路',
                            type:'line',
                            smooth:true,
                            areaStyle: {
                                color:'rgba(249,213,98,0.3)' 
                            },
                            showSymbol: false,
                            stack: '总量5',
                            data: this.Xdata,
                        },
                        {
                            name:'轿顶安全回路',
                            type:'line',
                            smooth:true,
                            areaStyle: {
                                color:'rgba(251,112,39,0.3)'
                            },
                            showSymbol: false,
                            stack: '总量5',
                            data: this.Xdata,
                        },
                        {
                            name:'轿门安全回路',
                            type:'line',
                            smooth:true,
                            areaStyle: {
                                color:'rgba(245,111,111,0.3)'
                            },
                            showSymbol: false,
                            stack: '总量5',
                            data: this.Xdata,
                        },
                        {
                            name:'层门安全回路',
                            type:'line',
                            smooth:true,
                            areaStyle: {
                                color:'rgba(226,35,64,0.3)'

                            },
                            showSymbol: false,
                            stack: '总量5',
                            data: this.Xdata,
                        },{
                            name:'底坑安全回路',
                            type:'line',
                            smooth:true,
                            areaStyle: {
                                color:'rgba(90,57,213,0.3)'
                            },
                            showSymbol: false,
                            stack: '总量5',
                            data: this.Xdata,
                        },
                    ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图10
            drawLineChart10 () {
                var chart = document.getElementById("lineChart10");
                var echart = echarts.init(chart);
                var option = {
                    tooltip : {
                        trigger: 'axis',
                    },
                    legend: {
                        data:['层门门锁回路','轿门门锁回路'],
                        itemGap: 10,
                        // orient: 'vertical',  //垂直显示
                        y: 'bottom',    //延Y轴居中
                        x: 'center', //居右显示
                        textStyle:{
                            fontSize : 12,  
                            fontFamily : 'Microsoft YaHei',  
                            color:'#66667F'  
                        },
                        itemWidth: 8,
                        show:true,
                        icon:'circle',
                        // backgroundColor:'red'
                    },
                    // color:['#FEC101','#6B50D0'],
                    color:['#FE7D01','#6B50D0'],
                    //工具栏
                    toolbox: {
                        show : false ,
                        feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                        }
                    },
                    grid: {
                        right: '3%', //相当于距离左边效果:padding-left
                        left: '3%', //相当于距离上边效果:padding-top
                        // bottom: '15%',
                        bottom: '20%',
                        top: '10%',
                        containLabel: true
                    },
                    calculable : true,
                    xAxis : [{
                        type : 'category',
                        boundaryGap : false,
                        data : this.day,
                        axisLine:{
                            lineStyle:{  
                                color:'#24242f',  
                                width:1,//这里是为了突出显示加上的  
                            }  
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                            }
                        }
                    }],
                    yAxis : [
                        {
                        type : 'value',
                        // min:0,
                        // max:150,
                        axisLine:{  
                            lineStyle:{  
                                color:'#24242f',  
                                width:1,//这里是为了突出显示加上的  
                            }  
                        },
                        //分割线
                        splitLine:{
                            show:true,
                            lineStyle: {
                            // 使用深浅的间隔色
                                color: '#3F3F49',
                                type:'dashed',
                                // width:3,
                            }
                        },
                        //Y轴文字
                        axisLabel: {
                            show: true,
                            textStyle: {
                            fontSize : 12,  
                            color:'#66667F'
                            }
                        },
                        }
                    ],
                    series : [
                        {
                            name:'层门门锁回路',
                            type:'line',
                            smooth:true,
                            areaStyle: {
                                color:'rgba(249,213,98,0.3)'
                            },
                            showSymbol: false,
                            stack: '总量5',
                            data: this.Xdata,
                        },
                        {
                            name:'轿门门锁回路',
                            type:'line',
                            smooth:true,
                            areaStyle: {
                                color:'rgba(90,57,213,0.3)'
                            },
                            showSymbol: false,
                            stack: '总量5',
                            data: this.Xdata,
                        }
                    ]
                };
                echart.setOption(option);
            }
        }
    };
</script>

<style lang="stylus">
// 配置
@import '../assets/stylus/base'
// 一些所有页面的公用样式，一些适配样式
@import '../assets/stylus/panel'
// 三个页面（政府 物业 维保）的公用样式
@import '../assets/stylus/pageSty'

</style>