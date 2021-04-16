//DOM manipulation & getelementbyId method
function appear()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "dmnguyen" & password == "10146645")
    {
        alert("Your user name and password is correct");
    }
    else
    {
        alert("Your user name or password is uncorrect. Please check!");
    }
}