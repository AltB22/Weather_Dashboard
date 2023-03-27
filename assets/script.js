
var openWeatherApiKey = "eaf99af1f4ee974c35e4e4ec7368e660";
var searchWeatherButton = document.getElementById("search-by-city-button");
var clearCityHistoryButton = document.getElementById("clear-history-btn");
let localStorageCityHistory = JSON.parse(localStorage.getItem("key")) || [];
var cityKeys = JSON.parse(localStorage.getItem("cityKeys")) || [];
var globalCityButton = document.getElementById('city-btn');
var currentWeather = document.getElementById("current-weather");
var todayWeatherIcon = document.getElementById("current-icon");
var fiveDayParentEl = document.getElementById("five-day-forecast");
// var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="
// let weatherData = openWeatherUrl;
// var todaysForecast = document.getElementById("todays-forecast");
//generates a unique keyName fo the cities searched to be used as key value pair in local storage


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

function renderFiveDayForecast(weatherDate, cityName, currentWeatherIcon, currentTemp, currentHumidity, currentWindSpeed, currentWindDir, currentWeatherSummary) {
    fiveDayParentEl.innerHTML = "";

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

    fiveDayParentEl.append(todayWeatherDate, todayWeatherCity, todayWeatherIcon, currentWeatherTemp, currentWeatherSum, currentWeatherHumidity, currentWeatherWindSpeed, currentWeatherWindDir);
    
    return;
}
//if city button true then renderTodayWeather using the text content of the button as the cityName being searched by API and run getWeatherByCity
function renderByCityButton(event) {
    event.preventDefault();
    let cityName = event.target.textContent;
    handleCitySearch(event, cityName)//passes cityName to getWeatherByCity

};

//Call to API passing the searched city name and concat it into the API along with the key and conversion to imperial system format.
function handleCitySearch(event) {
    event.preventDefault();
    var searchCity = document.getElementById("searched-city-input").value;

    // if(localStorageCityHistory ==!null ){
    //     var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + openWeatherApiKey + "&units=imperial";

    // } else {
    var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + openWeatherApiKey + "&units=imperial";
    // }

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
            
            //switch / case to convert compass windDir to n, S, E, W etc.  Will finish after establish MVP.
            switch (currentWindDir) {//given
                case "299":// if
                    currentWindDir = "West";//then
                    break;
                case "267":
                    currentWindDir = "West";
                    break;
                case "268":
                    currentWindDir = "West";
                    break;
                case "269":
                    currentWindDir = "West"
            }
            //renders the searched city name and weather data
            renderTodayForecast(weatherDate, cityName, currentWeatherIcon, currentTemp, currentHumidity, currentWindSpeed, currentWindDir, currentWeatherSummary);

      var keyName = "city-" + cityKeys.length;
    //   localStorage.setItem(keyName, JSON.stringify(cityName));
      cityKeys.push(keyName);
      localStorage.setItem(keyName, JSON.stringify(cityName));

      renderLocalStorage();
    })
}

function handleFiveDaySearch(event) {
    event.preventDefault();
    var searchCity = document.getElementById("searched-city-input").value;

    // if(localStorageCityHistory ==!null ){
    //     var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + openWeatherApiKey + "&units=imperial";

    // } else {
    var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + openWeatherApiKey + "&units=imperial";
    // }

    currentWeather.innerHTML = "";
   
    fetch(openWeatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
    
        for(let i = 1; i < weatherData.length; i++)
        
        var weatherDate = weatherData.dt[i];
        weatherDate = dayjs.unix(weatherData.dt).format('MMM D, YYYY');
        var cityName = weatherData.name;
        var currentTemp = weatherData.main.temp;
        var currentHumidity = weatherData.main.humidity;
        var currentWindSpeed = weatherData.wind.speed
        var currentWindDir = JSON.stringify(weatherData.wind.deg);
        var currentWeatherSummary = weatherData.weather[0].description;
        var currentWeatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

        renderFiveDayForecast(weatherDate, cityName, currentWeatherIcon, currentTemp, currentHumidity, currentWindSpeed, currentWindDir, currentWeatherSummary);
    })
    .catch(function (error) {
      console.log(error);
    });
};

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

//Event listener for city search Button that also refreshes browser
searchWeatherButton.addEventListener('click', handleFiveDaySearch)
searchWeatherButton.addEventListener('click', handleCitySearch);
// searchWeatherButton.addEventListener('click', renderLocalStorage)
// globalCityButton.addEventListener('click', renderByCityButton);
clearCityHistoryButton.addEventListener('click', function(event) {
    clearHistory(event)
    location.reload();
});

// renderLocalStorage();

// let getLocalStorage = () => {
//     Object.keys(localStorage).forEach((key) => {
//         var cityWeatherButton = document.createElement('button');
//         cityWeatherButton.setAttribute('class', "city-btn");
//         cityWeatherButton.setAttribute("id",`${i}`);
//         cityWeatherButton.addEventListener("click", renderByCityButton)
//         var localStorageCity = JSON.parse(localStorage.getItem(key));
//             cityWeatherButton.textContent = localStorageCity;    
//             searchHistoryEl.append(cityWeatherButton);
//         });
//     };