var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");
var multiparty = require("multiparty");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getphoto',function(req, res){
  let form = new multiparty.Form({
    uploadDir:'./public/images'
  });
  form.parse(req);

  form.on('field', (name,value)=>{
    console.log('普通数据：',name,value);
  });
  form.on('file',(name,filevalue)=>{
    console.log('文件信息：',name,filevalue);
    console.log(filevalue.path)
    var pathLength = filevalue.path.length;
    var urlString = filevalue.path.lastIndexOf('\\');
    var imgName = filevalue.path.substring(urlString+1, pathLength);
    console.log(imgName);
    res.json({'imgUrl': 'http://127.0.0.1:3000/images/'+imgName});
  });


});

module.exports = router;
