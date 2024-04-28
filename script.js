const apiKey = "fd5a21749be0469006e9da6916ca2240";
const units = "imperial";


function getWeatherFromID() {
  const cityID = document.getElementById("cityID").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}&units=${units}`;
  
  fetchWeather(url);
}

function getWeatherFromZip() {
  const zipCode = document.getElementById("zipCode").value;
  const countryCode = document.getElementById("countryCode").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}&units=${units}`;

  fetchWeather(url);
}

function getForecastFromID() {
  const cityID = document.getElementById("cityID").value;
  const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${apiKey}&units=${units}`;

  fetchForecast(url);
}

function getForecastFromZip() {
  const zipCode = document.getElementById("zipCode").value;
  const countryCode = document.getElementById("countryCode").value;
  const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${countryCode}&appid=${apiKey}&units=${units}`;
  
  fetchForecast(url);
}

function fetchWeather(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const { temp, humidity} = data.main;
      const {name} = data;
      const [{description}] = data.weather;
      const weatherInfo = document.getElementById("weatherInfo");

      const weatherHtml = `
        <p>Name: ${name} </p>
        <p>Temperature: ${temp} °F</p>
        <p>Humidity: ${humidity}%</p>
        <p>Description: ${description} </p>
      `;

      weatherInfo.innerHTML = weatherHtml;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

function fetchForecast(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const forecastInfo = document.getElementById("forecastInfo");
      forecastInfo.innerHTML = "";

      data.list.forEach(forecast => {
        const { dt_txt, main: { temp }, weather: [{ description }] } = forecast;

        const forecastHtml = `
          <div class="forecast-item">
            <p>Date/Time: ${dt_txt}</p>
            <p>Temperature: ${temp} °F</p>
            <p>Description: ${description}</p>
          </div>
        `;

        forecastInfo.innerHTML += forecastHtml;
      });
    })
    .catch(error => {
      console.error('Error fetching forecast data:', error);
    });
}
