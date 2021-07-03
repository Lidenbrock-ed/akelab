const fibonacci = async function(limitSequence){
    try{
        if(limitSequence < 1 || (typeof limitSequence != "number")){
            throw new Error("something was wrong, please remember that the number can't be less than Zero either a string");
        }
        let fibonacciSequence = "1",
            first = 0, 
            second = 1, 
            element = 0;
        if(limitSequence == 1){
            return {
                status: 200,
                data: fibonacciSequence
            }
        }
        for (let i = 1; i<limitSequence; i++){
            element= first + second;
            first = second;
            second = element;
            fibonacciSequence += ` ${element}`;
        }
        return {
            status: 200,
            data: fibonacciSequence
        }
    }catch(error){
        return{
            status:400,
            data: error.message
        }
    }
}
module.exports = {fibonacci};