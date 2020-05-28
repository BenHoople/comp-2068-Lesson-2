const express = require("express");
const app = express();
//require lib.
const https = require('https');
const path = require('path');



app.get('/',function (request, response){
    response.send(`
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <meta name="description" content="">
                <meta name="author" content="">
                <title>Insult Lines</title>
                <!-- Bootstrap core CSS -->
                <link href="bootstrap/css/bootstrap.css" rel="stylesheet">
                <!-- Custom styles for this template -->
                <link href="style.css" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i" rel="stylesheet">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            </head>
            <body>
                <div class="container">
                    <div class="title-box">
                        <h1><span>The</span>Insulting Lines</h1>
                        <h1></h1>
                        <div class="title-border title-border-left"></div>
                        <div class="title-border title-border-right"></div>
                    </div>
                    <h2 class="text-center">I hear you call, ${makeFun()}<script></script> </h2>
                    <p class="author text-center">by <a href="https://www.poets.org/poetsorg/poet/yone-noguchi">Words</a></p>
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="row poem-row">
                                <div class="col-md-4"> 
                                    <p id="paraOne" style="color: rgba(241, 240, 240, 0.856);">${makeFun()}</p> 
                                </div>
                                <div class="col-md-4">
                                    <p id="paraTwo" style="color: rgba(241, 240, 240, 0.856);">${makeFun()}</p>
                                </div>
                                <div class="col-md-4"> 
                                    <p id="paraThree" style="color: rgba(241, 240, 240, 0.856);">${makeFun()}</p> 
                                </div>
                            </div>                     
                        </div>
                    </div>
                    <footer>
                        <div class="row">
                            <div class="col-md-6 offset-md-3">
                                <p>Created with <a href="https://pinegrow.com">Pinegrow</a>.</p> 
                            </div>
                        </div>
                    </footer>
                </div>
        </html>
    `)
});


const makeFun = async function (request, response) {
    //controller logic
    https.get('https://insult.mattbas.org/api/insult', resp => {
        resp.on('data', chunk => {
            //responding with the view
            response.send(chunk.toString());
        });
    });
}

const tease = function (request, response) {
    //controller logic
    https.get('https://insult.mattbas.org/api/insult', resp => {
        resp.on('data', chunk => {
            //responding with the view
            response.send(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                    <meta name="description" content="">
                    <meta name="author" content="">
                    <title>Insult Lines</title>
                    <!-- Bootstrap core CSS -->
                    <link href="bootstrap/css/bootstrap.css" rel="stylesheet">
                    <!-- Custom styles for this template -->
                    <link href="style.css" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i" rel="stylesheet">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </head>
                <body>
                    <div class="container">
                        <div class="title-box">
                            <h1><span>The</span>Insulting Lines</h1>
                            <h1></h1>
                            <div class="title-border title-border-left"></div>
                            <div class="title-border title-border-right"></div>
                        </div>
                        <h2 class="text-center">I hear you call, ${chunk.toString()}<script></script> </h2>
                        <p class="author text-center">by <a href="https://www.poets.org/poetsorg/poet/yone-noguchi">Words</a></p>
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <div class="row poem-row">
                                    <div class="col-md-4"> 
                                        <p id="paraOne" style="color: rgba(241, 240, 240, 0.856);">${chunk.toString()}</p> 
                                    </div>
                                    <div class="col-md-4">
                                        <p id="paraTwo" style="color: rgba(241, 240, 240, 0.856);">${chunk.toString()}</p>
                                    </div>
                                    <div class="col-md-4"> 
                                        <p id="paraThree" style="color: rgba(241, 240, 240, 0.856);">${chunk.toString()}</p> 
                                    </div>
                                </div>                     
                            </div>
                        </div>
                        <footer>
                            <div class="row">
                                <div class="col-md-6 offset-md-3">
                                    <p>Created with <a href="https://pinegrow.com">Pinegrow</a>.</p> 
                                </div>
                            </div>
                        </footer>
                    </div>
            </html>
            `)
        })
    });
}

app.get('/jokes', tease);

app.listen(process.env.PORT || 3000);