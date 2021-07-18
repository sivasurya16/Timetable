function get_time(){
	let dt = new Date();
	let hours = dt.getHours() ; 
	let AmOrPm = hours >= 12 ? 'pm' : 'am';
	hours = (hours % 12) || 12;
	let minutes = dt.getMinutes() ;
	// let finalTime =hours + "," + minutes + "," + AmOrPm;
	let finalTime=[hours,minutes,AmOrPm];
	
	// console.log(finalTime)
	return finalTime;
	// document.getElementById("currentTime").value = finalTime;
}

function get_day(){
	let a= new Date();
	let day = a.getDay();
	// document.getElementById('currentTime').value = day
	return day;
}

function log(a){
	console.log(a);
}

function delta_hours(a,b){
	/*return delta in minutes*/
	// console.log((a*60),(b*60))
	return (a*60)-(b*60)
}

function delta_minutes(a,b){
	// console.log(a,b)
	return a-b
}

/*function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}*/


function main(){
	// console.log(get_time())

	// let table={5:{'1:0 pm-2:0 pm':'Maths'}};
	let table={
		0:{},
		1:{"8:45 am-9:45 am":'CS','10:0 am-11:0 am':"Physics",'12:20 pm-1:20 pm':'Chemistry'},
		2:{"8:45 am-9:45 am":'Chemistry','10:0 am-11:0 am':"Maths"},
		3:{"8:45 am-9:45 am":'Maths','10:0 am-11:0 am':"CS",'12:20 pm-1:20 pm':'Physics'},
		4:{"8:45 am-9:45 am":'English','10:0 am-11:0 am':"Chemistry"},
		5:{"8:45 am-9:45 am":'CS','10:0 am-11:0 am':"English",'12:20 pm-1:20 pm':'Physics'},
		6:{"8:45 am-9:45 am":'Maths','10:0 am-11:0 am':"VE"},
	}
	let temp= table[get_day()];
	// log(Object.keys(temp))
	// let time = get_time()

	let data = {'hours':[],'minutes':[],'zone':[]};

	for (var i = 0; i < Object.keys(temp).length; i++) {
		data={'hours':[],'minutes':[],'zone':[]};
		let b = Object.keys(temp)[i];
		b = b.split('-');
		// log(b)
		for (var j = 0; j < b.length; j++) {
			// log(b[i])
			let temp2=b[j].split(':');
			let hours=temp2[0];
			let minutes=temp2[1].split(' ')[0];
			let zone=temp2[1].split(' ')[1];

			// let temp3= data['hours']
			// log(data['hours'])
			data['hours'].push(hours);
			data['minutes'].push(minutes);
			data['zone'].push(zone);
		}
		
		log(data)
		let x=get_time();
		
		/*if (data['zone'].includes(x[2])){
			log('a')
			// log(hours)
			if(data['hours'].includes(x[0])){
				console.log(b.join('-'))
				document.getElementById('currentTime').innerHTML='You have '+(temp[b.join('-')])+' class now!!'
				break
			}
		}*/

		var uniq = [new Set(data['zone'])]	
		if (uniq.length===1){
			// console.log(data['hours'],x[0])
			let final = delta_hours(Number(data['hours'][0]),Number(x[0]))
			final += delta_minutes(Number(data['minutes'][0]),Number(x[1]))
			console.log(final)
			
			if (final<30 & final>5 ){
				document.getElementById('currentTime').innerHTML='You have '+(temp[b.join('-')])+' class in '+final+' minutes'
			}
			else if (final<=5 & final>0){
				document.getElementById('currentTime').innerHTML='You have '+(temp[b.join('-')])+' class in '+final+' minutes'
				
			}
			else if (final<=0&final>=-60){
				document.getElementById('currentTime').innerHTML='You have '+(temp[b.join('-')])+' class now !!'
				
			}
			else{
				document.getElementById('currentTime').innerHTML='You have no class currently' 
			}
		}
	}
}


main()
setInterval(main,60000)