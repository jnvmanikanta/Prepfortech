function countChar(str,ch){
    let len = str.length;
    let count =0,i=0;
    while(len!=0){
        if(str[i] === ch){
            count++;
        }
        i++; len--;
        
    }
    return count;
}

console.log(countChar('manikanta','a'));