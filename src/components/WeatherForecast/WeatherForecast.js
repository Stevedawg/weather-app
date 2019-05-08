import React from 'react';
import Weather from '../Weather/weather'
import './weather.css'


class WeatherForecast extends React.Component {

	fetch('https://api.openweathermap.org/data/2.5/forecast?q=Austin,US&units=imperial&APPID=e64ad6bb3e187568a4a6dc2e3d973671')  
	  .then(function(resp) { return resp.json() }) // Convert data to json
	  .then(function(data) {
	  	console.log(data);
	    
	    // for loop incrementing by 8 seems to work for dividing into 5 days

	  })
	  .catch(function() {
	    // catch any errors
	  });

	render() {
		return (
			<div class="weatherBox">
					<h3 class="weatherDesc">{data.list[0].weather.description}</h3>
					<img class="icon" src="Oval.png" />
					<p class="temp">{data.list[0].main.temp}</p>
					<div class="minMaxContainer">
						<p class="maxContainer">{data.list[0].main.temp_max}</p>
						<p class="minContainer">{data.list[0].main.temp_min}</p>
					</div>
			</div>
			);
		}
	}

export default WeatherForecast;