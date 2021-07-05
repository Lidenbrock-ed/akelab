const {akeLab} = require("../controllers/ake-lab");

describe("Testing of akelab function", ()=>{
    const specificError = {"data": "something was wrong, please remember that the number can't be less than Zero either a string", "status": 400}
    test("Testing with specifics cases of use", async () =>{ 
        expect(await akeLab(3)).toStrictEqual({"data": "1 2 AKE ", "status": 200});
        expect(await akeLab(5)).toStrictEqual({"data":"1 2 AKE 4 LAB ", "status": 200});
        expect(await akeLab(15)).toStrictEqual({"data":"1 2 AKE 4 LAB AKE 7 8 AKE LAB 11 AKE 13 14 AKELAB ", "status": 200});
        expect(await (await akeLab(15)).data).toBe("1 2 AKE 4 LAB AKE 7 8 AKE LAB 11 AKE 13 14 AKELAB ");
        expect(await (await akeLab(15)).status).toBe(200);
    });
    test("Testing function with zero, it should return a specific error ", async () =>{
        expect(await akeLab(0)).toStrictEqual(specificError);
    });
    test("Testing function with negative numbers, it should return a specific error ", async () =>{
        expect(await akeLab(-1000000)).toStrictEqual(specificError);
        expect(await akeLab(-384)).toStrictEqual(specificError);
        expect(await akeLab(-100)).toStrictEqual(specificError);
    });
    test("Testing function with strings, it should return a specific error ", async () =>{
        expect(await akeLab("hello World")).toStrictEqual(specificError);
    });
    test("Testing function with the main data structures, it should return a specific error ", async () =>{
        expect(await akeLab({})).toStrictEqual(specificError);
        expect(await akeLab(["Hello", 3,1,6,["world"]])).toStrictEqual(specificError);
    });
});