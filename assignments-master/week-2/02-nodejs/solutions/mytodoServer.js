const express= require("express");
const app=express();
const bodyParser =require("body-parser")
const fs = require("fs")

app.use(bodyParser.json());

function findInd(arr, idd){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id===idd){

            return i;
        }
        
    }
    return -1;
}

function removeInd(arr, ind){
    let newArr=[];
    for ( let i =0; i< arr.length; i++){
        if(i!==ind){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

app.get("/todos", (req,res)=>{
    fs.readFile("todos.json", utf-8, (err,data)=>{
        if(err){
            throw err;
        }
        res.json(JSON.parse(data))
    })
})


app.get("/todos/:id", (req,res)=>{
    fs.readFile("todos.json", utf-8, (err,data)=>{
        if(err){
            throw err;
        }

        const mydata = JSON.parse(data);
        const idstatus= findInd(mydata, parseInt(req.params.id));
        if(idstatus===-1){
            res.status(404).send();
        }else{
            res.json(mydata[idstatus])
        }
    })
})

app.post("/todos", (req,res)=>{
    const myNewData = {
        id:Math.floor( Math.random() *1000000),
        title : req.body.title,
        discription: req.body.discription
    }

    
    fs.readFile("todo.json", "utf-8", (err,data)=>{
        if(err) throw err;

        const mydata = JSON.parse(data);
        mydata.push(myNewData);

        fs.writeFile("todo.json", JSON.stringify(mydata), (err)=>{
            if(err) throw err;
            res.status(201).json(mydata);
        })
    })
    
})

app.put("/todos/:id", (req, res)=>{

    fs.readFile("todos.json"," utf-8", (err,data)=>{
        if (err) throw err;
        const mydata = JSON.parse(data);
        const idstatus = findInd(mydata, parseInt(req.params.id));
        if(idstatus===-1){

            res.status(404).send();
        }
        const updatedData= {
            id : mydata[idstatus].id,
            title: req.body.title,
            discription: req.body.discription
        };
        mydata[idstatus] = updatedData;
        fs.writeFile("todos.json", JSON.stringify(mydata), (err)=>{
            if (err) throw err;
            res.send(200).json(mydata);
        })
    })

})

app.delete("/todos/:id", (req,res)=>{
    fs.readFile("todos.json", "utf-8",(err,data)=>{
        if(err) throw err;
        const mydata = JSON.parse(data);
        const idstatus = findInd(mydata, parseInt(req.params.id));
        if(idstatus===-1) {
            res.status(404).send();
        }

        mydata = removeInd(mydata, idstatus);

        fs.writeFile("todos.json", JSON.stringify(mydata), (err)=>{
            if(err) throw err;
            res.send(200).send();
        })
    } )
})

app.use((req,res,next) =>{

    res.status(404).send("file not found");
})





app.listen(3000);



