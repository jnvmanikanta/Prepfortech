
function Search(arr, n){
let len = arr.length;
for(let i=0;i<len;i++)
{
    if(arr[i] === n)
    {
        return "Element found at position "+i;
    }
}
return "Element not found";
}

let arr = [1,2,3,4,5,6,7];
console.log(Search(arr,5));
console.log(Search(arr,8));