"use strict";

module.exports = function( grunt ) {

	// carregar todas as tasks
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		// assistir arquivos
		watch: {
			css: {
				options: {livereload: true},
				files: [ 'src/sass/**/*' ],
				tasks: [ 'compass', 'concat' ]
			},
			js: {
				files: 'src/js/**/*',
				tasks: [ 'uglify' ]
			}
		},

		// compilar scss
		compass: {
			dist: {
				options: {
					force: true,
					config: 'config.rb'
				}
			}
		},

		// concatenar css
		concat: {
			css: {
				src: 'src/css/main.css',
				dest: 'dist/css/styles.combined.min.css'
			}
		},

		// concatenar e minificar javascript
		uglify: {
			options: {
				mangle: false,
				livereload: true
			},
			dist: {
				files: {
					'dist/js/scripts.combined.min.js' : 'src/js/**/*'
				}
			}
		},

		// otimizar imagens
		imagemin: {
		    dynamic: {
		    	files: [{
		        	expand: true,
		        	cwd: 'src/images',
		        	src: ['**/*.{png,jpg,gif}'],
		        	dest: 'dist/images'
		    	}]
		    }
		}
	});

	// registrando tarefa default
	grunt.registerTask( 'default', [ 'watch' ] );
	grunt.registerTask( 'img', [ 'imagemin' ] );
};