// start here tomorrow with the examples from yesterday! 

const findSock = (laundry) => {
    // iterates through an array or data structure to find an item 
    for(const item of laundry){
        // if the item matches the given parameter return it at the end of the iteration
        if(item === "sock") return item
    }
}

console.log(findSock(["shirt", "shorts", "sock", "pants"]))

// given an array, the function call has to find n item with n number of iterations giving it a time complexiety of O(n +2)
// removing the constants it has a runtime of O(n)

// Time Complexiety with Big O 

// When calculating the time complexiety of an alogirithim using Big O notation we're looking for a high level summary of the algorithims performance 

// array of numbers to find the average

const average = (array) => {
    let total = 0 
    for(const num of array){
        total += num 
    }
    return total / array.length
}

console.log("average of an array", average([1,2,3,4,5,6]))

// to determine the time complexity of an algorithim 
// - count the number of steps that it will take the computer to run our code
// - remove any constants 

// const average = (array) => {
    // 1 step 
//     let total = 0 
//     for(const num of array){
    // n steps dependent on the size of the array 
//         total += num 
//     }
    // 1 step 
//     return total / array.length
// }

// This gives us a runtime of O(n + 2) we can remove the constants (+2) bc we're just looking for a high level summary so we end up with O(n)

// using reduce instead of a for...of loop 

const averageReduce = (array) => {
    return array.reduce((total, num) => total + num, 0) /array.length
}

console.log("avearge with reduce", averageReduce([1,2,3,4,5,6]))

// under the hood the reduce method still needs to iterate over every element in the array in the array so we still end up with the same runtime O(n) its important 
// to keep this in mind with a built in method. just bc we might end up with fewer lines of code doesnt mean our runtime improves 

const containsAverage = (array) => {
    const averageValue = average(array)
    for(const num of array){
        if(num === averageValue){
            return true
        }else{
            return false
        }
    }
}

console.log("contains average", containsAverage([1,2,3,4,5,6]))

// 1 step n steps depending on the size of the array 
// 2 step n steps depending on the size of the array 
// counting the steps here we end up with O(n + 2) even though it takes twice as long as our first alogrithim we can still remove the constants and end up with O(n)
// Since we're only looking for  a high level summary this aproxamation still gives us a good sense as to how well our algorithim will scale to larger and larger 
// inputs when compared to solve other common Big O runtimes. 

// SPACE COMPLEXIETY WITH BIG O -- 

