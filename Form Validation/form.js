const names = document.getElementById("name")
const password = document.getElementById("password")
const submit = document.getElementById("submit")
const errors = document.getElementById("error")

submit.addEventListener("click", (e) =>{
    let messages = []

    if(names.value === "" || names.value === null){
        messages.push("Name is required")
    }

    if(password.value.length <= 6){
        messages.push("Password must be more than 6 characters")
    }    
    else if (password.value.length >= 20){
        messages.push("Password must be less than 20 characters")
    }

    if (messages.length > 0){
        e.preventDefault();
        errors.innerText = messages.join(', ')
    }
    console.log(messages)
})


