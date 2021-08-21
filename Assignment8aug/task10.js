//factorial

function fact(n)
{
    let res = 1,temp = n;
    if (temp==0) return 1;
    while(temp > 0)
    {
        res = res*temp;
        temp--;
    }
    return res;
}

console.log(fact(0));
console.log(fact(5));