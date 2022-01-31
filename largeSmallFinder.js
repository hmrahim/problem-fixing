

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




 find largest numbers from an array


function largeNumber(number) {
    let largest = 0; 
    for (let i = 0; i < number.length; i++ ) {
        let element = number[i]
        if (element > largest) {
            largest = element
        }
    }

    return largest

    
}

let numbers = [50, 60, 70, 80, 90, 100,400]
let result = largeNumber(numbers)
console.log(result);


// find smallest number from an array

function smallNumber(numbers) {
    let smallest = numbers[0]
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i]
        if (element < smallest) {
            smallest = element
        }

    
    }
    return smallest
    
}

let numbers = [2, 33, 22, 55, 11, 66, 88, 46, 65, 76, 45, 68,]
const result = smallNumber(numbers)
console.log(result);

// its a another way 

let min = Math.max(...numbers)
console.log(min);