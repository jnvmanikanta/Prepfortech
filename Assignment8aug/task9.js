function findminEelement(arr){
    let len = arr.length;
    let minelement = arr[0];
    for(let i=0;i<len;i++)
    {
        if(arr[i] < minelement )
        {
            minelement = arr[i];
        }
    }
    return minelement;
}

let arr = [-11,2,38,4,35,6,7];
console.log(findminEelement(arr));