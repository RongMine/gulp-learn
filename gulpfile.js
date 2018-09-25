const gulp = require('gulp');
const childProcess = require('child_process');
// const babel = require('gulp-babel');//babel
// const uglify = require('gulp-uglify');
// const sourcemaps = require("gulp-sourcemaps");//构建source-map
// const gulpBrowser = require("gulp-browser");
const webpackStream = require('webpack-stream');
const config = require('./config.js');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');//开发模式使用服务器

gulp.task('build', function () {
    //用法一： gulp.src(['./src/index.js'])
    //       .pipe(webpackStream(config))
    //       .pipe(gulp.dest('build/'));

    //用法二：
    let compiler = webpack(/*正式环境config*/);
    compiler.run((err, stats) => {
        //console.log(err, stats);
    });
});

gulp.task('start', function () {
    WebpackDevServer.addDevServerEntrypoints(config, config.devServer);
    let compiler = webpack(config);
    let server = new WebpackDevServer(compiler,config.devServer);
    server.listen(8080, 'localhost', (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Starting server on http://localhost:8080');
        childProcess.exec('start http://localhost:8080');
        console.log();
    });
});