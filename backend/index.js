const express = require("express");
const app = express();
const config = require("../config/config");
// config bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//launch server
app.listen(config.PORT, async () => {
    try{
        console.log("Server is running in the port 5000")   
    }catch(error){
        console.error(error);
    }
});