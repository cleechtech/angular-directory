module.exports = function(grunt){
	
	// so we don't have to do grunt.loadNpmTasks('taskName') for every dependency
	// require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    
    
    // grunt.loadNpmTasks('grunt-bower-install');
    
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		watch: {
			html: {
				files: ['index.html'],
				tasks: ['htmlhint']
			},
			js: {
				files: [],
				tasks: []
			}
		},
		
		uglify: {
			build: {
				src: [
					"./bower_components/angular/angular.js",
					"./bower_components/angular-resource/angular-resource.js",
					"./bower_components/angular-animate/angular-animate.js",
					"./bower_components/angular-route/angular-route.js",
					"./bower_components/angular-touch/angular-touch.js",
					
					'./client/js/app.js',
					'./client/js/controllers.js',
					'./client/js/memory-services.js',
					'./client/js/rest-services.js'
				],
				dest: './client/build/js/base.min.js'
			}
		},
		
		//~ 'bower-install': {
			//~ target: {
				//~ // Point to the files that should be updated when
				//~ // you run `grunt bower-install`
				//~ src: ['./client/index.html'],
//~ 
				//~ // Optional:
				//~ // ---------
				//~ cwd: '',
				//~ ignorePath: '',
				//~ exclude: [],
				//~ fileTypes: {}
			//~ }
		//~ }
		});
		
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.registerTask('default', ['uglify']);

};
