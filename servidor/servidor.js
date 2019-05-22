var express = require("express");
var bodyParser = require("body-parser")
var cors = require("cors");
var https = require("https")
var app = express();



app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get("/api/items", (req, res) => {
    var query = req.query;
    var url = "https://api.mercadolibre.com/sites/MLA/search?q=" + query.q + "&limit=4";
    https.get(url, (resp) => {
        var data = "";
        resp.on("data", (chunk) => {
            data += chunk;
        });
        resp.on("end", () => {
            res.send(data)
        })
    })
})

app.get("/api/items/:id", (req, res) => {
    var query = req.params.id;
    var urlItem = "https://api.mercadolibre.com/items/" + query;
    https.get(urlItem, (resp) => {
        var data = "";
        resp.on("data", (chunk) => {
            data += chunk;
        });
        resp.on("end", () => {
            res.send(data)
        })
    })
})
app.get("/api/items/:id/description", (req, res)=>{
    var query = req.params.id
    var urlItemDescript = "https://api.mercadolibre.com/items/" + query + "/description"
    https.get(urlItemDescript, (resp) => {
        var data = "";
        resp.on("data", (chunk) => {
            data += chunk;
        });
        resp.on("end", () => {
            res.send(data)
        })
    })
})


var puerto = "8080";

app.listen(puerto, function () {
    console.log("Estoy escuchando")
})


