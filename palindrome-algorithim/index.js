console.log("Hello there!")

const checkPailndrome = (string) => {
    // takes in the argument of a string
    if(string.toLowerCase() === string.toLowerCase().split('').reverse().join('')){
        return true 
    }else {
        return false
    }
    // checks the string if it is the same backwards as it is forwards 
    // if it is return true 
    // else return false 

}

console.log(checkPailndrome("mom"))
console.log(checkPailndrome("grandpa"))