// tonight start here while you work so you can get some big o done 

const h1 = document.querySelector("h1")
h1.style.color = "#f2f"

// There are four different types of big o examples 

// Big O        Name           Example 
// O(1)        Constant         Accesing a value in an object by its key
// O(log n)    Logarithmic      Binary Search 
// O(n)        Linear           Iterating through every element in an array 
// O(n*to the second power 2) Quadratic  Nested Iteration       


// Logarithmic O(log n) Binary Search Algo 
// Let's revisit our sock finding example and see if we can devise a faster algorithm for finding the sock in our laundry. 
// In our first example, the sock was in an unsorted pile of laundry, so our only hope of finding it was to go through each item in the laundry pile piece by piece.
// What if our laundry were laid out on the floor in alphabetical order? Well, having our laundry sorted would give us a better way to approach this problem!
// laundry as a sorted array ["belt", "blouse", "pants", "shirt", "shorts", "sock", "underwear"];

// If we know that our laundry pile is sorted alphabetically we dont need to start searching from the beginning, we could make a more efficent algorithhim by starting our
// search in the middle

// check the item in the middle of the pile
// if the item is before our sock in the alphabet
// check the first half of the pile
// otherwise, if the item is after our sock in the alphabet
// check the second half of the pile
// otherwise, if that item is our sock
// put the sock on


// This strategy is like opening a dictionary (or a phone book) to try and find a particular word. 
// If you open to a page that's after the word in the alphabet, you know your word is earlier in the dictionary, so you can quickly narrow down your search.

// Here's a visualization of those steps:

// ["belt", "blouse", "pants", "shirt", "shorts", "sock", "underwear"];
//                             ^
//                      is this our sock?

// If that item isn't our sock, we can throw out the first set of items (since we know that "sock" comes later in the alphabet than "shirt"), and start in the middle again:

// ["shorts", "sock", "underwear"];
//            ^
//     is this our sock?

// Now we found our sock significantly faster, by cutting the size of our input in half each time we search! This is only possible because our input was sorted.

// Even in the worst case scenario (our sock not being in the pile), we'd need at most 3 iterations to look through an array of 7 items:


// ["belt", "blouse", "dress", "pants", "shirt", "shorts", "underwear"];
// //                             ^
// ["shirt", "shorts", "underwear"];
// //           ^
// ["underwear"];
//    ^

// This approach benefits us more and more the larger our input size gets, since we can cut the area we're searching approximately in half on each iteration.
//  What if we had 1000 items to look through? With a linear search, the worst case is that we'd need 1000 steps; with this new approach, we'd need just 10:

// 500    n / 2
// 250    n / 4
// 125    n / 8
// 72     n / 16
// 36     n / 32
// 18     n / 64
// 9      n / 128
// 4      n / 256
// 2      n / 512
// 1      n / 1024

// Here's how our algorithm for finding a sock would look in code:

function findSock(sortedLaundry){
    let start = 0;
    let end = sortedLaundry.length;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(sortedLaundry[mid] === "sock") return "sock";

        if(sortedLaundry[mid] < "sock"){
            start = mid + 1;    
        }else{
            end = mid - 1;
        }
    }
}

console.log(findSock(["belt", "blouse", "dress", "pants", "shirt", "shorts","sock","underwear"]))




