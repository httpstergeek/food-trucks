module.exports = function (grunt) {
  'use strict';
  //load plugins
  [
    'grunt-contrib-jshint',
  ].forEach(function(task){
      grunt.loadNpmTasks(task);
    });

  // configure plugins
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
      },
      app: ['app/app.js',
        'app/public/js/collections/*.js',
        'app/public/js/routers/*.js',
        'app/public/js/templates/*.js',
        'app/public/js/views/*.js',
        'app/public/js/*.js',
        'app/models/*.js',
        'app/routes/*.js'],
      qa: ['Gruntfile.js', 'test/**/*.js'],
    },
  });

  // register task
  grunt.registerTask('default', ['jshint']);
};