// 引入需要的模块
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');

// 压缩public目录下所有html文件, minify-html是任务名, 设置为default，启动gulp压缩的时候可以省去任务名
gulp.task('minify-html', function() {
    return gulp.src('./public/**/*.html') // 压缩文件所在的目录
        .pipe(htmlclean())
        .pipe(htmlmin({
        	collapseWhitespace: true, //从字面意思应该可以看出来，清除空格，压缩html，这一条比较重要，作用比较大，引起的改变压缩量也特别大
            collapseBooleanAttributes: true, //省略布尔属性的值，比如：<input checked="checked"/>,那么设置这个属性后，就会变成 <input checked/>
            removeComments: true, //清除html中注释的部分
            removeEmptyAttributes: true, //清除所有的空属性
            removeScriptTypeAttributes: true, //清除所有script标签中的type="text/javascript"属性。
            removeStyleLinkTypeAttributes: true, //清楚所有Link标签上的type属性。
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public')) // 输出的目录
});

// 压缩css
gulp.task('minify-css', function() {
    return gulp.src(['./public/**/*.css','!./public/js/**/*min.css'])
        .pipe(minifycss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public'));
});
// 压缩js
gulp.task('minify-js', function() {
    return gulp.src(['./public/**/.js','!./public/js/**/*min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
// 压缩图片
gulp.task('minify-images', function() {
    return gulp.src('./public/images/**/*.*')
        .pipe(imagemin(
        [imagemin.gifsicle({'optimizationLevel': 3}), 
        imagemin.mozjpeg({'progressive': true}), 
        imagemin.optipng({'optimizationLevel': 7}), 
        imagemin.svgo({
                plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                ]
        })],
        {'verbose': true}))
        .pipe(gulp.dest('./public'))
});
// gulp 4.0 适用的方式
gulp.task('default',gulp.series(gulp.parallel('minify-html','minify-css','minify-js','minify-images')));
