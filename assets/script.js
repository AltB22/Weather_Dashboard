var searchHistoryEl = document.getElementById("history")
var openWeatherApiKey = "eaf99af1f4ee974c35e4e4ec7368e660";
var searchWeatherButton = document.getElementById("search-by-city-button") 
var clearCityHistoryButton = document.getElementById("clear-history-btn") 
let localStorageCityHistory = JSON.parse(localStorage.getItem("search")) || [];

function getWeatherByCity(event, searchedCity) {
    event.preventDefault();

    var searchedCity = document.getElementById("searched-city-input").value;

    var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + openWeatherApiKey + "&units=imperial";

    console.log(searchedCity);
 
    fetch(openWeatherUrl)
    .then(function (response) {
       
        return response.json();
    })
    .then(function (cityWeatherData) {
        console.log(cityWeatherData)
        console.log(cityWeatherData.main.temp)
        // for(let i = 0 ;i < cityWeatherData.main.length; i++) 
        // {
            var cityContainerEl = document.createElement('input')
            cityContainerEl.textContent = cityWeatherData.name
            console.log(cityWeatherData.name)


            
        // }
    })
       
};

function renderCityHistory(){

}

function clearHistory(event) {
    event.preventDefault();
    localStorage.clear();
    localStorageCityHistory = [];
    renderCityHistory();
   
}


searchWeatherButton.addEventListener('click',getWeatherByCity);//Event listener for city search Button
clearCityHistoryButton.addEventListener('click', clearHistory);