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




