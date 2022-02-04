// ALERT-JS
const btnShowAlert = document.querySelector("#btn-show-alert")
const boxAlert = document.querySelector("#alert-box")
const btnHideAlert = document.querySelector("#btn-hide-alert")

btnHideAlert.style.display="none"
boxAlert.style.display="none"

btnShowAlert.addEventListener("click",()=>{
    boxAlert.style.display="flex"
    btnHideAlert.style.display="block"
    btnShowAlert.style.display="none"
}
)
btnHideAlert.addEventListener("click",()=>{
    boxAlert.style.display="none"
    btnShowAlert.style.display="block"
    btnHideAlert.style.display="none"
}
)

// FLOATING-BUTTON
const btnShowButton = document.querySelector("#btn-show-button")
const boxButton = document.querySelector("#button-box")
const btnHideButton = document.querySelector("#btn-hide-button")

btnHideButton.style.display="none"
boxButton.style.display="none"

btnShowButton.addEventListener("click",()=>{
    boxButton.style.display="flex"
    btnHideButton.style.display="block"
    btnShowButton.style.display="none"
}
)
btnHideButton.addEventListener("click",()=>{
    boxButton.style.display="none"
    btnShowButton.style.display="block"
    btnHideButton.style.display="none"
}
)
