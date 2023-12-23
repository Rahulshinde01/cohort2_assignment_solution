let count =0;


setInterval( function myCounter(){
    count ++;
    console.log("count value is "+count)
},1000);



// let counter = 0;

// function updateCounter() {
//   counter++;
//   console.log(counter); // You can replace this with any other action you want to perform with the counter value
// }

// // Update the counter every second (1000 milliseconds)
// const intervalId = setInterval(updateCounter, 1000);

// // To stop the counter after a certain duration (e.g., 10 seconds), you can use setTimeout
// const duration = 10000; // 10 seconds
// setTimeout(() => {
//   clearInterval(intervalId); // Stop the interval after the specified duration
//   console.log('Counter stopped after 10 seconds.');
// }, duration);
