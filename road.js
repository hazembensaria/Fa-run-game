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
}