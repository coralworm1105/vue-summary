<template>
<div class="app-container">
  <div style="width:500px;">
    <div class="loginSlider">
      <div class="tip" :class="{'isValid': isValid ? true : false}">{{isValid ? '验证成功' : '拖动滑块验证'}}</div>
      <el-slider :max="max" v-model="sliderVal" @change="handleChange" label="拖动验证">1111111</el-slider>
    </div>
    <el-button type="primary" :disabled="!isValid">登录</el-button>
  </div>
</div>
</template>
<script>
  export default{
    data() {
      return {
        sliderVal: 0,
        max: 100,
        isValid: false
      }
    },
    methods: {
      handleChange(val) {
        if (val === this.max) {
          this.isValid = true
        }
      }
    }
  }
</script>
<style lang="scss">
.loginSlider{
  position:relative;
  .tip{
    position:absolute;
    left :0;
    top:0;
    width:100%;
    height:36px;
    line-height:36px;
    text-align:center;
    background: #999;
    color:#fff;
    z-index:1;
  }
  .isValid{
    background:greenyellow;
  }
  .el-slider__runway{
    height:36px;
    margin:0;
    .el-slider__bar{
      height:36px;
    }
    .el-slider__button-wrapper{
      top:0;
      .el-slider__button{
        width:36px;
        height:36px;
        border-radius:36px;
      }
    }
  }
}
</style>
