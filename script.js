const apiKey = "fd5a21749be0469006e9da6916ca2240";
const cityName = document.getElementById("cityName").value;
const url1 = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}';

function getWeatherFromName() {
  fetch(url1)
  .then(response => response.json())
  .then(data => {
    console.log(data);
        const {temp, feels_like, temp_min, temp_max, humidity} = data.main;
        const weather = '${temp},${feels_like},${temp_min},${temp_max},${humidity}';
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }

const cityID = document.getElementById("cityID").value;
const url2 = 'https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}';

function getWeatherFromID() {
  fetch(url2)
  .then(response => response.json())
  .then(data => {
    console.log(data);
        const {temp, feels_like, temp_min, temp_max, humidity} = data.main;
        const weather = '${temp},${feels_like},${temp_min},${temp_max},${humidity}';
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }

const zipCode = document.getElementById("zipCode").value;
const countryCode = document.getElementById("countryCode").value;
const url3 = 'https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}';

function getWeatherFromZip() {
  fetch(url3)
  .then(response => response.json())
  .then(data => {
    console.log(data);
        const {temp, feels_like, temp_min, temp_max, humidity} = data.main;
        const weather = '${temp},${feels_like},${temp_min},${temp_max},${humidity}';
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
