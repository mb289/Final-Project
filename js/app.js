
window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        // css
        {url: "./bower_components/normalize.css/normalize.css"},
        {url: "./bower_components/typeplate-starter-kit/css/typeplate.css"},
        {url: "//fonts.googleapis.com/css?family=Lato:100,300,400,700,900"},
        {url: "./Main/css/style.css"},
        {url: "./Main/css/imgeffect.css"},
        {url: "./Main/css/magnific-popup.css"},
        {url: "./bower_components/bootstrap/dist/css/bootstrap.min.css"},
        {url: "./css/dropzone.css"},
        {url: "./css/chat.css"},
        {url: "./dist/style.css"},

        // js
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./bower_components/backfire/dist/backbonefire.js"},
        {url: "./bower_components/firebase/firebase.js"},
        {url: "./bower_components/bootstrap/dist/js/bootstrap.min.js"},
        {url: "./bower_components/jquery-serialize-object/dist/jquery.serialize-object.min.js"},
        {url: "./bower_components/backbone/examples/backbone.localStorage.js"},
        {url: "./js/utilities.js"},




        // views
        {url: "./js/views/home.js"},
        {url: "./js/views/profile.js"},
        {url: "./js/todo.js"},
        {url: "./js/dropzone.js"},
        {url: "./js/chat.js"},


        // jquery plugins
        // {url: "./Main/js/jquery.easing.min.js"},
        // {url: "./Main/js/jquery.mixitup.min.js"},
        // {url: "./js/mixitup.gallery.js"},
        // {url: "./Main/js/jquery.magnific-popup.js"},
        // {url: "./js/popup.js"},
        // {url: "./Main/js/move-top.js"},
        // {url: "./Main/js/easing.js"},
        // {url: "./Main/js/jquery.scrollTo.js"},
        // 
        
        // page 2 stuff
        // {url: "//cdnjs.cloudflare.com/ajax/libs/spin.js/2.0.1/spin.min.js"},
        // {url: "./js/sha256.js"},
        // {url: "./js/firepano.js"},

        // marco's code
        {url: "./js/routers/router.js"}
    ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
        app.router = new app.Router();
    })

}
    
