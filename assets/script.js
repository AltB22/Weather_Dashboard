//Some notes and psuedo-code about what I'm trying to do to finish this app:
//Prefer to make 1 API call that uses only the first index position [0] to get the current weather and then uses all 5 index positions to get the 5 day forecast.  Would need to split off index[0] and then get all for the 5 day. Then render in respective elements.

var openWeatherApiKey = "eaf99af1f4ee974c35e4e4ec7368e660";
var searchWeatherButton = document.getElementById("search-by-city-button");
var clearCityHistoryButton = document.getElementById("clear-history-btn");
let localStorageCityHistory = [];
var lastSearchedCity = '';
// var cityKeys = JSON.parse(localStorage.getItem("cityKeys")) || [];
// var globalCityButton = document.getElementById('city-btn');
var currentWeather = document.getElementById("current-weather");
var todayWeatherIcon = document.getElementById("current-icon");
var fiveDayParentEl = document.getElementById("five-day-forecast");
const compass = [...new Array(360).keys()]
console.log(compass)


function renderTodayForecast(weatherDate, cityName, currentWeatherIcon, currentTemp, currentHumidity, currentWindSpeed, currentWindDir, currentWeatherSummary) {
    currentWeather.innerHTML = "";

    var todayWeatherDate = document.createElement('h4')
    todayWeatherDate.textContent = weatherDate;

    var todayWeatherCity = document.createElement('h4');
    todayWeatherCity.textContent = cityName;

    var todayWeatherIcon = document.createElement('div');
    todayWeatherIcon.innerHTML = `<img src="${currentWeatherIcon}">`;
   
    var currentWeatherTemp = document.createElement('p');
    currentWeatherTemp.textContent = `Temperature: ${currentTemp} deg. F`;

    var currentWeatherHumidity = document.createElement('p');
    currentWeatherHumidity.textContent = `Humidity: ${currentHumidity} %`;

    var currentWeatherWindSpeed = document.createElement('p');
    currentWeatherWindSpeed.textContent = `Wind Speed: ${currentWindSpeed} mph`;

    var currentWeatherWindDir = document.createElement('p');
    currentWeatherWindDir.textContent = `Wind Dir: ${currentWindDir}`;
    
    var currentWeatherSum = document.createElement('p');
    currentWeatherSum.textContent = `Weather Summary: ${currentWeatherSummary}`;

    currentWeather.append(todayWeatherDate, todayWeatherCity, todayWeatherIcon, currentWeatherTemp, currentWeatherSum, currentWeatherHumidity, currentWeatherWindSpeed, currentWeatherWindDir);
    
    return;
}

//if city button true then renderTodayWeather using the text content of the button as the cityName being searched by API and run getWeatherByCity
function handleSearchButton(event) {
    event.preventDefault();
    let cityName = document.getElementById("searched-city-input");
    getWeatherByCity(event, cityName)//passes cityName to getWeatherByCity
};

//Call to API passing the searched city name and concat it into the API along with the key and conversion to imperial system format.
function getWeatherByCity(cityName) {
    // event.preventDefault();
    // var searchCity = document.getElementById("searched-city-input").value;
    var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + openWeatherApiKey + "&units=imperial";

    currentWeather.innerHTML = "";
   
    fetch(openWeatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            
            var weatherDate = weatherData.dt;
            weatherDate = dayjs.unix(weatherData.dt).format('MMM D, YYYY');
            var cityName = weatherData.name;
            var currentTemp = weatherData.main.temp;
            var currentHumidity = weatherData.main.humidity;
            var currentWindSpeed = weatherData.wind.speed
            var currentWindDir = JSON.stringify(weatherData.wind.deg);
            var currentWeatherSummary = weatherData.weather[0].description;
            var currentWeatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            
            renderTodayForecast(weatherDate, cityName, currentWeatherIcon, currentTemp, currentHumidity, currentWindSpeed, currentWindDir, currentWeatherSummary);

      var keyName = "city-" + cityKeys.length;
    //   localStorage.setItem(keyName, JSON.stringify(cityName));
      cityKeys.push(keyName);
      localStorage.setItem(keyName, JSON.stringify(cityName));
      console.log(keyName, cityName)

      renderLocalStorage();
    })
}

function renderLocalStorage() {
    var searchHistoryEl = document.getElementById("city-history");
        
    for (let i = 0; i < localStorage.length; i++) {
        
    // var cityKeys = JSON.parse(localStorage.getItem(cityName)) || [];
      var cityName = localStorage.key(i);
      var localStorageCity = JSON.parse(localStorage.getItem(cityName));
      var cityWeatherButton = document.createElement("button");
      cityWeatherButton.setAttribute("class", "city-btn");
      cityWeatherButton.setAttribute("id", `city-btn-${i}`);
      cityWeatherButton.textContent = localStorageCity;
      cityWeatherButton.addEventListener("click", renderByCityButton);
  
      searchHistoryEl.appendChild(cityWeatherButton);
    }
  }

function clearHistory(event) {
    event.preventDefault();
    localStorage.clear();
    localStorageCityHistory = [];
};

//Event listener for city search Button
searchWeatherButton.addEventListener('click', handleCitySearch);

clearCityHistoryButton.addEventListener('click', function(event) {
    clearHistory(event)
    location.reload();
});

