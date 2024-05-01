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
        <p>City: ${name} </p>
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

      const header = document.getElementById("header");
      header.innerHTML = "";
   
      data.list.forEach(forecast => {
        const { dt_txt, main: { temp }, weather: [{ description }] } = forecast;

      let emoji = ``;
        
      if(description=='clear sky'){
        emoji = `☀️`;
      }
      else if(description=='few clouds'){
        emoji = '🌤️';
        }
      else if(description=='scattered clouds'){
          emoji = '⛅';
        }
      else if(description=='broken clouds'){
        emoji = '🌥️';
        }
      else if(description=='overcast clouds'){
        emoji = '☁️';
      }
      else if(description.includes('rain')){
        emoji='🌧️'
      }
      else if(description.includes('thunderstorm')){
        emoji='⛈️';
      }
      else if(description.includes('snow')){
        emoji='🌨️';
      }
    
        const headerHTML = ` 
        <span class = "head1"><tr>
        <span class = "head1"><th>Date and Time</th></span>
        <span class = "head1"><th>Temperature</th></span>
        <span class = "head1"><th>Description</th></span>
      </tr>
      `;

        const forecastHtml = `
          
        <div class="head">
          <span><tr>
            <span class = "data"><td>${dt_txt}</td></span>
            <span class = "data"><td> ${temp}°F</td></span>
            <span class = "data"><td> ${description} ${emoji}</td></span>
          <tr></span>

          </div>
        `;
        header.innerHTML = headerHTML;
        forecastInfo.innerHTML += forecastHtml;
      });
    })
    
    .catch(error => {
      console.error('Error fetching forecast data:', error);
    });
    
}
