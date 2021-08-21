function weekDay(n)
{
switch(n)
{
    case 1: return "Monday"; break;
    case 2: return "tuseday"; break;
    case 3: return "wednesday"; break;
    case 4: return "thursday"; break;
    case 5: return "friday"; break;
    case 6: return "saturday"; break;
    case 7: return "sunday"; break;
    default: return "invalid input";
}
}
console.log(weekDay(0));