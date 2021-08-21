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
function reverseString(str)
{
let str1 = str.split(" ");
let str2 = [];
let len = str1.length;
for(let i=0;i<len;i++)
{
    let temp = strReverse(str1[i]);
    str2.push(temp);
}
return str2.join(" ");
}

console.log(reverseString("Hello this is sampl"));