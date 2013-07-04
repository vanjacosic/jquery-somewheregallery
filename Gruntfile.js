module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> by Opbeat - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      build: {
        src: 'javascript/jquery.somewheregallery.js',
        dest: 'javascript/jquery.somewheregallery.min.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'javascript/jquery.somewheregallery.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'uglify']);

};