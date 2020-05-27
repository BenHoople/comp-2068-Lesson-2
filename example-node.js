const express = require("express");
const app = express();
//require lib.
const https = require('https');

app.get('/',function (request, response) {
    //controller logic
    https.get('https://insult.mattbas.org/api/insult', resp => {
        resp.on('data', chunk => {
            //responding with the view
            response.send(`
                <http>
                    <head><title>Oh Snap</title></head>
                    <body>
                        <h1>OH SNAP SON!</h1>
                        <p>${chunk.toString()}!</p>
                    </body>    
                </http>
            `)
        })
    });
});

app.listen(process.env.PORT || 3000);