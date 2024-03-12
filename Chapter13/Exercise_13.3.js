// let cnt = 0;

// function outputTime(val) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             cnt++;
//             resolve(`x value ${val} counter:${cnt}`);
//         }, 1000);
//     });
// }

// async function aCall(val) {
//     console.log(`ready ${val} counter:${cnt}`);
//     const res = await outputTime(val);
//     console.log(res);
// }

// for (let x = 1; x < 4; x++) {
//     aCall(x);
// }

function checker(val) {
    return new Promise((resolve, reject) => {
        if (val > 5) {
            resolve("Ready");
        } else {
            reject(new Error("Oh no"));
        }
    });
}
checker(5)
    .then((data) => { console.log(data); })
    .catch((err) => { console.error(err); });

