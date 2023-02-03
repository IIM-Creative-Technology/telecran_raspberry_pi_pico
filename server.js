const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const app = express();
const server = http.createServer(app);
const path = require("path");
const cors = require("cors")
let ip = require("ip");
console.dir (ip.address());
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
port = 3000

app.get("/", (req,res) => {
    console.log(req.body);
    res.send({"data":"vous êtes sur la route GET"});
    //res.json({msg : "vous êtes sur la route GET"});
})

app.post("/data", (req,res) => {
    console.log('post')
    console.log(req.body);
    let val = Object.keys(req.body)
    console.log(val);

    res.send(val);
    //res.json({msg : "vous êtes sur la route POST"});
})

server.listen( port, () => {
    console.log(`On écoute le port 3000`)
})