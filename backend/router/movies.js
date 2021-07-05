const express = require("express");
const {autorization} = require("../controllers/movies");
const Router = express.Router(); 
Router.post("/", async (req, res) => {
    try{
        const result = await autorization(req);
        res.status(result.status).json(result.data); 
    }catch(error){
        res.status(result.status).json(result.data);
    }
})
module.exports = Router;