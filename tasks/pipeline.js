/**
 * grunt/pipeline.js
 *
 * The order in which your css and javascript files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */

// CSS files to inject in order
var cssFilesToInject = [

];

// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

];

var jsIEFilesToInject = [

];

var jsIE8FilesToInject = [

];

module.exports.cssFilesToInject = cssFilesToInject;
module.exports.jsFilesToInject = jsFilesToInject;
module.exports.jsIEFilesToInject = jsIEFilesToInject;
module.exports.jsIE8FilesToInject = jsIE8FilesToInject;

module.exports.app = [
    'src/app/_main/init.js',
    'src/core/**/*.js',
    'src/app/components/**/*.js'
];