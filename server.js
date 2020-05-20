const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const cors = require('cors')

app.get('/', (req, res) => {
    res.send('Hello from GET!');
});

app.get('/getBoard', (req, res) => {
    res.send('Here is a skateboard!');
});

//route parameters
app.get('/getBoard/:boardName', (req, res) => {
    let boardName = req.params.boardName;
    res.send(`Here is a skateboard named ${boardName}!`);
});

// 1b Retrieve the reservation info (if they have one) for a given user
app.get('/getBoard/:boardName/owner/:ownerName', (req, res) => {
    let boardName = req.params.boardName;
    let ownerName = req.params.ownerName;

    let reservationNameList = [
        {
            name: ''
        }
    ];

    //Read reservation.json
    fs.readFile('reservation.json', (err, data) => {
        if (err) throw err;
        let myList = JSON.parse(data); //Takes a string that is shaped like JSON and parses it into a js object
    
        myList.forEach((elt) => {
            console.log(`Data read: ${elt.reservationName}`);

            reservationNameList.push(elt.reservationName);
        });
    });

    //Checks if the entered user has reservationInfo
    if (reservationNameList.indexOf(ownerName) > -1) //That userName is in the array
    {
        res.send(`${boardName} is owned by ${ownerName}. Reservation Name: ${reservationName}. Start Date: ${startDate}. Start Time: ${startTime}. No. of Hours: ${numOfHours}`);
    }
    else //It is not in the array (i.e. There is no reservation info for that user)
    {
        res.send(`Error. Reservation info for that user does not exist.`);
    }

    res.send(`${boardName} is owned by ${ownerName}`);
});


app.get('/getBoard/:boardName/owner/:ownerName/reservationName/:reservationName', (req, res) => {
    let boardName = req.params.boardName;
    let ownerName = req.params.ownerName; 
    let reservationName = req.params.reservationName;
    
    res.send(`${boardName} is owned by ${ownerName}. Reservation Name: ${reservationName}`);
});


app.get('/getBoard/:boardName/owner/:ownerName/reservationName/:reservationName/startDate/:startDate', (req, res) => {
    let boardName = req.params.boardName;
    let ownerName = req.params.ownerName; 
    let reservationName = req.params.reservationName;
    let startDate = req.params.startDate;
    
    res.send(`${boardName} is owned by ${ownerName}. Reservation Name: ${reservationName}. Start Date: ${startDate}`);
});


app.get('/getBoard/:boardName/owner/:ownerName/reservationName/:reservationName/startDate/:startDate/startTime', (req, res) => {
    let boardName = req.params.boardName;
    let ownerName = req.params.ownerName; 
    let reservationName = req.params.reservationName;
    let startDate = req.params.startDate;
    let startTime = req.params.startTime;
    
    res.send(`${boardName} is owned by ${ownerName}. Reservation Name: ${reservationName}. Start Date: ${startDate}. Start Time: ${startTime}`);
});


app.get('/getBoard/:boardName/owner/:ownerName/reservationName/:reservationName/startDate/:startDate/startTime/:startTime/numOfHours/:numOfHours', (req, res) => {
    let boardName = req.params.boardName;
    let ownerName = req.params.ownerName; 
    let reservationName = req.params.reservationName;
    let startDate = req.params.startDate;
    let startTime = req.params.startTime;
    let numOfHours = req.params.numOfHours;
   
    res.send(`${boardName} is owned by ${ownerName}. Reservation Name: ${reservationName}. Start Date: ${startDate}. Start Time: ${startTime}. No. of Hours: ${numOfHours}`);            
});



app.post('/', (req, res) => {
    res.send('Hello from POST!')
});

app.post('/addUsername', (req, res) => {
    res.send('Here is a user!');
});

// 1a. Add a username to the system
app.post('/addUsername/:userName', (req, res) => {
    let userName = req.params.userName;
    
    fs.appendFile('userName.json', `${userName} `, err => {
        if (err) throw err;
        console.log('File written.');
    });

    res.send(`Here is a user named  ${userName}`);
});

// 1a(2). Add a username to the system with reservation name
app.post('/addUsername/:userName/reservation/:reservationName', (req, res) => {
    let userName = req.params.userName;
    let reservationName = req.params.reservationName;
    
    fs.appendFile('userName.json', `${userName}\n${reservationName}\n`, err => {
        if (err) throw err;
        console.log('File written.');
    });
    
    res.send(`${userName} has made reservation: ${reservationName}`);
    console.log(`${userName} has made reservation: ${reservationName}`); 
});

// 1c. Get a list of reservations for all users
app.get('/getReservationList', (req, res) => {

    let returnInfo = '';

    let resList = [
        {
            userName: 'Smith',
            reservationName: '',
            startDate: '01011998',
            startTime: '0300',
            numOfHours: 3
        }
    ];

    fs.readFile('reservation.json', (err, data) => {
        if (err) throw err;
        let myList = JSON.parse(data);

        console.log(myList);
        returnInfo = myList;

        res.send(returnInfo);
    });
    // res.send('');
});


let resList = [];

let newEntry = {};

// 1d. Create a reservation for a given user
app.post('/addReservation/:userName/reservation/:reservationName/startDate/:startDate/startTime/:startTime/numOfHours/:numOfHours', (req, res) => {
    let newUserName = req.params.userName;
    let newReservationName = req.params.reservationName;
    let newStartDate = req.params.startDate;
    let newStartTime = req.params.startTime;
    let newNumOfHours = req.params.numOfHours;

    newEntry.name = newUserName;
    newEntry.reservationName = newReservationName;
    newEntry.startDate = newStartDate;
    newEntry.startTime = newStartTime;
    newEntry.numOfHours = newNumOfHours;


    // const jsonString = fs.readFileSync('reservation.json');
    // resList.push(JSON.stringify(jsonString));

    
    fs.readFile('reservation.json', (err, data) => {
        if (err) throw err;
        let myList = JSON.parse(data); //Takes a string that is shaped like JSON and parses it into a js object
        
        myList.resList.push(newEntry);
        
        const json = JSON.stringify(myList);

        fs.writeFile('reservation.json', json, err => {
            if (err) throw err;
    
            console.log(`New Reservation appended (${newUserName})`);
        });

        // myList.forEach((elt) => {
        //     resList.push(elt);
        //     console.log(`From file: ${elt.name}`);
        // });
    });

    

    
    res.send(`${newUserName} has made reservation: ${NewReservationName}. Start Date: ${NewStartDate}. Start Time: ${NewStartTime}. Num of Hours: ${newNumOfHours}`);
    console.log(`${newUserName} has made reservation: ${NewReservationName}`); 
});


// 1e. Update a reservation for a given user
app.post('/updateReservation/:userName/reservation/:reservationName/startDate/:startDate/startTime/:startTime/numOfHours/:numOfHours', (req, res) => {
    let newUserName = req.params.userName;
    let newReservationName = req.params.reservationName;
    let newStartDate = req.params.startDate;
    let newStartTime = req.params.startTime;
    let newNumOfHours = req.params.numOfHours;

    newEntry.name = newUserName;
    newEntry.reservationName = newReservationName;
    newEntry.startDate = newStartDate;
    newEntry.startTime = newStartTime;
    newEntry.numOfHours = newNumOfHours;

    // resList.push(newEntry);

    fs.readFile('reservation.json', (err, data) => {
        if (err) throw err;
        let myList = JSON.parse(data); //Takes a string that is shaped like JSON and parses it into a js object
        
        // myList.resList.push(newEntry);
        

        for(let i = 0; i < myList.resList.length; i++)
        {
            if(myList.resList[i].name == newUserName) //Reservation for that user already exists in the JSON and can be appended
            {
                myList.resList.splice(i,1,{name: newUserName, reservationName: newReservationName, startDate: newStartDate, startTime: newStartTime, numOfHours: newNumOfHours});
                const json = JSON.stringify(myList);
                fs.writeFile('reservation.json', json, err => {
                    
                    if (err) throw err;
                    console.log(`${newUserName} was updated`);
                });
                
            }
        }

    });
    
    res.send(`${newUserName} has made reservation: ${newReservationName}. Start Date: ${newStartDate}. Start Time: ${newStartTime}. Num of Hours: ${newNumOfHours}`);
    console.log(`${newUserName} has made reservation: ${newReservationName}`); 
});



// 1f. Delete a reservation for a given user
app.delete('/deleteReservation/:userName/', (req, res) => {
    let newUserName = req.params.userName;
    
    fs.readFile('reservation.json', (err, data) => {
        if (err) throw err;
        let myList = JSON.parse(data); //Takes a string that is shaped like JSON and parses it into a js object
        

        for(let i = 0; i < myList.resList.length; i++)
        {
            if(myList.resList[i].name == newUserName) //Reservation for that user already exists in the JSON and can be appended
            {
                myList.resList.splice(i,1);
                const json = JSON.stringify(myList);
                fs.writeFile('reservation.json', json, err => {
                    
                    if (err) throw err;
                    console.log(`${newUserName} was deleted`);
                });
            }
        }
    });
});


app.listen(port, () => console.log(`Listening on port ${port}!`));