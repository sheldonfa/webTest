/**
 * Created by Administrator on 2016/11/19.
 */

/**
 * 用node执行下列文件
 */

'use strict';

// 可以用来创建一个http服务器
var http = require("http");
// 创建一个服务
var server = http.createServer(function(request,response){
    // 打印请求地址 注意：http请求默认会请求/favicon.ico默认控件
    console.log(request.url);
    // 处理请求和响应
    response.writeHead(200,{
        'Content-Type':'text/html', //告诉客户端我给你的是HTML
        'key1':'value1'
    });
    // 往响应体中放数据
    response.write('<h1>hello node</h1>');
    response.end(); //结束
});
// 启动服务
server.listen(8080,function(error){
    console.log('成功监听8080端口')
});