import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
// gulp.task('build',function(callback){
//     runSequence('clean','css','pages','scripts',['browser','serve'],callback)
// })