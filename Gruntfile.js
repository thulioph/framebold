// Função wrapper, todas as regras do Grunt vem aqui dentro
module.exports = function(grunt) {
	'use strict';

	// Passa as configurações básicas do projeto para o grunt pelo metodo initConfig
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Chamadas das tasks

		// Cria um servidor estático para html
			connect: {
				server: {
					options: {
						port: 9000,
						base: '.',
						hostname: 'localhost',
						livereload: true,
						open: true,
						keepalive: true
					}
				}
			},

		// Cria um servidor dinâmico php
			php: {
				open: {
					options: {
						keepalive: true,
						// port: 8008,
						// hostname: '0.0.0.0',
						// base: '.',
						// bin: 'php',
						open: true
					}
				}
			},

		// Assiste os arquivos
			watch:{
				options: {
					// No valor de livereload pode ser boolean ou um number, caso seja number representa a porta na qual será executado;
					livereload: 1334
				},
				files: ['src/**/*.{scss, js}'],
				tasks: ['compass', 'cssmin']
				// tasks: ['compass', 'cssmin', 'concat', 'uglify','imagemin' ]
			},

		// Minificar o JS
			uglify: {
				my_target: {
					files: {
						'build/js/main.min.js' : ['src/js/main.js'],
						'build/js/scripts.min.js' : ['build/js/scripts.js']
					}
				}
			},

		// Minificar o CSS
			cssmin: {
				dist: {
					src: ['src/sass/main.scss'],
					dest: 'build/css/main.min.css'
				}
			},

		// Concatenar o JS
			concat: {
				dist: {
					src: ['src/js/vendor/head.min.js', 'src/js/vendor/colorbox.min.js',
					'src/js/vendor/jquery-1.10.2.min.js', 'src/js/vendor/jquery.cycle.all.js',
					'src/js/vendor/jquery.lazyload.min.js', 'src/js/vendor/mask_input.js'],
					dest: 'build/js/scripts.js'
				}
			},

		// Validando o JS
			jshint: {
				beforeconcat: ['src/js/main.js'],
				afterconcat: ['build/js/scripts.js']
			},

		// Otimizando as imagens
			imagemin: {
				dynamic: {
					options: {
						optimizationLevel: 3
					},
					files: [{
						expand: true,
						cwd: 'src/img',
						src: ['**/*.{png,jpg,gif,jpeg}'],
						dest: 'build/img/'
					}]
				}
			},

		// Notificações
			notify: {
				watch: {
					options: {
						title: 'Task Complete',
						message: 'SASS and Uglify finished running',
					}
				},
				connect: {
					options: {
						title: 'Servidor Estático',
						message: 'Servidor estático rodando ok!'
					}
				},
				php: {
					options: {
						title: 'Servidor PHP',
						message: 'Servidor php rodando ok!'
					}
				},
				uglify: {
					options: {
						title: 'Minificar o JS',
						message: 'Todos os arquivos JS foram minificados!'
					}
				},
				cssmin: {
					options: {
						title: 'Minificar o CSS',
						message: 'Todos os arquivos CSS foram minificados!'
					}
				},
				concat: {
					options: {
						title: 'Concatenar o JS',
						message: 'Todos os arquivos JS foram concatenados!'
					}
				},
				jshint: {
					options: {
						title: 'Validando o JS',
						message: 'Todos os arquivos JS foram validados!'
					}
				},
				imagemin: {
					options: {
						title: 'Otimizando as Imagens',
						message: 'Todas as imagens foram otimizadas!'
					}
				}
			},

		// Compass
			compass: {
				dev: {
					options:{
						sassDir: 'src/sass',
						cssDir: 'build/css',
						imagesDir: 'src/img',
						generatedImagesDir: 'build/img',
						noLineComments: true
						// outputStyle: 'compressed'
					}
				}
			}


	});


	// Carregando as tarefas

		// Criando servidor estático ou dinâmico e assistindo os arquivos;
		grunt.loadNpmTasks('grunt-contrib-connect');
		grunt.loadNpmTasks('grunt-php');
		grunt.loadNpmTasks('grunt-contrib-watch');

		// Minificação dos arquivos CSS e JS
		grunt.loadNpmTasks('grunt-contrib-cssmin');
		grunt.loadNpmTasks('grunt-contrib-uglify');

		// Concatenação dos arquivos;
		grunt.loadNpmTasks('grunt-contrib-concat');

		// Validar o JS
		grunt.loadNpmTasks('grunt-contrib-jshint');

		// Otimizar imagens
		grunt.loadNpmTasks('grunt-contrib-imagemin');

		// Compass
		grunt.loadNpmTasks('grunt-contrib-compass');

		// Notificações das tarefas
		grunt.loadNpmTasks('grunt-notify');


	// Executando as tarefas;

		// Cria um servidor e fica assistindo as alterações dos arquivos;
		grunt.registerTask('staticserver', ['connect','watch']);
		grunt.registerTask('createserver', ['php','watch']);

		// Apenas assiste os arquivos da tarefa watch;
		grunt.registerTask('w', ['watch']);

		// Validando o JS;
		grunt.registerTask('validar', ['jshint']);

		// Minifica o CSS e JS;
		grunt.registerTask('build', ['uglify', 'cssmin']);

		// Concatena o JS;
		grunt.registerTask('concatenar', ['concat']);

		// Otimizar as imagens;
		grunt.registerTask('otimizar', ['imagemin']);

		// Compilar o sass com compass;
		grunt.registerTask('compilar', ['compass']);

		// Notificações
		grunt.registerTask('notify', ['php', 'watch', 'jshint', 'uglify', 'cssmin', 'concat', 'imagemin', 'compass', 'notify' ]);

};