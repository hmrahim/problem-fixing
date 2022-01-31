/*
function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        let element = arr[i]
        sum = sum + element
    }
    return sum
    
    
}
let numbers = [34, 32, 33, 54, 56, 76, 47, 75, 33, 77, 54, 87,]

const result = sum(numbers)
console.log(result);
*/
let numbers = [434, 534, 223, 664, 654, 786, 854, 776, 886, 454, 346, 564, 786, 546, 474, 864, 347,]
function sumOfArray(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i]
        sum = sum+element
    }
    return sum

    
}

const result = sumOfArray(numbers)
console.log(result);