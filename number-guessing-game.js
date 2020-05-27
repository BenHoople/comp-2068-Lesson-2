console.clear();
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const number = Math.ceil(Math.random()* (10));
// console.log(number);

//get input and verify it against number
const guess = async guess => {
    return new Promise((resolve, reject) => {
        rl.question("guess a number between 1 and 10...\n", answer => {
            return resolve (number == answer);
        })
    });
};

let cont = false;
//game loop
(async () => {
    while (!cont){
        cont = await guess();
        console.clear();
        if(!cont) console.error("You were wrong.");
    }
    console.log("Congratulations");
})();

