     //switch / case to convert compass windDir to n, S, E, W etc.  Will finish after establish MVP.
            // switch (currentWindDir) {//given
            //     case "299":// if
            //         currentWindDir = "West";//then
            //         break;
            //     case "267":
            //         currentWindDir = "West";
            //         break;
            //     case "268":
            //         currentWindDir = "West";
            //         break;
            //     case "269":
            //         currentWindDir = "West"
            // }
            //renders the searched city name and weather data
    
    
    
    var N = ["316", "317", "180"]
    switch (currentWindDir) {//if 
        case "180"://else if
            renderNorth();//then
            // console.log('hello');
            break;
        case "view all roles":
            viewAllRoles();
            break;
        case "view all employees":
            viewAllEmployees();
            break;
        case "add a department":
            addDepartment();
            break;
        case "add a role":
            addRole();
            break;
        case "add an employee":
            addEmployee();
            break;
        case "delete an employee":
            deleteEmployee();
            break;
        case "add an employee role":
            addEmployeeRole();
    }

    var N = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13",]

const compass = [...new Array(360).keys()]
console.log(compass)


//5 Day Search and render functions stashed below for now:

// function  renderFiveDayForecast(weatherDate5, cityName5, currentWeatherIcon5, currentTemp5, currentHumidity5, currentWindSpeed5, currentWindDir5, currentWeatherSummary5) {
//     fiveDayParentEl.innerHTML = "";

//     var todayWeatherDate = document.createElement('h4')
//     todayWeatherDate.textContent = weatherDate5;

//     var todayWeatherCity = document.createElement('h4');
//     todayWeatherCity.textContent = cityName5;

//     var todayWeatherIcon = document.createElement('div');
//     todayWeatherIcon.innerHTML = `<img src="${currentWeatherIcon5}">`;
   
//     var currentWeatherTemp = document.createElement('p');
//     currentWeatherTemp.textContent = `Temperature: ${currentTemp5} deg. F`;

//     var currentWeatherHumidity = document.createElement('p');
//     currentWeatherHumidity.textContent = `Humidity: ${currentHumidity5} %`;

//     var currentWeatherWindSpeed = document.createElement('p');
//     currentWeatherWindSpeed.textContent = `Wind Speed: ${currentWindSpeed5} mph`;

//     var currentWeatherWindDir = document.createElement('p');
//     currentWeatherWindDir.textContent = `Wind Dir: ${currentWindDir5}`;
    
//     var currentWeatherSum = document.createElement('p');
//     currentWeatherSum.textContent = `Weather Summary: ${currentWeatherSummary5}`;

//     fiveDayParentEl.append(todayWeatherDate, todayWeatherCity, todayWeatherIcon, currentWeatherTemp, currentWeatherSum, currentWeatherHumidity, currentWeatherWindSpeed, currentWeatherWindDir);
    
//     return;
// }
// function handleFiveDaySearch(event) {
//     event.preventDefault();
//     var searchCity = document.getElementById("searched-city-input").value;

//     // if(localStorageCityHistory ==!null ){
//     //     var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + openWeatherApiKey + "&units=imperial";

//     // } else {
//     var openWeatherUrl5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=" + openWeatherApiKey + "&units=imperial";
//     // }

//     fiveDayParentEl.innerHTML = "";
   
//     fetch(openWeatherUrl5)
//         .then(function (response5) {
//             return response5.json();
//         })
//         .then(function (weatherData5) {
    
//         for(let i = 1; i < weatherData5.length; i++)
        
//         var weatherDate5 = weatherData5.dt[i];
//         weatherDate5 = dayjs.unix(weatherData5.dt).format('MMM D, YYYY');
//         var cityName5 = weatherData5.name;
//         var currentTemp5 = weatherData5.main.temp;
//         var currentHumidity5 = weatherData5.main.humidity;
//         var currentWindSpeed5 = weatherData5.wind.speed
//         var currentWindDir5 = JSON.stringify(weatherData5.wind.deg);
//         var currentWeatherSummary5 = weatherData5.weather[0].description;
//         var currentWeatherIcon5 = `https://openweathermap.org/img/wn/${weatherData5.weather[0].icon}@2x.png`;

//         renderFiveDayForecast(weatherDate5, cityName5, currentWeatherIcon5, currentTemp5, currentHumidity5, currentWindSpeed5, currentWindDir5, currentWeatherSummary5);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

// searchWeatherButton.addEventListener('click', handleFiveDaySearch)

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