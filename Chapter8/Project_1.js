let str = "TopGun";

function scramble(value) {

    let max = value.length;
    let temp = "";

    for (let i = 0; i < max; i++) {
        console.log(value.length);

        let SeparateValue = Math.floor(Math.random() * value.length);
        temp += value[SeparateValue];
        console.log(temp);

        value = value.substr(0, SeparateValue) + value.substr(SeparateValue + 1);
        console.log(value);
    }

    return temp;

}
console.log(scramble(str));
