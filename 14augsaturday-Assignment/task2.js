function countWords()
{
    var words = document.getElementById("words").value;
    var count = words.split(" ").length;
    alert("No of words "+count);
}