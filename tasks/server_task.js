module.exports = function (grunt) {
  grunt.registerTask('server', ['build', 'connect:dev', 'watch']);
};