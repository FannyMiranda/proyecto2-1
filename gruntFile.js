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
              files: ['assets/js/*.js', "index.html", "css/estilos.css"],
              //tasks: [''],
              options: {
                  spawn: false,
                  interrupt: true,
                  livereload: 1338,
              },
          },
      },
  });
    grunt.loadNpmTasks("grunt-connect");
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ["connect:meta", "watch"]);

};