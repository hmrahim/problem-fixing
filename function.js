// function multiplication(num1,num2){
    
//     var final = num1 - num2 
//     return final

// }

// var num1 = 50;
// var num2 = 5000;
// var addFinal = multiplication(num1,num2);
// console.log("your meth is now ", addFinal);

// function addition(num1,num2){
//     var clc = num1 + num2
//     return clc;

// }
// var finaladd =  addition(num1,num2)
// console.log("your addition is now ", finaladd)

// function divition(num1,num2){
//     var finalDiv = num1 / num2
//     return finalDiv
// }
// var div = divition(num1,num2)
// console.log( "your divition no is now", div);
// // 

function squireInt(number){
    return Math.pow(number,2)

}
var number = 5
var clc = squireInt(number)
console.log(clc);


function uppercaseToLowerCase(string){
    return string.toLowerCase() 


}
var input = "PROGRAMMING-HERO"
var result = uppercaseToLowerCase(input)
console.log(result);


function fullName(firstName,lastName){
    return firstName+" "+lastName

}
var firstName = "Rahim";
var lastName = "Hossain";
var fullname = fullName(firstName,lastName)
console.log(fullname);
 



// multiplication of any number 

function multiplication(mNumber) {

    var i = 1;
    while (i <= 10) {

        var incrisibleNo = i
        console.log(mNumber +" * "+ i +" = "+ i * mNumber );
        i++

    }   
}
 var mNumber = 13;
 var mretult = multiplication(mNumber);




