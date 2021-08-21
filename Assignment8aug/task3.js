function isPrime(n){
    let flag = true;
    if( n > 1){
        for (let i = 2; i < n; i++) {
            if ( n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag === true) 
    return "Number is prime"; 
    else 
    return "Number is not prime";
}
    


console.log(isPrime(2));