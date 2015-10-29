// wrap app in closure
(function () {
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function() {
		// set gem as a property of controller
		this.products = gems;
	});
	app.controller('PanelController', function() {
		this.tab = 1; 
		// initialize the page to show first tab

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		// methods when you select a tab, make it the active tab
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});
	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: "Cool gem",
		canPurchase: false
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: "another cool gem",
		canPurchase: true,

	}
	];
})();