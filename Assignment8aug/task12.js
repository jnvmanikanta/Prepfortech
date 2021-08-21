//string reverse

function strReverse(str)
{
    let str1 = "";
    let len = str.length;
    let count = len;
    for(let i=0;i<len;i++){
        str1 = str1+str[--count];
    }
    return str1;
}

console.log(strReverse("mani"));
console.log(strReverse("kanta"));