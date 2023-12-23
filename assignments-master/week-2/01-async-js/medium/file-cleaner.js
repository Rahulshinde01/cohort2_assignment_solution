const fs= require("fs");

fs.readFile("./b.txt", "utf-8", (err, data)=>{
    if(err){
        console.log("sorry ! error while reading the file")
    }

    
    let content= data.replace(/ /g, "");
    console.log("done updating a file !")

    fs.writeFile("./b.txt", content , (err)=>{
        console.log("done writing a file !");
    })
})