const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const PORT = 3000
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get('/', (req, res) => {
    console.log('Hello') 
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))