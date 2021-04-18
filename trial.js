//DOM manipulation & getelementbyId method
function greeting()
{
    var select = document.getElementById("selectbox");

    if(alert(select.options[select.selectedIndex].value)== "Vietnamese")
    {
        alert("Xin chao!");
    }
    else if(alert(select.options[select.selectedIndex].value) == "American")
    {
        alert("Hello!");
    }
    else
    {
        alert("Ni hao!");
    }
}