// logarithmic time is represented by O(log n) meaning that this alog will iterate through a sorted array in chunks removing uncessary items that meet our logic 
// or the item that it is we are searching for
// beacause if we know that our item is in the middle of the array why waste time in starting at the beginning 
// and if our item is towards the end of the array we can eliminate the first half of the input 
function findSock(array){
    let start = 0;
    let end = array.length;
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if(array[mid] === "sock") return "sock";
        if(array[mid] < "sock"){
            start = mid + 1; 
        }else{
            end = mid -1 
        }
    }
}

// this is more efficient and will cut down iterations even if has to make three of them to elimate items we are not looking for 
// mathmatically this would read log base 2 the 2 is represented by the variable in line 9 meaning cut the input in half no matter the size of it until we find it. 