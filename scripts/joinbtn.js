let a =document.getElementById('currentTime').innerHTML.split(' ')[2]
if (a!='no'){
	document.getElementById('join').innerHTML=`<input class ='w3-button w3-round-xxlarge w3-large w3-black'type="button" onclick="window.open(document.getElementById('${a}').href);" value="Join now!"></input>`
}
