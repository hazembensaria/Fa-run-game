; import Castle from './castle.js'; 
import ChefElf from './chefElf.js';
import ChefNain from './chefNain.js';
import Elf from './elf.js';
import Nain from './nain.js';
import Road from './road.js';
import Stone from './stone.js'; 
const Container = document.getElementById('container'); 
var img = document.createElement('img');
var img1 = document.createElement('img');
var blueCastleInfo = document.getElementById('blueCastleInfo')
var redCastleInfo = document.getElementById('redCastleInfo')
var blueCastle = new Castle("images/bleucastle2.png",
    ["images/elfBlue.png","images/chefElfBlue.png","images/nainBlue.png","images/chefNainBlue.png" ],
    "blue"
   )
   var redCastle = new Castle(
    "images/redcastle2.png",
   ["images/elfRed.png","images/chefElfRed.png","images/nainRed.png","images/chefNainRed.png" ],
   "red"
   )
   var road = new Road();
   var blueGuerrierList
   var redGuerrierList
//    var blueGuerrirList = [] ;
    
function loadUi(){
   for(let i = 0; i<9 ; i++  ){
    road.plateList[i].setUiPlate(document.getElementById(`test${i}`))
   }
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
   const redtext1 = document.createTextNode(`wining rounds: ${redCastle.winingRounds} `)
   const blutextDiv = document.createElement('div')
   const redTextDiv = document.createElement('div')
   const blueInfoDiv = document.createElement('div')
   const redInfoDiv = document.createElement('div')
   blutextDiv.id = "blueText"
   redTextDiv.id = "redText"
   redTextDiv.style.display = "flex"
   redTextDiv.style.justifyContent = "center"
   redTextDiv.style.width = "400px"
   blutextDiv.style.display = "flex"
   blutextDiv.style.justifyContent = "center"
   blutextDiv.style.width = "400px"

   blutextDiv.appendChild(blutext)
   blutextDiv.appendChild(blutext1)
   redTextDiv.appendChild(redtext)
   redTextDiv.appendChild(redtext1)
   blueInfoDiv.append(blutextDiv)
   redInfoDiv.append(redTextDiv)


    blueCastleInfo.appendChild(blueInfoDiv)
    redCastleInfo.appendChild(redTextDiv)
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

function UpdateGuerrierIuicons(castle , className , id){
    const bg = document.getElementsByClassName(className)
    for(let i = 0 ; i<bg.length ; i++){
        // console.log(bg[i])c
        var img = bg[i].children[0]
        let cost = parseInt(bg[i].children[2].textContent[0])
        if(castle.resource < cost){
           img.classList.remove('guerrierIconValid')
           img.classList.add('guerrierIconInvalid')
       }else{
        img.classList.add('guerrierIconValid')
        img.classList.remove('guerrierIconInvalid')
       }
    }
 const text = document.getElementById(id)
 text.textContent = `resorces: ${castle.resource} wining rounds : ${castle.winingRounds}`
}
function showGuerrier(castle , info , className ){
    castle.availableGuerrier.map(guerrier =>{
        var div1 = document.createElement('div');
        div1.classList.add(className)
        div1.style.display = "flex"
        div1.style.alignItems = "center"
        div1.style.flexDirection = "column"
        div1.style.gap = ".5rem"
        div1.style.height = "60px"
        div1.style.width = "100%"
        createImg(guerrier.image , div1 , castle.resource >= guerrier.resource)
        createDiv(guerrier.name , div1)
        createDiv(`${guerrier.resource} coins` , div1)

        info.appendChild(div1)

        // redGuerrirList = document.createElement('div');
        // redCastleInfo.appendChild(redGuerrirList)

    })
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
function chooseGuerrier(guerrier , castle , uiList){
    let name  = guerrier.children[1].textContent
    let image  = guerrier.children[0].src
    var audio ;
    switch(true){
        case name=== "elf" && castle.resource>=2 : 
            audio = new Audio("sounds/elfVoice.mp3")
            audio.play();
            castle.chosenGuerrier.push(new Elf(image))
            attachGuerrirToUilist(castle ,uiList)
        break;
        case name==="nain" && castle.resource>=1 : 
            audio = new Audio("sounds/nainVoice.mp3")
            audio.play();
            castle.chosenGuerrier.push(new Nain(image))
            attachGuerrirToUilist(castle , uiList)

        break;
        case name==="chefNain" && castle.resource>=3 :
            audio = new Audio("sounds/chefNainVoice.mp3")
            audio.play();
            castle.chosenGuerrier.push(new ChefNain(image))
            attachGuerrirToUilist(castle , uiList)
        break;
        case name=== "chefElf" && castle.resource>=4 :
            audio = new Audio("sounds/chefElfVoice.mp3")
            audio.play();
            castle.chosenGuerrier.push(new ChefElf(image))
            attachGuerrirToUilist(castle ,uiList)
        break;
        default :console.log('jqdsfklajs')
    }

    console.log(blueCastle.chosenGuerrier)
}
function moveBlue(callBack){
    // console.log(road.plateList[road.bluePosition].blueGuerrierFighters)
    road.plateList[road.bluePosition].blueGuerrierFighters = []
    road.plateList[road.bluePosition].eraiseFighters()
    road.bluePosition++ ;
    console.log(road.bluePosition)

    road.plateList[road.bluePosition].uiPlate.firstChild.style.justifyContent= "end"
    road.plateList[road.bluePosition].blueGuerrierFighters = blueCastle.chosenGuerrier
    road.plateList[road.bluePosition].drowFighters(blueCastle.chosenGuerrier , "blue" , "60px" , "80px" ,"45%" ,"-30%")
    var bb = document.getElementsByClassName('chosenGuerrierblue')
    for(let i =0 ; i< bb.length ; i++){
        bb[i].style.transform= "scale(0)"   
    }
    setTimeout(function() {
        if (road.bluePosition!== road.redPosition) {
            moveRed(callBack);
        }
        else
        callBack()
    }, 1000);
}
function moveRed(callBack){
    // console.log(road.plateList[road.redPosition].redGuerrierFighters)

    road.plateList[road.redPosition].redGuerrierFighters = []
    road.plateList[road.redPosition].eraiseFighters()
    road.redPosition-- ;
    // console.log(road.redPosition)
    road.plateList[road.redPosition].uiPlate.firstChild.style.justifyContent= "end"
    road.plateList[road.redPosition].redGuerrierFighters = redCastle.chosenGuerrier
    road.plateList[road.redPosition].drowFighters(redCastle.chosenGuerrier , "red" , "50px" , "70px" , "-45%", "30%")
    var bb = document.getElementsByClassName('chosenGuerrierred')
    for(let i =0 ; i< bb.length ; i++){
        bb[i].style.transform= "scale(0)"
    }
    setTimeout(function() {
        if (road.bluePosition!== road.redPosition) {
            moveBlue(callBack);
        }
        else
        callBack()
    }, 1000);
}

function startSequence(callBack){
    setTimeout(function(){moveBlue(callBack)} , 1000)
}




function blueTeamAttack(callBack){
    console.log( 'blue start attack')

    var platau = road.plateList[road.bluePosition]
       for(let i = 0 ; i<  platau.blueGuerrierFighters.length ; i++){
            platau.redGuerrierFighters[0].getDamage(platau.blueGuerrierFighters[0].attack())
            platau.updateHealthBar(platau.redGuerrierFighters[0].vie , "blue")
            if(platau.redGuerrierFighters[0].isKilled())
               { 
                platau.eraiseKilledFighter("blue")
                platau.redGuerrierFighters.shift()
            }
            console.log(platau.blueGuerrierFighters  , 'blue after shift')
            var firstItem = platau.blueGuerrierFighters.shift();
            platau.blueGuerrierFighters.push(firstItem);
            console.log(platau.blueGuerrierFighters , "after blue shift")
            console.log(platau.redGuerrierFighters)

            if(platau.redGuerrierFighters.length===0)
                break;
         }
            console.log("end of blue attack!!!");

         setTimeout(function(){
            if(platau.redGuerrierFighters.length===0){
                callBack()
            }else{
                redTeamAttack(callBack) 
            }
         },3000)

}
function redTeamAttack(callBack){
    console.log( 'red start attack')

    var platau = road.plateList[road.bluePosition]
    for(let i = 0 ; i<  platau.redGuerrierFighters.length ; i++){
        platau.blueGuerrierFighters[platau.blueGuerrierFighters.length-1].getDamage(platau.redGuerrierFighters[0].attack())
        platau.updateHealthBar(platau.blueGuerrierFighters[platau.blueGuerrierFighters.length-1].vie ,"red")
        if(platau.blueGuerrierFighters[platau.blueGuerrierFighters.length-1].isKilled()){
            platau.eraiseKilledFighter("red")
            platau.blueGuerrierFighters.pop()

        }
        
        var firstItem = platau.redGuerrierFighters.shift();
        platau.redGuerrierFighters.push(firstItem);
        console.log(platau.blueGuerrierFighters)
        console.log(platau.redGuerrierFighters)
        if(platau.blueGuerrierFighters.length===0)
            break;
        // console.log(list);
     }
     console.log("end of red aataack!!")

         setTimeout(function(){
            if(platau.blueGuerrierFighters.length===0){
                callBack()
            }else{
                blueTeamAttack(callBack) 
            }
         },3000)

}

function attacking(callBack){
    setTimeout(function(){
        blueTeamAttack(callBack)
    },3000)
}


async function startFight(){

startSequence(()=>{
    console.log('moving completed!!!!!!!!!')
    attacking(()=>{
    console.log('round complted!!!!!!!!!')

    })
})


}
function teamIsReady(castle , castleInfoUi ){
    if(castle.name==="blue"){
        road.plateList[road.bluePosition].uiPlate.firstChild.style.justifyContent= "end"
        road.plateList[road.bluePosition].blueGuerrierFighters = blueCastle.chosenGuerrier
        road.plateList[road.bluePosition].drowFighters(blueCastle.chosenGuerrier , "blue" , "60px" , "80px" ,"45%" ,"-30%")
        var bb = document.getElementsByClassName('chosenGuerrierblue')
        for(let i =0 ; i< bb.length ; i++){
            bb[i].style.transform= "scale(0)"
        }
        castleInfoUi.classList.add("shrinkInfoBlue")
        castleInfoUi.classList.remove("strechInfoBlue") //blueCastleInfo
    }else{  
        // console.log(road.plateList[8].uiPlate.style)
        road.plateList[road.redPosition].uiPlate.firstChild.style.justifyContent= "start"
        road.plateList[road.redPosition].redGuerrierFighters = castle.chosenGuerrier
        road.plateList[road.redPosition].drowFighters(castle.chosenGuerrier , "red" , "50px" , "70px" , "-50%", "30%")
        var bb = document.getElementsByClassName('chosenGuerrierred')
        for(let i =0 ; i< bb.length ; i++){
            bb[i].style.transform= "scale(0)"
        }
        castleInfoUi.classList.add("shrinkInfoRed")
        castleInfoUi.classList.remove("strechInfoRed") //redCastleInfo
    }
   
    
    if(++road.readyTeamsToFight===2)
        {startFight()}
 

}
function showFullInfo(){
    if(blueCastleInfo.classList.contains("shrinkInfoBlue")){
        blueCastleInfo.classList.remove("shrinkInfoBlue")
        blueCastleInfo.classList.add("strechInfoBlue")

    }
    else{
    var guerrierInfo = document.createElement('div');
    guerrierInfo.style.width ="100%"
    guerrierInfo.style.height ="60%"
    guerrierInfo.style.display ="flex"
    guerrierInfo.style.alignItems = "start"
    guerrierInfo.style.paddingTop = "1rem"
    guerrierInfo.style.borderBottom = "lightgray 1px solid"
    guerrierInfo.style.gap = "space-event"
    guerrierInfo.style.justifyContent = "center"
    guerrierInfo.style.overflow = "hidden"



    blueCastleInfo.appendChild(guerrierInfo)
    // --------------------------------------

    blueGuerrierList = document.createElement('div');
    blueGuerrierList.style.width= "100%"
    blueGuerrierList.style.height= "20%"
    blueGuerrierList.style.display ="flex"
    blueGuerrierList.style.position ="relative"
    blueGuerrierList.style.overflow = "hidden"

    var playButton = document.createElement('div');
    playButton.style.width= "18%"
    playButton.style.height= "50%"
    playButton.style.alignSelf= "center"
    playButton.style.position= "absolute"
    playButton.style.left= "80%"
    playButton.style.backgroundColor= "blue"
    playButton.style.borderRadius= "5px"    
    playButton.style.textAlign= "center"
    playButton.style.color= "white"
playButton.addEventListener("click" , function(){
    teamIsReady(blueCastle , blueCastleInfo)
})

    playButton.textContent ="go fight"
    blueGuerrierList.appendChild(playButton)

    blueGuerrierList.style.alignItems = "start"

    blueCastleInfo.appendChild(blueGuerrierList)
    // -----------------------------

   showGuerrier(blueCastle , guerrierInfo , "bleuGuerrier")

    var blueGuerrirList = document.getElementsByClassName("bleuGuerrier")
    for(let i =0 ; i< blueGuerrirList.length ; i++){
        blueGuerrirList[i].addEventListener("click" , function(){
            chooseGuerrier(this , blueCastle , blueGuerrierList)
            UpdateGuerrierIuicons(blueCastle , "bleuGuerrier" , "blueText")
        })
    }
    console.log(blueCastle.chosenGuerrier)
    blueCastleInfo.classList.add("strechInfoBlue")
}
}
function showFullInfoRed(){
    if(redCastleInfo.classList.contains("shrinkInfoRed")){
        redCastleInfo.classList.remove("shrinkInfoRed")
        redCastleInfo.classList.add("strechInfoRed")

    }
    else{
    var guerrierInfo = document.createElement('div');
    guerrierInfo.style.width ="100%"
    guerrierInfo.style.height ="60%"
    guerrierInfo.style.display ="flex"
    guerrierInfo.style.alignItems = "start"
    guerrierInfo.style.paddingTop = "1rem"
    guerrierInfo.style.borderBottom = "lightgray 1px solid"
    guerrierInfo.style.gap = "space-event"
    guerrierInfo.style.justifyContent = "center"
    guerrierInfo.style.overflow = "hidden"


    redCastleInfo.appendChild(guerrierInfo)
// -----------------------------------------------------
    redGuerrierList = document.createElement('div');
    redGuerrierList.style.width= "100%"
    redGuerrierList.style.height= "20%"
    redGuerrierList.style.display ="flex"
    redGuerrierList.style.overflow ="hidden"
    redGuerrierList.style.display ="relative"



    var playButton1 = document.createElement('div');
    playButton1.style.width= "18%"
    playButton1.style.height= "10%"
    playButton1.style.alignSelf= "center"
    playButton1.style.position= "absolute"
    playButton1.style.left= "80%"
    playButton1.style.backgroundColor= "red"
    playButton1.style.borderRadius= "5px"    
    playButton1.style.textAlign= "center"
    playButton1.style.color= "white"
    playButton1.addEventListener("click" , function(){
        teamIsReady(redCastle , redCastleInfo)
    })

    playButton1.textContent ="go fight"
    redGuerrierList.appendChild(playButton1)
    redGuerrierList.style.alignItems = "start"

    redCastleInfo.appendChild(redGuerrierList)


    // ----------------------
   showGuerrier(redCastle , guerrierInfo , "redGuerrier")
    redCastleInfo.classList.add("strechInfoRed")

    var redGuerrirList = document.getElementsByClassName("redGuerrier")
    for(let i =0 ; i< redGuerrirList.length ; i++){
        redGuerrirList[i].addEventListener("click" , function(){
            chooseGuerrier(this , redCastle ,redGuerrierList)
            UpdateGuerrierIuicons(redCastle , "redGuerrier" , "redText")
        }
            
            
        )
    }

}
}
img.addEventListener("mouseover" , bleuCastleHover)
img.addEventListener("click" , showFullInfo)
img1.addEventListener("click" , showFullInfoRed)


img1.addEventListener("mouseover" , redCastleHover)


function removeGuerrier(element , castle){
    console.log(castle)
 if(castle.name ==="blue"){
    blueGuerrierList.removeChild(element)
    blueCastle.chosenGuerrier.splice(element.getAttribute("number") ,1)
    blueCastle.resource+= parseInt(element.getAttribute("cost"))
    UpdateGuerrierIuicons(blueCastle , "bleuGuerrier" , "blueText")
 }
 else{
    redGuerrierList.removeChild(element)
    redCastle.chosenGuerrier.splice(element.getAttribute("number") ,1)
    redCastle.resource+= parseInt(element.getAttribute("cost"))
    UpdateGuerrierIuicons(redCastle , "redGuerrier" , "redText")
 }


}
function attachGuerrirToUilist(castle ,list){
// blueCastle.chosenGuerrier.forEach(e=>{
//     console.log(e)
    var img2 = document.createElement('img')
    castle.resource -= castle.chosenGuerrier[castle.chosenGuerrier.length-1].resource
    img2.src=castle.chosenGuerrier[castle.chosenGuerrier.length-1].image
    img2.style.width= "50px"
    img2.style.height= "65px"
    img2.classList.add(`chosenGuerrier${castle.name}`)
    img2.setAttribute("number" ,castle.chosenGuerrier.length-1)
    img2.setAttribute("cost" ,castle.chosenGuerrier[castle.chosenGuerrier.length-1].resource)

    list.appendChild(img2)
    img2.addEventListener("click" , function(){
       removeGuerrier(this , castle)
    })
// })
}
document.addEventListener("DOMContentLoaded"  , loadUi);
