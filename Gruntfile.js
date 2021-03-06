module.exports = function(grunt){
	
	// so we don't have to do grunt.loadNpmTasks('taskName') for every dependency
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
        
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		watch: {
			html: {
				files: ['index.html'],
				tasks: ['htmlhint']
			},
			js: {
				files: ['./client/js/*.js'],
				tasks: ['clean', 'jshint', 'concat', 'uglify', 'copy']
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
		

	});
		
	grunt.registerTask('default', ['uglify']);

};
