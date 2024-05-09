import Castle from './castle.js'; 
import ChefElf from './chefElf.js';
import ChefNain from './chefNain.js';
import Elf from './elf.js';
import Nain from './nain.js';
import Stone from './stone.js'; 
const Container = document.getElementById('container'); 
var img = document.createElement('img');
var img1 = document.createElement('img');
var blueCastleInfo = document.getElementById('blueCastleInfo')
var redCastleInfo = document.getElementById('redCastleInfo')
var blueCastle = new Castle("images/bleucastle2.png",
    ["images/elfBlue.jpeg","images/chefElfBlue.jpeg","images/nainBlue.jpeg","images/chefNainBlue.jpeg"]
   )
   var redCastle = new Castle("images/redcastle2.png",
   ["images/elfRed.jpeg","images/chefElfRed.jpeg","images/nainRed.jpeg","images/chefNainRed.jpeg"]

   )
   var blueGuerrierList
   var redGuerrierList
//    var blueGuerrirList = [] ;
    var chosenGuerrier = new Array
function loadUi(){
   
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
   const redtext = document.createTextNode(`resorces: ${redCastle.resource} `)
   const redText1 = document.createTextNode(`wining rounds: ${redCastle.winingRounds} `)
    blueCastleInfo.appendChild(blutext)
    blueCastleInfo.appendChild(blutext1)
    redCastleInfo.appendChild(redtext)
    redCastleInfo.appendChild(redText1)


}
function createDiv(text , element){ 
    const node = document.createTextNode(text);
var div = document.createElement('div');
div.appendChild(node)
// div.style.backgroundColor = "red"
element.appendChild(div);
return div
}

function createImg(src , element , canTrain){
var img = document.createElement('img');
img.src = src
canTrain ? img.classList.add("guerrierIconValid") : img.classList.add("guerrierIconInvalid")
img.alt = 'image'

element.appendChild(img);
}


function bleuCastleHover(){
    const audio = new Audio("sounds/hover.mp3")
    audio.play();
}
function redCastleHover(){
    console.log("kqsjdhfjqk ")
    const audio = new Audio("sounds/hover.mp3")
    audio.play();
}
function chooseGuerrier(guerrier , castle , list){
    let name  = guerrier.children[1].textContent
    let image  = guerrier.children[0].src
    switch(true){
        case name=== "elf" && castle.resource>=2 : 
            castle.chosenGuerrier.push(new Elf(image))
            attachGuerrirToUilist(castle ,list)
        break;
        case name==="nain" && castle.resource>=1 : 
            castle.chosenGuerrier.push(new Nain(image))
            attachGuerrirToUilist(castle , list)

        break;
        case name==="chefNain" && castle.resource>=3 :
            castle.chosenGuerrier.push(new ChefNain(image))
            attachGuerrirToUilist(castle , list)
        break;
        case name=== "chefElf" && castle.resource>=4 :
            castle.chosenGuerrier.push(new ChefElf(image))
            attachGuerrirToUilist(castle ,list)
        break;
        default :console.log('jqdsfklajs')
    }

    console.log(blueCastle.chosenGuerrier)
}
function showFullInfo(){
    var guerrierInfo = document.createElement('div');
    guerrierInfo.style.width ="100%"
    guerrierInfo.style.height ="60%"
    guerrierInfo.style.display ="flex"
    // guerrierInfo.style.backgroundColor ="red"
    guerrierInfo.style.alignItems = "center"
    guerrierInfo.style.paddingTop = "1rem"
    guerrierInfo.style.borderBottom = "lightgray 1px solid"
    guerrierInfo.style.gap = "space-event"
    guerrierInfo.style.justifyContent = "center"


    blueCastleInfo.appendChild(guerrierInfo)
    // --------------------------------------

    blueGuerrierList = document.createElement('div');
    blueGuerrierList.style.width= "100%"
    blueGuerrierList.style.height= "20%"
    blueGuerrierList.style.display ="flex"

    blueGuerrierList.style.alignItems = "start"

    blueCastleInfo.appendChild(blueGuerrierList)
    // -----------------------------



    blueCastle.availableGuerrier.map(guerrier =>{
       var div1 = document.createElement('div');
        div1.classList.add("bleuGuerrier")
        div1.style.display = "flex"
        div1.style.justifyContent = "center"
        div1.style.alignItems = "center"
        div1.style.flexDirection = "column"
        div1.style.gap = ".5rem"
        div1.style.height = "50px"
        div1.style.width = "100%"
        // div1.style.backgroundColor = "red"


        createImg(guerrier.image , div1 , blueCastle.resource >= guerrier.resource)
        createDiv(guerrier.name , div1)
        createDiv(`${guerrier.resource} coins` , div1)

        guerrierInfo.appendChild(div1)
    })
    var blueGuerrirList = document.getElementsByClassName("bleuGuerrier")
    for(let i =0 ; i< blueGuerrirList.length ; i++){
        blueGuerrirList[i].addEventListener("click" , function(){chooseGuerrier(this , blueCastle , blueGuerrierList)})
    }
    console.log(blueCastle.chosenGuerrier)
    blueCastleInfo.classList.add("strechInfoBlue")

}
function showFullInfoRed(){
    var guerrierInfo = document.createElement('div');
    guerrierInfo.style.width ="100%"
    guerrierInfo.style.height ="60%"
    guerrierInfo.style.display ="flex"
    // guerrierInfo.style.backgroundColor ="red"
    guerrierInfo.style.alignItems = "start"
    guerrierInfo.style.paddingTop = "1rem"
    guerrierInfo.style.borderBottom = "lightgray 1px solid"
    guerrierInfo.style.gap = "space-event"
    guerrierInfo.style.justifyContent = "center"


    redCastleInfo.appendChild(guerrierInfo)
// -----------------------------------------------------
    redGuerrierList = document.createElement('div');
    redGuerrierList.style.width= "100%"
    redGuerrierList.style.height= "20%"
    redGuerrierList.style.display ="flex"
    redCastleInfo.appendChild(redGuerrierList)


    // ----------------------
    redCastle.availableGuerrier.map(guerrier =>{
        var div1 = document.createElement('div');
        div1.classList.add("redGuerrier")
        div1.style.display = "flex"
        div1.style.alignItems = "center"
        div1.style.flexDirection = "column"
        div1.style.gap = ".5rem"
        div1.style.height = "60px"
        div1.style.width = "100%"
        createImg(guerrier.image , div1 , redCastle.resource >= guerrier.resource)
        createDiv(guerrier.name , div1)
        createDiv(`${guerrier.resource} coins` , div1)

        guerrierInfo.appendChild(div1)

        // redGuerrirList = document.createElement('div');
        // redCastleInfo.appendChild(redGuerrirList)

    })
    redCastleInfo.classList.add("strechInfoRed")

    var redGuerrirList = document.getElementsByClassName("redGuerrier")
    for(let i =0 ; i< redGuerrirList.length ; i++){
        redGuerrirList[i].addEventListener("click" , function(){chooseGuerrier(this , redCastle ,redGuerrierList)})
    }
}
img.addEventListener("mouseover" , bleuCastleHover)
img.addEventListener("click" , showFullInfo)
img1.addEventListener("click" , showFullInfoRed)


img1.addEventListener("mouseover" , redCastleHover)

function attachGuerrirToUilist(castle ,list){
// blueCastle.chosenGuerrier.forEach(e=>{
//     console.log(e)
    var img2 = document.createElement('img')
    castle.resource -= castle.chosenGuerrier[castle.chosenGuerrier.length-1].resource
    img2.src=castle.chosenGuerrier[castle.chosenGuerrier.length-1].image
    img2.style.width= "50px"
    img2.style.height= "65px"
    list.appendChild(img2)
// })

}
document.addEventListener("DOMContentLoaded"  , loadUi);
