module.exports = function(grunt) {
    grunt.initConfig({
        clean: ["dist/js"],
        browserify: {
            options: {
                transform: [ require("grunt-react").browserify ],
                extension: "jsx"
            },
            app: {
                src: "src/js/app.*",
                dest: "dist/js/app.js"
            }
        },
        watch: {
            files: ["src/js/**/*.js", "src/js/**/*.jsx"],
            tasks: ["default"],
            options: {
                spawn: false
            }
        }
    });
    
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.registerTask("default", ["clean", "browserify"]);
};
