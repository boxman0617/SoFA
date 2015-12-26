/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `src` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {
		'less': {
			'files': ['src/**/*.less'],
			'tasks': ['less:dev'],
			'options': {
				'spawn': false
			}
		},
		'uglify': {
			'files': require('../pipeline').app,
			'tasks': ['uglify:dev'],
			'options': {
				'spawn': false
			}
		},
		'html': {
			'files': ['src/app/_main/*.html', 'src/app/components/**/*.html', 'src/core/**/*.html'],
			'tasks': ['clean:assets', 'copy:html'],
			'options': {
				'spawn': false
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
