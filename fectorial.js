// let fectorial = 1
// for (let i = 1; i <= 5; i++){
//     fectorial = fectorial * i
    
// }
// console.log(fectorial);



// function fectorial(number) {
//     let fect = 1;
//     for (let i = 1; i <= number; i++){
//         fect = fect * i
       
//     }
//     return fect
// }

// const fectNumber = 10
// const fects = fectorial(fectNumber)
// console.log(fects);



function fectorial(number) {
    let fect = 1;
    for (let i = number; i >= 1; i--){
        fect = fect * i
       
    }
    return fect
}

const fectNumber = 7
const fects = fectorial(fectNumber)
console.log(fects);