const fs= require("fs");

function fun(path , input_str){
    fs.writeFile(path , `${input_str}`, (err)=>{
        if(err){
            console.log("error while writing a file!")
        }
        console.log("done writing !")
    })
}

fun("./a.txt", "i am a very good coder");