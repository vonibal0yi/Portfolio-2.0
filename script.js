const containerEl=document.querySelector(".animation");
const career=["CINEMATOGRAPHER","PHOTOGRAPHER","GRAPHIC DESIGNER","DEVELOPER"];

let careerIndex=0;
let characterIndex=0;
updateText()
function updateText() {
    characterIndex++
    containerEl.innerHTML=`<h1>${career[careerIndex].slice(0,characterIndex)}</h1>`; 

if (characterIndex===career[careerIndex].length) {
    careerIndex++
    characterIndex=0
} 
 if (careerIndex===career.length) {
    careerIndex=0;
    
 }   

setTimeout(updateText,400)

}



 const nav=document.querySelector("nav");
 const navOffset =nav.offsetTop;

window.addEventListener("scroll",()=>{
  nav.style.backgroundColor="transparent";

}) 
window.addEventListener("load",()=>{
    const loader=document.querySelector(".loader");

    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend",()=>{
        document.body.removeChild(loader);
    })

    
  }) 
