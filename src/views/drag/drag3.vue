<template>
  <div class="wrapper designMode">
    <div class="screen-main">
      <div class="toolbar">
        <el-button @click="addImg">添加图片</el-button>
      </div>
      <grid-layout class="report"
            :layout="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :vertical-compact="false"
            :margin="[10, 10]"
            :use-css-transforms="true"
            @layout-updated="layoutUpdatedEvent"
      >
          <grid-item v-for="(item, index) in layout" key="item" :class="{'active': currentEle.id === item.id}"
                    :x="item.x"
                    :y="item.y"
                    :w="item.w"
                    :h="item.h"
                    :i="item.id" @resized="resizedEvent" @moved="movedEvent">
            <div class="ele-box" @click="onClick(index)">{{item.id}}</div>
            <i class="el-icon-delete" @click="deleteEle(index)"></i>
          </grid-item>
      </grid-layout>
    </div>
    <div class="side-panel">
      <div>X: {{ currentEle.x }}</div>  
      <div>Y: {{ currentEle.y }}</div>
      <div>Width: {{ currentEle.w }}</div>
      <div>Height: {{ currentEle.h }}</div>
    </div>
  </div>
</template>
<script>
  import {GridLayout, GridItem} from 'vue-grid-layout'
  export default{
    data() {
      return {
        defaultW: 4,
        defaultH: 4,
        currentEle: {"x":0,"y":0,"w":0,"h":0, id: 0},
        layout: [
          // {"x":0,"y":0,"w":2,"h":2,"id":"0"},
          // {"x":2,"y":0,"w":2,"h":4,"id":"1"},
          // {"x":4,"y":0,"w":2,"h":5,"id":"2"},
          // {"x":6,"y":0,"w":2,"h":3,"id":"3"},
          // {"x":8,"y":0,"w":2,"h":3,"id":"4"},
          // {"x":10,"y":0,"w":2,"h":3,"id":"5"},
          // {"x":0,"y":5,"w":2,"h":5,"id":"6"},
          // {"x":2,"y":5,"w":2,"h":5,"id":"7"},
          // {"x":4,"y":5,"w":2,"h":5,"id":"8"},
          // {"x":6,"y":4,"w":2,"h":4,"id":"9"},
          // {"x":8,"y":4,"w":2,"h":4,"id":"10"},
          // {"x":10,"y":4,"w":2,"h":4,"id":"11"},
          // {"x":0,"y":10,"w":2,"h":5,"id":"12"},
          // {"x":2,"y":10,"w":2,"h":5,"id":"13"},
          // {"x":4,"y":8,"w":2,"h":4,"id":"14"},
          // {"x":6,"y":8,"w":2,"h":4,"id":"15"},
          // {"x":8,"y":10,"w":2,"h":5,"id":"16"},
          // {"x":10,"y":4,"w":2,"h":2,"id":"17"},
          // {"x":0,"y":9,"w":2,"h":3,"id":"18"},
          // {"x":2,"y":6,"w":2,"h":2,"id":"19"}
        ],
      }
    },
    components: {
      GridLayout,
      GridItem
    },
    methods: {
      layoutUpdatedEvent: function(newLayout){
        console.log("Updated layout: ", newLayout)
      },
      movedEvent(i, newX, newY){
        this.layout[i].x = newX;
        this.layout[i].y = newY;
        this.currentEle = this.layout[i];
        console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
        console.log("MOVED i=" + i + ", X=" + this.layout[i].x + ", Y=" + this.layout[i].y);
      },
      resizedEvent(i, newH, newW, newHPx, newWPx){
        this.layout[i].w = newW;
        this.layout[i].h = newH;
        this.currentEle = this.layout[i];
        console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
      },
      onClick(i){
        this.currentEle = this.layout[i];
      },
      addImg() {
        let ele = {
          "x": 4,
          "y": 4,
          "w": this.defaultW,
          "h": this.defaultH,
          "id": this.layout.length > 0 ? parseInt(this.layout[this.layout.length -1 ].id) + 1 : 0
        };
        this.currentEle = ele;
        this.layout.push(ele);
      },
      deleteEle(i) {
        this.layout.splice(i,1);
      }
    }
  } 
</script>
<style lang="scss">
/*** EXAMPLE ***/
.wrapper{
  position:relative;
  width:100%;
  height:100%;
}
.designMode{
  .screen-main{
      margin-right: 320px;
      height: 100%;
      .report{
        height:900px;
        width:996px;
        min-height:900px;
        position:relative;
        border:1px solid #000;
        margin:20px auto;
        .vdr{
          width:200px;
          height:200px;
          border:1px solid blue;
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
  #content {
      width: 100%;
  }

  .vue-grid-layout {
      background: #eee;
  }

  .layoutJSON {
      background: #ddd;
      border: 1px solid black;
      margin-top: 10px;
      padding: 10px;
  }

  .eventsJSON {
      background: #ddd;
      border: 1px solid black;
      margin-top: 10px;
      padding: 10px;
      height: 100px;
      overflow-y: scroll;
  }

  .columns {
      -moz-columns: 120px;
      -webkit-columns: 120px;
      columns: 120px;
  }
  .vue-grid-item{
    &:not(.vue-grid-placeholder) {
      background: transparent;
      border: 1px solid #ddd;
    }
    &.resizing {
      opacity: 0.9;
    }
    &.static {
        background: #cce;
    }
    .text {
      font-size: 24px;
      text-align: center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 100%;
      width: 100%;
    }
    .no-drag {
      height: 100%;
      width: 100%;
    }
    .minMax {
      font-size: 12px;
    }
    .add {
      cursor: pointer;
    }
    .vue-draggable-handle {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      left: 0;
      background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
      background-position: bottom right;
      padding: 0 8px 8px 0;
      background-repeat: no-repeat;
      background-origin: content-box;
      box-sizing: border-box;
      cursor: pointer;
      display:none;
    }
    .vue-resizable-handle {
        z-index: 5000;
        position: absolute;
        width: 20px;
        height: 20px;
        bottom: 0;
        right: 0;
        background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
        background-position: bottom right;
        padding: 0 3px 3px 0;
        background-repeat: no-repeat;
        background-origin: content-box;
        box-sizing: border-box;
        cursor: se-resize;
        display:none;
    }
    .el-icon-delete{
      display:none;
      position:absolute;
      right:10px;
      top:10px;
      cursor:pointer;
    }
    &.active{
      border: 1px solid #5182E4;
      box-shadow: inset 0 0 0 2px #5182E4;
      background:#fff;
      .vue-draggable-handle{
        display:block;
      }
      .vue-resizable-handle{
        display:block;
      }
    }
    &:hover{
      box-shadow: inset 0 0 0 2px #ccc;
      .vue-draggable-handle{
        display:block;
      }
      .vue-resizable-handle{
        display:block;
      }
      .el-icon-delete{
        display:block;
      }
    }
    .ele-box{
      width: 100%;
      height:100%;
    }
  }
}
</style>
