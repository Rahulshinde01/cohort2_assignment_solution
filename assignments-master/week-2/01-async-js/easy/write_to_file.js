const fs= require("fs");

// function fun(path , input_str){
//     fs.writeFile(path , `${input_str}`, (err)=>{
//         if(err){
//             console.log("error while writing a file!")
//         }
//         console.log("done writing !")
//     })
// }

// fun("./a.txt", "i am a very good coder");

console.log("this is before write operation !")
fs.writeFile("./a.txt", "I am writing dhdkhds test in file name a.txt", (err)=>{

    if(err){
        console.log("error while reading a file!")
    }
})
console.log("this is after the write operation !")

for ( let i=0; i<10000000000; i++){

}

