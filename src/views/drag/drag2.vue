<template>
  <div class="wrapper">
    <div class="screen-main">
      <div class="toolbar">
        <label>添加元素</label>
        <el-button @click="addImg">添加图片</el-button>
        <el-button @click="addChart">添加图表</el-button>
      </div>
      <div class="report">
        <template v-for="(item, index) in layout">
          <vue-draggable-resizable class="vdr" :class="{'active': currentEle ? (currentEle.id === item.id) : false}" :active="currentEle ? (currentEle.id === item.id) : false" v-on:dragstop="onDragstop" v-on:resizestop="resizestop" :w="parseInt(item.w,10)" :h="parseInt(item.h,10)" :x="parseInt(item.x,10)" :y="parseInt(item.y,10)" :parent="true" :grid="[10,10]">
            <div class="ele-box" v-on:mousedown="onEleActivate(index)" >{{index}}</div>
            <i class="el-icon-delete" @click="deleteEle(index)"></i>
          </vue-draggable-resizable>
        </template>
      </div>
    </div>
    <div class="side-panel">
      <div v-if="currentEle">
        <div>X: <el-input-number controls-position="right"  v-model="currentEle.x"></el-input-number></div>  
        <div>Y: <el-input-number controls-position="right"  v-model="currentEle.y"></el-input-number></div>
        <div>Width: <el-input-number controls-position="right"  v-model="currentEle.w" @change="handleChangeW"></el-input-number></div>
        <div>Height: <el-input-number controls-position="right"  v-model="currentEle.h"></el-input-number></div>
      </div>
    </div>   
  </div>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
export default{
  data() {
    return {
      layout: [],
      currentEle: null,
      currentIndex: 0,
      defaultW: 400,
      defaultH: 350,
      defaultX: 100,
      defaultY: 100
    };
  },
  components: {
    VueDraggableResizable
  },
  methods: {
    resizestop: function (x, y, width, height) {
      this.layout[this.currentIndex].x = x;
      this.layout[this.currentIndex].y = y;
      this.layout[this.currentIndex].w = width;
      this.layout[this.currentIndex].h = height;
      this.currentEle = this.layout[this.currentIndex];
      console.log(this.currentIndex);
      console.log(JSON.stringify(this.layout));
      this.modify();
    },
    onDragstop: function (x, y) {
      this.layout[this.currentIndex].x = x;
      this.layout[this.currentIndex].y = y;
      this.currentEle = this.layout[this.currentIndex];
      console.log(JSON.stringify(this.layout));
      this.modify();
    },
    onEleActivate(index) {
      this.currentIndex = index;
      this.currentEle = this.layout[index];
    },
    modify() {
      localStorage.setItem('layout', JSON.stringify(this.layout));
    },
    create() {
      localStorage.setItem('layout', JSON.stringify(this.layout));
    },
    addImg() {
      console.log(this.layout);
      let ele = {
        "x": this.defaultX,
        "y": this.defaultY,
        "w": this.defaultW,
        "h": this.defaultH,
        "id": this.layout.length > 0 ? parseInt(this.layout[this.layout.length -1].id) + 1 : 0
      };
      this.currentEle = ele;
      this.layout.push(ele);
      this.currentIndex = this.layout.length - 1;
      this.create();
    },
    addChart() {
// 添加图表
    },
    deleteEle(i) {
      this.layout.splice(i,1);
      this.currentEle = null;
    },
    getLayout() {
      if(localStorage.getItem('layout')){
        this.layout = JSON.parse(localStorage.getItem('layout'));
      }
    },
    handleChangeW(value){
      this.currentEle.w = value;
      this.layout[this.currentIndex].w = value;
      console.log(this.layout);
    }
  },
  created() {
    this.getLayout();
  },
  watch: {
    currentEle(oldVal, newVal) {
      console.log(oldVal,newVal);
    }
  }
}; 
</script>
<style lang="scss">
.wrapper{
  position:relative;
}
.screen-main{
    margin-right: 320px;
    height: 100%;
    .report{
      height:800px;
      width:960px;
      min-height:900px;
      position:relative;
      border:1px solid #000;
      margin:20px auto;
      .vdr{
        width:200px;
        height:200px;
        background: transparent;
        border: 1px solid #ddd;
        &.active{
          border: 1px solid #5182E4;
          box-shadow: inset 0 0 0 2px #5182E4;
          background:#fff;
        }
        &:hover{
          cursor: move;
          .el-icon-delete{
            display:block;
          }
        }
        .ele-box{
          width: 100%;
          height:100%;
        }
        .el-icon-delete{
          display:none;
          position:absolute;
          right:10px;
          top:10px;
          cursor:pointer;
        }
      }
    }
}
.side-panel{
  position: absolute;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
  padding: 16px 0 8px;
  overflow-x: hidden;
  overflow-y: auto;  
}
</style>
