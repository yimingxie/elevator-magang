<template>
  <div id="AddDevices" style="margin-top: 100px;">
    <div id="form-add" class="clearfix">
      <div class="devices-form-left">

        <div class="check-device">
          <div class="devices-title">查询/设置设备</div>
          <!-- 查询设备 -->
          <div class="add-device-box" v-show="checkFormShow">
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>设备id</i>(deviceId):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="deviceId" v-model="checkDeviceData.deviceId">
              </div>
            </div>
            <div class="adb-btn">
              <button class="aDevice-btn" @click="checkDevice()">查询设备</button>
            </div>

          </div>
          <!-- 设置设备 -->
          <div class="add-device-box" v-show="!checkFormShow">
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>设备标签</i>(serialNo):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="serialNo" v-model="editDeviceData.serialNo">
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>设备id</i>(deviceId):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="deviceId" v-model="editDeviceData.deviceId">
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>设备类型</i>(devTypeId):</p>
              <div class="adb-list-ib clearfix">
                <select class="adb-select" name="" id="" v-model="editDeviceData.devTypeId">
                  <option value="1">激光测距仪LM120</option>
                  <option value="2">接触式温度计 UT325</option>
                  <option value="3">非接触式转速计 UT372</option>
                  <option value="4">风速仪 UT363BT</option>
                  <option value="5">振动测量仪 UT315</option>
                  <option value="6">万用表 UT61B</option>
                  <option value="8">红外测温仪 UT301A</option>
                  <option value="9">钳形表</option>
                  <option value="10">电梯门开关检测</option>
                </select>
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>版本</i>(fwVersion):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="fwVersion" v-model="editDeviceData.fwVersion">
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>电梯id</i>(liftId):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="liftId" placeholder="dt001" v-model="editDeviceData.liftId">
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>监测点</i>(measId):</p>
              <div class="adb-list-ib clearfix">
                <select class="adb-select" name="" id="" v-model="editDeviceData.measId">
                  <option value="1">机房温度</option>
                  <option value="2">机房湿度</option>
                  <option value="3">机房风速</option>
                  <option value="4">机房水浸</option>
                  <option value="5">空调/排气扇</option>
                  <option value="6">电动机电压</option>
                  <option value="7">电动机电流</option>
                  <option value="8">电动机温度</option>
                  <option value="9">电机振动</option>
                  <option value="10">制动器线圈温度</option>
                  <option value="11">制动器刹车片温度</option>
                  <option value="12">制动器电压</option>
                  <option value="13">制动器电流</option>
                  <option value="14">曳引轮磨损</option>
                  <option value="15">限速轮转速</option>
                  <option value="16">层门开合</option>
                  <option value="17">轿门开合</option>
                  <option value="18">轿厢振动</option>
                  <option value="19">轿厢位置</option>
                  <option value="20">轿厢载荷</option>
                  <option value="21">机房安全回路</option>
                  <option value="22">轿顶安全回路</option>
                  <option value="23">轿门安全回路</option>
                  <option value="24">层门安全回路</option>
                  <option value="25">底坑安全回路</option>
                  <option value="26">层门门锁回路</option>
                  <option value="27">轿门门锁回路</option>
                </select>
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>监测内容</i>(measContent):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="measContent" v-model="editDeviceData.measContent">
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>状态</i>(status):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="status" v-model="editDeviceData.status">
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>自定义信息</i>(extendMap):</p>
              <div class="adb-list-ib clearfix">
                <div class="extendMap-none" v-show="!editExtendMap.length">暂无信息</div>
                <div class="adb-input2-content clearfix" v-for="(item, i) in editExtendMap" :key="i">
                  <input class="adb-input2" autocomplete="off" type="text" name="extend" placeholder="字段" v-model="item.key">
                  <input class="adb-input2" autocomplete="off" type="text" name="extend" placeholder="值" v-model="item.value">
                  <span class="adb-delete" @click="extendMapDelete(editExtendMap, i)">删除</span>
                </div>
                <!-- <div class="adb-input2-content clearfix">
                  <input class="adb-input2" autocomplete="off" type="text" name="extend" placeholder="字段">
                  <input class="adb-input2" autocomplete="off" type="text" name="extend" placeholder="值">
                </div> -->
                <div class="adb-add-field" @click="addField(editExtendMap)">新增字段</div>
              </div>
            </div>
            <div class="adb-btn">
              <button class="aDevice-btn" @click="setDevice()">保存</button>
              <button class="aDevice-btn" @click="checkFormShow = !checkFormShow">取消</button>
            </div>
          </div>

        </div>

        <div class="add-device">
          <div class="devices-title">添加设备</div>

          <div class="add-device-box">
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>设备标签</i>(serialNo):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="serialNo" v-model="addDeviceData.serialNo">
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>设备id</i>(deviceId):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="deviceId" v-model="addDeviceData.deviceId">
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>设备类型</i>(devTypeId):</p>
              <div class="adb-list-ib clearfix">
                <select class="adb-select" name="" id="" v-model="addDeviceData.devTypeId">
                  <option value="1">激光测距仪LM120</option>
                  <option value="2">接触式温度计 UT325</option>
                  <option value="3">非接触式转速计 UT372</option>
                  <option value="4">风速仪 UT363BT</option>
                  <option value="5">振动测量仪 UT315</option>
                  <option value="6">万用表 UT61B</option>
                  <option value="8">红外测温仪 UT301A</option>
                  <option value="9">钳形表</option>
                  <option value="10">电梯门开关检测</option>
                </select>
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>版本</i>(fwVersion):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="fwVersion" v-model="addDeviceData.fwVersion">
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>电梯id</i>(liftId):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="liftId" v-model="addDeviceData.liftId">
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>监测点</i>(measId):</p>
              <div class="adb-list-ib clearfix">
                <select class="adb-select" name="" id="" v-model="addDeviceData.measId">
                  <option value="1">机房温度</option>
                  <option value="2">机房湿度</option>
                  <option value="3">机房风速</option>
                  <option value="4">机房水浸</option>
                  <option value="5">空调/排气扇</option>
                  <option value="6">电动机电压</option>
                  <option value="7">电动机电流</option>
                  <option value="8">电动机温度</option>
                  <option value="9">电机振动</option>
                  <option value="10">制动器线圈温度</option>
                  <option value="11">制动器刹车片温度</option>
                  <option value="12">制动器电压</option>
                  <option value="13">制动器电流</option>
                  <option value="14">曳引轮磨损</option>
                  <option value="15">限速轮转速</option>
                  <option value="16">层门开合</option>
                  <option value="17">轿门开合</option>
                  <option value="18">轿厢振动</option>
                  <option value="19">轿厢位置</option>
                  <option value="20">轿厢载荷</option>
                  <option value="21">机房安全回路</option>
                  <option value="22">轿顶安全回路</option>
                  <option value="23">轿门安全回路</option>
                  <option value="24">层门安全回路</option>
                  <option value="25">底坑安全回路</option>
                  <option value="26">层门门锁回路</option>
                  <option value="27">轿门门锁回路</option>
                </select>
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>监测内容</i>(measContent):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="measContent" v-model="addDeviceData.measContent">
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>状态</i>(status):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="status" v-model="addDeviceData.status">
              </div>
            </div>
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>自定义信息</i>(extendMap):</p>
              <div class="adb-list-ib clearfix">
                <div class="extendMap-none" v-show="!addExtendMap.length">暂无信息</div>
                <div class="adb-input2-content clearfix" v-for="(item, i) in addExtendMap" :key="i">
                  <input class="adb-input2" autocomplete="off" type="text" name="extend" placeholder="字段" v-model="item.key">
                  <input class="adb-input2" autocomplete="off" type="text" name="extend" placeholder="值" v-model="item.value">
                  <span class="adb-delete" @click="extendMapDelete(addExtendMap, i)">删除</span>
                </div>
                <!-- <div class="adb-input2-content clearfix">
                  <input class="adb-input2" autocomplete="off" type="text" name="extend" placeholder="字段">
                  <input class="adb-input2" autocomplete="off" type="text" name="extend" placeholder="值">
                </div> -->
                <div class="adb-add-field" @click="addField(addExtendMap)">新增字段</div>
                <div class="adb-add-field" style="margin-left: 10px;" @click="showField()">展示字段</div>
              </div>
            </div>
            <div class="adb-btn">
              <button class="aDevice-btn" @click="addDevice()">添加设备</button>
            </div>
          </div>

        </div>

      </div>



      <div class="devices-form-left">
        <div class="devices-title">查询电梯的所有设备</div>

          <!-- 查询设备 -->
          <div class="add-device-box">
            <div class="adb-list clearfix">
              <p class="adb-list-title"><i>电梯id</i>(liftId):</p>
              <div class="adb-list-ib clearfix">
                <input class="adb-input1" autocomplete="off" type="text" name="liftId" v-model="dtID">
              </div>
            </div>
            <div class="adb-btn">
              <button class="aDevice-btn" @click="getAllDevices()">查询电梯</button>
            </div>
          </div>

        <div class="devices-update-btn"><button class="aDevice-btn" @click="getAllDevices">刷新列表</button></div>
        <div class='devices-all tableRow'>
          <table class="table table-bordered table-stripe">
            <tr>
              <th>设备标签(serialNo)</th>
              <th>设备id(deviceId)</th>
              <th>设备类型(devTypeId)</th>
              <th>版本(fwVersion)</th>
              <th>电梯id(liftId)</th>
              <th>监测点(measId)</th>
              <th>监测内容(measContent)</th>
              <th>状态(status)</th>
              <th>自定义信息(extendMap)</th>
            </tr>
            <tr v-for="(item, i) in allDevicesList" :key="i">
              <td>{{ item.serialNo }}</td>
              <td>{{ item.deviceId }}</td>
              <td>{{ item.devTypeId }}</td>
              <td>{{ item.fwVersion }}</td>
              <td>{{ item.liftId }}</td>
              <td>{{ item.measId }}</td>
              <td>{{ item.measContent }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.extendMap }}</td>
            </tr>
          </table>
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
      dtID: '',
      allDevicesList: '',
      checkFormShow: true,
      addExtendMap: [],
      addDeviceData: {
        serialNo: '',
        deviceId: '',
        devTypeId: '',
        fwVersion: '',
        liftId: '',
        measId: '',
        measContent: '',
        status: '',
        extendMap: {}
      },
      checkDeviceData: {
        deviceId: ''
      },
      editExtendMap: [{key: '', value: ''}],
      editDeviceData: {
        serialNo: '',
        deviceId: '',
        devTypeId: '',
        fwVersion: '',
        liftId: '',
        measId: '',
        measContent: '',
        status: '',
        extendMap: {}
      },
      
    }
  },
  mounted() {
    // this.getAllDevices()


  },
  methods: {
    // 获取电梯的所有设备
    getAllDevices() {
      api.liftDevices.getAllDevices(this.dtID).then(res => {
        console.log(res)
        this.allDevicesList = res.data.list
      }).catch(err => {
        console.log('查询所有设备失败')
      })
    },

    // 添加设备
    addDevice() {
      
      // 添加设备中的组装map字段
      let fieldObj = {}
      this.addExtendMap.forEach((item, i) => {
        if (item.key == '') return
        let key = item.key
        let value =item.value
        fieldObj[item.key] = item.value
      })
      this.addDeviceData.extendMap = fieldObj

      let params = JSON.stringify(this.addDeviceData)
      api.liftDevices.addDevice(params).then(res => {
        console.log(res)
        if (res.data.code == '9999') {
          return this.$message.error('添加失败');
        }
        this.dtID = this.addDeviceData.liftId
        this.getAllDevices()
        // 清空表单
        this.addExtendMap = []
        this.addDeviceData = {
          serialNo: '',
          deviceId: '',
          devTypeId: '',
          fwVersion: '',
          liftId: '',
          measId: '',
          measContent: '',
          status: '',
          extendMap: {}
        }
        this.$message.success('添加成功');
      })
      .catch(err => {
        console.log('请求失败')
      })
    },

    // 删除自定义信息字段
    extendMapDelete(arr, i) {
      arr.splice(i, 1)
    },

    // 查询单个设备
    checkDevice() {
      api.liftDevices.checkDevice(this.checkDeviceData.deviceId).then(res => {
        if (!res.data.device) {
          return this.$message.error('设备id错误');
        }
        console.log(res.data)
        this.checkDeviceData.deviceId = ''
        this.checkFormShow = !this.checkFormShow
        this.editDeviceData.serialNo = res.data.device.serialNo
        this.editDeviceData.deviceId = res.data.device.deviceId
        this.editDeviceData.devTypeId = res.data.device.devTypeId
        this.editDeviceData.fwVersion = res.data.device.fwVersion
        this.editDeviceData.liftId = res.data.device.liftId
        this.editDeviceData.measId = res.data.device.measId
        this.editDeviceData.measContent = res.data.device.measContent
        this.editDeviceData.status = res.data.device.status

        // 组装map数据，并渲染到编辑页面
        let mapObj = res.data.device.extendMap
        let arr = []
        for (let i in mapObj) {
          let obj = {}
          obj.key = i
          obj.value = mapObj[i]
          arr.push(obj)
        }
        this.editExtendMap = arr
        console.log(this.editExtendMap)
      })
    },

    // 设置设备
    setDevice() {
      // 设置设备中的组装map字段
      let fieldObj = {}
      this.editExtendMap.forEach((item, i) => {
        if (item.key == '') return
        let key = item.key
        let value =item.value
        fieldObj[item.key] = item.value
      })
      this.editDeviceData.extendMap = fieldObj
      console.log(this.editDeviceData.extendMap)

      let params = JSON.stringify(this.editDeviceData)
      api.liftDevices.setDevice(params).then(res => {
        console.log(res)
        if (res.data.code == '9999') {
          return this.$message.error('添加失败');
        }
        this.checkFormShow = !this.checkFormShow

        this.getAllDevices()
        this.$message.success('设置成功');
      })
    },

    // 新增字段
    addField(arr) {
      arr.push({
        key: '',
        value: ''
      })
    },

    showField() {
      console.log(this.addExtendMap)
      let obj = {}
      this.addExtendMap.forEach((item, i) => {
        if (item.key == '') return
        let key = item.key
        let value = item.value
        obj[item.key] = item.value
      })
      console.log(obj)
    }
    
  },
  components: {

  }
}
</script>

<style lang="scss">

@media screen and (max-width: 1350px) {
  #AddDevices{
    min-width: 1350px;
  }
}
#AddDevices {
  .devices-form-left {
    box-sizing: border-box;
    padding: 10px;
    position: relative;
    float: left;
    width: 50%;
  }
  .devices-all{
    margin-top: 20px;
  }
  .devices-update-btn{
    position: absolute;
    top: 0;
    right: 0;
  }
  .devices-title{
    font-weight: bold;
    font-size: 30px;
    color: #fff;
  }
  .adb-btn{
    padding-bottom: 10px;
    padding-top: 10px;
    text-align: center;
  }
  .adb-select{
    height: 28px;
    width: 186px;
    font-size: 14px;
    color: #8da1eb;
    background: #2f353c;
    padding: 0 5px;
    vertical-align: top;
  }
  .adb-list-ib{
    float: left;
    padding: 10px 0;
    width: 62%;
  }
  .adb-add-field{
    float: left;
    color: #8da1eb;
    cursor: pointer;
  }
  .check-device{
    margin-bottom: 20px;
  }
  .adb-input2-content{
    margin-bottom: 14px;
  }
  .extendMap-none{
    line-height: 36px;
    color: #bbb;
  }
  .adb-delete{
    float: left;
    line-height: 30px;
    cursor: pointer;
    color: #8da1eb;
  }

  #form-add {
    table {
      th,
      td {
        padding: 5px;
        border: 1px solid #677092;
      }
    }
    .add-device-box {
      margin-top: 20px;
      border: 1px dashed #677092;
      padding: 20px 0;
    }
    .adb-list-title {
      width: 200px;
      float: left;
      color: #ccc;
      padding: 10px 20px;
    }
    .adb-input1 {
      box-sizing: border-box;
      float: left;
      height: 28px;
      font-size: 14px;
      color: #8da1eb;
      background: #2f353c;
      padding: 0 5px;
      vertical-align: top;
      width: 90%;
    }
    .adb-input2 {
      float: left;
      height: 28px;
      font-size: 14px;
      color: #8da1eb;
      background: #2f353c;
      padding: 0 5px;
      vertical-align: top;
      width: 37%;
      margin-right: 2%;
    }
    .aDevice-btn {
      line-height: 21px;
      display: inline-block;
      // margin: 18px 22px 0 0;
      margin: 10px 20px;
      background: #0dba7f;
      color: #fff;
      border-radius: 16.5px;
      padding: 5px 20px;
      font-size: 14px;
      cursor: pointer;
    }
    i {
      color: #8da1eb;
      margin-right: 10px;
      white-space: nowrap;
      display: block;
    }
  }
}
</style>
