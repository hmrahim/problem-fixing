
function leapYear(year) {
    let sum1 = year % 4
    let sum2 = year % 100
    let sum3 = year % 400
    if (sum1 == 0 && sum2 != 0 || sum3 == 0) {
        return "is a leap year"
    } else {
        return "is not a leap year"
    }
}

const year = 2030
const result = leapYear(year)
console.log(year,result);
