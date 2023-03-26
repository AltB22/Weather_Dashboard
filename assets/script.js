var searchHistoryEl = document.getElementById("city-history");
var openWeatherApiKey = "eaf99af1f4ee974c35e4e4ec7368e660";
var searchWeatherButton = document.getElementById("search-by-city-button");
var clearCityHistoryButton = document.getElementById("clear-history-btn");
let localStorageCityHistory = JSON.parse(localStorage.getItem("key")) || [];
var searchHistoryEl = document.getElementById("city-history");
var globalCityButton = document.getElementById('city-btn');
var currentWeather = document.getElementById("current-weather");
var todaysForecast = document.getElementById("todays-forecast");
// var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="
// let weatherData = openWeatherUrl;



function renderTodayForecast(weatherDate, cityName, currentTemp, currentHumidity,  currentWindSpeed, currentWindDir, currentWeatherSummary, currentWeatherIcon) {
    currentWeather.innerHTML = "";

    var currentWeatherDiv = document.createElement("div");
    currentWeatherDiv.classList.add('current-weather-div')

    var todayWeatherDate = document.createElement('h4')
    todayWeatherDate.textContent = weatherDate;

    var todayWeatherCity = document.createElement('h4');
    todayWeatherCity.textContent = cityName;
   
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

    var todayWeatherIcon = document.createElement('p')
    todayWeatherIcon.textContent = currentWeatherIcon;

    currentWeather.append(todayWeatherCity, currentWeatherTemp, currentWeatherHumidity, currentWeatherWindSpeed, currentWeatherWindDir, currentWeatherSum, currentWeatherIcon );
    
    return;
}

//Call to API passing the searched city name and concat it into the API along with the key and conversion to imperial system format.
function getWeatherByCity(event) {
    event.preventDefault();
    var searchCity = document.getElementById("searched-city-input").value;

    var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + openWeatherApiKey + "&units=imperial";

    currentWeather.innerHTML = "";
   
    fetch(openWeatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            var weatherDate = weatherData.dt;
            var cityName = weatherData.name;
            var currentTemp = weatherData.main.temp;
            var currentHumidity = weatherData.main.humidity;
            var currentWindSpeed = weatherData.wind.speed
            var currentWindDir = JSON.stringify(weatherData.wind.deg);
            var currentWeatherSummary = weatherData.weather[0].description;
            var currentWeatherIcon = weatherData.weather.icon;

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
            renderTodayForecast(weatherDate, cityName, currentTemp, currentHumidity,  currentWindSpeed, currentWindDir, currentWeatherSummary, currentWeatherIcon);
        
            localStorage.setItem("city", JSON.stringify(cityName));
            getLocalStorage();
         
        })
        .catch(function (error) {
            console.log(error);
        })
};

//Maybe adjust this later to make unique key integer and use the corresponding value as the button text?
let getLocalStorage = () => {
    Object.keys(localStorage).forEach((key) => {
        var cityWeatherButton = document.createElement('button');
        cityWeatherButton.setAttribute('id', "city-btn");
        cityWeatherButton.addEventListener("click",  renderTodayForecast)
        var localStorageCity = JSON.parse(localStorage.getItem(key));
            cityWeatherButton.textContent = localStorageCity;    
            searchHistoryEl.append(cityWeatherButton);
        });
    
    };

//if city button true then renderTodayWeather using the text content of the button as the cityName being searched by API and run getWeatherByCity
function renderCityButton(event) {
    event.preventDefault();
    let cityName = event.target.textContent
    let cityBtn = document.getElementById('city-btn')
        for(i = 0; i < localStorageCityHistory.length; i++) {
            if(cityBtn.innerHTML === localStorageCityHistory[i]) {
                
                getWeatherByCity(cityName)
            }

        }
    }


function clearHistory(event) {
    event.preventDefault();
    localStorage.clear();
    localStorageCityHistory = [];
};


//Event listener for city search Button that also refreshes browser
searchWeatherButton.addEventListener('click', getWeatherByCity);

clearCityHistoryButton.addEventListener('click', function(event) {
    clearHistory(event)
    location.reload();
});

getLocalStorage();

