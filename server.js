/**
 * @author Carlos Briceño
 * Server
 */
const express      = require('express');
const http         = require('http');
const WebSocket    = require('ws');
const { exec } = require('child_process');

const app=express();
app.use(express.static(__dirname + '/build/'));
app.use(express.static(__dirname + '/build/static/css'));
app.use(express.static(__dirname + '/build/static/js'));
app.use(express.static(__dirname + '/build/static/images'));

app.get('/', function (req, res) {
    res.sendFile("/build/index.html", {});
});


/***** Socket IO / WebSocket  funtions  *****/

server.listen(8080, function listening() {
    console.log("Web server Active listening on " + server.address().port);
    ExecuteChromium();
});

function ExecuteChromium() {
    exec("DISPLAY=:0 chromium-browser http://localhost:8080", function(error, stdout, stderr) {
        console.log("stdout: " + stdout);
        console.log("stderr: " + stderr);
        if (error !== null) {
            console.log("exec error: " + error);
        }
    });
}