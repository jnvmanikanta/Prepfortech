//palindrome number

function checkPalindrome(n)
{
let temp = n;
let rem=0,res=0;
while(temp>0){
    rem = temp%10;
    res = res*10+rem;
    temp = parseInt(temp/10);
}
if( n === res ) return "Is a palindrome";
else return "Is not a palindrome";
}

console.log(checkPalindrome(121));
console.log(checkPalindrome(123));