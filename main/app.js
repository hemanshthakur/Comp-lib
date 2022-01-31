const mainTC = document.querySelector(`#home-text-container`)
const aboutTC = document.querySelector(`#about-text-container`)
const btnHome = document.querySelector(`#btn-home`)
const btnAbout = document.querySelector(`#btn-about`)



btnAbout.addEventListener(`click`,()=>{
    aboutTC.style.display="block"
    btnAbout.style.color="#00E1EF"
    mainTC.style.display="none"
})