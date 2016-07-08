// Karma configuration
// Generated on Fri Jul 08 2016 18:53:20 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'spec/helloWorld.js',
      'js/sliderVertical.js',
      'css/ninja-slider.css',
      { pattern: 'index.html', watched: false, served: true, included: true},
      { pattern: 'code.html',  watched:false , served: true, included: false},
      { pattern: 'devops.html', watched: false , served: true, included: false},
      { pattern: 'projects.html', watched: false , served: true, included: false},

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec/helloWorld.js' :  'coverage',
      'js/sliderVertical.js': 'coverage',
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
     reporters: ['progress','coverage'],

    coverageReporter: {
          type: 'cobertura',
    },


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false

    // Concurrency level
    // how many browser should be started simultaneous

  })
}
