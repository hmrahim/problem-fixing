function inchiToFit(inchis) {
    return inchis / 12
    
}
let inchis = 500
let inchiSum = inchiToFit(inchis)
console.log(inchiSum);


function fitToInchis(fit) {
    return fit * 12
    
}
let fit = 4
let fitSum = fitToInchis(fit)
console.log(fitSum);


function mileToKm(mile) {
    return mile * 1.60934
}

let mile = 2
let kmSum = mileToKm(mile)
console.log(kmSum);

function kmToMile(km) {
    return km / 1.60934
    
}

let km = 1
let mileSum = kmToMile(km)
console.log(mileSum);


