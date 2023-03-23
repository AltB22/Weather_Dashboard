// var searchHistoryEl = document.getElementById("city-history")
var openWeatherApiKey = "eaf99af1f4ee974c35e4e4ec7368e660";
var searchWeatherButton = document.getElementById("search-by-city-button")
var clearCityHistoryButton = document.getElementById("clear-history-btn")
let localStorageCityHistory = JSON.parse(localStorage.getItem("search")) || [];
var searchHistoryEl = document.getElementById("city-history")
var cityButton = document.createElement('button');

function getWeatherByCity(event, searchedCity) {
    event.preventDefault();
    var searchedCity = document.getElementById("searched-city-input").value;
    var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + openWeatherApiKey + "&units=imperial";

    // let name = event.target.textContent; 
    if (!localStorage.getItem(searchedCity)) {
        localStorage.setItem(searchedCity, JSON.stringify(searchedCity));
    }

    fetch(openWeatherUrl)
        .then(function (response) {
            // console.log(response.json());
            return response.json();
            
        })
        .then(function (cityWeatherData) {
            console.log(cityWeatherData)
            console.log(cityWeatherData.main)
            for (let i = 0; i < cityWeatherData.main.length; i++) {
                var cityContainerEl = document.createElement('input')
                cityContainerEl.textContent = cityWeatherData.name
                // console.log(cityWeatherData.name)
            }
        })

};
function renderTodayForecast(event) {
event.preventDefault();
var currentWeather = document.getElementById("current-weather");
var todayWeatherCity = document.createElement('p');
if(cityButton) {
    todayWeatherCity = cityButton.textContent;
}
currentWeather.append(todayWeatherCity)

}

//Maybe adjust this later to make unique key integer and use the corresponding value as the button text?
let getLocalStorage = () => {
    // var localStorageCities = (localStorage, key);
    // for (i = 0; i < localStorageCities.length; i++) {
        Object.keys(localStorage).forEach((key) => {
        
        cityButton.setAttribute('id', "city-btn");
        cityButton.addEventListener("click", renderTodayForecast);
        var localStorageCity = JSON.parse(localStorage.getItem(key));
        cityButton.textContent = localStorageCity;
        searchHistoryEl.append(cityButton);
       

    }
    );
};
// };

function clearHistory(event) {
    event.preventDefault();
    localStorage.clear();
    localStorageCityHistory = [];
    getLocalStorage();

}



searchWeatherButton.addEventListener('click', getWeatherByCity);//Event listener for city search Button
clearCityHistoryButton.addEventListener('click', clearHistory);//Event listener for clear history Button
getLocalStorage();