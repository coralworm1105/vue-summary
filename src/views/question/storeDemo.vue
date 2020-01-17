<template>
 <div class="wrapper">
    <!-- <el-input :value="message" @input="updateMessage"></el-input>
    <el-input :value="color"></el-input> -->
 </div>
</template>
<script>
// import {mapState} from '@/store'
export default {
// computed: {
//     ...mapState({
//       message: state => state.cart.obj.message
//     }),
//     color: {
//       get () {
//           // console.log(this.$store.state.cart);
//         return this.$store.getters.color
//       },
//       set (value) {
//         this.$store.commit('updateColor', value)
//       }
//     }
//   },
//   methods: {
//       updateMessage(e){
//           this.$store.commit('updateMessage',e.target.value);
          
//       },
//       test() {

//       }
//   },
  created() {
    /*------count 的发布订阅者实践------*/
    let state = {
      count: 1
    };
    let listeners = [];

    /*订阅*/
    function subscribe(listener) {
      listeners.push(listener);
      console.log(listeners.length);
    }

    function changeCount(count) {
      state.count = count;
      /*当 count 改变的时候，我们要去通知所有的订阅者*/
      // for (let i = 0; i < listeners.length; i++) {
      //   const listener = listeners[i];
      //   listener();
      // }
      listeners.forEach((listener, i) => {
        listener();
      })
    }    
        /*来订阅一下，当 count 改变的时候，我要实时输出新的值*/
    subscribe(() => {
      console.log(listeners.length + "  "+ state.count);
    });

    /*我们来修改下 state，当然我们不能直接去改 state 了，我们要通过 changeCount 来修改*/
    changeCount(2);
    changeCount(3);
    changeCount(4);
  },
}
</script>
<style lang="scss">

</style>
