// official intro to big O

// big 0 notation is a way to formalize fuzzy counting 
// it allows us to formally talk about how the runtime of an algorithim grows as the input grows

// the relationship between the input size and the runtime of an algorithim as the number changes.

// We say that an algorithim of O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases. 

// f(n) could be linear (f(n) = n)
// as n grows so does the runtime 
// f(n) could be quadratic (f(n) = n^2)
// as n grows the runtime is squared 
// f(n) could be constant (f(n) = 1)
// as n grows the runtime is constant 
// f(n) could be something entirely different! 

function addUpTo(n){
    return n * (n + 1) / 2;
}

// always 3 operations so its constant
// O(1)
// as n grows it has no change/reflection in the runtime 

function addUpToTwo(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
// number of operations is eventually bounded by a multiple of n (ex: 10n)
// at the end of the day its just going to be O(n) because it is everchanging -- linear 