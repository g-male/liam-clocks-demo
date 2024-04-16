setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	//sec_rotation = 6 * sec;

	nyhour.style.transform = `rotate(${hr_rotation}deg)`;
	nyminute.style.transform = `rotate(${min_rotation}deg)`;
	//second.style.transform = `rotate(${sec_rotation}deg)`;
	
}, 500);

setInterval(() => {
	londonDate = new Date().toLocaleString("en-GB", {timeZone: "Europe/London"}); //object of date()
	console.log(londonDate);
	londonHour = londonDate.split(', ')[1].split(':')[0];
	londonMin = londonDate.split(':')[1].split(':')[0];
	
	londonhr_rotation = 30 * londonHour + londonMin / 2; //converting current time
	londonmin_rotation = 6 * londonMin;
	//sec_rotation = 6 * sec;

	
	londonhour.style.transform = `rotate(${londonhr_rotation}deg)`;
	londonminute.style.transform = `rotate(${londonmin_rotation}deg)`;
	//second.style.transform = `rotate(${sec_rotation}deg)`;
	
}, 500);

setInterval(() => {
	tokyoDate = new Date().toLocaleString("en-GB", {timeZone: "Asia/tokyo"}); //object of date()
	console.log(tokyoDate);
	tokyoHour = tokyoDate.split(', ')[1].split(':')[0];
	tokyoMin = tokyoDate.split(':')[1].split(':')[0];
	
	tokyohr_rotation = 30 * tokyoHour + tokyoMin / 2; //converting current time
	tokyomin_rotation = 6 * tokyoMin;
	//sec_rotation = 6 * sec;

	
	tokyohour.style.transform = `rotate(${tokyohr_rotation}deg)`;
	tokyominute.style.transform = `rotate(${tokyomin_rotation}deg)`;
	//second.style.transform = `rotate(${sec_rotation}deg)`;
	
}, 500);

setInterval(() => {
	parisDate = new Date().toLocaleString("en-GB", {timeZone: "Europe/Paris"}); //object of date()
	console.log(parisDate);
	parisHour = parisDate.split(', ')[1].split(':')[0];
	parisMin = parisDate.split(':')[1].split(':')[0];
	
	parishr_rotation = 30 * parisHour + parisMin / 2; //converting current time
	parismin_rotation = 6 * parisMin;
	//sec_rotation = 6 * sec;

	
	parishour.style.transform = `rotate(${parishr_rotation}deg)`;
	parisminute.style.transform = `rotate(${parismin_rotation}deg)`;
	//second.style.transform = `rotate(${sec_rotation}deg)`;
	
}, 500);


setInterval(() => {
	hkDate = new Date().toLocaleString("en-GB", {timeZone: "Asia/Hong_kong"}); //object of date()
	console.log(hkDate);
	hkHour = hkDate.split(', ')[1].split(':')[0];
	hkMin = hkDate.split(':')[1].split(':')[0];
	
	hkhr_rotation = 30 * hkHour + hkMin / 2; //converting current time
	hkmin_rotation = 6 * hkMin;
	//sec_rotation = 6 * sec;

	
	hkhour.style.transform = `rotate(${hkhr_rotation}deg)`;
	hkminute.style.transform = `rotate(${hkmin_rotation}deg)`;
	//second.style.transform = `rotate(${sec_rotation}deg)`;
	
}, 500);


function infoclick() {
	var tagdsk = document.getElementById('information-tag-dsk');
	var tagmbl = document.getElementById('information-tag-mbl');
	var infob = document.getElementById('infoblurb'); 
	infob.style.display === "none";
	if (infob.style.display === "block"){
		infob.style.display ="none";

	} else{
	infob.style.display = "block";
 }	
}

//console.log(hr1);
