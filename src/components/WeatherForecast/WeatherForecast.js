import React from 'react';
import Weather from '../Weather/weather'
import './weather.css'


class WeatherForecast extends React.Component {


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