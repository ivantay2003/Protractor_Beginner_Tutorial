let home = require ('./page/homePage.js');

var homePage = new home();

describe ("Tutorial ", function (){

	it ("launch url and business " , async() => {
	
		homePage.launch();		

		browser.actions().mouseMove(element(by.css("a[data-g-action='for small businesses'][href='/intl/en_uk/about/small-business/']"))).perform();

	element (by.css ("a[data-g-action='for small businesses: analytics'][href='/intl/en_uk/about/analytics/']:nth-child(1)")).click()

	});


});
