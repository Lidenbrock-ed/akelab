const {movies} = require('../store.js/database');
const config = require('../config/config');
const autorization = async (req) =>{
    try{
        let condition = req.body.Akelab == config.API_KEY 
        if(condition){
            const dataMovies= await findMovies(req.body); 
            return {
                status: 200,
                data: dataMovies
            };
        }else{
            throw new Error("Access Unautorizated, you need a Api Key to use this API");
        }
    }catch(error){
        return {
            status: 401,
            data: error.message
        }
    }
}
const findMovies= async (body) =>{
    try{
        return movies;
    }catch(error){
        return {
            status: 400,
            data: error.message
        }
    }
}
module.exports = {autorization};