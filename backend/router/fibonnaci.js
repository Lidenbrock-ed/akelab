const express = require("express");
const {fibonacci} = require("../controllers/fibonacci");
const Router = express.Router(); 
Router.post("/", async (req, res) => {
    try{
        const result = await fibonacci(req.body.number);
        res.status(result.status).json(result.data); 
    }catch(error){
        res.status(result.status).json(result.data);
    }
})
module.exports = Router;