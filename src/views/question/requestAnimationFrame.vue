<template>
<div class="wrapper">
  <div class="square" id="square" ref="square" v-bind:style="{transform: 'rotateZ('+ deg + 'deg) translateZ(0)'}"></div>
  <div class="progressBar">
    <div class="inner" :style="{width: progress + 'px'}">{{progressValue}}%</div>
  </div>
  <el-button @click="runProgress()">run</el-button>
</div>
</template>
<script>
export default {
  data() {
    return {
      deg: 0,
      progress: 0,
      progressValue: 0
    }
  },
  methods: {
    runSquare(){
      var distance = 360;
      cancelAnimationFrame(fn);
      let fn = ()=>{
        if(this.deg < distance) {
          this.deg++;
        } else {
          this.deg = 0;
        }
        requestAnimationFrame(fn)
      }
      requestAnimationFrame(fn)
    },
    runProgress(){
      var width = 500;
      cancelAnimationFrame(fn);
      let fn = () => {
        if(this.progress < width){
          this.progress += 5;
          this.progressValue = this.progress / 5;
          requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(fn)
        }
      }
      requestAnimationFrame(fn)
    }
  },
  created() {
    this.runSquare();
  },
}
</script>
<style lang="scss">
.square{
  width:50px;
  height:50px;
  background:red;
}
.progressBar{
  width:500px;
  height:20px;
  border:1px solid lightcoral;
  .inner{
    width:0;
    height:100%;
    background:lightsalmon;
    color:#000;
    line-height:20px;
    text-indent:2em;
  }
}
</style>
