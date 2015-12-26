/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {
	grunt.config.set('uglify', {
		'dev': {
			'options': {
				'mangle': false,
				'beautify': true,
				'compress': false
			},
			'files': {
				'dist/assets/js/app.js': require('../pipeline').app
			}
		},
		'prod': {
			'options': {
				'mangle': false,
				'beautify': false
			},
			'files': {
				'dist/assets/js/app.min.js': require('../pipeline').app.concat(['src/app/_main/prod.js'])
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
