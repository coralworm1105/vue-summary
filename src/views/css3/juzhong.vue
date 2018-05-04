<template>
<div class="wrapper">
  <!-- 此方法将只能垂直居中单行文本。只需将行高设置为对象的高度，文本就会居中。 -->
  <div class="container">content</div>
  <br/>
  <div class="container2"><div>content</div></div>
  <br/>
  <div class="container3">
      <div class="content">content</div>
  </div>
  <br/>
  <!-- 在这种方法中，我们将在内容元素前加一个div。这个div将设置为height:50%;并且margin-bottom为内容高度的一半。然后内容清除浮动，内容将会居中。
你应该注意到，如果内容元素在body内，我们需要设置height:100%。 -->
  <div class="container4">
    <div class="floater"><!--This block have empty content --></div>
    <div class="content">Content section</div>
  </div>
  <br/>
  <div class="container5">
    <div class="vertically_center">
        <p>I am vertically centered!</p>
    </div>
    <div class="extra"><!-- ie comment --></div>
  </div>
  <br/>
  <div class="container6">
    <img src="../../assets/1.jpg" alt="flexbox way" />
  </div>
  <br/>
  <div class="container7">
    <div>Make it centered in the window</div>
  </div>
  <div class="container8">
    <div>Make it centered in the window</div>
  </div>
</div>
</template>
<script>
    
</script>
<style lang="scss">
body{
    height: 100%;
}
.wrapper{
  &>div{
    border: 1px solid red;
  }
  .container {
    height: 100px;
    line-height: 100px; 
  }
  .container2 {
    position:relative;
    height:100px;
    &>div{
      width:70px;
      height: 20px;
      position: absolute;
      top: 50%;
      margin-top: -10px;
    }
  }
  .container3 {
    height: 100px;
    display: table;
    .content {
        display:table-cell;
        vertical-align: middle;
    }
  }
  .container4{
    height: 500px;
    width: 400px;
    border: 1px solid;
    .floater{
      float:left;
      height:50%;
      margin-bottom: -120px;/*240px/2*/
    }
    .content {
      clear:both;
      width: 300px;
      margin: 0 auto;
      height: 240px;
      position: relative;
      border: 1px solid red;
    }
  }
  .container5 {
      height: 500px;
      border: 1px solid red;
    .vertically_center,
    .extra {
        display: inline-block;
        vertical-align: middle;
    }
    .extra {
        height: 100%; 
    }
  }
  .container6{
    height:400px;
    display:flex;
    justify-content: center;
    align-items:center;
    width:100%; //for firefox
  }
  .container7 {
    height:500px;
    div {
      display:inline-block;
      vertical-align: middle;
      width: 99.5%;
    }
    &:after {
      content:"";
      display: inline-block;
      vertical-align: middle;
      height: 100%;
      width: 0px;
    }
  }
  // .container8 {
  //     position: absolute;
  //     top:0;
  //     left:0;
  //     right:0;
  //     bottom:0;
  //     margin: auto;
  // }
}
</style>
