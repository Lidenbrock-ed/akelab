const {fibonacci} = require("../controllers/fibonacci");

describe("Test of fibonnaci function", ()=>{
    const specificError = {"data": "something was wrong, please remember that the number can't be less than Zero either a string", "status": 400}
    test("Testing differents positive numbers", async () =>{ 
        expect(await fibonacci(6)).toStrictEqual({"data":"1 1 2 3 5 8", "status": 200});
        expect(await fibonacci(10)).toStrictEqual({"data":"1 1 2 3 5 8 13 21 34 55", "status": 200});
    });
    test("Testing function with zero, it should return a specific error ", async () =>{
        expect(await fibonacci(0)).toStrictEqual(specificError);
    });
    test("Testing function with negative numbers, it should return a specific error ", async () =>{
        expect(await fibonacci(-5)).toStrictEqual(specificError);
        expect(await fibonacci(-9)).toStrictEqual(specificError);
    });
    test("Testing function with strings, it should return a specific error ", async () =>{
        expect(await fibonacci("hello World")).toStrictEqual(specificError);
    });
    test("Testing function with the main data structures, it should return a specific error ", async () =>{
        expect(await fibonacci({})).toStrictEqual(specificError);
        expect(await fibonacci([1,4,6,7,2, "Hello"])).toStrictEqual(specificError);
    });
});