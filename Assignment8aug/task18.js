function checker(n){
let flag = "";
switch(((n === 0) ? flag = "zero": (n < 0)?flag = "-ve": flag = "+ve"))
{
case "-ve": 
    console.log("-ve");
    break;
case "+ve": 
    console.log("+ve");
    break;
case "zero": 
    console.log("0");
    break;
} 
}

checker(1);
checker(-1);
checker(0);