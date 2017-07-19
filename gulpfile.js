/*
* @Author: Administrator
* @Date:   2017-07-19 11:35:40
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-19 15:17:43
*/

'use strict';

// 引包
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssnano = require('gulp-cssnano');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  gulp.src('css_yuan/*.html') // 匹配

  .pipe(gulp.dest('css/'));  // 写入  输出
});

gulp.task('init', function() {
	// 第一个参数 源文件路径
	// 第二个参数 执行调用方法名称
	gulp.watch('css_yuan/*.html', ['default']);
	gulp.watch('css_yuan/*.less', ['less']);
});


gulp.task('less', function () {
  return gulp.src('css_yuan/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('css/'));
});








