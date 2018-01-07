//记得先安装好依赖
var gulp = require('gulp');
var yaml = require('js-yaml');
var path = require('path');
var fs = require('fs');

// 建立api/swagger的swagger.yaml到public下的swagger.yaml联系
gulp.task('swagger', function(){
    var doc = yaml.safeLoad(fs.readFileSync(path.join(__dirname, './api/swagger/swagger.yaml'))); 
    fs.writeFile(path.join(__dirname, './public/swagger.yaml'), JSON.stringify(doc,null,' '));
});

// 实时更新
gulp.task('default', function(){
    gulp.watch('./api/swagger/swagger.yaml',['swagger']);
})