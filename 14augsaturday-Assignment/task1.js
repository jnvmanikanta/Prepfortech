function weekDay()
{
    var n = parseInt(document.getElementById('weekDay').value);
    var output = document.getElementById('output');
switch(n)
{
    case 1: output.value =  "Monday"; break;
    case 2: output.value =  "tuseday"; break;
    case 3: output.value =  "wednesday"; break;
    case 4: output.value =  "thursday"; break;
    case 5: output.value =  "friday"; break;
    case 6: output.value =  "saturday"; break;
    case 7: output.value =  "sunday"; break;
    default: output.value =  "invalid input";
}
}
