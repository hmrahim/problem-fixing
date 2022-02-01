function uniqueNumber(numbers) {
    let unique = []
    for (const number of numbers) {
        if (unique.indexOf(number) == -1) {
            unique.push(number)
        }
    }
    return unique
}


const numbers = [43, 53, 34, 55, 34, 65, 76, 34, 55, 44, 53, 34, 43, 77, 55]
const result = uniqueNumber(numbers)
console.log(result);

// find unique name from an arrry


function uniqueName(names) {
    let unique = []
    for (const name of names) {
        if (unique.indexOf(name) == -1) {
            unique.push(name)
        }
        
    }
    return unique
    
}

const names = ["rahim", "karim", "kamrul", "sunny", "kobir", "rahim", "sunny", "amin", "kobir",];
const uniqueResult = uniqueName(names)
console.log(uniqueResult);