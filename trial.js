//DOM manipulation
function changeStyle()
{
    var element = document.getElementsByClassName("mypara");
    for( var i = 0; i < element.length; i++)
    {
        element[i].style.color="red";
    }
}