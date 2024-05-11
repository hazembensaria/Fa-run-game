import Plate from "./plate.js";

export default class Road{
    plateList = []
    constructor(){
        for(let i =0 ; i< 9 ; i++){
            this.plateList.push(new Plate());
        }
        
    }

}