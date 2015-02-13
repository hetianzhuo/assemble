var verb = require('verb');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

verb.task('mocha', function () {
  verb.src('test/*.js')
    .pipe(mocha({reporter: 'spec'}));
});

verb.task('jshint', function() {
  verb.src(['*.js', 'lib/*.js', 'test/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

verb.task('readme', function () {
  verb.src('.verb.md')
    .pipe(verb.dest('./'));
});

verb.task('docs', function () {
  verb.src('docs/_verb/*.md')
    .pipe(verb.dest('docs'));
});

verb.task('default', ['mocha', 'jshint', 'readme', 'docs']);
