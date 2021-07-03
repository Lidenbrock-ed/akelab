const express = require("express");
const app = express();
const config = require("../config/config");
// config bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//controller
const akeLabController = require("./router/ake-lab");
const fibonacciController = require("./router/fibonnaci");
// routes
app.use("/akelab", akeLabController);
app.use("/fibonacci", fibonacciController);
//launch server
app.listen(config.PORT, async () => {
    try{
        console.log(`Server is running in http://localhost:${config.PORT}`)   
    }catch(error){
        console.error(error);
    }
});