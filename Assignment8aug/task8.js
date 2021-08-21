function findmaxEelement(arr){
    let len = arr.length;
    let maxelement =arr[0];
    for(let i=0;i<len;i++)
    {
        if(arr[i] > maxelement )
        {
            maxelement = arr[i];
        }
    }
    return maxelement;
}

let arr = [-11,2,38,4,35,6,7];
console.log(findmaxEelement(arr));