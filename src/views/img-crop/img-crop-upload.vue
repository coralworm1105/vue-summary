<template>
<div class="wrapper">
	<el-button type="primary" @click="setAvatar">设置头像</el-button>
	<my-upload field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="showDialog"
		:width="300"
		:height="300"
		url="https://httpbin.org/post"
		:params="params"
		:headers="headers"
		img-format="png"
    :withCredentials="true"></my-upload>
	<img :src="imgDataUrl">
</div>
</template>

<script>
	import 'babel-polyfill'; // es6 shim
	import myUpload from 'vue-image-crop-upload';

export default{
  data(){
    return {
      showDialog: false,
      params: {
        token: '123456798',
        name: 'avatar'
      },
      headers: {
        smail: '*_~'
      },
      imgDataUrl: '' // the datebase64 url of created image
    }
  },
  components: {
    'my-upload': myUpload
  },
  methods: {
    setAvatar() {
      this.showDialog = true;
    },
          /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl, field){
      console.log('-------- crop success --------');
      this.imgDataUrl = imgDataUrl;
    },
    /**
     * upload success
     *
     * [param] jsonData   服务器返回数据，已进行json转码
     * [param] field
     */
    cropUploadSuccess(jsonData, field){
      console.log('-------- upload success --------');
      console.log(jsonData);
      console.log('field: ' + field);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field){
      console.log('-------- upload fail --------');
      console.log(status);
      console.log('field: ' + field);
    }
  }
}

</script>
<style lang="scss">
.wrapper{
  display:flex;
  align-items: center;
  flex-direction: column;
  padding:20px;
  .el-button{
    width:100px;
  }
  img{
    width:100px;
  }
}
</style>
