'use strict';

var getBeersAPI = function getBeersAPI() {
	return fetch('https://api.punkapi.com/v2/beers').then(function (response) {
		return response.json();
	}).catch(function (e) {
		return console.err('Fail');
	}).then(function (response) {
		var obj = response;
		var txt = "<table style= 'wigth: 80%; margin: auto;'>";
		txt += "<tr style='background-color: #FF9797;'>";
		txt += "<th>" + "Image" + "</th>";
		txt += "<th>" + "Beer name" + "</th>";
		txt += "<th>" + "Yeast" + "</th>";
		txt += "<th>" + "Food Pairing" + "</th>";
		txt += "<th>" + "Tagline" + "</th>";
		txt += "<th>" + "Description" + "</th>";
		txt += "</tr>";
		for (var i = 0; i < obj.length; i++) {
			txt += "<tr>";
			txt += "<td>" + "<image src =" + obj[i].image_url + " " + "width =" + '50px ' + " />" + "</td>";
			txt += "<td>" + obj[i].name + "</td>";
			txt += "<td>" + obj[i].ingredients.yeast + "</td>";
			txt += "<td>" + obj[i].food_pairing + "</td>";
			txt += "<td>" + obj[i].tagline + "</td>";
			txt += "<td>" + obj[i].description + "</td>";
			txt += "</tr>";
		}
		txt += "</table>";
		document.getElementById("table_result").innerHTML = txt;
	});
};

var getBeersAPIByName = function getBeersAPIByName(name) {
	return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name).then(function (response) {
		return response.json();
	}).catch(function (e) {
		return console.err('Fail');
	}).then(function (response) {
		var obj = response;
		var txt = "<table  style= 'wigth: 80%; margin: auto;'>";
		txt += "<tr style='background-color: #FF9797;'>";
		txt += "<th>" + "Image" + "</th>";
		txt += "<th>" + "Beer name" + "</th>";
		txt += "<th>" + "Yeast" + "</th>";
		txt += "<th>" + "Food Pairing" + "</th>";
		txt += "<th>" + "Tagline" + "</th>";
		txt += "<th>" + "Description" + "</th>";
		txt += "</tr>";

		for (var i = 0; i < obj.length; i++) {
			txt += "<tr>";
			txt += "<td>" + "<image src =" + obj[i].image_url + " " + "width =" + '50px ' + " />" + "</td>";
			txt += "<td>" + obj[i].name + "</td>";
			txt += "<td>" + obj[i].ingredients.yeast + "</td>";
			txt += "<td>" + obj[i].food_pairing + "</td>";
			txt += "<td>" + obj[i].tagline + "</td>";
			txt += "<td>" + obj[i].description + "</td>";
			txt += "</tr>";
		}
		txt += "</table>";
		document.getElementById("table_result").innerHTML = txt;
	});
};

var getBeersAPIByYeast = function getBeersAPIByYeast(yeast) {
	return fetch('https://api.punkapi.com/v2/beers/?yeast=' + yeast).then(function (response) {
		return response.json();
	}).catch(function (e) {
		return console.err('Fail');
	}).then(function (response) {
		var obj = response;
		var txt = "<table style= 'wigth: 80%; margin: auto;'>";
		txt += "<tr style='background-color: #FF9797;'>";
		txt += "<th>" + "Image" + "</th>";
		txt += "<th>" + "Beer name" + "</th>";
		txt += "<th>" + "Yeast" + "</th>";
		txt += "<th>" + "Food Pairing" + "</th>";
		txt += "<th>" + "Tagline" + "</th>";
		txt += "<th>" + "Description" + "</th>";
		txt += "</tr>";
		for (var i = 0; i < obj.length; i++) {
			txt += "<tr>";
			txt += "<td>" + "<image src =" + obj[i].image_url + " " + "width =" + '50px ' + "/>" + "</td>";
			txt += "<td>" + obj[i].name + "</td>";
			txt += "<td>" + obj[i].ingredients.yeast + "</td>";
			txt += "<td>" + obj[i].food_pairing + "</td>";
			txt += "<td>" + obj[i].tagline + "</td>";
			txt += "<td>" + obj[i].description + "</td>";
			txt += "</tr>";
		}
		txt += "</table>";
		document.getElementById("table_result").innerHTML = txt;
	});
};

var getBeersAPIByNameAndYeast = function getBeersAPIByNameAndYeast(name, yeast) {
	return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name + '&?yeast=' + yeast).then(function (response) {
		return response.json();
	}).catch(function (e) {
		return console.err('Fail');
	}).then(function (response) {
		var obj = response;
		var txt = "<table style= 'wigth: 80%; margin: auto;'>";
		txt += "<tr style='background-color: #FF9797;'>";
		txt += "<th>" + "Image" + "</th>";
		txt += "<th>" + "Beer name" + "</th>";
		txt += "<th>" + "Yeast" + "</th>";
		txt += "<th>" + "Food Pairing" + "</th>";
		txt += "<th>" + "Tagline" + "</th>";
		txt += "<th>" + "Description" + "</th>";
		txt += "</tr>";
		for (var i = 0; i < obj.length; i++) {
			txt += "<tr>";
			txt += "<td>" + "<image src =" + obj[i].image_url + " " + "width =" + '50px ' + "/>" + "</td>";
			txt += "<td>" + obj[i].name + "</td>";
			txt += "<td>" + obj[i].ingredients.yeast + "</td>";
			txt += "<td>" + obj[i].food_pairing + "</td>";
			txt += "<td>" + obj[i].tagline + "</td>";
			txt += "<td>" + obj[i].description + "</td>";
			txt += "</tr>";
		}
		txt += "</table>";
		document.getElementById("table_result").innerHTML = txt;
	});
};

getBeersAPI();

var toSearch = function toSearch(name, yeast) {
	if (yeast != "" && name != "") {
		getBeersAPIByNameAndYeast(name, yeast);
	} else if (name != "") {
		getBeersAPIByName(name);
	} else if (yeast != "") {
		getBeersAPIByYeast(yeast);
	} else {
		var txt = "<table style= 'wigth: 80%; margin: auto;'>";
		txt += "<tr style='background-color: #FF9797;'>";
		txt += "<th>" + "Image" + "</th>";
		txt += "<th>" + "Beer name" + "</th>";
		txt += "<th>" + "Yeast" + "</th>";
		txt += "<th>" + "Food Pairing" + "</th>";
		txt += "<th>" + "Tagline" + "</th>";
		txt += "<th>" + "Description" + "</th>";
		txt += "</tr>";
		txt += "</table>";
		document.getElementById("table_result").innerHTML = txt;
	}
};
