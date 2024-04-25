const weatherName = document.querySelector(".weatherName");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const api_Key = "fd5a21749be0469006e9da6916ca2240";
let units = "imperial";

weatherName.addEventListener("submit", async event => {
  event.preventDefault();

  const city = cityInput.value;

  if(city){
    try{
        const weatherData = await getWeatherData(city);
        displayWeatherInfo(weatherData)
    }
    catch(error){
      console.log(error);
    }
  }
});

async function getWeatherData(city){
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=${units}`;
  const response = await fetch(apiUrl);

  console.log(response);
  return await response.json();
}

function displayWeatherInfo(data){
  const {name: city, 
         main: {temp, humidity},
         weather: [{description}]} = data;
  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = `${city}`;
  tempDisplay.textContent = `${temp}`;
  humidityDisplay.textContent = `humidity: ${humidity}%`
  descDisplay.textContent = `${description}`;

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
}


