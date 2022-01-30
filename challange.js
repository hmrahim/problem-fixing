// challange number 1

function checkLeapYear(year) {
    let sum1 = year % 4
    let sum2 = year % 100
    let sum3 = year % 400

    if (sum1 == 0 && sum2 != 0 || sum3 == 0) {
        return true
    } else {
        return false
    }
    
}

const year = 2023;
const leapYear = checkLeapYear(year)
//console.log("is leap Year " + leapYear);


// challenge number 2

function oddEven(age) {
    let odd = age % 2
    if (odd != 0) {
        return  " age is odd"
    } else {
        return  " age is even"
    }
    
}

const age = 26
const check = oddEven(age)
//console.log(check);


// challenge number 3


function hourToMunite(hour) {
    let munites = hour * 60 

    return hour+"hour = " + munites + " munite"

    
}

const hour = 20
const checkMunite = hourToMunite(hour)
//console.log(checkMunite);

// celcius to Fahrenheit 
function celToFahr(cel) {
    let result = (cel * 1.8) + 32
    return result
    
    
}

let cel = 0
let fahr = celToFahr(cel)
//console.log(fahr);


// fahrenheit to celcius

function fahrToCel(fahr) {
    let result = (fahr - 32) * 5 / 9;
    return result
    
}

let fahrn = 0
let celcius = fahrToCel(fahrn)
console.log(celcius)

// celcius to kelbin

function celToKelbin(cel) {
    let result = cel + 273.15
    return result
    
}

let kelbin = celToKelbin(2)
console.log(kelbin, "k");

// kelbin to clecius 
function kelTocel(kel) {
    let result = kel - 273.15
    return result
    
}
let cell = kelTocel(2)
console.log(cell,"c");