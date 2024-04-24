const apiKey = "fd5a21749be0469006e9da6916ca2240";
const cityName = document.getElementById("cityName").value;
const url = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}';

function getWeatherFromApi() {
  fetch(url)
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
