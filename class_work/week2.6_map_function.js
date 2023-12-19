let arr = [1,2,3,4,5,7];

//standard map function
function map (arr, fun){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(fun(arr[i]));
}
  return newArr;
}

//testing for map function
const ans = map(arr, (item) => {
  return item *2;
})

console.log(ans);