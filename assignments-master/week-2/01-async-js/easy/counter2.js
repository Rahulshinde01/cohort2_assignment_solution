let c =0;
function fun (count){
    // console.log(count);

    if(count>0){
        setTimeout(function (){
            c++;
            console.log((c)+" secounds ")
            fun(count -1)
        },1000);
    }
}

fun(10);

