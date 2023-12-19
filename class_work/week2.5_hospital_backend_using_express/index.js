const express = require("express");
const app = express();

const users = [{
    name:"John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());


app.get("/" , function(req, res){
    const johnKidney = users[0].kidneys;
    const noOfKidney = johnKidney.length;
    let noOfHealthyKidneys= 0;
    for(let i=0; i<noOfKidney; i++){
        if(johnKidney[i].healthy == true){
            noOfHealthyKidneys=noOfHealthyKidneys+1;
        }
    }

    const noOfUnhealthyKidneys=noOfKidney-noOfHealthyKidneys;

    res.json({
        noOfKidney,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    })
})

app.post("/", function (req,res){

    const isHealthy= req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Done bro!"
    })
})


app.put("/", function(req,res){
    if(isOneUnhealthyKidney()){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy=true;
    }

    res.json({
        msg:"data is updated"
    });
}
else{
    res.status(411).json({
        msg:"invalid input.. no unhealthy kidney left!"
    })
}
})

app.delete("/" , function(req,res){
    if(isOneUnhealthyKidney()){

    const newKidneys = [];
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({healthy:true});
        }
    }
    users[0].kidneys=newKidneys;

    res.json({
        msg:"done deleting"
    })
}
    else{
        res.status(411).json({
            "msg":"invalid input.. all unhealthy kidneys are deleted!"
        });
    }
})


function isOneUnhealthyKidney(){
    let kidneysStatus = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!(users[0].kidneys[i].healthy)){
            kidneysStatus = true;
        }
    }
    return kidneysStatus;
}


app.listen(3000);