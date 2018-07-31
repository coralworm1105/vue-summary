<template>
<div class="test_triangle_border">
  <a href="#" @mouseover="isShow=true" @mouseout="isShow=false">三角形</a>
  <div class="popup" v-show="isShow">
      <span><em></em></span>纯CSS写带边框的三角形
  </div>
</div>    
</template>
<script>
  export default{
    data() {
      return {
        isShow: false
      }
    }
  }
</script>
<style lang="scss">

.test_triangle_border{
    margin:0 auto 20px;
    position:relative;
  a{
      color:#333;
      font-weight:bold; 
      text-decoration:none;
  }
  .popup{
    width:150px;
    background:#fc0; 
    padding:10px 20px; 
    color:#333;  
    border-radius:4px;
    position:absolute; 
    top:30px; 
    left:50%;
    margin-left:-75px;
    border:1px solid #333;
    span{
        display:block; 
        width:0; 
        height:0; 
        border-width:0 10px 10px; 
        border-style:solid; 
        border-color:transparent transparent #333; 
        position:absolute; 
        top:-10px; 
        left:50%;/* 三角形居中显示 */
        margin-left:-10px;/* 三角形居中显示 */
      em{
        display:block; 
        width:0; 
        height:0; 
        border-width:0 10px 10px; 
        border-style:solid; 
        border-color:transparent transparent #fc0; 
        position:absolute; 
        top:1px; 
        left:-10px;
      }
    }
  }
}
</style>
