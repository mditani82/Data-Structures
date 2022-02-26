const recBinarySearch = (arr, x, start, end) =>{
  if(start > end) return false
  let mid = Math.floor((start+end)/2)
  if (arr[mid] === x) return true
  if (arr[mid] > x )
    return recBinarySearch(arr, x, start, mid-1)
  else
    return recBinarySearch(arr, x, mid+1, end)
}
let arr = [1, 3, 5, 7, 8, 9];
let x = 6;
// console.log("working")
console.log(recBinarySearch(arr, x, 0, arr.length-1));
