/**
 * Created by berniem on 5/25/15.
 */
module.exports = function (grunt) {
  //load plugins
  [
    'grunt-cafe-mocha',
    'grunt-contrib-jshint',
  ].forEach(function(task){
      grunt.loadNpmTasks(task);
    });

  // configure plugins
  grunt.initConfig({
    cafemocha: {
      all: { src: 'test/tests-*.js', options: {ui: 'tdd'},}
    },
    jshint: {
      app: ['app.js', 'public/js/**/*.js', 'lib/**/*.js'],
      qa: ['Gruntfile.js', 'public/test/**/*.js', 'test/**/*.js'],
    },
  });

  // register task
  grunt.registerTask('default', ['cafemocha', 'jshint']);
};