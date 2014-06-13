module.exports = function(config) {
  return {
    docs: {
      src: ['src/app/**/*.js','src/config.js'],
      dest: config.docsDir+"/tmpst",
      options: {
        unslash: true,
        extension: '.asciidoc',
        //annotate: '// '
      }
    }
  }
};