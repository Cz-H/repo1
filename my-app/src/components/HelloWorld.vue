<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-2 col-md-2 upload-bg" @click="uploadBg">
          <svg t="1602904781465" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2861" width="50" height="50">
            <path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2862"></path>
          </svg>
          <input type="file" name="photo" accept="image/png,image/gif,image/jpeg" id="upload" @change="uploadChange($event)">
        </div>
        
        <div class="col-2 col-md-2">
          <img :src="imgUrl"  class="img-thumbnail" @click="showImg">
        </div>
      </div>
    </div>

    <!-- 模态框 -->
    <div class="container-fluid model-bg">
      <!-- 关闭图标 -->
      <div class="row justify-content-end mt-4">
        <div class="col-1" @click="closeBtn">
          <svg t="1603463189963" class="icon2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2877" width="45" height="45">
            <path d="M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z" p-id="2878" fill="#ffffff"></path>
          </svg>
        </div>
      </div>
      <!-- 预览大图 -->      
      <div class="row justify-content-center mt-5">
        <div class="col-4 col-md-6">
          <img :src="imgUrl" class="big-img">
        </div>
      </div>
    </div>

  </div> 
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      imgUrl:"",
      status: false
    }
  },
  methods:{
    // 把点击上传图片绑定在整个添加框里
    uploadBg(){
      $("#upload").click();
    },
    uploadChange(e){
      var file = e.target.files[0];
      console.log(file);
      var param = new FormData();  //创建Form对象
      param.append('file',file);   //通过append向form对象添加数据
      console.log(file.name);
      let config = {
        headers:{'Content-Type':'multipart/form-data'}
      };
      this.$axios.post('http://127.0.0.1:3000/getphoto',param,config)
      .then(res => {
        this.imgUrl = res.data.imgUrl;
        console.log(res.data.imgUrl);
      })
    },
    // 模态框
    showImg(){
      let modelBg = document.getElementsByClassName('model-bg')[0];
      modelBg.style.display="block";
      this.status = true;
    },
    // 关闭模态框
    closeBtn(){
      let modelBg = document.getElementsByClassName('model-bg')[0];
      if(this.status){
        modelBg.style.display='none';
        this.status = false;
      }else if(!this.status){
        modelBg.style.display='block';
        this.status = true;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  position: absolute;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.icon1{
  margin-top: 60px;
}
.upload-bg{
  width: 100%;
  height: 180px;
  border: 2px dashed gray;
  border-radius: 5px;
}
.upload-bg:hover{
  border: 2px dashed rgb(21, 83, 216);;
}
#upload{
  display: none;
}
img-thumbnail{
  width:300px;
}
.model-bg{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(10 , 10 , 10, 0.7);
  display: none;
}
.icon2{
  z-index: 99;
}
.big-img{
  width: 500px;
}
</style>
