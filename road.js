import Plate from "./plate.js";

export default class Road{
    plateList = []
    constructor(){
        this.bluePosition = [0]
        this.redPosition = [8]
        this.readyTeamsToFight = 0 ;
        for(let i =0 ; i< 9 ; i++){
            this.plateList.push(new Plate());
        }
        
    }

    clearReadyTeamsToFight(){
        this.readyTeamsToFight = 0
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

checkIfRedFightersExist(){
    this.redPosition = []
    for(let i =0 ; i< this.plateList.length ; i++){
        if(this.plateList[i].redGuerrierFighters.length !==0){
            this.redPosition.unshift(i)
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

        if (this.bluePosition[0]!== this.redPosition[0]) {
            this.moveBlue( secodeCastel , callBack , castle);
        }
        else
        callBack()
    }, 1000);
}



 moveBlue(castle  , callBack , secondeCastel){
    for(let i = 0 ; i< this.bluePosition.length ; i++ ){
        // console.log(road.plateList[road.bluePosition].blueGuerrierFighters)
        this.plateList[this.bluePosition[i]].blueGuerrierFighters = []
        this.plateList[this.bluePosition[i]].eraiseFighters()
        this.bluePosition[i]++ ;
        console.log(this.bluePosition)

        this.plateList[this.bluePosition[i]].uiPlate.firstChild.style.justifyContent= "end"
        this.plateList[this.bluePosition[i]].blueGuerrierFighters = castle.chosenGuerrier[i]
        this.plateList[this.bluePosition[i]].drowFighters(this.plateList[this.bluePosition[i]].blueGuerrierFighters , "blue" , "60px" , "80px" ,"45%" ,"-30%")
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



blueTeamAttack(castle , callBack , secondeCastel){
    console.log( 'blue start attack')

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
                castle.winRound()
                break;

            }
         }
            console.log("end of blue attack!!!");

         setTimeout(()=>{
            if(platau.redGuerrierFighters.length===0){
                callBack()
            }else{
                this.redTeamAttack(secondeCastel ,callBack , castle) 
            }
         },3000)

}


redTeamAttack(castle , callBack , secondeCastel){
    console.log( 'red start attack')

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
        console.log(platau.blueGuerrierFighters)
        console.log(platau.redGuerrierFighters)
        if(platau.blueGuerrierFighters.length===0)
            {   castle.winRound()
                break;}
        // console.log(list);
     }
     console.log("end of red aataack!!")

         setTimeout(()=>{
            if(platau.blueGuerrierFighters.length===0){
                callBack()
            }else{
                this.blueTeamAttack(secondeCastel  , callBack , castle) 
            }
         },3000)

}
}