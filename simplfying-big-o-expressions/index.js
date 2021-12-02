// simplfying big o expressions 

// start here tonight after videos 

// rules of thumb when counting out big o notation 

// CONSTANTS DONT MATTER 
// When we have O(2n) ---- we can simplfy that to O(n)

// when we have O(500) ----- we can simplfy that just to O(1) , basically we are just saying that there are 500 operations everytime no matter what n is. so the line on the chart is going
// to be flat 

// O(13n^2)  ----- we can simplify that to O(n^2)


//SMALLER TERMS DONT MATTER
// O(n + 10) ---- just get rid of the 10 and it becomes O(n) 
// O(1000n + 50) ------ becomes O(n)
// O(n^2 + 5n + 8) ----- O(n^2)

// BIG O SHORTHANDS --

// ARITHMETIC OPERATIONS ARE CONSTANT 
// + - / * -- DOESNT REALLY MATTER THE SIZE OF THE NUMBER 
// VARIABLE ASSIGNMENT IS ALSO CONSTANT
// ACCESSING ELEMENTS IN AN ARRAY OR AN OBJECT BY THEIR KEY IS CONSTANT
// IN A LOOP, THE COMPLEXIETY IS THE LENGTH OF THE LOOP TIMES THE COMPLEXIETY OF WHATEVER HAPPENS INSIDE THE LOOP


function logAtLeastFive(n) {
    for(let i = 1; i < Math.max(5, n); i++){
        console.log(i);
    }
}
// prints out numbers up to five from the start number that you give it! 

// What is the BIG O here? O(3n)  ----- so it would be O(n)

function logAtMostFive(n) {
    for(let i = 1; i <= Math.min(5, n); i++){
        console.log(i);
    }
}

// O(1)
// its constant it will never change 
// takes what ever number is smaller at logs up to 5 and no more.



