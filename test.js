   // if (!localStorage.getItem(searchCity)) {
    //     localStorage.setItem(searchCity, JSON.stringify(searchCity));
    // }

    var N = "180"
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
    
    var N = []

    function renderLocalStorage(cityName) {
       
        
        for (let i = 0; i < localStorage.length; i++) {
            // var searchHistoryEl = document.getElementById("city-history");
        // var cityKeys = JSON.parse(localStorage.getItem(cityName)) || [];
        //   var keyName = cityName[i];
          var localStorageCity = JSON.parse(localStorage.getItem(cityName[i]));
          var cityWeatherButton = document.createElement("button");
          cityWeatherButton.setAttribute("class", "city-btn");
          cityWeatherButton.setAttribute("id", `city-btn-${i}`);
          cityWeatherButton.textContent = localStorageCity;
          cityWeatherButton.addEventListener("click", renderByCityButton);
      
          searchHistoryEl.appendChild(cityWeatherButton);
        }
      }

      function renderLocalStorage(cityName) {
        var searchHistoryEl = document.getElementById("city-history");
        searchHistoryEl.innerHTML = ""; // Clear the search history element before rendering
    
        // Loop through the localStorageCityHistory array and create a button element for each city
        for (let i = 0; i < localStorageCityHistory.length; i++) {
            var city = localStorageCityHistory[i];
            var cityButton = document.createElement("button");
            cityButton.textContent = city;
            cityButton.classList.add("btn", "btn-outline-secondary", "mt-2");
            cityButton.addEventListener("click", renderByCityButton);
            searchHistoryEl.appendChild(cityButton);
        }
    
        // Add the newly searched city to the localStorageCityHistory array
    //     if (cityName) {
    //         localStorageCityHistory.push(cityName);
    //         localStorage.setItem("key", JSON.stringify(localStorageCityHistory));
    //     }
    }

    function renderLocalStorage() {
        console.log('hello')
        // Get the array of stored cities from local storage
    var storedCities = JSON.parse(localStorage.getItem("cityName")) || [];
    var searchHistoryEl = document.getElementById("city-history");
    // Loop through the stored cities and append a button element for each city to the searchHistoryEl
    for (var i = 0; i < storedCities.length; i++) {
        var searchHistoryEl = document.getElementById("city-history");
      var cityBtnEl = document.createElement("button");
      cityBtnEl.setAttribute('id', 'city-btn')
      
      globalCityButton.textContent = storedCities[i];
      cityBtnEl.classList.add("btn", "btn-secondary", "btn-lg", "w-100", "mb-3");
      console.log(cityBtnEl)
      searchHistoryEl.append(cityBtnEl);
    }
    
    }