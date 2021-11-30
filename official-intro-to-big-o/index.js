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

function countUpAndDown(n){
    console.log("Going Up!")
        for(let i = 0; i < n; i++){
            console.log(i)
        }
        // as n grows so does the loop O(n)
    console.log("%cAt the top!", 'background: #222; color: #bada55')
    console.log("Going Down!")
        for(let j = n - 1; j >= 0; j--){
            console.log(j)
        }
        // as n grows so does the loop O(n)

        // you might think that this will be 2(n)
        // but we are looking at the bigger picture so we simplfy it to O(n)
        // so on the graph in the video it is a straight line, meaning the the time never changes so n would grow with the input 
}


function printAllPairs(n){
    for(let i = 0; i <= n; i++){
        // O(n) as the input grows so does the loop
        for(let j = 0; j <= n; j++){
            console.log(i,j)
        }
        // O(n) as the input grows so does the loop
    }
    // you would think this would be O(2n)
    // so it would simplfy to O(n)
    // but since its nested it gives us a runtime of O(n * n) which gives us -- O(n^2)*squared*
    // so as n grows, the runtime roughly grows at the rate of n squared
    // this is an example of quadratic time, given n - if its 3 it will print out all pairs up to 3 - this is also a representaion of the runtime and how it is squared, or doubled. 
}
