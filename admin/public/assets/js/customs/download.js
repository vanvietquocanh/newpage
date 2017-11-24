"use strict";
var download = $('#download-btn');
var sortOS = $("#os");
var sortCountry = $("#country");
var OSdownload = $("");
var nameDownload = $("");
var countryDownload = $("");
var urlDownload = $("");
SortItems.prototype.download = function(filename){
	var text = "";
    $.each(this.list,function(index, el) {
    	console.log(el)
        text+= `\r\n ${el}`;
    });
    var blob = new Blob([text],{type:"octet/stream"});
    var url  = window.URL.createObjectURL(blob);
    download.attr("href",url);
    download.download = filename;
};
SortItems.prototype.sortcountry = function(imgIconOS,country,date,result){
	if(imgIconOS === "all"){
		let countryCode = $(".sel-items").children().prevObject;
		sortItems.itemsRender(country, countryCode, "countryCode", "sel-items");
	}else{
		if(country!=="ALL"){
			let countryCode = $(".platform");
			sortItems.itemsRender(country, countryCode, "countryCode", "platform");
		}else{
			$(".activeItems").removeClass('activeItems multi2');
			$(".platform").fadeIn('slow');
		}
	}
};
SortItems.prototype.dateTime = function (value) {
	switch (value) {
		case "today":
			break;
		case "yesterday":
			break;
		case "lastweek":
			break;
		case "lastmonth":
			break;
		case "lastyear":
			break;
		default:
			break;
	}
}
SortItems.prototype.itemsRender = function(condition, arraylist, namefn, hide){
	$(`.${hide}`).hide();
	$(`sel-items`).removeClass("multi2");
	$.each(arraylist, function(index, el) {
		let items = ($($(el).children()[7]).html()===undefined)?"":$($(el).children()[7]).html();
		if(items.indexOf(condition)!==-1){
			$(el).addClass(`activeItems ${namefn}`);
		}else if(condition === "ALL"){
			$(`.${hide}`).fadeIn('slow').removeClass(`activeItems ${namefn}`);
		}else{
			$(el).removeClass(`activeItems ${namefn}`);
		}
	});
	$(`.${namefn}`).fadeIn('slow');
};
SortItems.prototype.imgRender = function(condition, arraylist, namefn, hide){
	$(`.${hide}`).hide();
	$('sel-items').removeClass("multi2");
	$.each(arraylist, function(index, el) {
		let items = $($(el).children()[1]).children().attr("src");
		if(items.indexOf(condition)!==-1){
			$(el).addClass(`activeItems ${namefn}`);
		}else if(condition === "all"){
			$(`.${hide}`).removeClass(`activeItems ${namefn}`).fadeIn('slow');
		}else{
			$(el).removeClass(`activeItems ${namefn}`);
		}
	});
	$(`.${namefn}`).fadeIn('slow');
};
SortItems.prototype.sortplatform = function(imgIconOS,country,date,result){
	if(country === "all"){
		let platFormImages = $(".sel-items").children().prevObject;
		sortItems.imgRender(imgIconOS, platFormImages, "platform", "sel-items");
	}else{
		if(imgIconOS!=="all"){
			let platFormImages = $(".countryCode");
			sortItems.imgRender(imgIconOS, platFormImages, "platform", "activeItems");
		}
		// else{
		// 	$(".activeItems").removeClass('activeItems multi2');
		// 	$(".countryCode").fadeIn('slow');
		// }
	}
};
download.click(function(event) {
	console.log($(`.showItems`))
});
sortOS.change(function(event) {
	let valueUserSelect = event.target.value;
	sortItems.sortplatform(valueUserSelect, sortCountry.val());
});
sortCountry.change(function(event) {
	let valueUserSelect = event.target.value.toUpperCase();
	sortItems.sortcountry(sortOS.val(), valueUserSelect);
});
//&& date === "today" && result === ""