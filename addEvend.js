function odd(number) {
    let sum = number % 2
    if (sum != 0) {
        return "this is an odd number"
    } else {
        return "this is  an even number"
    }
    
}

const number = 1001;
const oddNum = odd(number)
console.log(oddNum);