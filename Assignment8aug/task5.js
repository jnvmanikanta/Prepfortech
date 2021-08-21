function weekDay(n)
{
   if ( n === 1) return "Monday"; 
   else if (n ===2 )return "tuseday"; 
   else if (n ===3) return "wednesday"; 
   else if (n ===4)return "thursday";
   else if (n ===5) return "friday"; 
   else if (n ===6 )return "saturday"; 
   else if (n ===7 )return "sunday"; 
   else return "invalid input";
}
console.log(weekDay(1));