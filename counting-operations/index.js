// COUNTING OPEREATIONS

//count the number of operations a computer has to perform 

function addUpTo(n){
    return n * (n + 1) / 2;
    // 1 multiplication 
    // 1 addition
    // 1 division 
    // 3 total operations  
}


function addUpTo2(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
    // since we are looping:
    // we have an addition operator dependent on what n is. if n is 3 we have 3 operation is n is 100 we have 100 operations 
    // so we have n operations 
    // we also have n assignments because of the = sign 
    // so now we have n assignments
    // we also have i++ which is another addition and assignment, so as n grows so do the assignments 
    // let total = 0 is just 1 assignment since it only happens once 
    // let i = 1 is one assignment 
    // i <= n is n number of comparisions 
    // 
}