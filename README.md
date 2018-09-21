#### [gulp-learn](https://github.com/RongMine/gulp-learn "地址")

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

#### 编写插件

-
