// var searchHistoryEl = document.getElementById("city-history");
var openWeatherApiKey = "eaf99af1f4ee974c35e4e4ec7368e660";
var searchWeatherButton = document.getElementById("search-by-city-button");
var clearCityHistoryButton = document.getElementById("clear-history-btn");
let localStorageCityHistory = JSON.parse(localStorage.getItem("search")) || [];
var searchHistoryEl = document.getElementById("city-history");

// var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="
// let weatherData = openWeatherUrl;

//Maybe adjust this later to make unique key integer and use the corresponding value as the button text?
let getLocalStorage = () => {

    Object.keys(localStorage).forEach((key) => {
        var cityWeatherButton = document.createElement('button');
        cityWeatherButton.setAttribute('id', "city-btn");
        cityWeatherButton.addEventListener("click", renderTodayForecast);
        searchWeatherButton.addEventListener('click', renderTodayForecast);
        var localStorageCity = JSON.parse(localStorage.getItem(key));
        cityWeatherButton.textContent = localStorageCity;
        searchHistoryEl.append(cityWeatherButton);
        if (localStorage === null) {
            return null;
        }
        renderTodayForecast();
    }
    );
};

//Call to API passing the searched city name and concat it into the API along with the key and conversion to imperial system format.
function getWeatherByCity(event) {
    event.preventDefault();
    var searchCity = document.getElementById("searched-city-input").value;

    var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + openWeatherApiKey + "&units=imperial";
    // console.log(openWeatherUrlCity)

    if (!localStorage.getItem(searchCity)) {
        localStorage.setItem(searchCity, JSON.stringify(searchCity));
    }

    fetch(openWeatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            // var cityName = document.getElementById('city-btn').textContent || "";
            
            var selectedWeatherData = weatherData.list;
            console.log(selectedWeatherData)
           
         

        });
};

function renderTodayForecast(event) {
    // event.preventDefault();
    Object.keys(localStorage).forEach((key) => {

   
        var cityButton = document.getElementById('city-btn');
        var currentWeather = document.getElementById("current-weather");
        var todayWeatherCity = document.createElement('h4');
        var currentWeatherData = document.createElement('ul');
        var currentWeatherLineItems = document.createElement('li');
        // currentWeatherLineItems.textContent = weatherData;
        // console.log(weatherData)
        if (key === cityButton.textContent) {
            todayWeatherCity.textContent = cityButton.textContent
        }
        currentWeather.append(todayWeatherCity);
        currentWeather.append(currentWeatherData);
        currentWeather.append(currentWeatherLineItems);

        return;
    },
    );
};




function clearHistory(event) {
    event.preventDefault();
    localStorage.clear();
    localStorageCityHistory = [];
    getLocalStorage();
    // var localStorageKey = localStorage.key;
    // localStorage.removeItem(localStorageKey);
    // event.target.previousElementSibling.remove();
    // event.target.remove();
};



// getWeatherByCity();
searchWeatherButton.addEventListener('click', getWeatherByCity);//Event listener for city search Button

clearCityHistoryButton.addEventListener('click', clearHistory);//Event listener for clear history Button
getLocalStorage();




// const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // Since mutation function is async, wrap in a `try...catch` to catch any network errors from throwing due to a failed request.
//     try {
//       // Execute mutation and pass in defined parameter data as variables
//       const { data } = await addProfile({
//         variables: { name },
//       });

//       window.location.reload();
//     } catch (err) {
//       console.error(err);
//     }
//   };