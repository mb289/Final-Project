;
(function(window, undefined) {
    'use strict';

    window.app = window.app || {};

    app.Router = Backbone.Router.extend({
        routes: {
            'profile': 'showProfile',
            '*default': 'showHome'
        },
        hideAll: function(){
        	this.views.forEach(function(v){
        		v.$el.removeClass('active');
        	})
        },
        showHome: function(){
        	this.hideAll();
        	this.homeView.$el.addClass('active');
        },
        showProfile: function(){
        	if(!this.userData){
        		window.location.hash = "#";
        		return;
        	}
        	this.hideAll();
        	this.profileView.$el.addClass('active');
        },
        rootRef: new Firebase('https://shining-torch-3669.firebaseio.com/web/uauth'),
        loadUserInfo: function(){
    		var promise = $.Deferred();

	        this.userRef.once('value', function(snap) {
	            var user = snap.val();
	            if(user){
	            	promise.resolve(user);
	            } else {
	            	promise.reject("No user found");
	            }
	        });

	        return promise;
        },
        initialize: function(){
        	// test logging out
        	// this.rootRef.unauth();
        	
            // am I logged in?
            this.user = this.rootRef.getAuth();
            var self = this;

            this.rootRef.onAuth(function globalOnAuth(authData) {
	            self.userData = authData;
	            if(authData) self.userRef = self.rootRef.child('users').child(self.userData.uid);
	        });

	        this.userCalled = true;

	        // views
	        this.homeView = new app.HomeView();
	        this.profileView = new app.ProfileView();
	        this.views = [this.homeView, this.profileView];

	        Backbone.history.start();
        },
    })

})(window, undefined);
