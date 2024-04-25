const weatherName = document.querySelector(".weatherName");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const api_Key = "fd5a21749be0469006e9da6916ca2240";
let units = "imperial";

weatherName.addEventListener("submit", async event => {

  // DO NOT DELETE //
  event.preventDefault();
  // DO NOT DELETE //

  const city = cityInput.value;

  if(city){
        const weatherData = await getWeatherData(city);
        displayWeatherInfo(weatherData)
}});

async function getWeatherData(city){
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=${units}`;
  const response = await fetch(apiUrl);

  return await response.json();
}

function displayWeatherInfo(data){
  const {name: city, 
         main: {temp, humidity},
         weather: [{description}]} = data;

  // CLEAR HTML //
  card.textContent = "";

  // CREATE NEW ELEMENTS
  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const emoji = document.createElement("p");

  // SET TEXT CONTENTS TO DATA
  cityDisplay.textContent = `${city}`;
  tempDisplay.textContent = `Temperature: ${temp}`;
  humidityDisplay.textContent = `humidity: ${humidity}%`
  descDisplay.textContent = `Description: ${description}`;
  if(description=='clear sky'){
  emoji.textContent = '☀️';
  }
  else if(description=='few clouds'){
    emoji.textContent = '🌤️';
    }
  else if(description=='scattered clouds'){
      emoji.textContent = '⛅';
    }
  else if(description=='broken clouds'){
      emoji.textContent = '🌥️';
    }
  else if(description=='overcast clouds'){
    emoji.textContent = '☁️';
  }
  else if(description.includes('rain')){
      emoji.textContent='🌧️'
    }
  else if(description.includes('thunderstorm')){
    emoji.textContent='⛈️';
  }
  else if(description.includes('snow')){
    emoji.textContent='🌨️';
  }

  // ADD NEW TEXT TO HTML PAGE
  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(emoji);
}


