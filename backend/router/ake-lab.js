const express = require("express");
const {akeLab} = require("../controllers/ake-lab");
const Router = express.Router(); 
Router.post("/", async (req, res) => {
    try{
        const result = await akeLab(req.body.number);
        res.status(result.status).json(result.data); 
    }catch(error){
        res.status(result.status).json(result.data);
    }
})

module.exports = Router;