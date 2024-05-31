; import BuildUi from './buildUi.js';
import Castle from './castle.js'; 
import ChefElf from './chefElf.js';
import ChefNain from './chefNain.js';
import Elf from './elf.js';
import Nain from './nain.js';
import Player from './player.js';
import Road from './road.js';
import Stone from './stone.js'; 
import Toast from './toast.js';
const Container = document.getElementById('container'); 
var redFrame 
var blueFrame
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
   var toast = new Toast()
   var road = new Road();
   var buildUi =  new BuildUi()
   var redPlayer = new Player(localStorage.getItem("redAvatar") , localStorage.getItem("redName"))
   var bluePlayer = new Player(localStorage.getItem("blueAvatar") , localStorage.getItem("blueName"))

   var blueGuerrierList
   var redGuerrierList
//    var blueGuerrirList = [] ;
    
function loadUi(){
        // alert(localStorage.getItem("gameOn"))
    {toast.gameBeginToast(Container  , redPlayer , bluePlayer)}
    // toast.blueWinToast(Container , redPlayer , bluePlayer)
   for(let i = 0; i<9 ; i++  ){
    road.plateList[i].setUiPlate(document.getElementById(`test${i}`))
   }
   console.log(blueCastle , redCastle)
   buildUi.buildInfoSection(blueCastle , redCastle , blueCastleInfo , redCastleInfo ,  Container , redPlayer , bluePlayer  , (img , img1 , redF , blueF)=>{
    img.addEventListener("mouseover" , bleuCastleHover)
    img.addEventListener("click" , showFullInfo)
img1.addEventListener("click" , showFullInfoRed)
redFrame = redF
 blueFrame = blueF


img1.addEventListener("mouseover" , redCastleHover)
    console.log(img , img1)
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
            castle.tmpChosenGuerrierList.push(new Elf(image))
            attachGuerrirToUilistAndUppdateCastleState(castle ,uiList)
        break;
        case name==="nain" && castle.resource>=1 : 
            audio = new Audio("sounds/nainVoice.mp3")
            audio.play();
            castle.tmpChosenGuerrierList.push(new Nain(image))
            attachGuerrirToUilistAndUppdateCastleState(castle , uiList)

        break;
        case name==="chefNain" && castle.resource>=3 :
            audio = new Audio("sounds/chefNainVoice.mp3")
            audio.play();
            castle.tmpChosenGuerrierList.push(new ChefNain(image))
            attachGuerrirToUilistAndUppdateCastleState(castle , uiList)
        break;
        case name=== "chefElf" && castle.resource>=4 :
            audio = new Audio("sounds/chefElfVoice.mp3")
            audio.play();
            castle.tmpChosenGuerrierList.push(new ChefElf(image))
            attachGuerrirToUilistAndUppdateCastleState(castle ,uiList)
        break;
        default :console.log('jqdsfklajs')
    }

    console.log(blueCastle.chosenGuerrier)
}


function startSequence(callBack){
    setTimeout(function(){road.moveBlue(blueCastle , callBack , redCastle)} , 100)
}


function attacking(callBack){
    setTimeout(function(){
        road.blueTeamAttack(blueCastle , callBack , redCastle , toast , Container)
    },3000)
}


async function startFight(){

startSequence(()=>{
    console.log('moving completed!!!!!!!!!')
    console.log(road.plateList[road.bluePosition[0]].blueGuerrierFighters)
    console.log(road.plateList[road.bluePosition[0]].redGuerrierFighters)
    console.log("road.plateList[road.bluePosition[0]].blueGuerrierFighters")
    road.plateList[road.bluePosition[0]].updateAllHealthBar()

    attacking(()=>{
        
    console.log(road.bluePosition[0] , "this is fighters blue after fight")
    road.plateList[road.bluePosition[0]].blueGuerrierFighters.length!==0 ?
    blueCastle.chosenGuerrier[0]=road.plateList[road.bluePosition[0]].blueGuerrierFighters:
    blueCastle.chosenGuerrier.shift()

    road.plateList[road.redPosition[0]].redGuerrierFighters.length!==0 ?
    redCastle.chosenGuerrier[0]=road.plateList[road.redPosition[0]].redGuerrierFighters:
    redCastle.chosenGuerrier.shift()

    road.checkIfBlueFightersExist()
        road.checkIfRedFightersExist()
        road.checkIfBlueWin(toast , Container ,redPlayer , bluePlayer)
        road.checkIfRedWin()

    blueCastle.clameRewards()
    redCastle.clameRewards()
    buildUi.UpdateGuerrierIuicons(blueCastle , "bleuGuerrier" , "blueText")
            buildUi.UpdateGuerrierIuicons(redCastle , "redGuerrier" , "redText")


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
                if(road.readyTeamsToFight.has(castle.name)){
                toast.alertToastBlue(Container , "you allready choose fighters!" , "rightAlertToast" , "worning")
                return ;
                }
                castleInfoUi.classList.add("shrinkInfoBlue")
                castleInfoUi.classList.remove("strechInfoBlue") //blueCastleInfo
                toast.alertToastBlue(Container , "hope you win 🙇‍♂️!" , "rightAlertToast" , "worning")
                road.bluePosition.pop()
                
            }
            else if(castle.chosenGuerrier.length!==0 && castle.tmpChosenGuerrierList.length===0 && castle.name ==="red")
                {
                    if(road.readyTeamsToFight.has(castle.name)){
                        toast.alertToast(Container , "you just pick your team !" , "leftAlertToast" , "worning")
                        return ;
                        }
                    castleInfoUi.classList.add("shrinkInfoRed")
                    castleInfoUi.classList.remove("strechInfoRed") //redCastleInfo
                    toast.alertToast(Container , "hope you win 🙇!" , "leftAlertToast" , "worning")
                    road.redPosition.pop()
                    
                }
            else if(castle.tmpChosenGuerrierList.length!==0 ){
    if(castle.name==="blue"){
        if(road.readyTeamsToFight.has(castle.name)){
            toast.alertToastBlue(Container , "you allready choose fighters!" , "rightAlertToast" , "worning")
            return ;
            }
          
        castle.confirmGuerrier()    
        road.plateList[road.bluePosition[blueLen]].blueGuerrierFighters = blueCastle.chosenGuerrier[blueCastle.chosenGuerrier.length-1]
        road.plateList[road.bluePosition[blueLen]].drowFighters(road.plateList[road.bluePosition[blueLen]].blueGuerrierFighters, "blue" , "60px" , "80px" ,"45%" ,"-30%")
        road.plateList[road.bluePosition[blueLen]].uiPlate.firstChild.style.justifyContent= "end"
        var bb = document.getElementsByClassName('chosenGuerrierblue')
        while (bb.length > 0) {
            let element = bb[0];
        
            element.style.transform = "scale(0)";
            element.parentNode.removeChild(element);}

        castleInfoUi.classList.add("shrinkInfoBlue")
        castleInfoUi.classList.remove("strechInfoBlue") //blueCastleInfo
        toast.alertToastBlue(Container , "let's win this round💪 !" , "rightAlertToast" , "info")
    }else{  
        if(road.readyTeamsToFight.has(castle.name)){
            toast.alertToast(Container , "you just pick your team !" , "leftAlertToast" , "worning")
            return ;
            }
        
        castle.confirmGuerrier()
        // console.log(road.plateList[8].uiPlate.style)
        road.plateList[road.redPosition[redLen]].uiPlate.firstChild.style.justifyContent= "start"
        road.plateList[road.redPosition[redLen]].redGuerrierFighters = castle.chosenGuerrier[redCastle.chosenGuerrier.length-1]
        road.plateList[road.redPosition[redLen]].drowFighters(road.plateList[road.redPosition[redLen]].redGuerrierFighters , "red" , "50px" , "70px" , "-50%", "30%")

        var bRed = document.getElementsByClassName('chosenGuerrierred')
        while (bRed.length > 0) {
            let element = bRed[0];
        
            element.style.transform = "scale(0)";
            element.parentNode.removeChild(element);}

        castleInfoUi.classList.add("shrinkInfoRed")
        castleInfoUi.classList.remove("strechInfoRed") //redCastleInfo
        toast.alertToast(Container , "smart pick, let's win this💪 !" , "leftAlertToast" , "info")
    }

    } 
   
   
    else if(castle.chosenGuerrier.length===0 && castle.tmpChosenGuerrierList.length===0)
        {
            console.log('you dont have any guerrier in field!')
            castle.name === "blue" ?toast.alertToastBlue(Container , "dont have any guerrier 🤦‍♂️!!!!" , "rightAlertToast" , "alert") : toast.alertToast(Container , "dont have any guerrier🤦 !!!!" , "leftAlertToast" , "alert") 

            return;
        }
        
      road.readyTeamsToFight.has(castle.name) ? console.log("you just confirmed choice !!") :  road.readyTeamsToFight.set(castle.name , "true")
    if(road.readyTeamsToFight.size ===2)
        {
            road.clearReadyTeamsToFight()
            startFight()
        }
 

}

function showFullInfo(){
    if(blueCastleInfo.classList.contains("strechInfoBlue")){
        console.log("already open")
        return ;
    }
    if(blueCastleInfo.classList.contains("shrinkInfoBlue")){
      buildUi.shrinkCastleInfo(blueCastle , blueCastleInfo)
    }
    else{
    buildUi.drowInfoInterface(blueGuerrierList , blueCastleInfo , blueCastle , "bleuGuerrier" , (list , button , cancelRed)=>{
        blueGuerrierList = list
        cancelRed.addEventListener("click" , function(){
        blueCastleInfo.classList.remove("strechInfoBlue")

        blueCastleInfo.classList.add("shrinkInfoBlue")

        })
        
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
    if(redCastleInfo.classList.contains("strechInfoRed")){
        console.log("already open !!")
        return ;
    }
    if(redCastleInfo.classList.contains("shrinkInfoRed")){
        buildUi.shrinkCastleInfo(redCastle , redCastleInfo)
    }
    else{
        buildUi.drowInfoInterface(redGuerrierList , redCastleInfo , redCastle , "redGuerrier" , (list , button , cancelRed)=>{
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

     cancelRed.addEventListener("click" , function(){
         redCastleInfo.classList.remove("strechInfoRed")
         redCastleInfo.classList.add("shrinkInfoRed")
         
         })


    } )
}
}
document.addEventListener("DOMContentLoaded"  , loadUi);
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" || event.key === 27) {
      // Escape key pressed
      toast.gameBeginToast(Container  , redPlayer , bluePlayer)
      // Add your code to handle the escape key press here
    }
  });

function removeGuerrier(element , castle){
    console.log(castle)
 if(castle.name ==="blue"){
    blueGuerrierList.removeChild(element)
    blueCastle.tmpChosenGuerrierList.splice(element.getAttribute("number") ,1)
    castle.incrimentResources(parseInt(element.getAttribute("cost")))
    buildUi.UpdateGuerrierIuicons(blueCastle , "bleuGuerrier" , "blueText")
 }
 else{
    redGuerrierList.removeChild(element)
    redCastle.tmpChosenGuerrierList.splice(element.getAttribute("number") ,1)
    redCastle.resource+= parseInt(element.getAttribute("cost"))
    buildUi.UpdateGuerrierIuicons(redCastle , "redGuerrier" , "redText")
 }


}
function attachGuerrirToUilistAndUppdateCastleState(castle ,list){
    castle.decrimentResources()
    buildUi.attachGuerrirToUilist(castle , list , (img)=>{
        img.addEventListener("click" , function(){
            removeGuerrier(this , castle)
         })
    })

}
