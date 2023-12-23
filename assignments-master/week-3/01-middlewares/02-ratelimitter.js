
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second
let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.use((req,res, next) =>{
  
    const userId = req.headers["user-id"];
    if(numberOfRequestsForUser[userId]){
        numberOfRequestsForUser[userId] ++;
        if(numberOfRequestsForUser[userId] >5){
            res.status(404).send("no access sorry");
        }else{
            next();
        }

    }else{

        numberOfRequestsForUser[userId] =1;
        next();
    }
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;




// const express = require('express');
// const app = express();

// let count = 0;
// let lastResetTime = 0;

// setInterval(() => {
//     count = 0;
//     lastResetTime = Date.now();
// }, 1000);

// app.use((req, res, next) => {
//     const now = Date.now();

//     if (now - lastResetTime < 1000) {
//         count++;

//         if (count > 5) {
//             return res.status(404).send();
//         }
//     } else {
//         count = 1;
//         lastResetTime = now;
//     }

//     next();
// });

// app.get('/user', (req, res) => {
//     res.status(200).json({ name: 'john' });
// });

// app.post('/user', (req, res) => {
//     res.status(200).json({ msg: 'created dummy user' });
// });

// module.exports = app;
