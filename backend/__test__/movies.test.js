const {findMovies} = require("../controllers/movies");
const {movies} = require('../store/database')

describe("Testing of akelab function", ()=>{
    const specificError = {"data": "something was wrong, please remember that the number can't be less than Zero either a string", "status": 400}
    test("Testing with specifics cases of use", async () =>{ 
        expect(await findMovies()).toStrictEqual(movies);
    })
});