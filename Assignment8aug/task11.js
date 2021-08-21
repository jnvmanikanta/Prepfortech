//array reverse

function reverseArray(arr)
{
    let len = arr.length;
    let count = len;
    let revArr = [];
    for(let i=0;i<len;i++){
        revArr[i] = arr[--count];
    }
    return revArr;
}

let arr = [-11,2,38,4,35,6,7];
console.log(arr);
console.log(reverseArray(arr));