import React from 'react';
import './weather.css'


class Weather extends React.Component {
	render() {
		return (
				<div class="weatherBox">
					<h3 class="weatherDesc">Sunny</h3>
					<img class="icon" src="Oval.png" />
					<p class="temp">55</p>
					<div class="minMaxContainer">
						<p class="maxContainer">66</p>
						<p class="minContainer">46</p>
					</div>
				</div>
			);
		}
	}

export default Weather;