;(function(window, undefined){

	window.app = window.app || {};

	app.ProfileView = Backbone.View.extend({
		el: document.querySelector("#profile"),
		events: {
			'click #toTop': 'scrollToTop',
			"submit #holiday": 'handleHoliday'
		},
		handleHoliday: function(e){
			e.preventDefault();
			app.router.userRef.set({name: "test"})
		},
		scrollToTop: function(e){
			e.preventDefault();
			scrollBodyTo(0, 250);
		},
		initialize: function(){
			// console.log(this.el)
		}
	});

})(window, undefined)