var gulp = require('gulp');
var node = 'node_modules/';
var bower = 'bower_components/';
var dest = 'libs/';

gulp.task('angular', function(){
    return gulp.src([node + 'angular/**/*', node + 'angular/**/.*'])
               .pipe(gulp.dest(dest + 'angular'));
});

gulp.task('angular-animate', function(){
    return gulp.src([node + 'angular-animate/**/*', node + 'angular-animate/**/.*'])
               .pipe(gulp.dest(dest + 'angular-animate'));
});

gulp.task('angular-ui-router', function(){
    return gulp.src([node + 'angular-ui-router/**/*', node + 'angular-ui-router/**/.*'])
               .pipe(gulp.dest(dest + 'angular-ui-router'));
});

gulp.task('angular-utils-pagination', function(){
    return gulp.src([node + 'angular-utils-pagination/**/*', node + 'angular-utils-pagination/**/.*'])
               .pipe(gulp.dest(dest + 'angular-utils-pagination'));
});

gulp.task('animate-css', function(){
    return gulp.src([node + 'animate.css/**/*', node + 'animate.css/**/.*'])
               .pipe(gulp.dest(dest + 'animate-css'));
});

gulp.task('flexboxgrid', function(){
    return gulp.src([node + 'flexboxgrid/**/*', node + 'flexboxgrid/**/.*'])
               .pipe(gulp.dest(dest + 'flexboxgrid'));
});

gulp.task('font-awesome', function(){
    return gulp.src([node + 'font-awesome/**/*', node + 'font-awesome/**/.*'])
               .pipe(gulp.dest(dest + 'font-awesome'));
});

gulp.task('jquery', function(){
    return gulp.src([node + 'jquery/**/*', node + 'jquery/**/.*'])
               .pipe(gulp.dest(dest + 'jquery'));
});

gulp.task('default',
  ['angular',
  'angular-animate',
  'angular-ui-router',
  'angular-utils-pagination',
  'animate-css',
  'flexboxgrid',
  'font-awesome',
  'jquery'
  ]);
