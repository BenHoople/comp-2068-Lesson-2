// const https = require('https');

// const addInsult = async ()) => {
//     https.get('https://insult.mattbas.org/api/insult', resp => {
//         resp.on('data', chunk => {
//             addInsult.send(chunk.toString());
//         });
//     });
// }

// const addInsult = async (function (request, response){ 
//     https.get('https://insult.mattbas.org/api/insult', resp => {
//         resp.on('data', chunk => {
//             response.send(chunk.toString());
//         });
//     });
// });

const addInsult = () => {
    Script.load("example-node.js"); // includes code for myFancyMethod();
    return makeFun(); // cool, no need for callbacks!
}

document.getElementById("paraThree").innerHTML = "This code does work...";

document.getElementById("paraOne").innerHTML = addInsult();

document.getElementById("paraTwo").innerHTML = addInsult;
