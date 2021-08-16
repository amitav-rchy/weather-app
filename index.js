		
//DOM Selection
		const enter = document.getElementById('enter');
		const submit = document.getElementById('submit');
		const city = document.getElementById('city');
		const temp = document.getElementById('temp');
		const des = document.getElementById('des');
		const feelslike = document.getElementById('feelslike');
		const ht = document.getElementById('ht');
		const lt = document.getElementById('lt');
		const ws = document.getElementById('ws');
		const sr = document.getElementById('sr');
		const ss = document.getElementById('ss');
		
//After Click Event Details
		submit.addEventListener('click', function(e){
			const enterval = enter.value;
			e.preventDefault();
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${enterval}&appid=82a35108a08272b85b45f82886c88fe7`)
			.then(data => data.json())
			.then(value => {
				console.log(value);

				//Time
				city.innerText = value.name;

				//Temperature
				const tempval = value.main.temp - 273;
				const tempfinal = tempval.toFixed(2);
				temp.innerText = tempfinal;

				//Feels Like
				const feellike = value.main.feels_like - 273;
				const flfinal = feellike.toFixed(2);
				feelslike.innerText = flfinal;

				//Max temperature
				const hte = value.main.temp_max - 273;
				const htfinal = hte.toFixed(2);
				ht.innerText = htfinal;

				//Min Temperature
				const lte = value.main.temp_min - 273;
				const ltfinal = lte.toFixed(2);
				lt.innerText = ltfinal;

				//Wind Speed
				ws.innerText = value.wind.speed;

				//Sunrise
				const sunrise = value.sys.sunrise;
				const datesr = new Date(sunrise*1000).toLocaleTimeString();;
				sr.innerText = datesr;

				//Sunset
				const sunset = value.sys.sunset;
				const datess = new Date(sunset*1000).toLocaleTimeString();;
				ss.innerText = datess;


			});
		})