// var searchHistoryEl = document.getElementById("city-history");
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

//Maybe adjust this later to make unique key integer and use the corresponding value as the button text?
let getLocalStorage = () => {
    Object.keys(localStorage).forEach((key) => {
        var cityWeatherButton = document.createElement('button');
        cityWeatherButton.setAttribute('id', "city-btn");
        cityWeatherButton.addEventListener("click", function () {
            var localStorageCity = JSON.parse(localStorage.getItem(key));
            var cityName = localStorageCity;
            var currentTemp = "N/A";
            var currentWeatherSummary = "N/A";

            document.getElementById("current-weather").innerHTML = "";

            renderTodayForecast(cityName, currentTemp, currentWeatherSummary);
        });
        var localStorageCity = JSON.parse(localStorage.getItem(key));
        cityWeatherButton.textContent = localStorageCity;
        searchHistoryEl.append(cityWeatherButton);
    });
};

getLocalStorage();

//Call to API passing the searched city name and concat it into the API along with the key and conversion to imperial system format.
function getWeatherByCity(event) {
    event.preventDefault();
    var searchCity = document.getElementById("searched-city-input").value;

    var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + openWeatherApiKey + "&units=imperial";

    document.getElementById("current-weather").innerHTML = "";
   
    if (!localStorage.getItem(searchCity)) {
        localStorage.setItem(searchCity, JSON.stringify(searchCity));
    }

    fetch(openWeatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            var cityName = weatherData.name;
            var currentTemp = weatherData.main.temp;
            var currentWeatherSummary = weatherData.weather[0].description;
            var selectedWeatherData = [cityName, currentTemp, currentWeatherSummary];
            //renders the searched city name and weather data
            renderTodayForecast(cityName, currentTemp, currentWeatherSummary);
            //clears the input form
          
            if(globalCityButton) {
                globalCityButton.textContent = cityName;
            }
            // getLocalStorage();//calls getLocalStorage

        })
        .catch(function (error) {
            console.log(error);
        })
};

function renderTodayForecast(cityName, currentTemp, currentWeatherSummary) {
        var todayWeatherCity = document.createElement('h4');
        todayWeatherCity.textContent = cityName;

        var currentWeatherData = document.createElement('ul');
        var currentWeatherLineItem1 = document.createElement('li');
        currentWeatherLineItem1.textContent = `Temperature: ${currentTemp} deg. F`;
        var currentWeatherLineItem2 = document.createElement('li');
        currentWeatherLineItem2.textContent = `Summary: ${currentWeatherSummary}`;

        currentWeather.append(todayWeatherCity);
        currentWeather.append(currentWeatherLineItem1, currentWeatherLineItem2);
        currentWeather.append(currentWeatherData);
        
        return;
    }
//     );
// };




function clearHistory(event) {
    event.preventDefault();
    localStorage.clear();
    localStorageCityHistory = [];
};


//Event listener for city search Button that also refreshes browser
searchWeatherButton.addEventListener('click', function(event) {
    getWeatherByCity(event)
    location.reload();
});

clearCityHistoryButton.addEventListener('click', function(event) {
    clearHistory(event)
    location.reload();
});

