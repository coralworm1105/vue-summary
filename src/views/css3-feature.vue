<template>
<div class="wrapper">
  <div class="demo-hover demo-ul ul-transition t_c clearfix">
    <ul class="fllil">
        <li>
            <a href="javascript:;">html</a>
            <ul>
                <li><a href="#">div</a></li>
                <li><a href="#">h1</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:;">js</a>
            <ul>
                <li><a href="#">string</a></li>
                <li><a href="#">array</a></li>
                <li><a href="#">object</a></li>
                <li><a href="#">number</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:;">css3</a>
            <ul>
                <li><a href="#">transition</a></li>
                <li><a href="#">animation</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:;">框架</a>
            <ul>
                <li><a href="#">vue</a></li>
                <li><a href="#">react</a></li>
            </ul>
        </li>
    </ul>
    <div class="clear"></div>
  </div>
  <br/>
  <div class="box">
    <div class="column">
      <span class="item"></span>
      <span class="item"></span>
    </div>
    <div class="column">
      <span class="item"></span>
      <span class="item"></span>
    </div>
  </div>
  <br/>
  <div class="Grid">
    <div class="Grid-cell">...</div>
    <div class="Grid-cell">...</div>
    <div class="Grid-cell">...</div>
  </div>
</div>
</template>

<style lang="scss">
/* transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0) */
.demo-ul{margin-bottom: 300px;}
.demo-ul li{
    padding: 0 10px;
    width: 100px;
    background: #f90;
    position: relative;
    float:left;
}
.demo-ul li a{
    display: block;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.demo-ul li ul{
    position: absolute;
    width: 100%;
    top: 40px;
    left: 0;
    transform: scaleY(0);
    overflow: hidden;
}
.ul-transition ul{
    transform-origin: 0 0;
    transition: all .5s;
}
.demo-ul li:hover ul{
    transform: scaleY(1);
}
.demo-ul li ul li{
    float: none;
    background: #0099ff;
}
/*
.box{
  display:flex;
  justify-content: space-between;
  width:200px;
  height:200px;
  border:1px solid #000;
  .column{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    .item{
      width:10px;
      height:10px;
      border-radius:10px;
      background:#000;
    }
  }
  .column:nth-child(2){
    .item{
      align-self:flex-end;
    }
  }
}
*/
.box {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  width:200px;
  height:200px;
  border:1px solid #000;
}

.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  .item{
    width:50px;
    height:50px;
    border-radius:50px;
    background:#000;
  }
}
.Grid{
  display:flex;
  .Grid-cell{
    flex:1;
    height:20px;
    background:#ddd;
    margin:0 5px;
  }
}

</style>
