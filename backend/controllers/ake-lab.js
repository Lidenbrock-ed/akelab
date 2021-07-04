const akeLab = async function(maxNumber){
    try{
        if(maxNumber < 1 || (typeof maxNumber != "number")){
            throw new Error("something was wrong, please remember that the number can't be less than Zero either a string");
        }
        let sequence = "";
        for(let number = 1; number <= maxNumber; number++){
            let divibleBy3 = number % 3 == 0,
                divibleBy5 = number % 5 == 0;
            if(divibleBy3 && divibleBy5) { 
                sequence += "AKELAB ";
            }
            else if(divibleBy3){ 
                sequence += "AKE ";
            }
            else if(divibleBy5){
                sequence += "LAB ";
            }
            else {
                sequence += `${number} `;
            }
        }
        return {
            status: 200,
            data: sequence
        }
    }catch(error){
        return{
            status: 400,
            data: error.message
        }
    }
};
module.exports= {akeLab};