<template>
  <div class="wrapper">
    <div class="screen-main">
      <div class="toolbar">
        <el-button @click="addImg">添加图片</el-button>
      </div>
      <div class="report">
        <template v-for="(item, index) in layout">
          <vue-draggable-resizable class="vdr" :class="{'active': currentEle ? (currentEle.id === item.id) : false}" :active="currentEle ? (currentEle.id === item.id) : false" v-on:dragstop="onDragstop" v-on:resizestop="resizestop" :w="item.w" :h="item.h" :x="item.x" :y="item.y" :parent="true" :grid="[10,10]">
            <div class="ele-box" v-on:click="onClick(index)" >{{index}}</div>
            <i class="el-icon-delete" @click="deleteEle(index)"></i>
          </vue-draggable-resizable>
        </template>
      </div>
    </div>
    <div class="side-panel">
      <div v-if="currentEle">
        <div>X: {{ currentEle.x }}</div>  
        <div>Y: {{ currentEle.y }}</div>
        <div>Width: {{ currentEle.w }}</div>
        <div>Height: {{ currentEle.h }}</div>
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
      console.log(JSON.stringify(this.layout));
    },
    onDragstop: function (x, y) {
      console.log(this.currentIndex);
      console.log(this.layout[this.currentIndex]);
      this.layout[this.currentIndex].x = x;
      this.layout[this.currentIndex].y = y;
      this.currentEle = this.layout[this.currentIndex];
      console.log(JSON.stringify(this.layout));
    },
    onClick(index) {
      this.currentIndex = index;
      this.currentEle = this.layout[index];
    },
    addImg() {
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
    },
    deleteEle(i) {
      this.layout.splice(i,1);
      this.currentEle = null;
    },
    getLayout() {
      this.layout = [{"x":10,"y":10,"w":400,"h":350,"id":0},{"x":510,"y":10,"w":400,"h":350,"id":1}];
    }
  },
  created() {
    this.getLayout();
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
