window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("header").style.fontSize = "3vw";
		document.getElementById("header").setAttribute('align','center')
	} 
	else {
		document.getElementById("header").style.fontSize = "6vw";
		document.getElementById("header").setAttribute('align','center')
	}
}