module.exports = function(config) {
    config.set({

        // Base path, that will be used to resolve files and exclude
        basePath: '',

        // Frameworks to use
        frameworks: ['jasmine'],

        // List of files / patterns to load in the browser
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-mocks/angular-mocks.js',

            'dist/directive.js',
            'dist/directive.css',
            'test/**/*.spec.js'
        ],

        // List of files to exclude
        exclude: [],

        // Web server port
        port: 9876,

        // Level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR
        // || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        browsers: [
            process.env.TRAVIS ? 'PhantomJS' : 'Chrome'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,
        reporters: ['coverage', 'progress'],
        preprocessors: {
            'dist/*.js': ['coverage']
        },
        plugins: [
            'karma-coverage',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],
        coverageReporter: {
            reporters: [{
                type: 'html',
                subdir: 'report-html'
            }, {
                type: 'lcov',
                subdir: 'report-lcov'
            }]
        }
    });
};
