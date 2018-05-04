<template>
<div class="wrapper">
  <el-button @click="addImg">添加图片</el-button>
  <draggable class="list-group" element="ul" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false"> 
    <transition-group type="transition" :name="'flip-list'">
      <li class="list-group-item" v-for="element in list" :key="element.order" :style="{width:element.width + 'px',height:element.height+'px',left:element.left+'px', top: element.top+'px'}"> 
        <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
        {{element.name}}
        <span class="badge">{{element.order}}</span>
      </li> 
    </transition-group>
  </draggable>
</div>  
</template>
<script>
import draggable from 'vuedraggable'
const message = [ 'vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based' , 'on', 'Sortablejs' ]
export default{
  components: {
    draggable
  },
  data() {
    return {
      // list: message.map( (name,index) => {return {name, order: index+1, fixed: false}; }),
      list: [],
      eleList: ['添加文字','添加图表','添加指标卡','添加图片','添加工作表'],
      editable:true,
      isDragging: false,
      delayedDragging:false
    }
  },
  computed: {
    dragOptions () {
      return  {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      };
    }
  },
  methods: {
    addImg() {
      this.list.push({
        name: 'img' + this.list.length,
        order: this.list.length,
        fixed: false,
        width: 400,
        height: 350,
        left:0,
        top:0
      });
    },
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue){
        this.delayedDragging= true
        return
      }
      this.$nextTick( () =>{
           this.delayedDragging =false
      })
    }
  }
}
</script>
<style lang="scss">
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: .5;
  background: #C8EBFB;
}

.list-group {
  height:800px;
  width:960px;
  min-height:900px;
  position:relative;
  border:1px solid #000;
  margin:20px auto;
}

.list-group-item {
  cursor: move;
  width:200px;
  position:absolute;
  left:0;
  top:0;
}

.list-group-item i{
  cursor: pointer;
}
</style>
