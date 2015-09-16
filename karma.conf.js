// Karma configuration
// Generated on Thu Sep 10 2015 21:54:47 GMT+0200 (CEST)

module.exports = function(config) {
   config.set({

      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',


      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['jasmine'],


      // list of files / patterns to load in the browser
      files: [
      	'public/libs/angular/angular.js',
      	'public/libs/angular-mocks/angular-mocks.js',
         'public/libs/angular-ui-router/release/angular-ui-router.js',
         'public/scripts/*.js',
         'public/scripts/**/*.js',
      	'test/**/*.js'
      ],


      // list of files to exclude
      exclude: [
      ],


      // add to list of reporters
      reporters: ['progress', 'coverage'],


      // add to list of plugins
      plugins: [
      'karma-coverage',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jshint-preprocessor'
      ],

      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
         'public/scripts/controllers/*.js': ['jshint', 'coverage'],
         'public/scripts/services/*.js': ['jshint', 'coverage'],
         'public/scripts/app.js': ['jshint', 'coverage']
      },

      // add plugin settings
      coverageReporter: {
        // type of file to output, use text to output to console
        type : 'text',
        // directory where coverage results are saved
        dir: 'test/coverage/'
        // if type is text or text-summary, you can set the file name
        // file: 'coverage.txt'
     },

     // add plugin settings
      junitReporter: {
        // location of results output file
        outputFile: 'test/junit-results.xml'
      },

      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      //reporters: ['progress'],


      // web server port
      port: 9876,


      // enable / disable colors in the output (reporters and logs)
      colors: true,


      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,


      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,


      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['PhantomJS'],


      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false
   });
};
