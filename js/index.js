const getBeersAPI = () => fetch('https://api.punkapi.com/v2/beers')
	.then(response => response.json())
	.catch(e => console.err('Fail'))
	.then(response => {
		let obj = response;
		let txt = "<table style= 'wigth: 80%; margin: auto;'>";
			txt += "<tr style='background-color: #FF9797;'>";
			txt += "<th>" +"Image" + "</th>";
			txt += "<th>" +"Beer name" + "</th>";
			txt += "<th>" +"Yeast" + "</th>";
			txt += "<th>" +"Food Pairing" + "</th>";
			txt += "<th>" +"Tagline" + "</th>";
			txt += "<th>" +"Description" + "</th>";
			txt += "</tr>";
		for(let i = 0; i < obj.length; i++){
			txt += "<tr>";
			txt += "<td>" + "<image src =" +obj[i].image_url + " "+ "width ="+ '50px ' +" />"+ "</td>"; 
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

const getBeersAPIByName = (name) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
		let obj = response;
		let txt = "<table  style= 'wigth: 80%; margin: auto;'>";
			txt += "<tr style='background-color: #FF9797;'>";
			txt += "<th>" +"Image" + "</th>";
			txt += "<th>" +"Beer name" + "</th>";
			txt += "<th>" +"Yeast" + "</th>";
			txt += "<th>" +"Food Pairing" + "</th>";
			txt += "<th>" +"Tagline" + "</th>";
			txt += "<th>" +"Description" + "</th>";
			txt += "</tr>";

		for(let i = 0; i < obj.length; i++){
			txt += "<tr>";
			txt += "<td>" + "<image src =" +obj[i].image_url + " "+ "width ="+ '50px ' +" />"+ "</td>"; 
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

const getBeersAPIByYeast = (yeast) => fetch(`https://api.punkapi.com/v2/beers/?yeast=${yeast}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
		let obj = response;
		let txt = "<table style= 'wigth: 80%; margin: auto;'>";
			txt += "<tr style='background-color: #FF9797;'>";
			txt += "<th>" +"Image" + "</th>";
			txt += "<th>" +"Beer name" + "</th>";
			txt += "<th>" +"Yeast" + "</th>";
			txt += "<th>" +"Food Pairing" + "</th>";
			txt += "<th>" +"Tagline" + "</th>";
			txt += "<th>" +"Description" + "</th>";
			txt += "</tr>";
		for(let i = 0; i < obj.length; i++){
			txt += "<tr>";
			txt += "<td>" + "<image src =" +obj[i].image_url +" "+ "width ="+ '50px ' +"/>"+ "</td>"; 
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
    											 
const getBeersAPIByNameAndYeast = (name,yeast) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}&?yeast=${yeast}`)
	.then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
		let obj = response;
		let txt = "<table style= 'wigth: 80%; margin: auto;'>";
			txt += "<tr style='background-color: #FF9797;'>";
			txt += "<th>" +"Image" + "</th>";
			txt += "<th>" +"Beer name" + "</th>";
			txt += "<th>" +"Yeast" + "</th>";
			txt += "<th>" +"Food Pairing" + "</th>";
			txt += "<th>" +"Tagline" + "</th>";
			txt += "<th>" +"Description" + "</th>";
			txt += "</tr>";
		for(let i = 0; i < obj.length; i++){
		txt += "<tr>";
		txt += "<td>" + "<image src =" +obj[i].image_url +" "+ "width ="+ '50px ' +"/>"+ "</td>"; 
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

	getBeersAPI()

	const toSearch = (name,yeast) => {
		if(yeast != "" && name != ""){
			getBeersAPIByNameAndYeast(name,yeast)
		} else if (name != "") {
			getBeersAPIByName(name)
		} else if (yeast != "") {
			getBeersAPIByYeast(yeast)
		} else {
			let txt = "<table style= 'wigth: 80%; margin: auto;'>";
				txt += "<tr style='background-color: #FF9797;'>";
				txt += "<th>" +"Image" + "</th>";
				txt += "<th>" +"Beer name" + "</th>";
				txt += "<th>" +"Yeast" + "</th>";
				txt += "<th>" +"Food Pairing" + "</th>";
				txt += "<th>" +"Tagline" + "</th>";
				txt += "<th>" +"Description" + "</th>";
				txt += "</tr>";
			txt += "</table>";
			document.getElementById("table_result").innerHTML = txt;
		}
	}