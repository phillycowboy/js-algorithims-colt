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