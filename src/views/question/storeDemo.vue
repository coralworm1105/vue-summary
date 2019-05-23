<template>
 <div class="wrapper">
    <el-input :value="message" @input="updateMessage"></el-input>
    <el-input :value="color"></el-input>
 </div>
</template>
<script>
// import {mapState} from '@/store'
export default {
computed: {
  // ...mapState({
  //   message: state => state.cart.obj.message
  // }),
  color: {
    get () {
        // console.log(this.$store.state.cart);
      return this.$store.getters.color
    },
    set (value) {
      this.$store.commit('updateColor', value)
    }
  }
},
    methods: {
        updateMessage(e){
            // this.$store.commit('updateMessage',e.target.value);
            
        }
    },
}
</script>
<style lang="scss">

</style>
