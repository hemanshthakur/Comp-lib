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
//CARDS
const card1=document.querySelector("#card-1")
const card2=document.querySelector("#card-2")
const card3=document.querySelector("#card-3")
const card4=document.querySelector("#card-4")
const card5=document.querySelector("#card-5")
const card6=document.querySelector("#card-6")

const btnStyle1=document.querySelector("#btn-style-1")
const btnStyle2=document.querySelector("#btn-style-2")
const btnStyle3=document.querySelector("#btn-style-3")
const btnStyle4=document.querySelector("#btn-style-4")
const btnStyle5=document.querySelector("#btn-style-5")
const btnStyle6=document.querySelector("#btn-style-6")

const styleCode1=document.querySelector("#style-code1")
const styleCode2=document.querySelector("#style-code2")
const styleCode3=document.querySelector("#style-code3")
const styleCode4=document.querySelector("#style-code4")
const styleCode5=document.querySelector("#style-code5")
const styleCode6=document.querySelector("#style-code6")

card1.style.display="block"
card2.style.display="none"
card3.style.display="none"
card4.style.display="none"
card5.style.display="none"
card6.style.display="none"

styleCode1.style.display="block"
styleCode2.style.display="none"
styleCode3.style.display="none"
styleCode4.style.display="none"
styleCode5.style.display="none"
styleCode6.style.display="none"

btnStyle1.addEventListener("click",()=>{
card1.style.display="block"
card2.style.display="none"
card3.style.display="none"
card4.style.display="none"
card5.style.display="none"
card6.style.display="none"

styleCode1.style.display="block"
styleCode2.style.display="none"
styleCode3.style.display="none"
styleCode4.style.display="none"
styleCode5.style.display="none"
styleCode6.style.display="none"
})
btnStyle2.addEventListener("click",()=>{
card1.style.display="none"
card2.style.display="block"
card3.style.display="none"
card4.style.display="none"
card5.style.display="none"
card6.style.display="none"

styleCode1.style.display="none"
styleCode2.style.display="block"
styleCode3.style.display="none"
styleCode4.style.display="none"
styleCode5.style.display="none"
styleCode6.style.display="none"
})
btnStyle3.addEventListener("click",()=>{
card1.style.display="none"
card2.style.display="none"
card3.style.display="block"
card4.style.display="none"
card5.style.display="none"
card6.style.display="none"

styleCode1.style.display="none"
styleCode2.style.display="none"
styleCode3.style.display="block"
styleCode4.style.display="none"
styleCode5.style.display="none"
styleCode6.style.display="none"
})
btnStyle4.addEventListener("click",()=>{
card1.style.display="none"
card2.style.display="none"
card3.style.display="none"
card4.style.display="block"
card5.style.display="none"
card6.style.display="none"

styleCode1.style.display="none"
styleCode2.style.display="none"
styleCode3.style.display="none"
styleCode4.style.display="block"
styleCode5.style.display="none"
styleCode6.style.display="none"
})
btnStyle5.addEventListener("click",()=>{
card1.style.display="none"
card2.style.display="none"
card3.style.display="none"
card4.style.display="none"
card5.style.display="block"
card6.style.display="none"

styleCode1.style.display="none"
styleCode2.style.display="none"
styleCode3.style.display="none"
styleCode4.style.display="none"
styleCode5.style.display="block"
styleCode6.style.display="none"
})
btnStyle6.addEventListener("click",()=>{
card1.style.display="none"
card2.style.display="none"
card3.style.display="none"
card4.style.display="none"
card5.style.display="none"
card6.style.display="block"

styleCode1.style.display="none"
styleCode2.style.display="none"
styleCode3.style.display="none"
styleCode4.style.display="none"
styleCode5.style.display="none"
styleCode6.style.display="block"
})
        