module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                './src/assets/css/styles.css': './dist/assets/css/styles.scss'
            }
          }
        },
        less: {
          files: {
            './src/assets/css/styles.css': './dist/assets/css/styles.less'
            }
          },
        cssmin: {
            minify: {
                expand: true,
                cwd: './src/assets/css/',
                src: ['styles.css'],
                dest: './dist/assets/css/',
                ext: '.min.css'
            }
        },
        concat: {
            jsfiles: {
                src: './src/assets/js/*.js',
                dest: './dist/assets/js/prod.js'
            }
        },
        uglify: {
            jsfiles: {
                src: './dist/assets/js/prod.js',
                dest: './dist/assets/js/prod.min.js'
            }
        },
        watch: {
            files: ['./src/assets/css/styles.scss'],
            tasks: ['sass', 'cssmin'],
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Uncomment to go the LESS way, and remove grunt-sass line
    /*
    grunt.loadNpmTasks('grunt-contrib-less');
    */

    //Uncomment to activate concat & uglify jsfiles
    /*
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    */

    // LESS ALTERNATIVE
    /*
    grunt.registerTask('default', ['less', 'cssmin', 'watch']);
    */

    // Build Sass, concat & uglify Js ALTERNATIVE
    /*
    grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify', 'watch']);
    */

    grunt.registerTask('default', ['sass', 'cssmin', 'watch']);


};
