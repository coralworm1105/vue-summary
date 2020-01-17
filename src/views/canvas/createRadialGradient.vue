<template>
  <canvas width="240" height="240"></canvas>  
</template>
<script>
export default{
  methods: {
    createCanvas() {
      var canvas = document.querySelector('canvas');
      var context = canvas.getContext('2d');
      // 创建一个起始圆半径为0的径向渐变对象
      var gradient = context.createRadialGradient(120, 120, 0, 120, 120, 120);
      // 设置起止颜色
      gradient.addColorStop(0, 'red');
      gradient.addColorStop(1, 'pink');
      gradient.addColorStop(1, 'transparent');
      // 矩形填充
      context.fillStyle = gradient;
      context.fillRect(0, 0, 240, 240);
    }
  },
  mounted() {
    this.createCanvas();
  },
  created(){
    
  }
}
</script>