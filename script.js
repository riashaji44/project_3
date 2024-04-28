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

function fetchWeather(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const { temp, feels_like, temp_min, temp_max, humidity } = data.main;
      const weatherInfo = document.getElementById("weatherInfo");

      const weatherHtml = `
        <p>Temperature: ${temp} °F</p>
        <p>Feels like: ${feels_like} °F</p>
        <p>Min. Temp: ${temp_min} °F</p>
        <p>Max. Temp: ${temp_max} °F</p>
        <p>Humidity: ${humidity}%</p>
      `;

      weatherInfo.innerHTML = weatherHtml;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}