function sumofNnumbers(n){
    if(n < 0 ) return "Invalid Input";
    else{
        let sum = 0;
        for(let i=1;i<=n;i++){
            sum = sum+i;
        }
        return sum;
    }
}
console.log(sumofNnumbers(10));

//2nd method
// var sumofNnumbers = (n)=> {
//         let sum = 0;
//         for(let i=1;i<=n;i++){
//             sum = sum+i;
//         }
//         return sum;
// }
// console.log(sumofNnumbers(10));