exports.config = {
  framework: 'jasmine',
    
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['main.js'],


   
    onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer.from(png, 'base64')
            }, 'image/png')();
            done();
          })
    });
  },
    
    capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['--disable-browser-side-navigation'] 
        }   
    },
    


}
