
module.exports = function( grunt) {
    
    // Project configuration. 
    grunt.initConfig({
   //   concat: {
	     
	  //     js: {
	  //     src: ['js/script.js'],
	  //     dest: 'production/js/script.js',
	  //   },

	  //   css: {
	  //     src: ['css/animate.css', 'css/hover.css', 'css/style.css'],
	  //     dest: 'production/css/style.css',
	  //   },
	  // },

	  watch: {
	  	options: {
           spawn: false,
           livereload: true
	  	},
        js :{
        files:['src/js/**/*.js'],
        task: ['concat:js'],

        },
       css: {
         files: ['src/css/**/*.css'],
         task:  ['concat:css'],
         },
	   },

	   // connect: {
    //        server:{
	   //         options:{
    //              hostname: 'localhost',
    //              port: 3000,
    //              base: 'src/',
    //              livereload: true,
	   //         }
    //        }
     	
    //   },

	   	cssmin: {
            target: {
		    files: [{
		      expand: true,
		      cwd: 'src/css',
		      src: ['*.css', '!*.min.css'],
		      dest: 'production/css',
		      ext: '.css'
		    }]
		  }
		},
		uglify: {
             target: {
             files: {
             'production/js/sliderVertical.js ': ['src/js/sliderVertical.js'],
             }
           }
        },
         imagemin: {
		   dist: {
		      options: {
              optimizationLevel: 6
             },
		      files: [{
		         expand: true,
		         cwd: 'src/img',
		         src: ['**/*.{png,jpg,gif,svgo}'],
		         dest: 'production/img'
		      }]
		   }
		},
		  copy: {
				  main: {
				    expand: true,
				    cwd: 'src',
				    src: '*.html',
				    dest: 'production/',
				  },
				},
        
     });
      grunt.loadNpmTasks('grunt-contrib-copy');
      grunt.loadNpmTasks('grunt-contrib-connect');
	  grunt.loadNpmTasks('grunt-contrib-concat');
	  grunt.loadNpmTasks('grunt-contrib-watch');
	  grunt.loadNpmTasks('grunt-contrib-cssmin');
	  grunt.loadNpmTasks('grunt-contrib-uglify');
	  grunt.loadNpmTasks('grunt-contrib-imagemin');
	  grunt.registerTask('default', ['copy','connect','cssmin','uglify','imagemin']);
	
};


