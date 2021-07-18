const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://type.fit/api/quotes",
	"method": "GET"
}

$.ajax(settings).done(function (response) {
	const data = JSON.parse(response);
	// console.log(data);
	let temp=data[Math.floor(Math.random() * data.length)];
	document.getElementById('quotes').innerHTML=`<h1><p>${temp['text']}</p><p>- ${temp['author']}</p></h1>`
});