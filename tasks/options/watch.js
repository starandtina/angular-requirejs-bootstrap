module.exports = function(config) {
  return {
    js: {
      files: ['<%= srcDir %>/app/**/*.js'],
      tasks: ['newer:jshint:source']
    },
    dev: {
      options: {
        livereload: true
      },
      files: [
        '<%= srcDir %>/**/*.html',
        '<%= srcDir %>/app/**/*.{js,css}',
        '<%= srcDir %>/img/{,*/}**/*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }
  };
};