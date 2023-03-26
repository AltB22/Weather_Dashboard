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