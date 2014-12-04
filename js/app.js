
window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./bower_components/backfire/dist/backbonefire.js"},
        {url: "./bower_components/firebase/firebase.js"},
        {url: "./bower_components/bootstrap/dist/js/bootstrap.min.js"},
        {url: "./bower_components/jquery-serialize-object/dist/jquery.serialize-object.min.js"},
        // {url: "./css/login.css"},
        // {url: "./css/style.css"},
        {url: "./bower_components/pathjs/path.min.js"},
        {url: "./js/login.js"}
    ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
      
// Code Here
// Code End here
    })

}
    
