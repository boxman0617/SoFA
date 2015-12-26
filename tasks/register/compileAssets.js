module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:assets',
		'uglify:dev',
		'less:dev',
		'copy:html',
		'copy:main'
	]);
};