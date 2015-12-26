/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		'html': {
			'files': [
				{
					'expand': true,
					'src': ['src/app/components/**/*.html', 'src/core/**/*.html'],
					'dest': 'dist/assets/html/'
				}
			]
		},
		'main': {
			'files': [
				{
					'src': ['src/app/_main/layout/index.html'],
					'dest': 'dist'
				}
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
