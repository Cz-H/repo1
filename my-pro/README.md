DEMO
===========================

###########环境依赖
node v12.16.1+
redIs ~

###########部署步骤
1. npm install  //安装node运行环境,安装依赖

2. npm start  //启动运行



###########目录结构描述
├── Readme.md                   // help
├── bin                      
│   └── www                 
├── public                      // web静态资源加载
│   ├── images                  //保存上传的图片
│   ├── javascripts 
│   └── stylesheets
├── routes                      
│   └── index.js                //路由 API   
├── views                       //视图模板
│   ├── error.jade              
│   ├── index.jade 
│   └── layout.jade
├── app                         // 应用入口文件
├── package.json                //配置环境文件
└── package-lock.json

