"use strict";
var download = $('#download-btn');
var sortOS = $("#os");
var sortCountry = $("#country");
var OSdownload = $("");
var nameDownload = $("");
var tagDownload = $("#download")
var countryDownload = $("");
var urlDownload = $("");
SortItems.prototype.download = function(filename){
	var text = "";
    $.each(this.list,function(index, el) {
    	console.log(el)
        text+= `\r\n${el.url}|${(el.country[0])?el.country[0].country_code:""}|${el.name}|${el.id}|${el.platform.split(".png")[0].split("/images/")[1]}`;
    });
    var blob = new Blob([text],{type:"octet/stream"});
    var url  = window.URL.createObjectURL(blob);
    tagDownload.attr("href",url);
    tagDownload.download = filename;
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
SortItems.prototype.sortcountry = function(imgIconOS,country,date,result){
	if(imgIconOS === "all"){
		let countryCode = $(".sel-items").children().prevObject;
		sortItems.itemsRender(country, countryCode, "countryCode", "sel-items");
	}else{
		if(country!=="ALL"){
			let countryCode = $(".sel-items");
			countryCode.removeClass("countryCode");
			sortItems.itemsRender(country, countryCode, "countryCode", "platform");
		}else{
			$(".platform").removeClass('countryCode');
			$(".platform").fadeIn('slow');
		}
	}
};
SortItems.prototype.itemsRender = function(condition, arraylist, namefn, hide){
	$(`.${hide}`).hide();
	$(`sel-items`).removeClass("countryCode");
	$.each(arraylist, function(index, el) {
		let items = ($($(el).children()[7]).html()===undefined)?"":$($(el).children()[7]).html();
		if(items.indexOf(condition)!==-1){
			$(el).addClass(`${namefn}`);
		}else if(condition === "ALL"){
			$(`.${hide}`).fadeIn('slow').removeClass(`${namefn}`);
		}else{
			$(el).removeClass(`${namefn}`);
		}
	});
	$(`.${namefn}`).fadeIn('slow');
};
SortItems.prototype.imgRender = function(condition, arraylist, namefn, hide){
	$(`.${hide}`).hide();
	$('sel-items').removeClass("platform");
	$.each(arraylist, function(index, el) {
		let items = $($(el).children()[1]).children().attr("src");
		if(items.indexOf(condition)!==-1){
			$(el).addClass(`${namefn}`);
		}else if(condition === "all"){
			$(`.${hide}`).removeClass(`${namefn}`).fadeIn('slow');
		}else{
			$(el).removeClass(`${namefn}`);
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
			platFormImages.removeClass("platform");
			sortItems.imgRender(imgIconOS, platFormImages, "platform", "countryCode");
		}
		else{
			$(".countryCode").removeClass('platform');
			$(".countryCode").fadeIn('slow');
		}
	}
};
tagDownload.click(function(event) {
	sortItems.download("text.txt")
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