const button = document.getElementById("button")
const body = document.querySelector("body")
const icon = document.getElementById("icon")
var count = 0

if(count % 2 == 0)
{
    button.addEventListener("mouseover", () =>
    {
        button.style.backgroundColor = "#fa632c"
        button.style.border = "4px solid black"
    })

    button.addEventListener("mouseout", () =>
    {
        button.style.backgroundColor = "coral"
        button.style.border = "none"
    })
}

button.addEventListener('click', () =>{
    count++
    if(count % 2 != 0){
        body.style.backgroundColor = "darkslateblue"
        icon.className = "fas fa-moon"
        button.style.backgroundColor = "lightGrey"
        button.style.border = "4px solid white"
        button.style.color = "black"

        button.addEventListener("mouseover", () =>
        {
            button.style.backgroundColor = "lightGrey"
            button.style.border = "4px solid white"
            button.style.color = "black"
        })

        button.addEventListener("mouseout", () =>
        {
            button.style.backgroundColor = "grey"
            button.style.border = "none"
            button.style.color ="yellow"
        })
    }
    else if(count % 2 == 0){
        icon.className = "fas fa-sun"
        body.style.backgroundColor = "antiquewhite"
        button.style.backgroundColor = "#fa632c"
        button.style.border = "4px solid black"

        button.addEventListener("mouseover", () =>{
        button.style.backgroundColor = "#fa632c"
        button.style.border = "4px solid black"
    })

        button.addEventListener("mouseout", () =>{
        button.style.backgroundColor = "coral"
        button.style.color = "black"
        button.style.border = "none"
        })
    }
    console.log(count)
})


