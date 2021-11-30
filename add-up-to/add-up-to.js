

// first way to write this function! 
const addUpTo = (n) => {
    let total = 0; 
    for(let i = 1; i <= n; i++){
        total += i
    }
    return total 
}
let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`Time elapsed ${t2 - t1 / 1000} seconds.`)


// console.log(addUpTo(100))

// second way to write this function! 

const secondAddUpTo = (n) => {
    return n * (n + 1) / 2
}

let t3 = performance.now()
secondAddUpTo(1000000000)
let t4 = performance.now()
console.log(`Time elapsed ${t4 - t3 /1000} seconds.`)
// console.log(secondAddUpTo(100))


// SAME SECTION AS TIMING OUR CODE! 
