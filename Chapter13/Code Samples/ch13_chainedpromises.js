// const promise = new Promise((fulfill, reject) => {
//     fulfill('success!');
//     // reject('oops...');
// })

//     .then(value => {
//         console.log(value); //value is the first word in the promise array 
//         return 'we';
//     })
//     .then(value => {
//         console.log(value);
//         return 'can';
//     })
//     .then(value => {
//         console.log(value);
//         return 'chain';
//     })
//     .then(value => {
//         console.log(value);
//         return 'promises';
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);
//     })

const prompt = new Promise((a, b) => {
    a(`start counting `);
})
    .then(value => {
        console.log(value)
        return "one";
    })
    .then(value => {
        console.log(value);
        return "two";
    })
    .then(value => {
        console.log(value);
        return "Three"
    })
    .then((value) => {
        console.log(value)
    })
    .catch((value) => {
        console.log("error", value)
    })