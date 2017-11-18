"use-strict";
var otps = {
	user_id  : 14514 ,
	api_key  : "8ddae75dd057d13958c1ada6042c0b24",
	ids 	 : 166,
	country  : "es",
	device 	 : "mobile",
	store 	 : ["ios","and"],
	type 	 : ["cpa","cpi"],
	capping  : true,
	adult 	 : true,
	incent 	 : true,
	approved : true,
	currency : "USD",
	skip 	 : 10,
	limit 	 : 30
}
$.post('http://api.leadzu.com/offer.find',otps, function(data, textStatus, xhr) {
	console.log(xhr);
});
// var config = {
//             apiKey: "AIzaSyBKDRFvGdzNBz_sGQfk5qI-1jBlrnRCfn8",
//             authDomain: "learn-bfd53.firebaseapp.com",
//             databaseURL: "https://learn-bfd53.firebaseio.com",
//             projectId: "learn-bfd53",
//             storageBucket: "learn-bfd53.appspot.com",
//             messagingSenderId: "646588309778"
//           };
// firebase.initializeApp(config);
// //initialize FireBase

// var tabDay = $("#topDay");
// var tabMonth = $("#topMonth");
// var tabYear = $("#topYear");

// var database = firebase.database().ref().child("panelTopDay");
// database.on("value", snap => tabDay.html(`${snap.val()}`));

// var database = firebase.database().ref().child("panelTopMonth");
// database.on("value", snap => tabMonth.html(`${snap.val()}`));

// var database = firebase.database().ref().child("panelTopYear");
// database.on("value", snap => tabYear.html(`${snap.val()}`));
