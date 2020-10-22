//引入node模块
var express = require('express');
const bodyParser = require('body-parser');
const tool = require("./model/tool");


// 创建express程序
var app = express();
// 配置静态资源文件
app.use(express.static('public'));
// 配置视图模板
app.set('view engine', 'pug');
app.set('views', './views'); //设置模板文件路径




// 添加HTTP路由
app.get('/upload', function(req, res) {
    res.render('upload');
});

app.post('/upload/add', tool.multer().single('photo'), function(req, res) {
    let file = req.file;
    res.render('upload', {
        imgUrl: 'http://127.0.0.1:3000/uploads/'+file.filename,
    });

});





// 启动http服务器
var serve = app.listen(3000, function () {
    console.log('express app is running on http://127.0.0.1:3000');
})