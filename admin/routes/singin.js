var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// var socialLogin			= new socialLoginClass({
 //    app:	app,
 //    url:	'http://localhost:3000',
 //    onAuth:	function(req, type, uniqueProperty, accessToken, refreshToken, profile, done) {
 //        	findOrCreate({
	//             profile:	profile,       
	//             property:	uniqueProperty,
	//             type:		type           
 //       		}, function(user) {
 //            	done(null, user);   
 //            	console.log(user)
 //        	});
 //    	}
	// });
	// socialLogin.use({
 //    facebook:	{
 //        settings:	{
 //            clientID:		"148127002482488",
 //            clientSecret: 	"f85117c134e80d3ecd07b4baa3bb41a4",
 //            authParameters:	{
 //                scope: 'read_stream,manage_pages'
 //            }
 //        },
 //        url:	{
 //            auth:		"/",
 //            callback: 	"/",
 //            success:	'/index',
 //            fail:		'/'     
 //        }
 //    },
	// });
});

module.exports = router;
