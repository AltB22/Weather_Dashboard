//Some notes and psuedo-code about what I'm trying to do to finish this app:
//Redirected the flow of data slightly to isolate the search button functionality to establish city name rather than have it be var in the api fetch function.  Will pass cityName as data to API function and have it be pushed to local storage array.  Will use separately the lastSearchedCity to persist the page data.  
var openWeatherApiKey = "eaf99af1f4ee974c35e4e4ec7368e660";
var searchWeatherButton = document.getElementById("search-by-city-button");
var clearCityHistoryButton = document.getElementById("clear-history-btn");
let localStorageCityHistory = [];//establishes empty array to house cities in local storage
var currentCitySearch = "";//establishes the most recent search for separate storage in local to persist the weather data on the page
var currentWeather = document.getElementById("current-weather");
// currentWeather.innerHTML = "";
var todayWeatherIcon = document.getElementById("current-icon");
var fiveDayParentEl = document.getElementById("five-day-forecast");
const compass = [...new Array(360).keys()]


// console.log(compass)
searchWeatherButton.addEventListener('click', handleSearchButton)
//if cityName has value then pass value to getWeatherByCity as the cityName being searched by API and run getWeatherByCity
function handleSearchButton(event) {
    event.preventDefault();
    
    let cityName = document.getElementById("searched-city-input").value;

    if(cityName) {
        getWeatherByCity(cityName)//passes cityName to getWeatherByCity
        // cityName.value = "";
    } else {
       prompt("City search field required");
    }
};

//Call to API passing the searched city name and concat it into the API along with the key and conversion to imperial system format.
function getWeatherByCity(cityName) {
    var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + openWeatherApiKey + "&units=imperial";


    fetch(openWeatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {

        saveToLocalStorage(weatherData);

        })
    }

function saveToLocalStorage (weatherData){
            if(!localStorageCityHistory.includes(weatherData.name)) {
                localStorageCityHistory.push(weatherData.name);
            }
            localStorage.setItem("searchedCities", JSON.stringify(localStorageCityHistory));

            // var weatherDate = weatherData.dt;
            // weatherDate = dayjs.unix(weatherData.dt).format('MMM D, YYYY');
            // weatherData.name 
            // var currentWeatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            // var currentTemp = weatherData.main.temp;
            // var currentHumidity = weatherData.main.humidity;
            // var currentWindSpeed = weatherData.wind.speed
            // var currentWindDir = JSON.stringify(weatherData.wind.deg);
            // var currentWeatherSummary = weatherData.weather[0].description;
            // var cityKeys = JSON.parse(localStorage.getItem("keyName"));
            // var keyName = "city_" + cityKeys.length;
        
            // console.log(cityKeys, cityName)
            
            // renderForecast(weatherDate, cityName, currentWeatherIcon, currentTemp, currentHumidity, currentWindSpeed, currentWindDir, currentWeatherSummary);

     

    //   renderLocalStorage();
    }


function renderForecast(weatherDate, cityName, currentWeatherIcon, currentTemp, currentHumidity, currentWindSpeed, currentWindDir, currentWeatherSummary) {
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

//Event listener for search button

//Event listener for clear history button with call to clear function and refresh
clearCityHistoryButton.addEventListener('click', function(event) {
    clearHistory(event)
    location.reload();
});

