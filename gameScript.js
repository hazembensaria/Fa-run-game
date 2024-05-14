; import BuildUi from './buildUi.js';
import Castle from './castle.js'; 
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
   var buildUi =  new BuildUi()
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
            castle.tmpChosenGuerrierList.push(new Elf(image))
            attachGuerrirToUilist(castle ,uiList)
        break;
        case name==="nain" && castle.resource>=1 : 
            audio = new Audio("sounds/nainVoice.mp3")
            audio.play();
            castle.tmpChosenGuerrierList.push(new Nain(image))
            attachGuerrirToUilist(castle , uiList)

        break;
        case name==="chefNain" && castle.resource>=3 :
            audio = new Audio("sounds/chefNainVoice.mp3")
            audio.play();
            castle.tmpChosenGuerrierList.push(new ChefNain(image))
            attachGuerrirToUilist(castle , uiList)
        break;
        case name=== "chefElf" && castle.resource>=4 :
            audio = new Audio("sounds/chefElfVoice.mp3")
            audio.play();
            castle.tmpChosenGuerrierList.push(new ChefElf(image))
            attachGuerrirToUilist(castle ,uiList)
        break;
        default :console.log('jqdsfklajs')
    }

    console.log(blueCastle.chosenGuerrier)
}
function moveBlue(callBack){
    for(let i = 0 ; i< road.bluePosition.length ; i++ ){
        // console.log(road.plateList[road.bluePosition].blueGuerrierFighters)
        road.plateList[road.bluePosition[i]].blueGuerrierFighters = []
        road.plateList[road.bluePosition[i]].eraiseFighters()
        road.bluePosition[i]++ ;
        console.log(road.bluePosition)

        road.plateList[road.bluePosition[i]].uiPlate.firstChild.style.justifyContent= "end"
        road.plateList[road.bluePosition[i]].blueGuerrierFighters = blueCastle.chosenGuerrier[i]
        road.plateList[road.bluePosition[i]].drowFighters(road.plateList[road.bluePosition[i]].blueGuerrierFighters , "blue" , "60px" , "80px" ,"45%" ,"-30%")
        var bb = document.getElementsByClassName('chosenGuerrierblue')
        for(let j =0 ; j< bb.length ; j++){
            bb[j].style.transform= "scale(0)"   
        }
    }
    
    setTimeout(function() {
        if (road.bluePosition[0]!== road.redPosition[0]) {
            moveRed(callBack);
        }
        else
        callBack()
    }, 1000);
}
function moveRed(callBack){
    // console.log(road.plateList[road.redPosition].redGuerrierFighters)
    console.log("beggin of walking")
    for(let i = 0 ; i< road.redPosition.length ; i++ ){
        console.log('this is loop')
    road.plateList[road.redPosition[i]].redGuerrierFighters = []
    road.plateList[road.redPosition[i]].eraiseFighters()
    road.redPosition[i]-- ;
    console.log('this is eriasing end')

    // console.log(road.redPosition)
    road.plateList[road.redPosition[i]].uiPlate.firstChild.style.justifyContent= "end"
    road.plateList[road.redPosition[i]].redGuerrierFighters = redCastle.chosenGuerrier[i]
    console.log('this is eriasing end')
    
    road.plateList[road.redPosition[i]].drowFighters(road.plateList[road.redPosition[i]].redGuerrierFighters, "red" , "50px" , "70px" , "-45%", "30%")
    console.log('this i am here npw !!!!!')
    var bb = document.getElementsByClassName('chosenGuerrierred')
    for(let j =0 ; j< bb.length ; j++){
        bb[j].style.transform= "scale(0)"
    }
}
console.log("end of walking")
    setTimeout(function() {
        if (road.bluePosition[0]!== road.redPosition[0]) {
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

    var platau = road.plateList[road.bluePosition[0]]
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

            if(platau.redGuerrierFighters.length===0){
                blueCastle.winRound()
                break;

            }
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

    var platau = road.plateList[road.bluePosition[0]]
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
            {   redCastle.winRound()
                break;}
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
    console.log(blueCastle.chosenGuerrier)
    console.log(redCastle.chosenGuerrier)

    console.log(road.bluePosition[0] , "this is fighters blue after fight")
    road.plateList[road.bluePosition[0]].blueGuerrierFighters.length!==0 ?
    blueCastle.chosenGuerrier[0]=road.plateList[road.bluePosition[0]].blueGuerrierFighters:
    blueCastle.chosenGuerrier.shift()

    road.plateList[road.redPosition[0]].redGuerrierFighters.length!==0 ?
    redCastle.chosenGuerrier[0]=road.plateList[road.redPosition[0]].redGuerrierFighters:
    redCastle.chosenGuerrier.shift()

    blueCastle.clameRewards()
    redCastle.clameRewards()
    road.checkIfBlueFightersExist()
    road.checkIfRedFightersExist()
    console.log(road.bluePosition)
    console.log(road.redPosition)



    })
})


}
function teamIsReady(castle , castleInfoUi ){
    var blueLen = road.bluePosition.length-1
    var redLen = road.redPosition.length-1
    console.log(castle.tmpChosenGuerrierList.length)
   
    /** 
     * chosen = 0 et tmp =0  => you cant
     * chosen = 0 et tmp != 0 => normal
     * chosen != 0 et tmp = 0 => not the best
     * chosen != 1 et tmp != 0 => normal 
     */
        if(castle.chosenGuerrier.length!==0 && castle.tmpChosenGuerrierList.length===0 && castle.name ==="blue")
            {
                console.log('hope you win blue')
                road.bluePosition.pop()
                
            }
            else if(castle.chosenGuerrier.length!==0 && castle.tmpChosenGuerrierList.length===0 && castle.name ==="red")
                {
                    console.log('hope you win red')
                    road.redPosition.pop()
                    
                }
            else if(castle.tmpChosenGuerrierList.length!==0 ){
    if(castle.name==="blue"){
        castle.confirmGuerrier()
        road.plateList[road.bluePosition[blueLen]].blueGuerrierFighters = blueCastle.chosenGuerrier[blueCastle.chosenGuerrier.length-1]
        road.plateList[road.bluePosition[blueLen]].drowFighters(road.plateList[road.bluePosition[blueLen]].blueGuerrierFighters, "blue" , "60px" , "80px" ,"45%" ,"-30%")
        road.plateList[road.bluePosition[blueLen]].uiPlate.firstChild.style.justifyContent= "end"
        var bb = document.getElementsByClassName('chosenGuerrierblue')
        for(let i =0 ; i< bb.length ; i++){
            bb[i].style.transform= "scale(0)"
            bb[i].remove()
        }

        castleInfoUi.classList.add("shrinkInfoBlue")
        castleInfoUi.classList.remove("strechInfoBlue") //blueCastleInfo
    }else{  
        castle.confirmGuerrier()
        // console.log(road.plateList[8].uiPlate.style)
        road.plateList[road.redPosition[redLen]].uiPlate.firstChild.style.justifyContent= "start"
        road.plateList[road.redPosition[redLen]].redGuerrierFighters = castle.chosenGuerrier[redCastle.chosenGuerrier.length-1]
        road.plateList[road.redPosition[redLen]].drowFighters(road.plateList[road.redPosition[redLen]].redGuerrierFighters , "red" , "50px" , "70px" , "-50%", "30%")

        var bb = document.getElementsByClassName('chosenGuerrierred')
        for(let i =0 ; i< bb.length ; i++){
            bb[i].style.transform= "scale(0)"
            bb[i].remove()

        }

        castleInfoUi.classList.add("shrinkInfoRed")
        castleInfoUi.classList.remove("strechInfoRed") //redCastleInfo
    }

    } 
   
   
    else if(castle.chosenGuerrier.length===0 && castle.tmpChosenGuerrierList.length===0)
        {
            console.log('you dont have any guerrier in field!')
            return;
        }
    
    if(++road.readyTeamsToFight===2)
        {
            road.clearReadyTeamsToFight()
            startFight()
        }
 

}

function showFullInfo(){
    if(blueCastleInfo.classList.contains("shrinkInfoBlue")){
      buildUi.shrinkCastleInfo(blueCastleInfo)
    }
    else{
    buildUi.drowInfoInterface(blueGuerrierList , blueCastleInfo , blueCastle , "bleuGuerrier" , (list , button)=>{
        blueGuerrierList = list
        
        button.addEventListener("click" , function(){
            teamIsReady(blueCastle , blueCastleInfo)
            })
        console.log(list)   
        var blueGuerrirList = document.getElementsByClassName("bleuGuerrier")
        for(let i =0 ; i< blueGuerrirList.length ; i++){
            blueGuerrirList[i].addEventListener("click" , function(){
                chooseGuerrier(this , blueCastle , list)
                buildUi.UpdateGuerrierIuicons(blueCastle , "bleuGuerrier" , "blueText")
            })
        }
        console.log(blueCastle.chosenGuerrier)
        blueCastleInfo.classList.add("strechInfoBlue")
    })

    }
}


function showFullInfoRed(){
    if(redCastleInfo.classList.contains("shrinkInfoRed")){
        buildUi.shrinkCastleInfo(redCastleInfo)
    }
    else{
        buildUi.drowInfoInterface(redGuerrierList , redCastleInfo , redCastle , "redGuerrier" , (list , button)=>{
            redGuerrierList = list
            button.addEventListener("click" , function(){
                teamIsReady(redCastle , redCastleInfo)
                }) 
                var redGuerrirList = document.getElementsByClassName("redGuerrier")
             for(let i =0 ; i< redGuerrirList.length ; i++){
                redGuerrirList[i].addEventListener("click" , function(){
            chooseGuerrier(this , redCastle ,list)
            buildUi.UpdateGuerrierIuicons(redCastle , "redGuerrier" , "redText")
        })
    }
     redCastleInfo.classList.add("strechInfoRed")


        } )
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
    blueCastle.tmpChosenGuerrierList.splice(element.getAttribute("number") ,1)
    blueCastle.resource+= parseInt(element.getAttribute("cost"))
    buildUi.UpdateGuerrierIuicons(blueCastle , "bleuGuerrier" , "blueText")
 }
 else{
    redGuerrierList.removeChild(element)
    redCastle.tmpChosenGuerrierList.splice(element.getAttribute("number") ,1)
    redCastle.resource+= parseInt(element.getAttribute("cost"))
    buildUi.UpdateGuerrierIuicons(redCastle , "redGuerrier" , "redText")
 }


}
function attachGuerrirToUilist(castle ,list){
// blueCastle.chosenGuerrier.forEach(e=>{
//     console.log(e)
    var img2 = document.createElement('img')
    var len = castle.tmpChosenGuerrierList.length-1
    castle.resource -= castle.tmpChosenGuerrierList[len].resource
    img2.src=castle.tmpChosenGuerrierList[len].image
    img2.style.width= "50px"
    img2.style.height= "65px"
    img2.classList.add(`chosenGuerrier${castle.name}`)
    img2.setAttribute("number" ,len)
    img2.setAttribute("cost" ,castle.tmpChosenGuerrierList[len].resource)
    console.log(list)
    list.appendChild(img2)
    img2.addEventListener("click" , function(){
       removeGuerrier(this , castle)
    })
// })
}
document.addEventListener("DOMContentLoaded"  , loadUi);
