const fs = require("fs");
let sum = 0;

const input = fs.readFileSync("./final.txt", "utf-8");

let inputLines = input.split("\n");

inputLines.forEach(element => {
    let rounds = 0;
    let numbers = [];
    let letters = element.split("");
    letters.forEach(letter => {
        if (!isNaN(parseInt(letter))) {
            numbers.push(letter);
        }
        rounds++;
        if (rounds == letters.length - 1) {
            //Zahl wird erstellt und in
            let firstDigit = numbers[0];
            let lastDigit = numbers[numbers.length - 1];
            sum += (parseInt(firstDigit) * 10) + parseInt(lastDigit);
        }
    })
});

console.log(sum);

//142

