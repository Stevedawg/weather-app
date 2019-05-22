import React from 'react';
import './weather.css'
import moment from 'moment'


class Weather extends React.Component {
	constructor(props) {
	super(props);

	this.state = {
		temperature: 55,
		weatherDescription: 'Cloudy',
		weatherImg: '',
		tempMax: '',
		tempMin: '',
		date: '',

		temperature2: 55,
		weatherDescription2: 'Cloudy',
		weatherImg2: '',
		tempMax2: '',
		tempMin2: '',
		date2: '',

		temperature3: 55,
		weatherDescription3: 'Cloudy',
		weatherImg3: '',
		tempMax3: '',
		tempMin3: '',
		date3: '',

		temperature4: 55,
		weatherDescription4: 'Cloudy',
		weatherImg4: '',
		tempMax4: '',
		tempMin4: '',
		date4: '',

		temperature5: 55,
		weatherDescription5: 'Cloudy',
		weatherImg5: '',
		tempMax5: '',
		tempMin5: '',
		date5: ''
	};

	}


	componentDidMount() {
	    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Austin,US&units=imperial&APPID=e64ad6bb3e187568a4a6dc2e3d973671')
	      .then(response => response.json())
	      .then(data => this.setState({

	      	temperature: Math.floor(data.list[0].main.temp),
	      	weatherDescription: data.list[0].weather[0].main,
	      	weatherImg: 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png',
	      	tempMax: Math.floor(data.list[0].main.temp_max),
	      	tempMin: Math.floor(data.list[0].main.temp_min),
	      	date: moment(data.list[0].dt_txt).format("MMM Do, YYYY"),

	      	temperature2: Math.floor(data.list[8].main.temp),
	      	weatherDescription2: data.list[8].weather[0].main,
	      	weatherImg2: 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png',
	      	tempMax2: Math.floor(data.list[8].main.temp_max),
	      	tempMin2: Math.floor(data.list[8].main.temp_min),
	      	date2: moment(data.list[8].dt_txt).format("MMM Do, YYYY"),

	      	temperature3: Math.floor(data.list[16].main.temp),
	      	weatherDescription3: data.list[16].weather[0].main,
	      	weatherImg3: 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png',
	      	tempMax3: Math.floor(data.list[16].main.temp_max),
	      	tempMin3: Math.floor(data.list[16].main.temp_min),
	      	date3: moment(data.list[16].dt_txt).format("MMM Do, YYYY"),

	      	temperature4: Math.floor(data.list[24].main.temp),
	      	weatherDescription4: data.list[24].weather[0].main,
	      	weatherImg4: 'http://openweathermap.org/img/w/' + data.list[24].weather[0].icon + '.png',
	      	tempMax4: Math.floor(data.list[24].main.temp_max),
	      	tempMin4: Math.floor(data.list[24].main.temp_min),
	      	date4: moment(data.list[24].dt_txt).format("MMM Do, YYYY"),

	      	temperature5: Math.floor(data.list[32].main.temp),
	      	weatherDescription5: data.list[32].weather[0].main,
	      	weatherImg5: 'http://openweathermap.org/img/w/' + data.list[32].weather[0].icon + '.png',
	      	tempMax5: Math.floor(data.list[32].main.temp_max),
	      	tempMin5: Math.floor(data.list[32].main.temp_min),
	      	date5: moment(data.list[32].dt_txt).format("MMM Do, YYYY")
	      	}));
	 }


	render() {

		return (
				<React.Fragment>
				<div className="weatherBox">
					<h3 className="weatherDesc">{this.state.weatherDescription}</h3>
					<img alt="Weather Icon" className="icon" src={this.state.weatherImg} />
					<p className="temp">{this.state.temperature}</p>
					<div className="minMaxContainer">
						<p className="minContainer">{this.state.date}</p>
					</div>
				</div>

				<div className="weatherBox">
					<h3 className="weatherDesc">{this.state.weatherDescription2}</h3>
					<img alt="Weather Icon" className="icon" src={this.state.weatherImg2} />
					<p className="temp">{this.state.temperature2}</p>
					<div className="minMaxContainer">
						<p className="minContainer">{this.state.date2}</p>
					</div>
				</div>

				<div className="weatherBox">
					<h3 className="weatherDesc">{this.state.weatherDescription3}</h3>
					<img alt="Weather Icon" className="icon" src={this.state.weatherImg3} />
					<p className="temp">{this.state.temperature3}</p>
					<div className="minMaxContainer">
						<p className="minContainer">{this.state.date3}</p>
					</div>
				</div>

				<div className="weatherBox">
					<h3 className="weatherDesc">{this.state.weatherDescription4}</h3>
					<img alt="Weather Icon" className="icon" src={this.state.weatherImg4} />
					<p className="temp">{this.state.temperature4}</p>
					<div className="minMaxContainer">
						<p className="minContainer">{this.state.date4}</p>
					</div>
				</div>

				<div className="weatherBox">
					<h3 className="weatherDesc">{this.state.weatherDescription5}</h3>
					<img alt="Weather Icon" className="icon" src={this.state.weatherImg5} />
					<p className="temp">{this.state.temperature5}</p>
					<div className="minMaxContainer">
						<p className="minContainer">{this.state.date5}</p>
					</div>
				</div>
				</ React.Fragment>
			);
		}
	}

export default Weather;