
// let text = "I love JavaScript!";
// console.log(text.match(/javascript/i)); //upper or lower case



// let text = "I love JavaScript!";
// console.log(text.match(/javascript/));

// let text = "I love React and JavaScript!";
// console.log(text.match(/javascript|nodejs|react/gi));


// let text = "d";
// console.log(text.match(/[abc]/));

// console.log(text.match(/[a-dA-D]/)); // looks for upper case as well
// console.log(text.match(/[a-zA-Z0-9]/)); // allows to find numbers aswell

// let text = "äé!";
// console.log(text.match(/[a-zA-Z0-9]/));

// let text = "Just some text.";
// console.log(text.match(/./g)); //g returns all dots (.) it looks for all the dots. without the g it only looks for the 1ste dot.

// let text = "I'm 29 years old.";
// console.log(text.match(/\d/g)); // d looks for all numbers 


// let text = "Coding is a lot of fun!";
// console.log(text.match(/\s/g)); //s looks for all the sapces in the string 



// let text = "I love javascript!";
// console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

// let text = "I love JavaScript!";
// console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));

// let text = "You are doing great!";
// console.log(text.match(/n?g/gi)); //may or may not have an n in front of the g

// let text = "123123123";
// console.log(text.match(/(123)+/));


// let text = "abcabcabc";
// console.log(text.match(/(abc){1,2}/)); // {} repeat the ()

// let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
// let validEmail = "maaike_1234@email.com";
// let invalidEmail = "maaike@mail.com";
// console.log(validEmail.match(emailPattern));
// console.log(invalidEmail.match(emailPattern));

// function test(a, b, c) {
//     console.log("first:", a, arguments[0]); // a is the same as arguments[0]
//     console.log("second:", arguments[1]); 
//     console.log("third:", c);
//     }
//     test("fun", "js", "secrets");

function test(a, b, c) {
a = "nice";
arguments[1] = "JavaScript";

console.log("first:", a, arguments[0]);
console.log("second:", b, arguments[1]);
console.log("third:", c, arguments[2]);
}
test("fun", "js", "secrets");











