module.exports = function (grunt) {
	grunt.registerTask('prod', [
		'clean:assets',
		'uglify:prod',
		'less:prod',
		'linkAssets',
		'copy:html',
		'copy:main'
	]);
};