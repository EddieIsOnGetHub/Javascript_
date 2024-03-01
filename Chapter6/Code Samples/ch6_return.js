// let addTwoNumbers = (x,y) => x+y;

// // let result = addTwoNumbers (4,5);
// // console.log(result);

// let resultsArr = [];
// for(let i = 0; i < 10; i ++){
// let result = addTwoNumbers(i, 2*i);
// resultsArr.push(result);
// }
// console.log(resultsArr);

// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
// }
// let z = testAvailability();
// console.log("Outside the function:", z);
// console.log("Not available here:", y);

function doingStuff() {
    if (true) {
        var x = "local";
    }
    console.log(x);
}
doingStuff()

function doingStuff() {
    if (true) {
        let x = "local";
    }
    console.log(x);
}
doingStuff();