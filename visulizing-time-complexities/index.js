// visualizing time complexities 

function addUpToFirst(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

function addUpToSecond(n){
    return n * (n + 1) / 2
}


// calculated runtime for different numbers determing what n was -- see video 