module.exports = function(grunt){
  grunt.initConfig({
      /*connect: {
          meta: {
              port: 1338,
              base: "./"
          }
      },*/
      pkg: grunt.file.readJSON("package.json"),
      connect: {
          meta: {
              port: 1338,
              base: "./"
          }
      },
      watch: {
          scripts: {
              files: ['js/*.js', "index.html"],
              tasks: ['connect'],
              options: {
                  spawn: false,
                  interrupt: true,
              },
          },
      },
  });
    grunt.loadNpmTasks("grunt-connect");
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ["connect:meta", "watch"]);

};