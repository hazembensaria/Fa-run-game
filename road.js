import Plate from "./plate.js";

export default class Road{
    plateList = []
    constructor(){
        this.bluePosition = [0]
        this.redPosition = [8]
        this.readyTeamsToFight = new Map() ;
        for(let i =0 ; i< 9 ; i++){
            this.plateList.push(new Plate());
        }
        
    }

    clearReadyTeamsToFight(){
        this.readyTeamsToFight.clear()
    }
    checkIfBlueWin(toast , Container , redPlayer , bluePlayer){
        if(this.bluePosition[0] === 8){
            toast.blueWinToast(Container , redPlayer , bluePlayer)

            // location.reload()
            console.log("blue team win")
        }
    }
    checkIfBlueFightersExist(){
        this.bluePosition =[]
        for(let i =0 ; i< this.plateList.length ; i++){
            if(this.plateList[i].blueGuerrierFighters.length !==0){
                this.bluePosition.unshift(i)
                console.log('blue fighters exists!')
        }   
    }
    this.bluePosition.push(0)
}
checkIfRedWin(toast , Container , redPlayer , bluePlayer){
    if(this.redPosition[0] === 0){
        toast.redWinToast(Container , redPlayer , bluePlayer)
        console.log("red team win")
    }
}
checkIfRedFightersExist(){
    this.redPosition = []
    for(let i =0 ; i< this.plateList.length ; i++){
        if(this.plateList[i].redGuerrierFighters.length !==0){
            this.redPosition.push(i)
            console.log('red fighters exists!')
    }   
}
this.redPosition.push(8)
}

moveRed(castle , callBack , secodeCastel){
    // console.log(road.plateList[road.redPosition].redGuerrierFighters)
    console.log("beggin of walking")
    for(let i = 0 ; i< this.redPosition.length ; i++ ){
        console.log('this is loop')
    this.plateList[this.redPosition[i]].redGuerrierFighters = []
    this.plateList[this.redPosition[i]].eraiseFighters()
    this.redPosition[i]-- ;
    console.log('this is eriasing end')

    // console.log(road.redPosition)
    this.plateList[this.redPosition[i]].uiPlate.firstChild.style.justifyContent= "end"
    this.plateList[this.redPosition[i]].redGuerrierFighters = castle.chosenGuerrier[i]
    console.log('this is eriasing end') 
    
    this.plateList[this.redPosition[i]].drowFighters(this.plateList[this.redPosition[i]].redGuerrierFighters, "red" , "50px" , "70px" , "-45%", "30%")
    console.log('this i am here npw !!!!!')
    var bb = document.getElementsByClassName('chosenGuerrierred')
    for(let j =0 ; j< bb.length ; j++){
        bb[j].style.transform= "scale(0)"
    }
}
console.log("end of walking")
console.log(this.bluePosition[0])
    setTimeout(()=> {
    console.log(this.bluePosition[0])

    if (this.bluePosition[0]=== this.redPosition[0] || this.redPosition[0] === 0) {
        callBack()

        }
        else
        this.moveBlue( secodeCastel , callBack , castle);

    }, 1000);
}



 moveBlue(castle  , callBack , secondeCastel){
    if(this.plateList[this.bluePosition[0]+1].redGuerrierFighters.length !==0 && this.bluePosition[0] ===0){    
       
            this.moveRed(secondeCastel , callBack , castle);
                console.log("finishhhhhhhhh from reddd !!!!")
                return ;
    }
    for(let i = 0 ; i< this.bluePosition.length ; i++ ){
        // console.log(road.plateList[road.bluePosition].blueGuerrierFighters)
        this.plateList[this.bluePosition[i]].blueGuerrierFighters = []
        this.plateList[this.bluePosition[i]].eraiseFighters()
        this.bluePosition[i]++ ;
        console.log(this.bluePosition)
       
        this.plateList[this.bluePosition[i]].uiPlate.firstChild.style.justifyContent= "end"
        this.plateList[this.bluePosition[i]].blueGuerrierFighters = castle.chosenGuerrier[i]
        this.plateList[this.bluePosition[i]].drowFighters(this.plateList[this.bluePosition[i]].blueGuerrierFighters , "blue" , "60px" , "80px" ,"45%" ,"-30%" , this.plateList[this.bluePosition[i]].redGuerrierFighters , "blue")
        var bb = document.getElementsByClassName('chosenGuerrierblue')
        for(let j =0 ; j< bb.length ; j++){
            bb[j].style.transform= "scale(0)"   
        }
    }
    
    setTimeout(()=> {
        console.log(this.bluePosition)
        if (this.bluePosition[0]!== this.redPosition[0]) {
            this.moveRed(secondeCastel , callBack , castle);
        }
        else
        callBack()
    }, 1000);
}


blueTeamAttack(castle , callBack , secondeCastel , toast , container){
    toast.alertToastBlue(container , "we are attacking !" , "rightAlertToast" , "info")


    var platau = this.plateList[this.bluePosition[0]]
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
                castle.winRound(castle.name , toast , container)
                break;

            }
         }
            console.log("end of blue attack!!!");

         setTimeout(()=>{
            if(platau.redGuerrierFighters.length===0){
                callBack()
            }else{
                this.redTeamAttack(secondeCastel ,callBack , castle ,  toast , container) 
            }
         },1000)

}


redTeamAttack(castle , callBack , secondeCastel , toast , container){
    toast.alertToast(container , "we are attacking !" , "leftAlertToast" , "info")

    var platau = this.plateList[this.bluePosition[0]]
    for(let i = 0 ; i<  platau.redGuerrierFighters.length ; i++){
        platau.blueGuerrierFighters[platau.blueGuerrierFighters.length-1].getDamage(platau.redGuerrierFighters[0].attack())
        platau.updateHealthBar(platau.blueGuerrierFighters[platau.blueGuerrierFighters.length-1].vie ,"red")
        if(platau.blueGuerrierFighters[platau.blueGuerrierFighters.length-1].isKilled()){
            platau.eraiseKilledFighter("red")
            platau.blueGuerrierFighters.pop()

        }
        
        var firstItem = platau.redGuerrierFighters.shift();
        platau.redGuerrierFighters.push(firstItem);
        if(platau.blueGuerrierFighters.length===0)
            {   castle.winRound(castle.name , toast , container)
                break;}
        // console.log(list);
     }
     console.log("end of red aataack!!")

         setTimeout(()=>{
            if(platau.blueGuerrierFighters.length===0){
                callBack()
            }else{
                this.blueTeamAttack(secondeCastel  , callBack , castle , toast , container) 
            }
         },1000)

}
}