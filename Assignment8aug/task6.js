function weekDay(n)
{
    var day;
   ( n === 1) ? day = "Monday": (n === 2 ) ? day = "tuseday" : (n === 3 ) ? day = "wednesday" : (n === 4 ) ? day = "thursday" : (n === 5 ) ? day = "friday" : (n === 6) ? day = "saturday": (n === 7 ) ? day = "sunday" : day = "invalid input"; 
    return day;
}
console.log(weekDay(8));