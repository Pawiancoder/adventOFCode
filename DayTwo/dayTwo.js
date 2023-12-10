const fs = require("fs");
let possibleGames = 0; //?How many Games are possible?

const input = fs.readFileSync("./example.txt", "utf-8");

const inputLines = input.split("\n");

inputLines.forEach(line => {
    let SplitLine = line.split(";");
    // console.log(SplitLine);
    SplitLine.forEach(lines => {
        let commaSplit = lines.split(" ");
        //console.log(commaSplit);
        for (let i = 0; i == commaSplit.length; i++) {
            console.log("INDEX: " + commaSplit[i]);
            if (!isNaN(commaSplit[i])) {
                if (commaSplit[i + 1] == "blue" || commaSplit[i + 1] == "red" || commaSplit[i + 1] == "green") {
                    console.log("");
                }
            }
        }
    })
})

//TODO!!!
//! 3 4 1 2 6 2