<p align="center"><img src="./img/node-express.png" height="200" alt=" " /></p>
<h1 align="center"> How to Serve Static Files using Express </h1> 
<h4 align="right">Agu 23</h4>

<img src="https://img.shields.io/badge/OS-Linux%20GNU-yellowgreen">

<br>

```
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

const server = http.createServer(app);

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
```


## Structuring Your Files
```
/<name  proyect>
   /server.js o index.js
   /build
      /index.html
      /ccs
      /js
      /media

```
## style.ccs and favicon into index.html
```
<head>
    <link rel="icon" type="/images/" href="favicon.png">
    <link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
```

## WebSocket into Server
```
// WebSocket
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws,req) {
        console.log("Conected: ", wss.clients.size);

        ws.on('error', console.error);

        ws.on('close', function close() {
            console.log('disconnected');
        });

        ws.on('message', function incoming(message) {
            var event = JSON.parse(message);

            console.log("accion: ", event.action + " value: ", event.value);
                
                // Send JSON to WEBGUI
                wss.clients.forEach(function each(client) {
                    if (client !== ws) { // client !== ws && client.readyState === WebSocket.OPEN
                        client.send(JSON.stringify({accion:event.action,value:event.value}));
                      }
                });
        });
});

```


<br>

---
Copyright &copy; 2022 [carjavi](https://github.com/carjavi). <br>
```www.instintodigital.net``` <br>
carjavi@hotmail.com <br>
<p align="center">
    <a href="https://instintodigital.net/" target="_blank"><img src="./img/developer.png" height="100" alt="www.instintodigital.net"></a>
</p>



