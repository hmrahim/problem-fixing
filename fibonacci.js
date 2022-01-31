
// fibonacci solution
 /*
function fibonacchi(input) {
    let fibo = [0, 1]
    for (let i = 2; i <= input; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2]

    }
    return fibo
    
}

const input = 15
const result = fibonacchi(input)
// console.log(result);
*/

// solution cube power

function cube(value) {
    let cubeValue = 1 
    for (let i = 1; i <= value; i++){

        cubeValue = cubeValue + Math.pow(i, 3)

    }
    return cubeValue
    
}

let input = 12
let result = cube(input)
console.log(result);