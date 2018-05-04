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
  <div class="demo-music">
    <div class="music">
      <ul id="waves" class="movement">
        <li class="li1"><span class="ani-li"></span></li>
        <li class="li2"><span class="ani-li"></span></li>
        <li class="li3"><span class="ani-li"></span></li>
        <li class="li4"><span class="ani-li"></span></li>
        <li class="li5"><span class="ani-li"></span></li>
        <li class="li6"><span class="ani-li"></span></li>
      </ul>
      <div class="music-state"></div>
    </div>
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
/*音乐震动条*/
.demo-music {
  position: absolute;
  width: 100%;
  height: 200px;
  top: 120px;
  zoom: 1.5;
}

.demo-music .music {
  width: 80px;
  height: 50px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-40px, -25px);
  transform: translate(-40px, -25px);
  position: absolute;
}

.demo-music #waves {
  width: 80px;
  height: 50px;
  position: absolute;
  top: 12px;
  left: 12px;
}

.demo-music #waves li {
  position: relative;
  float: left;
  height: 100%;
  width: 12%;
  overflow: hidden;
  margin-right: 1px;
}

.demo-music #waves li span {
  position: absolute;
  bottom: 0;
  display: block;
  height: 100%;
  width: 100px;
  background: #09f;
}

.demo-music #waves .li1 span {
  animation: waves 0.8s linear 0s infinite alternate;
  -webkit-animation: waves 0.8s linear 0s infinite alternate;
}

.demo-music #waves .li2 span {
  animation: waves 0.9s linear 0s infinite alternate;
  -webkit-animation: waves 0.9s linear 0s infinite alternate;
}

.demo-music #waves .li3 span {
  animation: waves 1s linear 0s infinite alternate;
  -webkit-animation: waves 1s linear 0s infinite alternate;
}

.demo-music #waves .li4 span {
  animation: waves 0.8s linear 0s infinite alternate;
  -webkit-animation: waves 0.8s linear 0s infinite alternate;
}

.demo-music #waves .li5 span {
  animation: waves 0.7s linear 0s infinite alternate;
  -webkit-animation: waves 0.7s linear 0s infinite alternate;
}

.demo-music #waves .li6 span {
  animation: waves 0.8s linear 0s infinite alternate;
  -webkit-animation: waves 0.8s linear 0s infinite alternate;
}
@-webkit-keyframes waves {
  10% {
    height: 20%;
  }
  20% {
    height: 60%;
  }
  40% {
    height: 40%;
  }
  50% {
    height: 100%;
  }
  100% {
    height: 50%;
  }
}

@keyframes waves {
  10% {
    height: 20%;
  }
  20% {
    height: 60%;
  }
  40% {
    height: 40%;
  }
  50% {
    height: 100%;
  }
  100% {
    height: 50%;
  }
}
</style>
