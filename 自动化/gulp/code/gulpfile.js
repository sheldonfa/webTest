/*gulp的主文件，用于注册任务*/

'use strict';

// 此处代码都是由node执行
// 载入gulp模块
var gulp = require('gulp');

// 注册一个任务
gulp.task('say',function(){
    console.log('hello gulp')
});