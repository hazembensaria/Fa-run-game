import Castle from './castle.js'; 
import Stone from './stone.js'; 
const Container = document.getElementById('container'); 
var img = document.createElement('img');
var img1 = document.createElement('img');
var blueCastleInfo = document.getElementById('blueCastleInfo')
var redCastleInfo = document.getElementById('redCastleInfo')

function loadUi(){
   var blueCastle = new Castle("images/bleucastle2.png")
   var redCastle = new Castle("images/redcastle2.png")
   
   console.log(blueCastle , redCastle)
   img.src = blueCastle.image
   img.alt = 'image'; 
   img1.src = redCastle.image
   img1.alt = 'image'; 
   Container.appendChild(img);
   
   Container.appendChild(img1);
   img.classList.add("blueCastle");
   img1.classList.add("redCastle");

   const blutext = document.createTextNode(`resorces: ${blueCastle.resource} `)
   const blutext1 = document.createTextNode(`wining rounds: ${blueCastle.winingRounds} `)
    blueCastleInfo.appendChild(blutext)
    blueCastleInfo.appendChild(blutext1)

    

}
function bleuCastleHover(){
    console.log("kqsjdhfjqk ")
    const audio = new Audio("sounds/hover.mp3")
    audio.play();
}
function redCastleHover(){
    console.log("kqsjdhfjqk ")
    const audio = new Audio("sounds/hover.mp3")
    audio.play();
}
img.addEventListener("mouseover" , bleuCastleHover)
img1.addEventListener("mouseover" , redCastleHover)

document.addEventListener("DOMContentLoaded"  , loadUi);
