//Open Weather Base URL (with key) https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={eaf99af1f4ee974c35e4e4ec7368e660};

// Weather_Dashboard API Key = {eaf99af1f4ee974c35e4e4ec7368e660};

var openWeatherApiKey = "eaf99af1f4ee974c35e4e4ec7368e660";
var searchWeatherButton = document.getElementById("search-by-city-button") 
var clearCityHistoryButton = document.getElementById("clear-history-btn") 

function getWeatherByCity(event, searchedCity) {
    event.preventDefault();

    var searchedCity = document.getElementById("searched-city-input").value;

    var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + openWeatherApiKey;

    console.log(searchedCity);
 
    // document.getElementById("searched-city-input").innerHTML;
    fetch(openWeatherUrl)
    .then(function (response) {
        // console.log(response.json())
        return response.json();
    })
    .then(function (cityWeatherData) {
        console.log(cityWeatherData)
        for(let i = 0 ;i < cityWeatherData.main.length; i++) {
            var cityContainerEl = document.createElement('div')

            
        }
    })
       
};

function clearHistory(event) {
    event.preventDefault();
    var localStorageKey = event.target.getElementById()//needs clarity
    localStorage.removeItem(localStorageKey);
    event.target.remove();
}


searchWeatherButton.addEventListener('click',getWeatherByCity);//Event listener for city search Button
clearCityHistoryButton.addEventListener('click', clearHistory);