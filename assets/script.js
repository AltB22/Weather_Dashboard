// var searchHistoryEl = document.getElementById("city-history");
var openWeatherApiKey = "eaf99af1f4ee974c35e4e4ec7368e660";
var searchWeatherButton = document.getElementById("search-by-city-button");
var clearCityHistoryButton = document.getElementById("clear-history-btn");
let localStorageCityHistory = JSON.parse(localStorage.getItem("search")) || [];
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
        cityWeatherButton.addEventListener("click", renderTodayForecast);
        // cityWeatherButton.addEventListener('click', getWeatherByCity);
        var localStorageCity = JSON.parse(localStorage.getItem(key));
        cityWeatherButton.textContent = localStorageCity;//Maybe eliminate this and switch to inside fetch request cityName...
        searchHistoryEl.append(cityWeatherButton);
        
        
        
        // renderTodayForecast();
    }
    );
};

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
            // console.log(selectedWeatherData)

            renderTodayForecast(cityName, currentTemp, currentWeatherSummary)

            if(globalCityButton) {
          
                // var todayWeatherCity = document.createElement('h4');
                // todayWeatherCity.textContent = cityName
                // var currentWeatherData = document.createElement('ul');
                // var currentWeatherLineItem1 = document.createElement('li');
                // currentWeatherLineItem1.textContent = `Temperature: ${currentTemp} deg. F`;
                // var currentWeatherLineItem2 = document.createElement('li');
                // currentWeatherLineItem2.textContent = `Summary: ${currentWeatherSummary}`;
                // currentWeather.append(todaysForecast);
                // currentWeather.append(todayWeatherCity);
                // currentWeather.append(currentWeatherData);
                // currentWeather.append(currentWeatherLineItem1, currentWeatherLineItem2);
                
                }
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
        // currentWeather.append(todaysForecast);
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