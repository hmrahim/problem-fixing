

function stringReverse(text) {
    let reverse = ''
    for (const string of text) {
        reverse = string + reverse
    }
    return reverse
    
}

const latter = "hossain mohammad rahim"
const result = stringReverse(latter)
console.log(result);
