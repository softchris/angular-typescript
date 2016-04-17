var gulp = require('gulp')
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('ts', function() {
	var tsResult = gulp.src('src/**/*.ts')
					   .pipe(sourcemaps.init()) // This means sourcemaps will be generated 
					   .pipe(ts({
						   sortOutput: true,
						   // ... 
					   }));
	
	return tsResult.js
				.pipe(concat('all.js')) // You can use other plugins that also support gulp-sourcemaps 
				.pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file 
				.pipe(gulp.dest('dist/js'));
});