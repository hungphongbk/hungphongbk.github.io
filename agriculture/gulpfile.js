var g=require('gulp'),
	pl=require('gulp-load-plugins')();

var conf={
	src:'src/',
	dest:'dist/'
};

g.task('clean',function(){
    return g.src(conf.dest,{read:false})
        .pipe(pl.clean());
});
g.task('css', function(){
	g.src(conf.src+'css/**/*.css')
		.pipe(pl.concat('app.css'))
		.pipe(pl.cssmin())
		.pipe(pl.rename('app.min.css'))
		.pipe(g.dest(conf.dest+'css'));
});
g.task('js', function(){
	g.src(conf.src+'js/**/*.js')
		.pipe(pl.ngAnnotate())
		.pipe(pl.angularFilesort())
		.pipe(pl.concat('app.js'))
		.pipe(pl.uglify())
		.pipe(pl.rename('app.min.js'))
		.pipe(g.dest(conf.dest+'js'));
});

g.task('default',['clean','css','js']);