#### [gulp-learn](https://github.com/RongMine/gulp-learn "地址")
###### gulp更偏重任务管理，可以和webpack一同使用，webpack更偏于模块处理，相当于browserify，但比其更强大
#### 示例内容：
(直接使用webpack处理，gulp只管理任务)
- react、scss、ES6支持
- 热更新支持react、scss
- 代码分离，文件缓存
- 文件压缩


#### 笔记：
##### API
- gulp.src(globs[,options]) 匹配模式，作用：过滤文件，形成要处理的stream(流)

- gulp.dest(path[,options]) 输出所有数据 如gulp.src(xxxx).pipe(gulp.dest('./build'))

- gulp.task(name[,deps],fn) 定义一个任务
  name:String 任务名字
  deps:Array  任务之前执行的任务列表
  fn:Function 任务要执行的操作

- gulp.watch(glob[,options],tasks)或gulp.watch(glob[,options,callback]) 监听文件，可在文件改动时进行处理
  glob:String 或 Array,字符串或数组，如'js/**/*.js'或['js/**/*.js','src/**/*.js']
  tasks:任务列表

#### [插件列表](https://gulpjs.com/plugins/)

#### 编写插件[来自gulp中文网](https://www.gulpjs.com.cn/)

- [导读](https://www.gulpjs.com.cn/docs/writing-a-plugin/guidelines/)

- [使用Buffer](https://www.gulpjs.com.cn/docs/writing-a-plugin/using-buffers/)

- [使用stream](https://www.gulpjs.com.cn/docs/writing-a-plugin/dealing-with-streams/)

- [测试](https://www.gulpjs.com.cn/docs/writing-a-plugin/testing/)

