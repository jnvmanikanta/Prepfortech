//remove duplicates in string
let str = "juluru".split("");
console.log(removeDups(str));


function removeDups(str)
{
    let len = str.length;
    let str1 = "";
    for(let i=0;i<len;i++)
    {
        if(str1.search(str[i]) == -1)
        {
            str1 = str1+str[i];
        }
    }
    return str1;
}


