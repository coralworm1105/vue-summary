<template>
<div class="wrapper">
  <div class="block">版权所有 (c) 2009 Microsoft Corporation。保留所</div>  
  <div class="block2">版权所有 (c) 2009 Microsoft Corporation。保留所Compiled successfully in 1215ms</div> 
</div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    multiply() {
      const a = [1,2,3,4,5];
      Array.prototype.multiply = function(){
        this.forEach((item) => {
          this.push(item * item)
        });
      }
      a.multiply();
      console.log(a);
    },
    test(){
      const a = {
        key1: Symbol(),
        key2: 10
      }
      console.log(JSON.stringify(a))
    },
    testLet() {
      // let a = 1;
      let a = 2;
      var b = 3;
      var b = 4;
      console.log(a)  // Identifier 'a' has already been declared
      console.log(b)  // 4

      for (var i = 0; i < 10; i++) {
        setTimeout(function(){
          console.log(i);
        })
      }
      // 输出十个 10
      for (let j = 0; j < 10; j++) {
        setTimeout(function(){
          console.log(j);
        })
      }
      //print 0123456789
    },
    testLet2() {
      // let 不存在变量提升，var 会变量提升:

      console.log(a);  //ReferenceError: a is not defined
      let a = "apple";
      
      console.log(b);  //undefined
      var b = "banana";
    },
    testSymbol() {
      let sy = Symbol("aa");
      console.log(sy);
      console.log(typeof sy)
      let sy2 = Symbol("aa")
      console.log(sy === sy2)
    },
    testMap() {
      let first = new Map([['1','one'],[2,'two'],[3,'three']]);
      let second = new Map([['1','one'],[2,'two']]);
      let merged = new Map([...first, ...second]);
      console.log(merged);
    },
    unique(str) {
      let arr = str.split('');
      let newObj = {};
      arr.sort();
      for(let i = 0 ; i < arr.length;i++){
        if(arr[i] != arr[i-1] && arr[i] == arr[i+1]){
          newObj[arr[i]] = 1;
        } else {
          newObj[arr[i]] = newObj[arr[i]] ? ++newObj[arr[i]] : 1;
        }
      }
      return newObj;
    },
    unique2(str) {
      let arr = str.split('');
      let newObj = {};
      for(let i = 0; i < arr.length;i++) {
        let key = arr[i];
        if(!newObj[key]){
          newObj[key] = 1;
        } else {
          newObj[key] += 1;
        }
      }
      return newObj;
    },
    unique3(str) {
      let arr = str.split("");
      let temp = new Map();
      // arr.filter(a => !temp.has(a) && temp.set(a, 1));
      arr.filter(a => {
        if(!temp.has(a)) {
          temp.set(a, 1);
        } else {
          let test = parseInt(temp.get(a));
          temp.set(a, test + 1);
        }
      })
      console.log(arr.join(""));
      console.log(temp);
      return arr.join("");
    },
    unique4(str) {
      let arr = str.split("");
      arr = [...new Set(arr)].join("");
      // arr = (a => [...new Set(a)])(arr).join("");
      return arr
    },
    unique5(str) {
      let arr = str.split("");
      let s = new Set();
      arr.forEach(item => s.add(item));
      return [...s].join("");
      // return [...s];
    },
    getEleCount(ele){
      //统计数组或字符串中每个元素出现的次数
      let arr = typeof(ele) === 'string' ? ele.split('') : ele;
      return arr.reduce(function(res, cur) {
          res[cur] ? res[cur] ++ : res[cur] = 1
          return res;
      }, {})      
    },
    testLet3(){
      function b(){
        var a = 1;
        return ()=>{
          a++;
          return a;
        }
      }
      let c = b();
      console.log(c());
      console.log(c());
      console.log(c());      
    },
  //防抖节流
    debounce(fn, seconds){
      var timer = null;
      return function(){
        var context = this;
        var args = arguments;
        if(timer){
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(function(){
          fn.apply(context,args);
        },seconds)
      }
    },
    //拉平二维数组
    reduceDimension(){
      var arr = [[1,4,2],[4,2,78],[209,4,8]];
      // let reduceArr = [];
      let reduceArr2 = [];
      let reduceArr3 = [];
      // reduceArr = arr.flat();
      reduceArr2 = Array.prototype.concat.apply([],arr);
      for(let i in arr){
        console.log(arr[i]);
        reduceArr3 = reduceArr3.concat(arr[i]);
      }
      console.log(reduceArr2,reduceArr3);
    }
  },
  created() {
    // this.multiply();
    // this.test();
    // this.testLet();
    // this.testLet2();
    // this.testSymbol();
    // this.testMap();
    // let arr = [];
    // Array.from(kwList, item=>{
    //   arr.push(item.kwValue);
    // })
    let str = '12qwe345671dsfa233dsf9876ds243dsaljhkjfzxcxzvdsf蓝天震月光手札最近的授业一';
    // console.log(this.unique2(str));
    // console.log(this.unique3(str));
    // console.log(this.unique4(str));
    // if(1 == 1) {
    //   let a = 10;
    //   var b = 1;
    // }
    // console.log(a,b);
    // this.unique5(str);
    // this.testLet3();
    // console.log('统计字符串中每个字母的数量:');
    // console.log(this.getEleCount('gaeerfaba'));
    // this.debounce(this.testLet3);
    this.reduceDimension();
  },
}
</script>
<style lang="scss">
.block{
  width:200px;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom:10px;
}
.block2{
  width:200px;
  overflow:hidden;
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orgin:vertical;
}
</style>
