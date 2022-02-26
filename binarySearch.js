// we need to sort first, or the array needs to be sorted
// time O(log n) best casr O(1)
// n x 1/2 x 1/2 x 1/2 ... = n/2^k
let recursiveFunction = function (arr, x, start, end) {

    // Base Condition
    if (start > end) return false;

    // Find the middle index
    let mid=Math.floor((start + end)/2);

    // Compare mid with given key x
    if (arr[mid]===x) return true;

    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
    else

        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
}

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;
// console.log("working")
console.log(recursiveFunction(arr, x, 0, arr.length-1));
