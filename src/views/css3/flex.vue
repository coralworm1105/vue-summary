<template>
<div class="wrapper">
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
  <div class="Grid">
    <div class="Grid-cell ul1of4">...</div>
    <div class="Grid-cell">...</div>
    <div class="Grid-cell ul1of3">...</div>
  </div>
  <div class="HolyGrail">
    <header>...</header>
    <div class="HolyGrail-body">
      <main class="HolyGrail-content">...</main>
      <nav class="HolyGrail-nav">...</nav>
      <aside class="HolyGrail-ads">...</aside>
    </div>
    <footer>...</footer>
  </div>
  <br/>
  <div class="formWrapper">
    <div class="InputAddOn">
      <span class="InputAddOn-prefix">
        <svg-icon iconClass="tag"></svg-icon>
      </span>
      <input class="InputAddOn-field" placeholder="请输入"/>
      <button class="InputAddOn-item">send</button>
    </div>
  </div>
  <br/>
  <div class="media">
    <img class="media-figure" src="../../assets/1.jpg" alt="" width="60">
    <p class="media-body">周五的夜晚，逐字逐句读着这本书，越看越精神，越看越清新。翌日清晨，我拉开窗幔，推开窗门，抬头望见，弯弯的娥眉月高悬在天，像两头尖尖的小船，又似大大的括号。天空水洗一样的银青，这般清晰，这般静美，我的心情也随之清扬。</p>
  </div>
  <br/>
  <div class="Site">
    <header>...</header>
    <main class="Site-content">...</main>
    <footer>...</footer>
  </div>
  <br/>
  <div class="parent">
    <div class="child">a</div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child">bbbbbbbbbbbbbbbbbbbbbbbbb</div>
    <div class="child"></div>
  </div>  
</div>
</template>

<style lang="scss">
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
  margin:10px;
  .Grid-cell{
    flex:1;
    height:20px;
    background:#ddd;
    margin:0 5px;
  }
  .ul1of2{
    flex:0 0 50%;
  }
  .ul1of3{
    flex:0 0 33.3333%;
  }
  .ul1of4{
    flex:0 0 25%;
  }    
}
.HolyGrail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

header,
footer {
  flex: 1;
  background:gray;
  height:60px;
}

.HolyGrail-body {
  display: flex;
}

.HolyGrail-content {
  flex: 1;
  background:#ddd;
  height:300px;
}

.HolyGrail-nav, .HolyGrail-ads {
  /* 两个边栏的宽度设为12em */
  flex: 0 0 12em;
  background:orange;
  height:300px;
}

.HolyGrail-nav {
  /* 导航放到最左边 */
  order: -1;
  background:lightblue;
}
@media (max-width: 1366px) {
  .HolyGrail-body {
    flex-direction: column;
    flex: 1;
  }
  .HolyGrail-nav,
  .HolyGrail-ads,
  .HolyGrail-content {
    flex: auto;
  }
}
.formWrapper{
  margin:10px;
  width:400px;
  .InputAddOn {
    display: flex;
    border:1px solid #ddd;
    background:#ccc;
    color:#ddd;
    .InputAddOn-prefix{
      padding:0 10px;
      color:#333;
      display:flex;
      flex-direction:column;
      justify-content: center;
    }
    .InputAddOn-field {
      flex: 1;
      border:1px solid #ddd;
      background:#fff;
      color:#606266;
      padding:5px;
      line-height:20px;
      font-size:12px;
    }
    button{
      border:none;
      padding:0 10px;
      cursor:pointer;
      outline:none;
    }
  }
}
.media{
  display:flex;
  width:400px;
  border:1px solid gray;
  padding:10px;
  // align-items: flex-start;
  align-items:center;
  .media-figure{
    margin-right:10px;
  }
  .media-body{
    flex:1;
    /*多行超出省略号*/
    overflow:hidden;
    display:-webkit-box;
    -webkit-line-clamp:5;
    -webkit-box-orient:vertical;
    text-indent:2em;
  }
}
/*固定的底栏*/
.Site {
  display: flex;
  width:300px;
  border:1px solid #000;
  min-height: 200px;
  flex-direction: column;
  header,footer{
    background:#000;
    height:4px;
  }
}
.Site-content {
  flex: 1;
}
/**/
.parent {
  width: 200px;
  height: 150px;
  background-color: black;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}

.child {
  box-sizing: border-box;
  background-color: white;
  flex: 0 0 25%;
  height: 50px;
  border: 1px solid red;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
</style>
