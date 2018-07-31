<template>
<div class="wrapper">
  <div class="info">
    <h1>Lazyload Demo <small>By <a href="http://barretlee.com/">Barret Lee</a></small></h1>
    <p>Please open your devtools, watch the logs.</p>
  </div>

  <div class="box">
    <div class="item"><img src="http://g.alicdn.com/s.gif" data-src="https://img.alicdn.com/tps/TB1rPrIKpXXXXbzaXXXXXXXXXXX-520-280.jpg_300x300.jpg" alt="taobao"></div>
    <div class="item"><img src="http://g.alicdn.com/s.gif" data-src="https://aecpm.alicdn.com/simba/img/TB1wQMxKXXXXXXLXpXXSutbFXXX.jpg_300x300.jpg" alt="taobao"></div>
    <div class="item"><img src="http://g.alicdn.com/s.gif" data-src="https://aecpm.alicdn.com/simba/img/TB1lewOKXXXXXb7XVXXSutbFXXX.jpg_300x300.jpg" alt="taobao"></div>
    <div class="item">
      <textarea>
        log(4);
      </textarea>
    </div>
    <div class="item"><img src="http://g.alicdn.com/s.gif" data-src="https://aecpm.alicdn.com/simba/img/TB1y.bIKpXXXXXeaXXXSutbFXXX.jpg_300x300.jpg" alt="taobao"></div>
    <div class="item"><img src="http://g.alicdn.com/s.gif" data-src="https://img.alicdn.com/tps/TB1Xx_PKpXXXXcbXVXXXXXXXXXX-520-280.jpg_300x300.jpg" alt="taobao"></div>
    <div class="item">
      <textarea>
        log(7);
      </textarea>
    </div>
    <div class="item"><img src="http://g.alicdn.com/s.gif" data-src="https://img.alicdn.com/tps/TB1rPrIKpXXXXbzaXXXXXXXXXXX-520-280.jpg_300x300.jpg" alt="taobao"></div>
    <div class="item"><img src="http://g.alicdn.com/s.gif" data-src="https://img.alicdn.com/tps/i1/TB15uKyKpXXXXaraXXXmxYvZVXX-320-180.jpg_300x300.jpg" alt="taobao"></div>
    <div class="item">
      <textarea>
        log(10);
      </textarea>
    </div>
    <div class="item"><img src="http://g.alicdn.com/s.gif" data-src="https://img.alicdn.com/tps/TB1MZjjKpXXXXcaXVXXXXXXXXXX-320-180.png_300x300.jpg" alt="taobao"></div>
    <div class="item"><img src="http://g.alicdn.com/s.gif" data-src="https://img.alicdn.com/tps/i2/TB1pI7XKpXXXXbVXpXXmxYvZVXX-320-180.jpg_300x300.jpg" alt="taobao"></div>
  </div>
</div>   
</template>
<script>
import Lazyload from './index.js'
  function log(msg) {
    window.console && window.console.log && window.console.log(msg);
  }
  log("Pause, restart after 1.5 seconds.")
  var lazyload = new Lazyload(".item", {
    callback: function(){
      log("All lazyload item finished.");
    }
  }).pause();
  setTimeout(function(){
    lazyload.restart();
  }, 1500);    
</script>
<style>
    body {
      font-family: monospace, Georgia, serif;
    }
    .item {
      min-height: 180px;
      padding: 100px 50px;
      border: 1px solid #CCC;
      margin: 20px;
      text-align: center;
      background-color: #FAFAFA;
    }
    .item img {
      border: 5px solid #CCC;
      border-radius: 5px;
      background-color: #FFF;
      max-width: 100%;
    }
    textarea {
      resize: none;
      min-height: 100px;
    }
    .info {
      text-align: center;
    }
    h1 small {
      font-size: 12px;
    }
  </style>