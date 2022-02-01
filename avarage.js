// find avarage number from an array

/*
function avarage(numbers) {
    let sum = 0
    for (let i = 0 ; i < numbers.length; i++){   
        sum  = sum + numbers[i]
        
    }
   return sum
   
    
}
let numbers = [43, 22, 54, 34, 65, 34, 65, 44, 36, 76, 56, 77, 55, 37, 86, 34]
let result = avarage(numbers) / numbers.length
console.log(result);
*/

// rectAngle area...... 

function rectAngle() {
    let sum = height * width  / 2
    return sum
    
}

let height = 50;
let width = 30
let result = rectAngle(height, width)
console.log(result);
