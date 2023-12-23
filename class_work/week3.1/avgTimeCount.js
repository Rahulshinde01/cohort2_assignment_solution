const express= require("express");
const app=express();
app.use(express.json());
let count =0;
let counter=0;
let startTime=0;
 let endTime =0;
let avgTime=0;

function timeCountMiddleware(req,res,next){
    startTime = new Date().getTime();
  next();
}
app.get("/",timeCountMiddleware ,function(req,res){
  for (let i=0;i<100000000;i++){
  }
  res.send("ok u are good to go!");
  count++;
     endTime = new Date().getTime();
  let diff = endTime - startTime;
  avgTime =avgTime + diff/2;
});
app.get("/getTime" ,function(req,res){
  res.send("avg request time taken is "+avgTime/count + " miliseconds");
});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});