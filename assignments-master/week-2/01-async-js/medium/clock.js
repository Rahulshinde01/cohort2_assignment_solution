

let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds() -1;
let ampm ;
setInterval(() => {
    if(h>12){
        ampm= "PM";
        h=h-12;
    }else{
        ampm= "AM";
    }

    // console.log(h+""+m+""+s+" "+ampm);
    console.log(`${h}:${m}:${++s} ${ampm}`);


},1000)
