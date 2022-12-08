const { table } = require('console');
const {readFileSync} = require('fs');

const inputCalories = readFileSync("inputCalories.txt", "utf8").replace(/\r/g,"").trim().split("\n\n")


function firstParty(){
    const elfeCalories = inputCalories.map((calories) =>{
        const sumCalories =calories.split("\n").map(Number);
        const test =sumCalories.reduce((previous, currentValue) => previous + currentValue, 0);
        return test
    });

// console.log(Math.max(...elfeCalories))
console.table(elfeCalories.sort((a,b) => b-a));
console.log(elfeCalories.slice(0,3).reduce((previous, current) => previous + current, 0))
}

firstParty();