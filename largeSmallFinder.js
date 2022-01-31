

// large number finder 
function large(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1+" is the large number"
    } else if (num2 > num1 && num2 > num3) {

        return num2+" is the large number"
    } else if (num3 > num1 && num3 > num2) {
        return num3+" is the large number"
    }
    
    
}





let result = large(500, 600, 800)
//console.log(result);

// small number finder
function small(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1+ " is the small number"
    } else if (num2 < num1 && num2 < num3) {
        return num2+ " is the small number"
    } else {
        return num3+ " is the small number"
    }
    
} 

let smallResult = small(500, 600, 400)
//console.log(smallResult);



