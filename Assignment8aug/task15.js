//palindrome string
function checkPalindrome(str)
{
let str2 ="";
let len = str.length;
while(len>0)
{
    str2 = str2+str[--len];
}

if(str === str2) return "Is a palindrome";
else return "Is not a palindrome";
}

console.log(checkPalindrome("abcdcba"));
console.log(checkPalindrome("mani"));