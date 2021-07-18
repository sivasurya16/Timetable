function get_time(){
	/*Creates Date object and returning the time
	an array with hours and minutes*/
	let dt = new Date();
	let hours = dt.getHours(); 
	let minutes = dt.getMinutes() ;
	let finalTime=[hours,minutes];
	return finalTime;
}

function get_day(){
	/*Creates Date object and returning the day*/
	let a= new Date();
	let day = a.getDay(); /*Represented as integer*/
	let Day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	return Day[day];
}


function delta_hours(a,b){
	/*Returns hours difference beteen 2 time
	Used here to determine when class is there*/
	return (a*60)-(b*60)
}

function delta_minutes(a,b){
	/*Returns minutes difference beteen 2 time
	Used here to determine when class is there*/
	return a-b
}



function main(){
	/*Main function to make things work*/
	/*let table={6:{'9:30-10:30':'Maths'}};*/
	
	/*Timetable with time in 24hrs format*/
	let table={
		'Sunday':{},
		'Monday':{"8:45-9:45":'CS','10:0-11:0':"Physics",'12:20-13:20':'Chemistry'},
		'Tuesday':{"8:45-9:45":'Chemistry','10:0-11:0':"Maths"},
		'Wednesday':{"8:45-9:45":'Maths','10:0-11:0':"CS",'12:20-13:20':'Physics'},
		'Thursday':{"8:45-9:45":'English','10:0-11:0':"Chemistry"},
		'Friday':{"8:45-9:45":'CS','10:0-11:0':"English",'12:20-13:20':'Physics'},
		'Saturday':{"8:45-9:45":'Maths','10:0-11:0':"VE"},
	}

	let temp= table[get_day()];


	let data = {'hours':[],'minutes':[]};

	console.log(temp);
	if (Object.keys(temp).length){
	/*Determines if you have atleast one class that day*/
 
		for (var key in temp){

			data={'hours':[],'minutes':[]};

			key = key.split('-');

			console.log(key)
			key.forEach(time =>{


	
				let temp2=time.split(':');
				let hours=temp2[0];
				let minutes=temp2[1].split(' ')[0];
				let zone=temp2[1].split(' ')[1];

		
				data['hours'].push(hours);
				data['minutes'].push(minutes);
	
			})
			

			let x=get_time();

			let final = delta_hours(Number(data['hours'][0]),Number(x[0]))
			final += delta_minutes(Number(data['minutes'][0]),Number(x[1]))
			console.log(final)
			
			if (final<30 & final>5 ){
				document.getElementById('currentTime').innerHTML='You have '+(temp[b.join('-')])+' class in '+final+' minutes'
				return
			}
			else if (final<=5 & final>0){
				document.getElementById('currentTime').innerHTML='You have '+(temp[b.join('-')])+' class in '+final+' minutes'
				return
				
			}
			else if (final<=0&final>=-60){
				document.getElementById('currentTime').innerHTML='You have '+(temp[b.join('-')])+' class now !!'
				return
			}
			else{
				document.getElementById('currentTime').innerHTML='You have no class currently' 
			}
			
		}
	}
	else{
	/*Else part of checking if you have atleast a class that day*/
		document.getElementById('currentTime').innerHTML='You have no class today Enjoy the day : )'
	}
}


main()
setInterval(main,60000)