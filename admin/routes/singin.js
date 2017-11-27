var express = require('express');
var router = express.Router();
var firebase = require('firebase');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render("singin");
	firebase.initializeApp({
	    databaseURL: 'https://learn-bfd53.firebaseio.com/',
	    serviceAccount: 'learn-ce91a4e1f074.json',
	});
	firebase.database().ref('/').set({
	    username: "kubonne",
	    email: "kubonne@gmail.com"
	});
	var socialLogin			= new socialLoginClass({
    app:	app,
    url:	'http://localhost:3000',
    onAuth:	function(req, type, uniqueProperty, accessToken, refreshToken, profile, done) {
        	findOrCreate({
	            profile:	profile,       
	            property:	uniqueProperty,
	            type:		type           
       		}, function(user) {
            	done(null, user);   
            	console.log(user)
        	});
    	}
	});
	socialLogin.use({
    facebook:	{
        settings:	{
            clientID:		"148127002482488",
            clientSecret: 	"f85117c134e80d3ecd07b4baa3bb41a4",
            authParameters:	{
                scope: 'read_stream,manage_pages'
            }
        },
        url:	{
            auth:		"/",
            callback: 	"/",
            success:	'/index',
            fail:		'/'     
        }
    },
	});
});

module.exports = router;
