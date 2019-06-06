<template>
  <div id="page-container">
    <div id="header">
      <div class="header-logo">
        <img src="./assets/images/unit_logo.png" alt="">
      </div>
      {{ $route.meta.title }}
    </div>
    <span class="right_header">
      <!-- <i class="headPic"></i> -->
      <!-- 只有详情页才展示 -->
      <span v-if="$route.meta.title == '电梯运行详情'"><img src="./assets/images/power.png" alt=""><i>|</i></span>
      <span>版本号V1.6.7.5</span>
      <!-- <i class="split"></i>
      <i class="quit"></i> -->
    </span>
    
    <router-view></router-view>

    <!-- 此处详情页不展示 -->
    <div class="power-by" v-if="$route.meta.title !== '电梯运行详情'">
      <img src="./assets/images/power.png" alt="">
    </div>


  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        title:'电梯行业监管战情室'
      }
    },
    
    mounted () {
      // console.log(this.$router.meta.title)
      // document.title = this.$route.meta.title

    },

    methods: {
      quit(){
        this.$router.push('/')
      },

    }
  }
</script>

<style lang="stylus">
// 配置
@import 'assets/stylus/base'
@import 'assets/stylus/elementRe'

#page-container{
  width: 100%;
  height: 100%;
  #header{
    position relative
    size 100% 80px
    line-height 80px
    background: #16161C;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.21);
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 0.04px;
    text-align: center;
    fixed top 0
    z-index 999

    .header-logo{
      position absolute;
      top 0;
      left 24px;
    }
  }
  .power-by{
    position fixed
    bottom 26px
    left 24px

  }
  .right_header{
    z-index 999
    size auto 80px 
    font-size 0
    line-height 80px
    text-align right
    line-height 80px
    white-space nowrap
    fixed right 30px top 0
    color #fff
    .headPic{
      vertical-align middle
      size 46px 80px
      display inline-block
      background:url("./assets/images/hs/header.png") no-repeat 0 10px
    }
    span{
      font-size: 14px;
      color: #66667F;
      margin-left 10px

      i{
        display inline-block
        margin-left 12px;
        font-weight bold
        vertical-align middle
        margin-top -4px;
      }

      img{
        margin-top -2px
        vertical-align middle
      }
    }
    .split {
      display: inline-block;
      width: 2px;
      height: 30px;
      background-color: #66667F;
      margin 0 33px
      vertical-align -11px
      // position: absolute;
      // top: 19px;
      // left: 447px;
    }
    .quit{
      vertical-align middle
      size 28px
      display inline-block
      background:url("./assets/images/hs/quit.png") no-repeat 
    }
  }
    
}
</style>

