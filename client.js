let data = "";
const port = 3000;

const corsURL = "https://cors-anywhere.herokuapp.com/";
const apiURL= "http://127.0.0.1:3000/";

const request = new XMLHttpRequest();


// 1a. Add username to the system
function addUsername()
{
    let usernameToAdd = document.querySelector("#addUsernameField").value;

    request.open("POST", `${corsURL}${apiURL}addUsername/${usernameToAdd}`, true);

    request.onload = function () {
        let data = JSON.parse(this.response);

        if(request.status == 200)
        {
            console.log(`Added ${usernameToAdd}`);
        }
        else
        {
            console.log(`Error occurred. Status: ${request.status}`);
        }
    }
    request.send();
}



// 1b. Retrieve the reservation info (if they have one) for a given user
function retrieveUserInfo()
{
    let usernameToRetrieve = document.querySelector("#retrieveUserField").value;

    request.open("POST", `${corsURL}${apiURL}addUsername/${usernameToRetrieve}`, true);

    request.onload = function () {
        let data = JSON.parse(this.response);

        if(request.status == 200)
        {
            console.log(`Added ${usernameToAdd}`);
        }
        else
        {
            console.log(`Error occurred. Status: ${request.status}`);
        }
    }
    request.send();
}

// 1c. Get a list of reservations for all users
function getAllReservations()
{
    request.open("GET", `${corsURL}${apiURL}getReservationList`, true);

    request.onload = function () {
        let data = JSON.parse(this.response);

        if(request.status == 200)
        {
            console.log(`Added ${usernameToAdd}`);
            let outputField1 = document.querySelector("#allReservationField");
            outputField1.innerHTML = data[0].name;
        }
        else
        {
            console.log(`Error occurred. Status: ${request.status}`);
        }
    }
    request.send();
}


// 1d. Create a reservation for a given user
// http://127.0.0.1:3000/addReservation/Sam/reservation/SamReservation/startDate/11012020/startTime/1600/numOfHours/8
function createReservation()
{
    let username = document.querySelector("#createUsernameInput").value;
    let reservation = document.querySelector("#createReservationInput").value;
    let startDate = document.querySelector("#createStartDateInput").value;
    let startTime = document.querySelector("#createStartTimeInput").value;
    let numOfHours = document.querySelector("#createNumOfHoursInput").value;
    
    request.open("POST", `${corsURL}${apiURL}addReservation/${username}/reservation/${reservation}/startDate/${startDate}/startTime/${startTime}/numOfHours/${numOfHours}`, true);

    request.onload = function () {
        // let data = JSON.parse(this.response);

        // if(request.status == 200)
        // {
        //     console.log(`Randomed: "${}`)
        // }
        // else
        // {
        //     console.log(`Error occurred. Status: ${request.status}`);
        // }
    }
    request.send();
}


// 1e. Update a reservation for a given user
// http://127.0.0.1:3000/updateReservation/:userName/reservation/:reservationName/startDate/startTime/:startTime/numOfHours/:numOfHours
function updateReservation()
{
    let username = document.querySelector("#updateUsernameInput").value;
    let reservation = document.querySelector("#updateReservationInput").value;
    let startDate = document.querySelector("#updateStartDateInput").value;
    let startTime = document.querySelector("#updateStartTimeInput").value;
    let numOfHours = document.querySelector("#updateNumOfHoursInput").value;
    
    request.open("POST", `${corsURL}${apiURL}updateReservation/${username}/reservation/${reservation}/startDate/${startDate}/startTime/${startTime}/numOfHours/${numOfHours}`, true);

    request.onload = function () {
        // let data = JSON.parse(this.response);

        // if(request.status == 200)
        // {
        //     console.log(`Randomed: "${}`)
        // }
        // else
        // {
        //     console.log(`Error occurred. Status: ${request.status}`);
        // }
    }
    request.send();
}


// 1f. Delete a reservation for a given user
// http://127.0.0.1:3000/deleteReservation/:userName
function deleteReservation()
{
    let username = document.querySelector("#deleteUsernameInput").value;
    
    request.open("DELETE", `${corsURL}${apiURL}deleteReservation/${username}`, true);

    request.onload = function () {
        // let data = JSON.parse(this.response);

        // if(request.status == 200)
        // {
        //     console.log(`Randomed: "${}`)
        // }
        // else
        // {
        //     console.log(`Error occurred. Status: ${request.status}`);
        // }
    }
    request.send();
}




function displayPage2()
{
    document.getElementById('page1').style.display = 'none';
    var pg1 = document.getElementById("page1");
    var pg2 = document.getElementById("page2");
    if ("none" == pg2.style.display)
    {
        pg2.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
        pg1.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
    }
}

function displayPage3()
{
    document.getElementById('page1').style.display = 'none';
    var pg1 = document.getElementById("page1");
    var pg3 = document.getElementById("page3");
    if ("none" == pg3.style.display)
    {
        pg3.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
        pg1.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
    }
}

function displayPage4()
{
    document.getElementById('page1').style.display = 'none';
    var pg1 = document.getElementById("page1");
    var pg4 = document.getElementById("page4");
    if ("none" == pg4.style.display)
    {
        pg4.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
        pg1.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
    }
}

function displayPage5()
{
    document.getElementById('page1').style.display = 'none';
    var pg1 = document.getElementById("page1");
    var pg5 = document.getElementById("page5");
    if ("none" == pg5.style.display)
    {
        pg5.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
        pg1.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
    }
}

function displayPage6()
{
    document.getElementById('page1').style.display = 'none';
    var pg1 = document.getElementById("page1");
    var pg6 = document.getElementById("page6");
    if ("none" == pg6.style.display)
    {
        pg6.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
        pg1.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
    }
}

function displayPage7()
{
    document.getElementById('page1').style.display = 'none';
    var pg1 = document.getElementById("page1");
    var pg7 = document.getElementById("page7");
    if ("none" == pg7.style.display)
    {
        pg7.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
        pg1.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
    }
}

function displayPage1a()
{
    document.getElementById('page1').style.display = 'none';
    var pg2 = document.getElementById("page2");
    var pg1 = document.getElementById("page1");
    if ("none" == pg1.style.display)
    {
        pg1.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
        pg2.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
    }
}

function displayPage1b()
{
    document.getElementById('page1').style.display = 'none';
    var pg3 = document.getElementById("page3");
    var pg1 = document.getElementById("page1");
    if ("none" == pg1.style.display)
    {
        pg1.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
        pg3.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
    }
}

function displayPage1c()
{
    document.getElementById('page1').style.display = 'none';
    var pg4 = document.getElementById("page4");
    var pg1 = document.getElementById("page1");
    if ("none" == pg1.style.display)
    {
        pg1.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
        pg4.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
    }
}

function displayPage1d()
{
    document.getElementById('page1').style.display = 'none';
    var pg5 = document.getElementById("page5");
    var pg1 = document.getElementById("page1");
    if ("none" == pg1.style.display)
    {
        pg1.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
        pg5.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
    }
}

function displayPage1e()
{
    document.getElementById('page1').style.display = 'none';
    var pg6 = document.getElementById("page6");
    var pg1 = document.getElementById("page1");
    if ("none" == pg1.style.display)
    {
        pg1.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
        pg6.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
    }
}

function displayPage1f()
{
    document.getElementById('page1').style.display = 'none';
    var pg7 = document.getElementById("page7");
    var pg1 = document.getElementById("page1");
    if ("none" == pg1.style.display)
    {
        pg1.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
        pg7.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
    }
}