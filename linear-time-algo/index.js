// linear time is represented by O(n) meaning that the algorithim will iterate through an entire array in search for one item


function findSock(array){
    for(const item of array){
        if(item === "sock") return true;
    }
}