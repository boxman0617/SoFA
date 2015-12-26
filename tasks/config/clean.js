/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out before recompile.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(grunt) {

	grunt.config.set('clean', {
		'assets': [
            'dist/assets/js/**/*.js',
            'dist/assets/css/**/*.css',
            'dist/assets/html/**/*.html'
		]
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
};
