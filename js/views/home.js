;(function(window, undefined){

	window.app = window.app || {};

	app.HomeView = Backbone.View.extend({
		el: document.querySelector("#home"),
		events: {
			'click #toTop': 'scrollToTop',
			"submit #loginForm": 'handleLogin'
		},
		handleLogin: function(e){
			e.preventDefault();
			
			var user = {
				email: this.el.querySelector('#txtEmail').value,
				password: this.el.querySelector('#txtPass').value,
			}

			var self = this;

			this.authWithPassword(user)
			.then(function(){
				window.location.hash = "#profile";
			})
			.fail(function(){
				self.createUser(user).then(function(){
					self.authWithPassword(user).then(function(){
						window.location.hash = "#profile";
					})
				});
			})
		},
		scrollToTop: function(e){
			e.preventDefault();
			scrollBodyTo(0, 250);
		},
		authWithPassword: function(userObj) {
            var deferred = $.Deferred();
            app.router.rootRef.authWithPassword(userObj, function onAuth(err, user) {
                if (err) {
                    deferred.reject(err);
                }

                if (user) {
                    deferred.resolve(user);
                }

            });

            return deferred.promise();
        },
        createUser: function(userObj) {
            var deferred = $.Deferred();
            app.router.rootRef.createUser(userObj, function(err) {

                if (!err) {
                    deferred.resolve();
                } else {
                    deferred.reject(err);
                }

            });

            return deferred.promise();
        },
		initialize: function(){
			
		}
	});

})(window, undefined)