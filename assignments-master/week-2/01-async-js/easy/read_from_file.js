const fs = require("fs");

// function fun (path) {

//     fs.readFile(path ,"utf-8", (err,data)=>{
//         if(err){
//             console.log("error while reading the file");
//           console.log(err);
//         }
//         else{
//             console.log("content of the file is as below:-" + data);
//             expOperation();

//             console.log("after performing expensive operation ")
//         }

//     })
// }
// function expOperation(){

//   const startTime = new Date().getTime();
  
//     for (let i = 0; i < 1000000000; i++) {
//     }
  
//   const endTime = new Date().getTime();

//   const diffOfTwo = endTime - startTime;

//   console.log(`time taken :-${diffOfTwo} miliseconds`)
//   // console.log(`Expensive Operation took ${diffOfTwo} milliseconds`);
// }

// fun ("./a.txt");






///solution 2
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

fs.readFile("./a.txt","utf-8", (err, data)=>{
  console.log("data in the file is :-"+ data);
})

console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbb")

for (let i = 0; i < 10000000000; i++) {
  
  
}
console.log("this is after the for loop!")