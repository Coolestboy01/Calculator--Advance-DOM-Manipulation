const mainBody = document.querySelector (".main-body")
const lowerBody = document.querySelector (".lower-body")
const button = document.querySelectorAll (".box")
const input = document.querySelector (".input-section")
const output = document.querySelector (".output-section")
const icon = document.querySelector (".icon")

let themeStateDark = true

if (localStorage.getItem("themeStateDark") == null) {
    console.log("Does not exist");
    const data = JSON.stringify(themeStateDark)
    localStorage.setItem("themeStateDark", data)
    console.log("Database created 🛢️");
}
else {
    // Get what is in local storage
    const rawLocalstorage = localStorage.getItem("themeStatedark")
    // convert local storage to object
    const data = JSON.parse(rawLocalstorage);
    // Update to sync local storage and note array
    themeStateDark = data
}

icon.addEventListener("click", function () {
    console.log(themeStateDark);
    if (themeStateDark == true) {
        mainBody.style.backgroundColor = "white"
        // mainBody.style.color = "black"

        input.style.color = "black"
        output.style.color = "black"

        lowerBody.style.backgroundColor = "white"
        // lowerBody.style.color = "black"

        for (let index = 0; index < button.length; index++) {
            const element = button[index];
            element.style.backgroundColor = "white"
            element.style.color = "black" 
        }
        themeStateDark = false

    }

    

    else{
        mainBody.style.backgroundColor = "black"
        // mainBody.style.color = "white"

        input.style.color = "white"
        output.style.color = "white"

        lowerBody.style.backgroundColor = "black"
        // lowerBody.style.color = "white"


        for (let index = 0; index < button.length; index++) {
            const element = button[index];
            element.style.backgroundColor = "black"
            element.style.color = "white"

            themeStateDark = true
        }
    }

    const data = JSON.stringify(themeStateDark)
    localStorage.setItem("themeStateDark", data)
    
})