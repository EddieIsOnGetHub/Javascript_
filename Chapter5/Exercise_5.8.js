let output = "";
let skipThis = 7;
let skipThis2 = 9;
for (let i = 0; i < 10; i++) {
  if (i === skipThis) {
    continue;
  } else if (i === skipThis2) {
    continue;
  }
  output += i;
}
console.log(output);


//Alternatively, the following code could be used, replacing continue with break:

// let output = "";
// let skipThis = 7;
// for (let i = 0; i < 10; i++) {
//   if (i === skipThis) {
//     break;
//   }
//   output += i;
// }

// console.log(output); 
