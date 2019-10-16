
var url = "https://marketingplatform.google.com/about/enterprise/";

var home = function () {

	 this.launch = function() {
		browser.get (url);
	};
}

module.exports = home

