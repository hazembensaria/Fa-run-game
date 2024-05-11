import Plate from "./plate.js";

export default class Road{
    plateList = []
    constructor(){
        this.bluePosition = 0
        this.redPosition = 8
        this.readyTeamsToFight = 0 ;
        for(let i =0 ; i< 9 ; i++){
            this.plateList.push(new Plate());
        }
        
    }

}