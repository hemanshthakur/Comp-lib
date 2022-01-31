const mainTC = document.querySelector(`#home-text-container`)
const aboutTC = document.querySelector(`#about-text-container`)
const btnHome = document.querySelector(`#btn-home`)
const btnAbout = document.querySelector(`#btn-about`)

aboutTC.style.display="none";
btnHome.style.color="#00E1EF"
mainTC.style.display="flex";

btnAbout.addEventListener("click",()=>{
    aboutTC.style.display="flex";
    btnAbout.style.color="#00E1EF";
    mainTC.style.display="none";
    btnHome.style.color="white"
});
btnHome.addEventListener("click",()=>{
    aboutTC.style.display="none";
    btnAbout.style.color="white";
    mainTC.style.display="flex";
    btnHome.style.color="#00E1EF"
});