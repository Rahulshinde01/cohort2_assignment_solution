const express= require("express");
const app=express();

app.use(express.json());
let counter=0;

function requestMiddlewareCounter(req,res,next){
  console.log("Request received");
  counter++;
  next();
}
app.get("/health-check",requestMiddlewareCounter ,function(req,res){
  res.send("ok u are good to go!");
});

app.get("/urcount", function(req,res){
  res.send("u visited this page "+counter+" times");
});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});