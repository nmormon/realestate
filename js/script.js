var settings = {
"async": true,
"crossDomain": true,
	"url": "https://realtor.p.rapidapi.com/properties/list-for-sale?sort=photos&radius=20&city=ATLANTA&offset=0&limit=10&state_code=GA",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "realtor.p.rapidapi.com",
		"x-rapidapi-key": "c46b65546amsh9149b72118898f6p1d3db3jsn299eb68b8430"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);

	var photo = response.listings[0].photo;
	var sqft =  " " + response.listings[0].sqft;
	var bed =  " " +  response.listings[0].beds + " " + "Bedrooms";
	var bath =  " " +  response.listings[0].baths + " " + "Bathrooms";
	var title = response.listings[0].rdc_web_url;
	var addy = response.listings[0].address;
	var price = response.listings[0].short_price;

	$("#home-img").attr("src", photo);
	$("#home-sqft").append(sqft);
	$("#home-bed").append(bed);
	$("#home-bath").append(bath);
	$("#home-addy").append(addy);
	$("#home-price").append(price);
	$("#home-addy").attr("href", title);
	$("#details").attr("href", title);

});

$.ajax(settings).done(function (response) {
	console.log(response);

	var photo = response.listings[1].photo;
	var sqft = " " + response.listings[1].sqft;
	var bed = " " + response.listings[1].beds + " " + "Bedrooms";
	var bath = " " + response.listings[1].baths + " " + "Bathrooms";
	var title = response.listings[1].rdc_web_url;
	var addy = response.listings[1].address;
	var price = response.listings[1].short_price;

	$("#home-img2").attr("src", photo);
	$("#home-sqft2").append(sqft);
	$("#home-bed2").append(bed);
	$("#home-bath2").append(bath);
	$("#home-addy2").append(addy);
	$("#home-price2").append(price);
	$("#home-addy2").attr("href", title);
	$("#details2").attr("href", title);

});
$.ajax(settings).done(function (response) {
	console.log(response);

	var photo = response.listings[2].photo;
	var sqft = " " + response.listings[2].sqft;
	var bed = " " + response.listings[2].beds + " " + "Bedrooms";
	var bath = " " + response.listings[2].baths + " " + "Bathrooms";
	var title = response.listings[2].rdc_web_url;
	var addy = response.listings[2].address;
	var price = response.listings[2].short_price;

	$("#home-img3").attr("src", photo);
	$("#home-sqft3").append(sqft);
	$("#home-bed3").append(bed);
	$("#home-bath3").append(bath);
	$("#home-addy3").append(addy);
	$("#home-price3").append(price);
	$("#home-addy3").attr("href", title);
	$("#details3").attr("href", title);

});

$.ajax(settings).done(function (response) {
	console.log(response);

	var photo = response.listings[3].photo;
	var sqft = " " + response.listings[3].sqft;
	var bed = " " + response.listings[3].beds + " " + "Bedrooms";
	var bath = " " + response.listings[3].baths + " " + "Bathrooms";
	var title = response.listings[3].rdc_web_url;
	var addy = response.listings[3].address;
	var price = response.listings[3].short_price;

	$("#home-img4").attr("src", photo);
	$("#home-sqft4").append(sqft);
	$("#home-bed4").append(bed);
	$("#home-bath4").append(bath);
	$("#home-addy4").append(addy);
	$("#home-price4").append(price);
	$("#home-addy4").attr("href", title);
	$("#details4").attr("href", title);

});

$.ajax(settings).done(function (response) {
	console.log(response);

	var photo = response.listings[8].photo;
	var sqft = " " + response.listings[8].sqft;
	var bed = " " + response.listings[8].beds + " " + "Bedrooms";
	var bath = " " + response.listings[8].baths + " " + "Bathrooms";
	var title = response.listings[8].rdc_web_url;
	var addy = response.listings[8].address;
	var price = response.listings[8].short_price;

	$("#home-img5").attr("src", photo);
	$("#home-sqft5").append(sqft);
	$("#home-bed5").append(bed);
	$("#home-bath5").append(bath);
	$("#home-addy5").append(addy);
	$("#home-price5").append(price);
	$("#home-addy5").attr("href", title);
	$("#details5").attr("href", title);

});

$.ajax(settings).done(function (response) {
	console.log(response);

	var photo = response.listings[5].photo;
	var sqft = " " + response.listings[5].sqft;
	var bed = " " + response.listings[5].beds + " " + "Bedrooms";
	var bath = " " + response.listings[5].baths + " " + "Bathrooms";
	var title = response.listings[5].rdc_web_url;
	var addy = response.listings[5].address;
	var price = response.listings[5].short_price;

	$("#home-img6").attr("src", photo);
	$("#home-sqft6").append(sqft);
	$("#home-bed6").append(bed);
	$("#home-bath6").append(bath);
	$("#home-addy6").append(addy);
	$("#home-price6").append(price);
	$("#home-addy6").attr("href", title);
	$("#details6").attr("href", title);

});
	//var photo = response.listings[1].photo;
	//$("#home-img").attr("src", photo);

	//$("#my_image").attr("src", photo);
	//$(document).ready(function(){
		//console.log(photo);
	    //$("img").click(function(){
	        // Change src attribute of image
	        //$(this).attr("src", photo);

//	});
