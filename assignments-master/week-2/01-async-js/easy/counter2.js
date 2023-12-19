function fun (count){
    console.log(count);

    if(count>0){
        setTimeout(function (){
            fun(count -1)
        },1000);
    }
}

fun(10);

