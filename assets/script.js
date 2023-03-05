//Open Weather Base URL (with key) https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={eaf99af1f4ee974c35e4e4ec7368e660};

// Weather_Dashboard API Key = {eaf99af1f4ee974c35e4e4ec7368e660};


var openWeatherApiKey = "eaf99af1f4ee974c35e4e4ec7368e660";
// var searchedCity = document.getElementById("")
var searchWeatherButton = document.getElementById("search-by-city-button")

function getWeather(event) {
    event.preventDefault();
    var searchedCity = document.getElementById("searched-city-input").value;
    console.log(("searched-city-input").value)

    var openWeatherUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&appid=${openWeatherApiKey}`;//concats the input value to the API

    document.getElementById("searched-city-input").innerHTML;
    fetch(openWeatherUrl)
    .then(function (response) {
        console.log(response.json())
        return response.json();
        
    })
}

SearchWeatherButton.addEventListener('click',getWeather);//Event listener for Search Drink Button